// Initiate the Google Maps script & center the map on France
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//             lat: 46.93,
//             lng: 2.31
//         },
//         zoom: 4.8
//     });
// };

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}