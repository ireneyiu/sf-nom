var MapView = Backbone.Model.extend({
  el: '#map-canvas',
  initialize: function(options) {
    _.bindAll(this, 'updateMarker');
    options.vent.bind('address:update', this.updateMarker);
    this.model = new Map();
    this.map = new google.maps.Map(document.getElementById('map-canvas'), this.model.attributes);
    this.render();
  },
  render: function() {
   $(this.el).append(this.map);
  },
  updateMarker: function(data) {
    var latLng = new google.maps.LatLng(data.k, data.A);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: "Current Location"
    });
  }
});

