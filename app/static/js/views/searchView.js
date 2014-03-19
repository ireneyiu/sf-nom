var SearchView = Backbone.View.extend({
  el: '#search',
  initialize: function(options) {
    _.bindAll(this, 'search');
    this.vent = options.vent;
    this.map = options.map;
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete = new google.maps.places.Autocomplete(this.el);
    this.autocomplete.bindTo('bounds', this.map);
    google.maps.event.addListener(this.autocomplete, 'place_changed', this.search);
  },
  search: function() {
    var self = this;
    var location = this.$el.val();
    this.geocoder.geocode({'address': location}, function(results, status) {
      self.vent.trigger('address:update', results[0].geometry.location);
    });
  }
});
