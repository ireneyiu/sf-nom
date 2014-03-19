var LocationView = Backbone.View.extend({
  initialize: function(options) {
    _.bindAll(this, 'render');
    this.map = options.map;
    this.collection.fetch({
      success: this.render
    })
  },
  render: function() {
    var self = this;
    this.collection.each(function(model) {
      var content = '<p>' + model.get('applicant')+ '</p>';
      content += '<p>' + model.get('address')+ '</p>';
      content += '<p>' + model.get('fooditems')+ '</p>';


      var info = new google.maps.InfoWindow({
        content: content
      });

      var latLng = new google.maps.LatLng(model.get('latitude'), model.get('longitude'));

      var location = new google.maps.Marker({
        position: latLng,
        title: model.get('applicant'),
        map: self.map
      });

      google.maps.event.addListener(location, 'click', function() {
        info.open(self.map, location);
      });

    });
  }
});