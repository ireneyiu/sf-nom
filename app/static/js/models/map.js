var Map = Backbone.Model.extend({
  defaults: {
    center: new google.maps.LatLng(37.7617, -122.4351),
    zoom: 13
  },
  initialize: function() {
    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        
      });
    }
  }
});