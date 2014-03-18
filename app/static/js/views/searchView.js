var SearchView = Backbone.View.extend({
  el: 'form',
  events: {
    'submit': 'submit'
  },
  initialize: function() {
    _.bindAll(this, 'submit');
  },
  submit: function(e) {
    e.preventDefault();
    var location = this.$el.find('input').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': location}, function(results, status) {
      console.log(results[0].geometry.location);
    });
  }
});
