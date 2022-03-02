mapboxgl.accessToken = 'pk.eyJ1IjoiZ2NpYWNhbWFyb24iLCJhIjoiY2tnbGMweWkxMDM2MjJ3cDloNjUycGp4ciJ9.-e-dlVLmmbwKp-IPtdTFdQ';
    var map = new mapboxgl.Map({
        container: 'map',
        zoom: 12.7,
        center: [-65.81235, 6.37954],
        pitch: 65,
        bearing: 80,
        style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
    });

    map.on('load', function () {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    });
    // Add zoom and rotation controls to the map.
    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        }),'bottom-right');
map.addControl(new mapboxgl.NavigationControl(),'bottom-right');
