App.Views.MapView = Backbone.Model.extend({
  el: '#map-canvas',
  initialize: function(options) {
    _.bindAll(this, 'render','update');
    this.model = options.model;
    options.vent.bind('address:update', this.update);
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

