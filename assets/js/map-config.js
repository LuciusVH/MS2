// Initiate the Google Maps script
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 46.93,
            lng: 2.31
        },
        zoom: 4.8
    });
};