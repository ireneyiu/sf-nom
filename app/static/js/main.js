$(document).on('ready', function() {
	var vent = {};
	_.extend(vent, Backbone.Events);
	var locationCollection = new LocationCollection();
  var mapView = new MapView({vent: vent});
  var searchView = new SearchView({vent: vent, map: mapView.map});
  searchView.render();
	var locationView = new LocationView({
		collection: locationCollection,
		map: mapView.map,
		icon: '/static/img/truck-icon.png'
	});
  var center = new Center();
  var centerView = new CenterView({vent: vent, model: center, map: mapView.map});
});
