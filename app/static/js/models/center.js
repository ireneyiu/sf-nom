App.Models.Center = Backbone.Model.extend({
  defaults: {
  	latitude: 37.7833,
    longitude: -122.4167,
    title: "Current Location"
  },
  initialize: function() {
    _.bindAll(this, 'setLatLng');
  	this.getGeolocation();
  },
  getGeolocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLatLng);
    }
  },
  setLatLng: function(position) {
    this.set('latitude', position.coords.latitude);
    this.set('longitude', position.coords.longitude);
  }
});