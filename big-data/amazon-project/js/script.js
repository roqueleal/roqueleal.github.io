mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzdGNvbXVuaWNhY2lvbiIsImEiOiJja2Nyc3ZiYzQxaTJ4MnFzNXBpMG5iZno2In0.9bPy87fQMJpOmV2sJ_AYWQ";
var bounds = [
  [-97.031250,-27.688053], // Southwest coordinates
  [-22.851563,16.636192] // Northeast coordinates
];

var map = new mapboxgl.Map({
  container: "map",
  // style: "mapbox://styles/vistcomunicacion/ckcrutwsb180d1hph62u7jvim",
  style: "mapbox://styles/vistcomunicacion/ckcsasa0t1no91imjuqkeetxr",
    //style: 'mapbox://styles/mapbox/satellite-v9',
  zoom: 3,
  logoPosition: "bottom-right",
  minZoom: 3.5,
  //maxZoom: 3.5,
  maxBounds: bounds // Sets bounds as max
});

var nav = new mapboxgl.ScaleControl();
map.addControl(nav, "bottom-right");

// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.

map.on("load", function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol") {
      firstSymbolId = layers[i].id;
      break;
    }
  }

  map.addLayer({
    id: "INDG",
    type: "fill",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.0iheal8q"
    },
    "source-layer": "TERITORIOS-INDIGENAS-17wh8r",

    'paint': {
      'fill-color': '#00FF99',
      'fill-opacity': 0.9
    }
  }, 
    firstSymbolId

  );
});

map.on("load", function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol") {
      firstSymbolId = layers[i].id;
      break;
    }
  }
 
  map.addLayer({
    id: "DEFO",
    type: "fill",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.96io3vw9"
    },
    "source-layer": "deforestacion-890uk4",

    'paint': {
      'fill-color': '#FF3300',
      'fill-opacity': 0.9
    }
  }, 
    firstSymbolId

  );
});
map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
  if (layers[i].type === 'symbol') {
  firstSymbolId = layers[i].id;
  break;
  }
  }
  map.addLayer({
    id: "AMAZ",
    type: "line",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.6pjdhv9y"
    },
    "source-layer": "amazonas-limite-5i2crb",

    'layout': {
      // make layer visible by default
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
      },
      'paint': {
      'line-color': '#FF9999',
      'line-width': 2
    }
  }, 
    firstSymbolId

  );
});

map.on("load", function() {
  toggleLayer(["AMAZ"], "Amazon Basin");
  toggleLayer(["INDG"], "Indigenous Territories");
  toggleLayer(["DEFO"], "Deforestation and Forest Degradation");

  function toggleLayer(ids, name) {
    var link = document.createElement("a");
    link.href = "#";
    // Get the visibility for all layers in the ids argument.
    var visibility = ids.map(function(id) {
      return map.getLayoutProperty(id, "visibility");
    });
    // Get the unique values.
    var visUnique = visibility.filter(uniques);
    // Default to not visible.
    var visCssClass = "";
    // If all layers are visible, use the 'active' class so the toggle is "on".
    if (visUnique.length === 1 && visUnique[0] === "visible") {
      visCssClass = "active";
    }
    link.className = visCssClass;
    link.textContent = name;
    link.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      for (layers in ids) {
        var visibility = map.getLayoutProperty(ids[layers], "visibility");
        var Center = map.getCenter();
        var ZoomZ = map.getZoom();
        if (visibility === "visible") {
          map.setLayoutProperty(ids[layers], "visibility", "none");
          this.className = "";
        } else {
          this.className = "active";
          map.setLayoutProperty(ids[layers], "visibility", "visible");
        }
      }
    };

    var layers = document.getElementById("menu");
    layers.appendChild(link);
  }

  function uniques(value, index, self) {
    return self.indexOf(value) === index;
  }
});
 // interacion inicio hover
 var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
  });
  map.on('mouseenter', 'INDG', function(e) {
// Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = 'pointer';

  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

// Populate the popup and set its coordinates
// based on the feature found.
  popup.setLngLat(e.lngLat)
              .setHTML('<dt>' + e.features[0].properties.nombre + '</dt>')
              .addTo(map);

  map.on('mouseleave', 'INDG', function() {
  map.getCanvas().style.cursor = '';
  popup.remove();
  });
  });

// interacion fin hover
//map.addControl(new mapboxgl.NavigationControl());
//map.addControl(new mapboxgl.FullscreenControl());
map.doubleClickZoom.disable();

$(function () {
  $("#pop").click(function () {
    window.open(window.location.href)});
});
