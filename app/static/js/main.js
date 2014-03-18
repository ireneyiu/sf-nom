// var FoodTruck = Backbone.Model.extend({
// 	defaults: {
// 		name: 'Something'
// 	}
// });

// var FoodTruckCollection = Backbone.Collection.extend({
// 	model: FoodTruck
// });

// var FoodTrucksView = Backbone.View.extend({
// 	tagName: 'ul',
// 	render: function() {
// 		this.collection.each(function(foodTruck) {
// 			var foodTruckView = new FoodTruckView({model: person});
// 			this.$el.append(foodTruckView.render().el);
// 		}, this);
// 		return this;
// 	}
// });

// var FoodTruckView = Backbone.View.extend({
// 	tagName: 'li',

// 	initialize: function() {
// 	},

// 	render: function() {
// 		this.$el.html(this.model.get('name'));
// 		return this;
// 	}
// });


$(document).on('ready', function() {
	var vent = {}; // or App.vent depending how you want to do this
	_.extend(vent, Backbone.Events);
	var searchView = new SearchView({model: Search, vent: vent});
	var mapView = new MapView({vent: vent});

//	var markerView = new MarkerView({vent: vent});
});

// var foodTruck = new FoodTruck();
// var foodTruckView = new FoodTruckView({ model: foodTruck});
// var foodTruckCollection = new FoodTruckCollection();
// foodTruckCollection.add(foodTruck);