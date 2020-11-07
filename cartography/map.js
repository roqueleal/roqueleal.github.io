mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9xdWVsZWFsIiwiYSI6ImNqaHVzZTA4ODBkZjczdmt0cTNrbGo1ZWEifQ.m7xOPPWAFsY-A4cAr5nDAw";

const options = {
  container: "map",
  // style: 'mapbox://styles/mapbox/dark-v10',
  //style: 'mapbox://styles/mapbox/satellite-v9',
  style: "mapbox://styles/roqueleal/ckgwgfwit04fe19s6zr9kbqrk",
  center: [-8.45, 43.39], 
  zoom: 5,
  bearing: -350
};
  
const featureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates:  [
          [ -8.45, 43.39 ], [ -9.75, 43.82 ], [ -11.86, 43.89 ], [ -13.12, 42.87 ], [ -13.53, 29.91 ], [ -16.26, 28.46 ], [ -16.55, 28.42 ], [ -17.11, 28.44 ], [ -16.96, 28.06 ], [ -20.24, 22.2 ], [ -34.81, 16.12 ], [ -60.33, 11.81 ], [ -63.29, 11.06 ], [ -64.57, 10.68 ], [ -64.59, 10.52 ], [ -64.18, 10.46 ], [ -64.18, 10.46 ], [ -64.71, 10.42 ], [ -65.15, 10.24 ], [ -65.65, 10.37 ], [ -65.92, 10.6 ], [ -66.4, 10.79 ], [ -66.86, 10.71 ], [ -66.92, 10.51 ], [ -66.92, 10.51 ], [ -67.1, 10.4 ], [ -67.58, 10.31 ], [ -67.83, 10.28 ], [ -67.91, 10.2 ], [ -67.9, 10.1 ], [ -67.74, 10.04 ], [ -67.61, 10.02 ], [ -67.42, 9.94 ], [ -67.4, 9.88 ], [ -67.43, 9.82 ], [ -67.35, 9.7 ], [ -67.31, 9.63 ], [ -67.37, 9.48 ], [ -67.44, 9.25 ], [ -67.46, 9.09 ], [ -67.43, 8.93 ], [ -67.43, 8.93 ], [ -67.43, 8.86 ], [ -67.4, 8.71 ], [ -67.42, 8.65 ], [ -67.47, 8.52 ], [ -67.53, 8.45 ], [ -67.5, 8.38 ], [ -67.38, 8.36 ], [ -67.37, 8.2 ], [ -67.44, 8.12 ], [ -67.4, 8.02 ], [ -67.47, 7.89 ], [ -67.47, 7.89 ], [ -67.36, 7.83 ], [ -67.29, 7.74 ], [ -67.12, 7.73 ], [ -67.02, 7.66 ], [ -66.84, 7.62 ], [ -66.73, 7.66 ], [ -66.59, 7.67 ], [ -66.44, 7.63 ], [ -66.33, 7.65 ], [ -66.33, 7.65 ], [ -66.48, 7.58 ], [ -66.53, 7.46 ], [ -66.6, 7.34 ], [ -66.76, 7.28 ], [ -66.87, 7.2 ], [ -67.01, 7.15 ], [ -67.09, 7.08 ], [ -67.06, 6.96 ], [ -67.05, 6.82 ], [ -67.14, 6.66 ], [ -67.15, 6.48 ], [ -67.28, 6.38 ], [ -67.37, 6.27 ], [ -67.49, 6.17 ], [ -67.46, 6.06 ], [ -67.43, 5.97 ], [ -67.57, 5.87 ], [ -67.63, 5.74 ], [ -67.61, 5.58 ], [ -67.61, 5.54 ], [ -67.64, 5.46 ], [ -67.84, 5.33 ], [ -67.84, 5.22 ], [ -67.82, 5.18 ], [ -67.82, 5.03 ], [ -67.85, 4.91 ], [ -67.84, 4.73 ], [ -67.87, 4.53 ], [ -67.8, 4.47 ], [ -67.76, 4.35 ], [ -67.8, 4.24 ], [ -67.74, 4.13 ], [ -67.7, 4.05 ], [ -67.7, 4.05 ], [ -67.61, 3.76 ], [ -67.51, 3.77 ], [ -67.45, 3.55 ], [ -67.35, 3.39 ], [ -67.37, 3.26 ], [ -67.58, 3.13 ], [ -67.86, 2.87 ], [ -67.86, 2.8 ], [ -67.73, 2.83 ], [ -67.65, 2.8 ], [ -67.59, 2.8 ], [ -67.54, 2.67 ], [ -67.37, 2.52 ], [ -67.21, 2.36 ], [ -67.22, 2.26 ], [ -67.15, 2.13 ], [ -67.1, 2.06 ], [ -67.12, 2.0 ], [ -67.12, 2.0 ], [ -67.01, 2.05 ], [ -66.93, 1.98 ], [ -66.83, 2.01 ], [ -66.74, 2.02 ], [ -66.69, 1.95 ], [ -66.6, 1.91 ], [ -66.57, 1.97 ], [ -66.52, 2.02 ], [ -66.47, 2.1 ], [ -66.48, 2.21 ], [ -66.53, 2.25 ], [ -66.57, 2.31 ], [ -66.55, 2.36 ], [ -66.51, 2.36 ], [ -66.5, 2.41 ], [ -66.45, 2.39 ], [ -66.45, 2.47 ], [ -66.49, 2.53 ], [ -66.46, 2.59 ], [ -66.34, 2.63 ], [ -66.22, 2.64 ], [ -66.14, 2.65 ], [ -66.15, 2.75 ], [ -66.12, 2.75 ], [ -66.06, 2.82 ], [ -65.99, 2.8 ], [ -65.96, 2.81 ], [ -65.91, 2.82 ], [ -65.96, 2.95 ], [ -66.0, 3.01 ], [ -65.95, 3.05 ], [ -65.88, 3.14 ], [ -65.88, 3.14 ], [ -65.91, 3.14 ], [ -66.03, 3.15 ], [ -66.02, 3.03 ], [ -66.11, 3.02 ], [ -66.27, 3.06 ], [ -66.37, 3.02 ], [ -66.48, 3.11 ], [ -66.59, 3.17 ], [ -66.6, 3.31 ], [ -66.7, 3.42 ], [ -66.79, 3.57 ], [ -66.95, 3.68 ], [ -67.02, 3.76 ], [ -66.99, 3.9 ], [ -67.06, 3.97 ], [ -67.26, 3.97 ], [ -67.43, 3.95 ], [ -67.7, 4.05 ], [ -67.7, 4.05 ], [ -67.74, 4.13 ], [ -67.8, 4.24 ], [ -67.76, 4.35 ], [ -67.8, 4.47 ], [ -67.87, 4.53 ], [ -67.84, 4.73 ], [ -67.85, 4.91 ], [ -67.82, 5.03 ], [ -67.82, 5.18 ], [ -67.84, 5.22 ], [ -67.84, 5.33 ], [ -67.64, 5.46 ], [ -67.61, 5.54 ], [ -67.61, 5.58 ], [ -67.63, 5.74 ], [ -67.57, 5.87 ], [ -67.43, 5.97 ], [ -67.46, 6.06 ], [ -67.49, 6.17 ], [ -67.37, 6.27 ], [ -67.28, 6.38 ], [ -67.15, 6.48 ], [ -67.14, 6.66 ], [ -67.05, 6.82 ], [ -67.06, 6.96 ], [ -67.09, 7.08 ], [ -67.01, 7.15 ], [ -66.87, 7.2 ], [ -66.76, 7.28 ], [ -66.6, 7.34 ], [ -66.53, 7.46 ], [ -66.48, 7.58 ], [ -66.33, 7.65 ], [ -66.18, 7.61 ], [ -65.93, 7.71 ], [ -65.66, 7.86 ], [ -65.18, 7.81 ], [ -64.92, 7.7 ], [ -64.68, 7.69 ], [ -64.45, 7.8 ], [ -64.56, 7.99 ], [ -64.31, 8.09 ], [ -64.16, 8.02 ], [ -63.89, 7.97 ], [ -63.7, 8.14 ], [ -63.54, 8.13 ],[ -63.54, 8.13 ], [ -63.73, 8.48 ], [ -63.89, 8.68 ], [ -64.3, 8.88 ], [ -64.48, 9.42 ], [ -64.57, 9.86 ], [ -64.69, 10.16 ], [ -64.69, 10.16 ], [ -65.82, 11.29 ], [ -67.2, 12.85 ], [ -71.18, 14.74 ], [ -74.77, 15.45 ], [ -77.76, 16.26 ], [ -80.38, 17.48 ], [ -82.11, 18.52 ], [ -84.01, 20.08 ], [ -85.23, 20.92 ], [ -85.72, 22.04 ], [ -85.38, 23.36 ], [ -83.84, 23.76 ], [ -82.37, 23.12 ], [ -82.37, 23.13 ], [ -82.48, 22.07 ], [ -81.79, 21.43 ], [ -79.98, 21.8 ], [ -79.98, 21.8 ], [ -79.97, 20.96 ], [ -79.73, 19.26 ], [ -79.06, 17.02 ], [ -78.1, 14.5 ], [ -77.52, 13.21 ], [ -76.23, 11.36 ], [ -75.53, 10.42 ], [ -75.54, 10.43 ], [ -74.92, 10.21 ], [ -74.82, 10.03 ], [ -74.87, 9.77 ], [ -74.8, 9.45 ], [ -74.44, 9.25 ], [ -74.18, 9.06 ], [ -73.88, 8.92 ], [ -73.78, 8.6 ], [ -73.76, 8.21 ], [ -73.9, 8.02 ], [ -73.84, 7.7 ], [ -73.95, 7.39 ], [ -73.89, 7.11 ], [ -74.03, 6.9 ], [ -74.34, 6.64 ], [ -74.47, 6.41 ], [ -74.61, 6.07 ], [ -74.63, 5.64 ], [ -74.74, 5.21 ], [ -74.74, 5.21 ], [ -74.54, 5.02 ], [ -74.39, 4.8 ], [ -74.07, 4.61 ], [ -74.07, 4.61 ], [ -74.01, 4.83 ], [ -73.83, 4.93 ], [ -74.07, 4.61 ], [ -74.29, 4.55 ], [ -74.42, 4.45 ], [ -74.46, 4.31 ], [ -74.6, 4.27 ], [ -74.74, 4.27 ], [ -74.92, 4.19 ], [ -75.07, 4.31 ], [ -75.2, 4.39 ], [ -75.35, 4.41 ], [ -75.49, 4.42 ], [ -75.6, 4.46 ], [ -75.7, 4.49 ], [ -75.81, 4.33 ], [ -75.94, 4.26 ], [ -76.13, 4.26 ], [ -76.23, 4.1 ], [ -76.26, 3.97 ], [ -76.33, 3.85 ], [ -76.32, 3.71 ], [ -76.28, 3.61 ], [ -76.3, 3.52 ], [ -76.39, 3.35 ], [ -76.46, 3.15 ], [ -76.51, 2.97 ], [ -76.57, 2.82 ], [ -76.54, 2.67 ], [ -76.56, 2.53 ], [ -76.61, 2.44 ], [ -76.61, 2.44 ], [ -76.72, 2.32 ], [ -76.8, 2.2 ], [ -76.94, 2.11 ], [ -77.06, 2.03 ], [ -77.17, 1.92 ], [ -77.21, 1.86 ], [ -77.14, 1.65 ], [ -77.1, 1.47 ], [ -77.26, 1.26 ], [ -77.36, 1.1 ], [ -77.48, 0.99 ], [ -77.59, 0.84 ], [ -77.67, 0.81 ], [ -77.73, 0.63 ], [ -77.82, 0.58 ], [ -77.91, 0.47 ], [ -77.99, 0.42 ], [ -78.12, 0.46 ], [ -78.17, 0.34 ], [ -78.27, 0.24 ], [ -78.18, 0.1 ], [ -78.27, -0.03 ], [ -78.51, -0.21 ], [ -78.51, -0.21 ], [ -78.56, -0.53 ], [ -78.62, -0.71 ], [ -78.62, -0.88 ], [ -78.6, -1.04 ], [ -78.61, -1.27 ], [ -78.64, -1.66 ], [ -78.64, -1.66 ], [ -78.82, -1.47 ], [ -78.64, -1.66 ], [ -78.8, -2.07 ], [ -78.98, -2.4 ], [ -78.9, -2.66 ], [ -78.96, -2.87 ], [ -79.05, -3.03 ], [ -79.01, -3.22 ], [ -79.17, -3.43 ], [ -79.21, -3.62 ], [ -79.28, -3.83 ], [ -79.23, -4.03 ], [ -79.21, -4.3 ], [ -79.32, -4.61 ], [ -79.51, -4.9 ], [ -79.53, -5.08 ], [ -79.49, -5.57 ], [ -79.69, -6.53 ], [ -79.08, -8.11 ], [ -79.02, -8.12 ], [ -78.77, -8.43 ], [ -78.63, -8.71 ], [ -78.4, -9.21 ], [ -78.16, -9.86 ], [ -77.85, -10.53 ], [ -77.57, -11.05 ], [ -77.2, -11.53 ], [ -77.03, -12.06 ], [ -77.03, -12.06 ], [ -78.91, -11.53 ], [ -79.99, -10.25 ], [ -81.2, -9.18 ], [ -82.07, -7.45 ], [ -82.25, -6.14 ], [ -82.09, -4.59 ], [ -80.72, -2.8 ], [ -80.72, -2.8 ], [ -81.45, -2.41 ], [ -81.4, -1.44 ], [ -81.13, -0.32 ], [ -80.46, 1.35 ], [ -80.15, 2.56 ], [ -80.31, 3.71 ], [ -81.6, 5.61 ], [ -82.81, 7.08 ], [ -84.5, 8.23 ], [ -85.91, 9.35 ], [ -87.01, 10.44 ], [ -88.27, 11.45 ], [ -89.98, 12.2 ], [ -91.62, 12.95 ], [ -92.88, 13.38 ], [ -94.39, 14.21 ], [ -95.72, 15.13 ], [ -96.72, 15.22 ], [ -97.87, 15.48 ], [ -99.51, 16.37 ], [ -99.95, 16.86 ], [ -99.91, 16.85 ], [ -99.84, 16.89 ], [ -99.75, 16.95 ], [ -99.65, 17.02 ], [ -99.59, 17.1 ], [ -99.53, 17.16 ], [ -99.51, 17.28 ], [ -99.48, 17.35 ], [ -99.47, 17.46 ], [ -99.52, 17.53 ], [ -99.53, 17.61 ], [ -99.54, 17.7 ], [ -99.57, 17.82 ], [ -99.61, 17.93 ], [ -99.55, 18.04 ], [ -99.54, 18.21 ], [ -99.51, 18.31 ], [ -99.61, 18.56 ], [ -99.61, 18.56 ], [ -99.58, 18.55 ], [ -99.58, 18.55 ], [ -99.57, 18.57 ], [ -99.55, 18.59 ], [ -99.53, 18.61 ], [ -99.47, 18.61 ], [ -99.42, 18.61 ], [ -99.38, 18.6 ], [ -99.36, 18.61 ], [ -99.32, 18.62 ], [ -99.32, 18.62 ], [ -99.26, 18.63 ], [ -99.23, 18.68 ], [ -99.23, 18.74 ], [ -99.22, 18.78 ], [ -99.23, 18.84 ], [ -99.23, 18.9 ], [ -99.24, 18.92 ], [ -99.25, 18.97 ], [ -99.27, 19.03 ], [ -99.23, 19.07 ], [ -99.21, 19.09 ], [ -99.15, 19.16 ], [ -99.14, 19.21 ], [ -99.15, 19.25 ], [ -99.2, 19.3 ], [ -99.22, 19.34 ], [ -99.19, 19.38 ], [ -99.13, 19.43 ], [ -99.13, 19.43 ], [ -99.06, 19.53 ], [ -99.02, 19.6 ], [ -98.97, 19.69 ], [ -98.95, 19.79 ], [ -98.94, 19.88 ], [ -98.87, 19.94 ], [ -98.8, 20.04 ], [ -98.74, 20.12 ], [ -98.74, 20.12 ], [ -98.66, 20.15 ], [ -98.6, 20.2 ], [ -98.57, 20.25 ], [ -98.67, 20.29 ], [ -98.77, 20.29 ], [ -98.83, 20.28 ], [ -98.94, 20.27 ], [ -98.92, 20.23 ], [ -98.89, 20.21 ], [ -98.91, 20.17 ], [ -98.88, 20.13 ], [ -98.82, 20.12 ], [ -98.79, 20.07 ], [ -99.13, 19.43 ], [ -99.16, 19.46 ], [ -99.18, 19.54 ], [ -99.19, 19.6 ], [ -99.19, 19.66 ], [ -99.18, 19.75 ], [ -99.2, 19.83 ], [ -99.24, 19.89 ], [ -99.27, 19.93 ], [ -99.32, 19.99 ], [ -99.4, 20.0 ], [ -99.44, 20.0 ], [ -99.52, 19.98 ], [ -99.6, 20.0 ], [ -99.71, 20.11 ], [ -99.79, 20.19 ], [ -99.89, 20.28 ], [ -100.0, 20.39 ], [ -100.08, 20.46 ], [ -100.18, 20.53 ], [ -100.26, 20.57 ], [ -100.4, 20.59 ], [ -100.4, 20.59 ], [ -100.5, 20.59 ], [ -100.6, 20.57 ], [ -100.72, 20.54 ], [ -100.81, 20.52 ], [ -100.9, 20.51 ], [ -100.99, 20.51 ], [ -101.1, 20.53 ], [ -101.2, 20.57 ], [ -101.2, 20.57 ], [ -101.27, 20.7 ], [ -101.31, 20.83 ], [ -101.44, 20.95 ], [ -101.44, 20.95 ], [ -101.47, 21.07 ], [ -101.29, 21.35 ], [ -101.36, 21.24 ], [ -101.39, 21.11 ], [ -101.42, 20.99 ], [ -101.44, 20.95 ], [ -101.44, 20.95 ], [ -101.32, 20.98 ], [ -101.24, 21.04 ], [ -101.19, 21.07 ], [ -101.44, 20.95 ], [ -101.42, 20.87 ], [ -101.37, 20.75 ], [ -101.35, 20.67 ], [ -101.22, 20.55 ], [ -101.18, 20.39 ], [ -101.18, 20.39 ], [ -101.19, 20.34 ], [ -101.19, 20.25 ], [ -101.19, 20.23 ], [ -101.16, 20.16 ], [ -101.15, 20.08 ], [ -101.15, 19.99 ], [ -101.15, 19.92 ], [ -101.15, 19.88 ], [ -101.17, 19.81 ], [ -101.17, 19.74 ], [ -101.16, 19.69 ], [ -101.16, 19.69 ], [ -101.23, 19.66 ], [ -101.28, 19.61 ], [ -101.33, 19.56 ], [ -101.36, 19.55 ], [ -101.42, 19.56 ], [ -101.48, 19.53 ], [ -101.55, 19.53 ], [ -101.61, 19.51 ], [ -101.61, 19.51 ], [ -101.61, 19.47 ], [ -101.62, 19.41 ], [ -101.65, 19.39 ], [ -101.65, 19.32 ], [ -101.67, 19.26 ], [ -101.71, 19.21 ], [ -101.71, 19.21 ], [ -101.63, 19.2 ], [ -101.16, 19.69 ], [ -101.06, 19.76 ], [ -101.01, 19.8 ], [ -101.0, 19.85 ], [ -100.91, 19.89 ], [ -100.83, 19.9 ], [ -100.84, 19.96 ], [ -100.78, 19.99 ], [ -100.72, 20.04 ], [ -100.61, 20.04 ], [ -100.53, 20.05 ], [ -100.48, 19.99 ], [ -100.44, 19.89 ], [ -100.37, 19.83 ], [ -100.26, 19.79 ], [ -100.16, 19.79 ], [ -100.02, 19.81 ], [ -99.88, 19.81 ], [ -99.89, 19.73 ], [ -99.87, 19.64 ], [ -99.77, 19.57 ], [ -99.75, 19.49 ], [ -99.71, 19.41 ], [ -99.65, 19.29 ], [ -99.65, 19.29 ], [ -99.72, 19.2 ], [ -99.76, 19.11 ], [ -99.65, 19.29 ], [ -99.51, 19.28 ], [ -99.45, 19.28 ], [ -99.37, 19.3 ], [ -99.3, 19.34 ], [ -99.24, 19.4 ], [ -99.13, 19.43 ], [ -99.13, 19.43 ], [ -99.03, 19.4 ], [ -98.95, 19.31 ], [ -98.9, 19.26 ], [ -98.84, 19.29 ], 
          [ -98.72, 19.31 ], [ -98.65, 19.36 ], [ -98.56, 19.34 ], [ -98.49, 19.31 ], [ -98.38, 19.24 ], [ -98.29, 19.16 ], [ -98.2, 19.04 ], [ -98.2, 19.04 ], [ -98.3, 19.06 ], [ -98.49, 19.07 ], [ -98.2, 19.04 ], [ -98.11, 19.04 ], [ -98.0, 19.07 ], [ -97.94, 19.17 ], [ -97.84, 19.24 ], [ -97.7, 19.27 ], [ -97.65, 19.37 ], [ -97.55, 19.44 ], [ -97.44, 19.48 ], [ -97.34, 19.52 ], [ -97.24, 19.56 ], [ -97.24, 19.56 ], [ -97.15, 19.49 ], [ -97.13, 19.56 ], [ -97.14, 19.63 ], [ -97.05, 19.63 ], [ -96.97, 19.61 ], [ -96.92, 19.53 ], [ -96.92, 19.53 ], [ -96.78, 19.48 ], [ -96.64, 19.39 ], [ -96.55, 19.35 ], [ -96.48, 19.34 ], [ -96.41, 19.36 ], [ -96.33, 19.35 ], [ -96.3, 19.29 ], [ -96.23, 19.21 ], [ -96.14, 19.2 ], [ -96.14, 19.2 ], [ -95.08, 20.4 ], [ -94.02, 21.43 ], [ -90.84, 22.93 ], [ -87.53, 24.15 ], [ -84.66, 24.75 ], [ -82.97, 24.46 ], [ -82.37, 23.13 ], [ -82.37, 23.13 ], [ -81.7, 23.78 ], [ -80.3, 24.15 ], [ -79.62, 25.31 ], [ -79.39, 26.94 ], [ -79.09, 28.25 ], [ -77.77, 30.31 ], [ -76.31, 31.69 ], [ -74.95, 33.76 ], [ -74.52, 36.04 ], [ -74.5, 37.92 ], [ -74.93, 38.83 ], [ -75.16, 39.95 ], [ -75.16, 39.95 ], [ -76.25, 40.41 ], [ -76.94, 39.81 ], [ -77.03, 38.89 ], [ -75.16, 39.95 ], [ -70.78, 38.01 ], [ -63.97, 37.56 ], [ -56.36, 38.12 ], [ -50.43, 40.15 ], [ -41.89, 42.64 ], [ -33.8, 44.11 ], [ -24.23, 46.05 ], [ -18.01, 47.77 ], [ -10.08, 47.77 ], [ -4.42, 46.05 ], [ -0.58, 44.84 ]
         ]
      }
    }
  ]
};

