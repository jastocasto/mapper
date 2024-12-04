const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]), // Center on [longitude, latitude]
    zoom: 2, // Initial zoom level
  }),
});
