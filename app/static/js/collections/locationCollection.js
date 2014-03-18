var LocationCollection = Backbone.Collection.extend({
    model: Location,
    url: '/locations',
    initialize: function() {
      this.fetch();
    }
});