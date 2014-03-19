$(document).on('ready', function() {
	var vent = {};
	_.extend(vent, Backbone.Events);
	var locationCollection = new LocationCollection();
  var searchView = new SearchView({model: Search, vent: vent});
  var mapView = new MapView({vent: vent});
	var locationView = new LocationView({collection: locationCollection, map: mapView.map});
});
