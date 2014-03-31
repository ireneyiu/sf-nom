App.Models.Center = Backbone.Model.extend({
  defaults: {
  	latitude: 37.7833,
    longitude: -122.4167,
    title: "Current Location"
  },
  initialize: function() {
  	this.getCurrentPosition();
  },
  getCurrentPosition: function() {
  	var self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        self.set('latitude', position.coords.latitude);
        self.set('longitude', position.coords.longitude);
      });
    }
  }
});