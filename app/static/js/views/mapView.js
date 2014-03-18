var MapView = Backbone.Model.extend({
  el: '#map-canvas',
  initialize: function() {
    this.model = new Map();
    this.map = new google.maps.Map(document.getElementById('map-canvas'), this.model.attributes);
    this.render();
  },
  render: function() {
   $(this.el).append(this.map);
  }
});

