$(document).on('ready', function() {
	var vent = {};
	_.extend(vent, Backbone.Events);
	var locationCollection = new LocationCollection();
  var mapView = new MapView({vent: vent});
  var searchView = new SearchView({vent: vent, map: mapView.map});
	var locationView = new LocationView({collection: locationCollection, map: mapView.map});
  var center = new Center();
  var centerView = new CenterView({vent: vent, model: center, map: mapView.map});
});
