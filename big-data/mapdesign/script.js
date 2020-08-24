mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzdGNvbXVuaWNhY2lvbiIsImEiOiJja2Nyc3ZiYzQxaTJ4MnFzNXBpMG5iZno2In0.9bPy87fQMJpOmV2sJ_AYWQ";

var map = new mapboxgl.Map({
  container: "map",
  zoomControl:false, maxZoom:25, minZoom:3,
  center: [2.347341,48.854579], 
  style: "mapbox://styles/vistcomunicacion/cke7ugegw4fxe1anx1trgd8a6",
  zoom: 3,  
});
//localizar usuario
map.addControl(
    new mapboxgl.GeolocateControl({
        fitBoundsOptions: {
            zoom: 15,
        },
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
   })
 );
//localizar usuario
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
//zomm
//geocoding
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    });
     
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
//geocoding

// Creates new Event Listener
// Creates new Event Listener

map.on('click', mapClick);
function mapClick(e){
    long = e.lngLat.lng;
    lat = e.lngLat.lat;
    console.log(long, lat);
    getCountryName(lat, long);
        
};

//listenernuevo
// When the page is loaded
window.addEventListener('load', () => {
    // Sao Paulo on load default view

    let point = {
        lat: -46.658936,
        lng: -23.543845
    }
    getCountryName(point.lat, point.lng);  
});

/**
 * @param {number} lat 
 * @param {number} lon 
 */

function getCountryName(lat, lon){
    
    $.ajax({
        url:`https://us1.locationiq.com/v1/reverse.php?key=pk.82908f5d64f97579f3ccddb29334426d&lat=${lat}&lon=${lon}&format=json`,
        dataType:"JSON",
        
         
        success: function (response) {

            console.log(response);
            // you can get town name
            $("#label").html(response.address.city)},
        })
}


