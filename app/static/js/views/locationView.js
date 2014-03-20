var LocationView = Backbone.View.extend({
  initialize: function(options) {
    _.bindAll(this, 'render');
    this.map = options.map;
    this.collection.fetch({
      success: this.render
    });
  },
  render: function() {
    var self = this;
    this.collection.each(function(model) {
      var latLng = new google.maps.LatLng(model.get('latitude'), model.get('longitude'));
      var location = new google.maps.Marker({
        position: latLng,
        title: model.get('applicant'),
        map: self.map
      });

      var info = new Info({
        name: model.get('applicant'),
        address: model.get('address'),
        food: model.get('foodItems'),
        location: location
      });

      var infoWindow = new InfoView({model: info}).render();
      google.maps.event.addListener(location, 'click', function() {
        infoWindow.open(self.map, location);
      });
    });
  }
});