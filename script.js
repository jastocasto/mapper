import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';

// Initialize the map
const map = new Map({
  target: 'map', // ID of the map div
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', // OpenStreetMap tiles
      }),
    }),
  ],
  view: new View({
    center: [0, 0], // Center the map on the equator
    zoom: 2,        // Initial zoom level
  }),
});
