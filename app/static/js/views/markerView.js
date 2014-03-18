var MarkerView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    new google.maps.Marker(this.model.get('latitude'), this.model.get('longitude'));
  }
});
