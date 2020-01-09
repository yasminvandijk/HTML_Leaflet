// starting location and zoom
const startLocation = [52.089204, 5.106351];
const startZoom = 13;

// url and attribution for the map tiles (attribution is obligatory for openstreetmaps)
const tilesUrl = 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png';
const tilesAttribution = 'Tiles courtesy of <a href="http://openstreetmap.se/">OSM Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OSM</a>';

// create the leaflet map and add map tiles
const map = L.map('map').setView(startLocation, startZoom);

const tileLayer = L.tileLayer(tilesUrl, {
    attribution: tilesAttribution,
    maxZoom: 18
}).addTo(map);



// marker layer
const markers = L.layerGroup();
L.marker(startLocation).bindPopup("Utrecht Centraal").addTo(markers);
L.marker([52.084836, 5.173292]).bindPopup("Utrecht Science Park").addTo(markers);
L.marker([52.092868, 5.112993]).bindPopup("Tivoli").addTo(markers);
L.marker([52.094761, 5.123672]).bindPopup("Bibliotheek").addTo(markers);
L.marker([52.074920, 5.094895]).bindPopup("Winkelcentrum").addTo(markers);

// control for toggling overlays on map
var baseLayers = {
    "map tiles": tileLayer
};
var overlays = {
    "markers": markers
};
L.control.layers(baseLayers, overlays).addTo(map);