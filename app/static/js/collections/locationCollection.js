App.Collections.LocationCollection = Backbone.Collection.extend({
    model: App.Models.Location,
    url: '/locations'
});