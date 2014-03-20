var MapView = Backbone.Model.extend({
  el: '#map-canvas',
  initialize: function(options) {
    _.bindAll(this, 'render','updateCenter');
    options.vent.bind('address:update', this.updateCenter);
    this.model = new Map();
    this.map = new google.maps.Map(document.getElementById('map-canvas'), this.model.attributes);
    this.render();
  },
  render: function() {
   $(this.el).append(this.map);
  },
  update: function(data) {
    var latLng = new google.maps.LatLng(data.k, data.A);
    this.map.panTo(latLng);
    this.map.setZoom(17);
  }
});

