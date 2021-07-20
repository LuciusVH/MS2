// Allow the Materialize side navbar on mobile view
// Code snippet taken from Materialize documentation
$(document).ready(function() {
    $('.sidenav').sidenav();
});


// Create all 14 slides of the regions carousel by iterating through each object of regions-config.js
for (let region of REGION_CONFIG) {

    // Creation of the slide with data from regions-config.js
    let slide = '';
    slide += '<li class="glide__slide">';
    slide += '<div class="region-card" id="' + region.id + '" style="background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(' + region.slideBackground + ')">';
    slide += '<h3 class="region-card-name">' + region.name + '</h3>';
    slide += '</div>';
    slide += '</li>';

    // Insert the slide into index.html
    $('.glide__slides').append(slide);
}


// Global variables used by Google Maps API
let map;
let infowindow;
let currentInfowindow;
let bounds;
let service;
var markers = [];
var markerClusterer;


// Initiate the map
// Code snippet taken from Google Maps documentation
function initMap() {
    new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.67, lng: 2.5 },
        zoom: 7
    });
    bounds = new google.maps.LatLngBounds();
    infowindow = new google.maps.InfoWindow();
    currentInfowindow = infowindow;
}


// Display the right region-related content depending on which slide is clicked
$('.region-card').click(function() {

    // Make the selection invitation <p> disappear
    $('#region-selection-invite').slideUp();

    // Determine which card has been clicked
    let whichRegion = this.id;

    // Based on that...
    for (let { name: regionName, description: regionDescription, id: regionId }
        of REGION_CONFIG) {
        if (whichRegion == regionId) {
            // Change the region's name & description and...
            $('#region-name').fadeOut('fast').queue(function() {
                $('#region-name').text(regionName).fadeIn('slow');
                $(this).dequeue();
            });
            $('#region-description').fadeOut('fast').queue(function() {
                $('#region-description').text(regionDescription).fadeIn('slow');
                $(this).dequeue();
            });
        }
    }

    // Show the map & filters, map centered on the selected region with its border highlighted 
    // Code taken from Google Maps documentation & modified to fit the app
    $('#map').fadeIn('slow');
    $('#map-filters').fadeIn('slow');

    for (let { id: regionId, coordinates: regionCoordinates, boundaries: regionBoundaries }
        of REGION_CONFIG) {
        if (whichRegion == regionId) {
            let selectedRegion = new google.maps.LatLng(regionCoordinates.lat, regionCoordinates.lng);
            map = new google.maps.Map(document.getElementById('map'), {
                center: selectedRegion,
                zoom: regionCoordinates.zoom,
            });

            // Display a blue line surrounding the selected region 
            // Code snippet found on https://ourcodeworld.com/articles/read/830/how-to-highlight-an-area-city-state-or-country-in-google-maps-with-javascript & modified to fit the app
            var polygon = new google.maps.Polygon({
                paths: regionBoundaries,
                strokeColor: "#001e96",
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: "#001e96",
                fillOpacity: 0.1
            });
            polygon.setMap(map);
        }
    }
});


// Switch "keyword" in Google Maps request according to the chosen filter
$('#hotels').click(function() {
    deleteMarkers();
    filteredLocations("hotel");
});
$('#restaurants').click(function() {
    deleteMarkers();
    filteredLocations("restaurant");
});
$('#bars').click(function() {
    deleteMarkers();
    filteredLocations("bar");
});
$('#monuments').click(function() {
    deleteMarkers();
    filteredLocations("tourist-monument");
});
$('#activities').click(function() {

    async function populateMarkers() {
        deleteMarkers();

        let markersDeleted = await deleteMarkers();
        if (markersDeleted) {
            filteredLocations("attraction");
        }
    }

    populateMarkers();

});
$('#all').click(function() {
    deleteMarkers();
    filteredLocations("hotel");
    filteredLocations("restaurant");
    filteredLocations("bar");
    filteredLocations("tourist-monument");
    filteredLocations("attraction");
});


