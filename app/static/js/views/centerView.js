var CenterView = Backbone.View.extend({
  initialize: function(options) {
    _.bindAll(this, 'render', 'updateCenter');
    options.vent.bind('address:update', this.updateCenter);
    this.map = options.map
    this.render();
  },
  render: function() {
    var latLng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: "Current Location"
    });
  },
  updateCenter: function(data) {
    var latLng = new google.maps.LatLng(data.k, data.A);
    this.marker.position = latLng;
  }
});