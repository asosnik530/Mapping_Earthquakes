// Add console.log to check to see if our code is working.
console.log("working"); 
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1975,-97.6664],
  [43.6777,-79.6248],
  [40.6412, -73.7781]
];
// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "blue"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,    
    accessToken: API_KEY
});
streets.addTo(map);