// starting location and zoom
const startLocation = [52.089204, 5.106351];
const startZoom = 13;

// url and attribution for the map tiles (attribution is obligatory for openstreetmaps)
const tilesUrl = 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png';
const tilesAttribution = 'Tiles courtesy of <a href="http://openstreetmap.se/">OSM Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OSM</a>';

// create the leaflet map and add map tiles
const map = L.map('map').setView(startLocation, startZoom);

L.tileLayer(tilesUrl, {
    attribution: tilesAttribution,
    maxZoom: 18
}).addTo(map);