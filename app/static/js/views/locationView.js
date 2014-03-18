var LocationView = Backbone.View.extend({
  render: function() {
    new google.maps.Marker(this.model.get('latitude'), this.model.get('longitude'));
  }
});