var map = new mapboxgl.Map(options);
map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of the first symbol layer in the map style
  var firstSymbolId;
  for (var i = 10; 1 < layers.length; i++) {
  if (layers[i].type === 'symbol') {
  firstSymbolId = layers[i++].id;
  break;
  }
  }
  // We use D3 to fetch the JSON here so that we can parse and use it separately
  // from GL JS's use in the added source. You can use any request method (library
  // or otherwise) that you want.

  // const geojsonSource = "https://docs.mapbox.com/mapbox-gl-js/assets/hike.geojson";
  const geojsonSource = featureCollection;

  const data = featureCollection;

  // save full coordinate list for later
  var coordinates = data.features[0].geometry.coordinates.map(coord => [
    coord[0],
    coord[1]
  ]);

  // start by showing just the first coordinate
  data.features[0].geometry.coordinates = [coordinates[0]];

  // add it to the map
  map.addSource("trace", { type: "geojson", data: featureCollection });
  map.addLayer({
    id: "trace",
    type: "line",
    source: "trace",
    paint: {
      "line-color": "#FF007F",
      "line-opacity": 0.85,
      "line-width": 2
    }
  },
  firstSymbolId

  );

  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;
  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id;
      break;
    }
  }


// setup the viewport
map.jumpTo({ 'center': coordinates[i], 'zoom': 5, 'bearing': -350 });
map.setPitch(40);
 

  // on a regular basis, add more coordinates from the saved list and update the map
  var i = 0;
  var k = 0;
  
