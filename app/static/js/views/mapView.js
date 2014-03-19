var MapView = Backbone.Model.extend({
  el: '#map-canvas',
  initialize: function(options) {
    console.log(options);
    _.bindAll(this, 'updateAddress');
    options.vent.bind('address:update', this.updateAddress);
    this.model = new Map();
    this.map = new google.maps.Map(document.getElementById('map-canvas'), this.model.attributes);
    this.render();
  },
  render: function() {
   $(this.el).append(this.map);
  },
  add: function() {
    console.log('adding!');
  },
  updateAddress: function(data) {
    // var marker = new Marker({latitude: data.k, longitude: data.A});
    // var markerView = new MarkerView({model: marker});
    var latLng = new google.maps.LatLng(data.k, data.A);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: "Current Location"
    });

    this.updateLocations();
  },
  updateLocations: function() {

  }
});