// Show the markers according to the selected filter
// Code taken from Google Maps documentation & modified to fit the app
function filteredLocations(locationType) {
    let request = {
        location: map.getCenter(),
        radius: 40000,

        keyword: locationType,
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);

    function nearbyCallback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMarkers(results);
        }
    }
}


// Create the markers at each result's location
// Code taken from Google Maps documentation & modified to fit the app
function createMarkers(places) {
    const markerIcon = {
        url: 'assets/img/icons/marker.png',
        scaledSize: new google.maps.Size(50, 50)
    }
    places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            icon: markerIcon
        });

        // Add click listener to each marker
        google.maps.event.addListener(marker, 'click', () => {
            let request = {
                placeId: place.place_id,
                fields: ['name', 'geometry', 'rating', 'website']
            };

            // Only fetch the details of a place when the user clicks on a marker, to not hit API rate limits
            service.getDetails(request, (placeResult, status) => {
                showDetails(placeResult, marker, status);
            });
        });

        // Add each marker to the markers array, for clustering & later removing
        markers.push(marker);

        // Adjust the map bounds to include the location of this marker
        bounds.extend(place.geometry.location);
    });

    // Once all the markers have been placed, adjust the bounds of the map to show all the markers within the visible area.
    map.fitBounds(bounds);

    // Allow markers clustering
    markerClusterer = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


// Remove the markers from the map & empty the array of markers
// Code taken from Google Maps documentation & modified to fit the app
async function deleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
        markerClusterer.clearMarkers();
    }
    markers = [];
}




// Build an infowindow to display location details above the marker
// Code snippet taken from Google Maps documentation & modified to fit the app
function showDetails(placeResult, marker, status) {
    // Define the structure & content of the infowindow, depending on the result of the request
    let infowindowContent = '';
    infowindowContent += `<div class="infowindow">
    <h5 class="infowindow-title">${placeResult.name}</h5>`
    let rating;
    if (placeResult.rating) rating = placeResult.rating;
    if (placeResult.rating === undefined) {
        infowindowContent += '<p class="infowindow-rating">There\'s no rating for this place yet. Rate it once you\'ve visited! &#128521</p>';
    } else {
        infowindowContent += `<p class="infowindow-rating">Rating: ${placeResult.rating}/5</p>`;
    }
    if (placeResult.website !== undefined) {
        infowindowContent += `<a class="infowindow-link" href="${placeResult.website}" target="_blank" aria-label="Visit the website of ${placeResult.name}">Visit the website</a>`;
    }
    infowindowContent += '</div>';

    // Build the infowindow
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        let placeInfowindow = new google.maps.InfoWindow();
        placeInfowindow.setContent(infowindowContent);
        placeInfowindow.open(marker.map, marker);
        currentInfowindow.close();
        currentInfowindow = placeInfowindow;

    } else {
        console.log('showDetails failed: ' + status);
    }
}


// Change the text of the "Filters" <p> according to which filter is currently hovered (or clicked on mobile/tablet)
$('#map-filters img').hover(function() {
    $('#filters').text(this.id).css('text-transform', 'capitalize');
}, function() {
    $('#filters').text('Filters');
});


// Check when the users scrolls down, and shows the contact button when the users doesn't have acces anymore to the navbar 
let contactButton = $('#contact-modal-icon');
window.onscroll = function() {
    displayButton()
};

function displayButton() {
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
        contactButton.fadeIn();
    } else {
        contactButton.fadeOut('fast');
    }
}


// Open up the contact modal when clicking on the "Contact" navbar link or the paper plane icon
let modalOpening = $('.contact-modal-opening')
let overlayAndModal = $('.contact-modal');
$(modalOpening).click(function() {
    $(overlayAndModal).fadeIn();
})


// Close the contact modal when anywhere outside the modal, or the X icon is clicked 
function modalClosing() {
    $(overlayAndModal).fadeOut();
};

$('.contact-modal-closing').click(function() {
    modalClosing();
})