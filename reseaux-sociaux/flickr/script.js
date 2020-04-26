var api_key = 'de882c8150f854766bbeb4388c25881d';
var api_key = 'de882c8150f854766bbeb4388c25881d';
var lat = '45.755607';
var lon = '4.832182';
// please replace this with your own mapbox token!
L.mapbox.accessToken = 'pk.eyJ1Ijoicm9xdWVsZWFsIiwiYSI6ImNqaHVzZTA4ODBkZjczdmt0cTNrbGo1ZWEifQ.m7xOPPWAFsY-A4cAr5nDAw';
var map = L.mapbox.map('map').setView([45.755607, 4.832182], 16);
L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v10').addTo(map);

// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
function loadPhotos(){
    $.getJSON(
      [
        'https://api.flickr.com/services/rest/?',
        'method=flickr.photos.search',
        '&format=json',
        '&api_key=', api_key,
        '&lat=', lat,
        '&lon=', lon,
        '&extras=geo,url_t,url_m,url_sq',
        '&radius=0.3',
        '&per_page=20',
        '&jsoncallback=?'
      ].join(""), function(data){
          if(data && data.stat == "ok" && data.photos && data.photos.photo.length){
              displayPhotos(data.photos.photo);
          }
    });
    }
    function displayPhotos(photos){
        var photo;
        console.log(photos);
        for(var i = 0; i < photos.length; i++){
            photo = photos[i];
            html = [
                '<a href="',
                'https://www.flickr.com/photos/', photo.owner, '/', photo.id,
                '" target = "_blank">',
                '<img src="'+photo.url_sq+'" alt="'+photo.title+'" width="',photo.width_sq,'" height="',photo.height_sq,'"/>',
                '</a>'
            ].join("");
            L.marker([photo.latitude, photo.longitude]).addTo(map)
                .bindPopup(html);
        }
    }
    
    loadPhotos();
    map.on('moveend',function(){
        var center = map.getCenter();
        lat = center.lat;
        lon = center.lng;
        loadPhotos();
    })    
