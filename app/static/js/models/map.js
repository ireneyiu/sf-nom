var Map = Backbone.Model.extend({
  defaults: {
    center: new google.maps.LatLng(37.7833, -122.4167),
    zoom: 12
  }
});