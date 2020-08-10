mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzdGNvbXVuaWNhY2lvbiIsImEiOiJja2Nyc3ZiYzQxaTJ4MnFzNXBpMG5iZno2In0.9bPy87fQMJpOmV2sJ_AYWQ";
  var bounds = [
    [-97.031250,-21.688053], // Southwest coordinates
    [-22.851563,16.636192] // Northeast coordinates
  ];
var map = new mapboxgl.Map({
  container: "map",
  zoomControl:false, maxZoom:9, minZoom:3.7,
  center: [-62.402344,-5.878332], 
  style: "mapbox://styles/vistcomunicacion/ckcsasa0t1no91imjuqkeetxr",
  zoom: 3.7,
  dragPan: false,
  maxBounds: bounds // Sets bounds as max
  
});
map.on('load', function() {
  map.loadImage(
      'https://roqueleal.me/big-data/theamazonwewant/image/legend-pt.png',
      function(error, image) {
          if (error) throw error;
          map.addImage('legend', image);
          map.addSource('point', {
              'type': 'geojson',
              'data': {
                  'type': 'FeatureCollection',
                  'features': [
                      {
                          'type': 'Feature',
                          'geometry': {
                              'type': 'Point',
                              'coordinates': [-35.068359,-4.477856]
                          }
                      }
                  ]
              }
          });
          map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'point',
              'layout': {
                  'icon-image': 'legend',
                  'icon-size': 0.25
              }
          });
      }
  );
});


var nav = new mapboxgl.ScaleControl();
map.addControl(nav, "top-right");
// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
//image
map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 0; 0 < layers.length; i++) {
  if (layers[i].type === 'symbol') {
  firstSymbolId = layers[i++].id;
  break;
  }
  }
  map.addLayer({
    id: "BIOMAS",
    type: "raster",

    source: {
      type: "raster",
      url: "mapbox://vistcomunicacion.7up3fsiv"
    },
    "source-layer": "mapbiomas-last-661jye",
  },
  firstSymbolId

);
});
//image

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
      'fill-color': '#00BCAF',
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
    id: "AREA",
    type: "fill",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.28h2ghyx"
    },
    "source-layer": "AREAS-PROTEGIDAS-5poydg",

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
    id: "OIL",
    type: "fill",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.19vevacr"
    },
    "source-layer": "PETROLEO-bx3v9s",

    'paint': {
      'fill-color': '#D9F8F8',
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
    id: "MIN",
    type: "fill",

    source: {
      type: "vector",
      url: "mapbox://vistcomunicacion.3uuiaj8r"
    },
    "source-layer": "MINERIAs-7le5cz",

    'paint': {
      'fill-color': '#ff0000',
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
      'fill-color': '#d13b40',
      'fill-opacity': 0.9
    }
  }, 
    firstSymbolId

  );
});


map.on("load", function() {
  toggleLayer(["BIOMAS", "points"], "Biomas da Amazônia");
  toggleLayer(["INDG"], "Terras Indígenas");
  toggleLayer(["AREA"], "Unidades de Conservação");
  toggleLayer(["DEFO"], "Desmatamento e Degradação Florestal");
  toggleLayer(["MIN"], "Concessão Mineira");
  toggleLayer(["OIL"], "Concessão de Petróleo e Gás");


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
    var visCssClass = "active";
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




//Licensing information: https://roqueleal.me
//email: roqueleal@gmail.com
/**
 * @license
 * Copyright (c) 2020 roqueleal.me
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ 
