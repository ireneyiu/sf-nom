var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(document).on('ready', function() {
	var vent = {};
	_.extend(vent, Backbone.Events);

  var mapView = new App.Views.MapView({vent: vent, model: new App.Models.Map()});
  new App.Views.SearchView({vent: vent, map: mapView.map}).render();

	var locationView = new App.Views.LocationView({
		collection: new App.Collections.LocationCollection(),
		map: mapView.map,
		icon: '/static/img/truck-icon.png'
	});

  var centerView = new App.Views.CenterView({vent: vent, model: new App.Models.Center(), map: mapView.map});
});