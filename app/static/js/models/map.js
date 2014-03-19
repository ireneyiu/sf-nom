var Map = Backbone.Model.extend({
  defaults: {
    center: new google.maps.LatLng(37.7617, -122.4351),
    zoom: 13
  },
  initialize: function() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        // this.center = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      });
    }
  }
});