var i = 0;
var timer = window.setInterval(function () {
if (i < coordinates.length) {
data.features[0].geometry.coordinates.push(
coordinates[i]
);
map.getSource('trace').setData(data);
map.panTo(coordinates[i]);
i++;
} else {
window.clearInterval(timer);
}
}, 70);
}
);
///////////////////////////////

var geojson = {
  'type': 'FeatureCollection',
  'features': [
      { 'type': 'Feature', 'properties': { 'Name': 'La Coruna','text': 'On the 5th of June 1799, the Pizarro set sail from La Coruña’s harbour. On board were Alexander von Humboldt, his companion Aimé Bonpland, and an arsenal of avant-garde physical and astronomical instruments.','Date': '05 June 1799','text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/1-coruna.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -8.4, 43.36, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Santa Cruz, Tenerife' , 'text': 'He came to Tenerife in 1799, where he climbed El Teide and went on to study the Island geography and plant life. His work Kosmos mentions the landscapes in the La Orotava Valley, the blanket of clouds and Mount Teide. During his stay he wrote: I am leaving almost with tears in my eyes. I would like to settle here.','Date': '10 June 1799', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/2-teide.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -16.26, 28.46, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Cumaná' , 'text': 'The destination was not originally Cumaná, but an outbreak of typhoid on board meant that the captain changed course from Havana to Venezuela. Humboldt had not mapped out a specific plan of exploration, so that the change did not upend a fixed itinerary.','Date': '16 July 1799', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/3-cumana.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -64.18, 10.46, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Angostura' ,'text': 'Alejandro de Humboldt and Amadeo Bonpand, after 26 days in Angostura trying to save themselves from a malignant fever, said goodbye to the capital of Guyana to begin their exploration of the missions of the Orinoco River and the Amazon.','Date': '10 July 1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/9-casiquiare.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -63.54, 8.13, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Caracas' , 'text': 'Rather than describe the administrative center of Caracas, Humboldt started his researches with the valley of Aragua, where export crops of sugar, coffee, cacao, and cotton were cultivated.','Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/36-vzla.jpg', 'img': './img/36-vzla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -66.92, 10.51, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Casiquiare canal - Rio Negro' ,'text': 'The Casiquiare, which links the Amazon and Orinoco rivers, had not been confirmed by European scientists, though it was long known to the locals. While Humboldt made his way upriver, he encountered a great many plants and animals, and faced just as many dangers along the way!', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/9-casiquiare.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.12, 2.0, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Casiquiare canal - Rio Orinoco' ,'text': 'As Humboldt traveled up the Orinoco, he collected twenty four animals, including seven types of birds and five types of monkeys.', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/9-casiquiare.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -65.88, 3.14, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Bogota, Columbia' ,'text': 'Alexander Von Humboldt and Aimé Jacques Alexandre Bonpland, discovered the wax palm in 1801. By that date, both scientists toured various regions of Colombia in search of specimens of fauna and flora, and found special admiration for the Andes mountain range', 'Date': 'July-Sept 1801', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/35-colombia.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -74.07, 4.61, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Quito' ,'text': 'Humboldt and Bonpland spent about six months in Quito, and as such cataloged many plants endemic to Ecuador, including Astragalus geminiflorus, Brachyotum confertum, and Brunellia ovalifolia.', 'Date': 'Jan-Jun 1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/12-cotopaxi.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -78.51, -0.21, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Chimborazo' ,'text': 'Alexander von Humboldt climbed Mount Chimborazo. While climbing, Humboldt formulated his most enduring idea: the unity of nature. Looking down on the plains and forest below, Humboldt saw that nature was one great interconnected whole.', 'Date': '23 June 1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/7-chimborazo.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -78.82, -1.47, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Guayaquil, Equador' ,'text': 'Hello World', 'Date': 'Jan 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/34-trujillo.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -79.93, -2.16, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Acapulco' ,'text': 'Hello World', 'Date': '22-27 Mar 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/37-acapulco.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.91, 16.85, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Mexico City' ,'text': 'Humboldt asserted that the Aztecs "had a higher level of civilization than it is granted by those clever historians who have taken America as their subject.', 'Date': ' Mar 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/11-ciudad-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.13, 19.43, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Veracruz' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/13-orizaba.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -96.14, 19.2, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Havana' ,'text': ' Humboldt took time to enjoy the Cuban royal palm, which he called "one of the most majestic of its species."', 'Date': '1801', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/15-cuba.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -82.37, 23.13, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Trinidad, Sancti Spiritus' ,'text': 'Hello World', 'Date': 'Mar 1801', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/15-cuba.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -79.98, 21.8, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Philadelphia, Pennsylvania' ,'text': 'In 1804, famed German naturalist Alexander von Humboldt arrived in the United States after a five-year exploration voyage through the Spanish colonies. During this time, diplomatic disputes between the United States and Spain led to increased interest from President Jefferson in acquiring Humboldt’s expertise.', 'Date': 'May-July 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/14-philadelphia.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -75.16, 39.95, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Washington, District of Columbia' ,'text': 'Hello World', 'Date': 'May-July 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/24-usa.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -77.03, 38.89, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Bordeaux, Gironde, Nouvelle-Aquitaine' ,'text': 'Alexander von Humboldt and Aime Bonpland arrived in Bordeaux. After five years in the Americas, the two had brought back a treasure trove of data and specimens which they would turn into some of the greatest scientific texts of the century.', 'Date': '1 Aug 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/8-bordeaux.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -0.58, 44.84, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Calabozo' , 'text': 'Humboldt was fascinated by electric eels. To catch them, locals sent a herd of wild horses through to have the eels discharge. Once Humboldt caught one, he poked and prodded it with various materials (including himself!) to understand animal electricity.','Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/36-vzla.jpg', 'img': './img/5-calabozo.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.43, 8.93, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Fernando de Apure' ,'text': 'Hello World', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/36-vzla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.47, 7.89, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Fernando de Atabapo' ,'text': 'Hello World', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/9-casiquiare.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.7, 4.05, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'La Esmeralda, Orinoco, Amazonas' ,'text': 'Hello World', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/10-amazonas.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -65.55, 3.17, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Rio Apure - Rio Orinoco' ,'text': 'Hello World', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/9-casiquiare.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -66.33, 7.65, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Atures rapids' ,'text': 'His deep-held respect for local knowledge did not always translate to cultural sensitivity. At the cave of Ataruipe, a sacred burial site for the Ature people along the Orinoco, Humboldt took the remains of several people for scientific study.', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/44-atures.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.61, 5.58, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Maypures Rapids' ,'text': 'Humboldt would make sure to compare the sights of South America to those of North America or Europe. The cataracts of Maypures, for example, was contrasted to Niagara Falls, both providing a familiar reference to readers and sewing together the unity of nature.', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/20-maupures.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.84, 5.22, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Carlos' ,'text': 'Hello World', 'Date': 'Mar-1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/34-trujillo.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -67.07, 1.91, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Barcelona' ,'text': 'Humboldt detested slavery from the first moment he encountered it in Cumaná. Deeply disturbed by the sale of humans and their brutal treatment by their masters, Humboldt became a lifelong abolitionist and a believer in the inherent equality of races.', 'Date': '1800', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/4-caracas.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -64.69, 10.16, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Cartagena, Bolívar' ,'text': 'Humboldt loved volcanoes. From Cotopaxi to Pichincha, from Tenerife and Vesuvius, Humboldt would climb, measure, study, and expound upon the dynamic volcanic forces which captured his imagination.', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/28-turbaco.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -75.54, 10.43, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Honda' ,'text': 'Bonpland named several plants after his travelling companion of five years, including Paspalum humboldtianum, a species of grass pictured here, and Quercus humboldtii, an oak tree found in Colombia and Panama.', 'Date': '1801', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/34-trujillo.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -74.74, 5.21, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Guatavita, Cundinamarca' ,'text': 'When visiting Tequendama Falls, Frederic Church had his guides clear a path to have the exact same angle on the falls that Humboldt had fifty years prior.', 'Date': '21 August 1801', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/16-quidio.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -73.83, 4.93, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Popayán, Cauca' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/penipe-ecuador.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -76.61, 2.44, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Riobamba' ,'text': 'Bolívar took inspiration from Humboldt, combining his revolutionary zeal with a profound respect for nature. In his 1822 poem, "My Delirium on Chimborazo," he wrote that he "left Humboldt tracks behind and began to leave my own marks on the eternal crystals girding Chimborazo".', 'Date': '1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/21-riobamba.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -78.64, -1.66, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Chan Chan' ,'text': 'Humboldt had never seen the Pacific Ocean before. He observed the cold, nutrient filled current carrying him from Peru to Mexico. Today, it is known as the Humboldt Current. Although flattered by the name, Humboldt noted that he did not discover it, as the local fishermen had known of it for centuries.', 'Date': '1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/47-chan-chan'}, 'geometry': { 'type': 'Point', 'coordinates': [ -79.08, -8.11, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Trujillo, La Libertad' ,'text': 'Hello World', 'Date': 'Oct-Dec 1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/34-trujillo.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -79.02, -8.12, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Lima' ,'text': 'Humboldt admired the accomplishments of the Inca civilization.In his travel narratives, he pointedly notes the many architectural marvels of the Inca, including their roads, relaying a quote that the Spanish Emperor in all his power would not accomplish a fraction of what the well-equipped leadership of the Incas was able to demand of the obedient tribes.', 'Date': '1802', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/34-trujillo.jfif'}, 'geometry': { 'type': 'Point', 'coordinates': [ -77.03, -12.06, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Tierra Colorada' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.53, 17.17, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Chilpancingo' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.51, 17.53, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Mexcala' ,'text': 'Hello World', 'Date': '4 April 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.6, 17.93, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Taxco' ,'text': 'Hello World', 'Date': '5 April 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.61, 18.56, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Puente de Ixtla' ,'text': 'Hello World', 'Date': '9 April 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.32, 18.62, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Tehuilotepec' ,'text': 'Hello World', 'Date': '6-8 April 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.58, 18.55, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Huitzilac, Morelos' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.27, 19.03, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Cuernavaca, Morelos' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.24, 18.92, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Toluca' ,'text': 'Hello World', 'Date': '1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.65, 19.29, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Xinantecatl' ,'text': 'Hello World', 'Date': '29 Sept 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.76, 19.11, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Ixtlahuaca' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.77, 19.57, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Maravatío' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -100.44, 19.89, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Acámbaro' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -100.72, 20.04, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Pátzcuaro' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.61, 19.51, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Valladolid' ,'text': 'Hello World', 'Date': '14 Sept 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.16, 19.69, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Volcán de Jorullo' ,'text': 'Hello World', 'Date': '19 Sept 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/22-el-jorullo.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.63, 19.2, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Arío (ex Rancho Nuevo)' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/29-jorullo.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.71, 19.21, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Valle de Santiago' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.18, 20.39, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Irapuato' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.35, 20.67, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Comanjilla' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.47, 21.07, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Juan de la Chica' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.29, 21.35, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Guanajuato' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/27-guanajuato.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.44, 20.95, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Salamanca, Guanajuato' ,'text': 'Hello World', 'Date': '8 Aug - 9 Sept 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.2, 20.57, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Celaya, Guanajuato' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -100.81, 20.52, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Querétaro' ,'text': 'Hello World', 'Date': '4 Aug 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -100.4, 20.59, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Juan del Río' ,'text': 'Hello World', 'Date': '3 Aug 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -100.0, 20.39, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Tula: Hidalgo' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.4, 20.0, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Huehuetoca, México' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -99.2, 19.83, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Pachuca' ,'text': 'Hello World', 'Date': 'May 1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.74, 20.12, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Regla, Hidalgo' ,'text': 'Upon seeing the basaltic columns of Santa Maria Regla, Humboldt was entranced by "the contrast of vegetation, the wild appearance, and the solitude of the place, [which] render this small cascade extremely picturesque.', 'Date': 'September 24, 1789', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/31-regla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.57, 20.25, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Atotonilco El Grande, Hidalgo' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.67, 20.29, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Actopan, Hidalgo' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/25-michoacan.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.94, 20.27, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Chalco, México' ,'text': 'Hello World', 'Date': '1803', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.9, 19.26, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Puebla' ,'text': 'Hello World', 'Date': '22-25 Jan 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/23-puebla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.2, 19.04, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'San Nicolás de los Ranchos, Puebla' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/23-puebla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.49, 19.07, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Cholula, Puebla' ,'text': 'Hello World', 'Date': '1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/18-cholua.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -98.3, 19.06, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Perote' ,'text': 'Hello World', 'Date': '1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/26-perote.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -97.24, 19.56, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Nauhcampatepetl' ,'text': 'Hello World', 'Date': '7 Feb 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -97.15, 19.49, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Xalapa' ,'text': 'Hello World', 'Date': '10-15 Feb 1804', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/30-mitla.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -96.92, 19.53, 0.0 ] } },
    { 'type': 'Feature', 'properties': { 'Name': 'Santa Rosa' ,'text': 'Hello World', 'Date': 'year', 'url': 'url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG', 'img': './img/33-mexico.jpg'}, 'geometry': { 'type': 'Point', 'coordinates': [ -101.19, 21.07, 0.0 ] } }
    ]
  };

   // add markers to map


   geojson.features.forEach(function (marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    zoom= 10  +'px';
    el.className = 'marker';
    el.style.width =  zoom   ;
    el.style.height =  zoom  ;
  
    // add marker to map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup() // add popups
      .setHTML(
        '<img src=' + marker.properties.img + '>' +
        '<div class="event-card-layout-column justify-space-between">' +
        '<h3><a>' + marker.properties.Name + ' </a>' + '<a>' + marker.properties.Date + '</a> </h3>' +
        '<p>' + marker.properties.text + '</p>' 
        )
    )
    .addTo(map);
    
  });
  
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl({
  showZoom: true
}), 'bottom-right');
