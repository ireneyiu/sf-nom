App.Models.Map = Backbone.Model.extend({
  defaults: {
    center: new google.maps.LatLng(37.7617, -122.4351),
    zoom: 13
  },
  initialize: function(options) {
    this.set('center', new google.maps.LatLng(options.center.get('latitude'), options.center.get('longitude')));
  }
});