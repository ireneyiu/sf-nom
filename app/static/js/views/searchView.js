var SearchView = Backbone.View.extend({
  el: 'form',
  events: {
    'submit': 'search'
  },
  initialize: function(options) {
    this.vent = options.vent;
    this.map = options.map;
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('search'));
    console.log(this.autocomplete);
    this.autocomplete.bindTo('bounds', this.map);
  },
  search: function(e) {
    e.preventDefault();
    var self = this;
    var location = this.$el.find('input').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': location}, function(results, status) {
      self.vent.trigger('address:update', results[0].geometry.location);
    });
  }
});
