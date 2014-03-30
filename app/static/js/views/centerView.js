App.Views.CenterView = Backbone.View.extend({
  initialize: function(options) {
    _.bindAll(this, 'render', 'update');
    options.vent.bind('address:update', this.update);
    this.map = options.map;
    this.render();
  },
  render: function() {
    var latLng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: "Current Location"
    });
    return this.marker;
  },
  update: function(data) {
    var latLng = new google.maps.LatLng(data.k, data.A);
    this.marker.setPosition(latLng);
  }
});