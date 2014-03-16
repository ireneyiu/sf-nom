var FoodTruck = Backbone.Model.extend({
	defaults: {
		name: 'Something'
	}
});

var FoodTruckCollection = Backbone.Collection.extend({
	model: FoodTruck
});

var FoodTrucksView = Backbone.View.extend({
	tagName: 'ul',
	render: function() {
		this.collection.each(function(foodTruck) {
			var foodTruckView = new FoodTruckView({model: person});
			this.$el.append(foodTruckView.render().el);
		}, this);
		return this;
	}
});

var FoodTruckView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		console.log(this.model);
	},

	render: function() {
		this.$el.html(this.model.get('name'));
		return this;
	}
});

var foodTruck = new FoodTruck();
var foodTruckView = new FoodTruckView({ model: foodTruck});
var foodTruckCollection = new FoodTruckCollection();
foodTruckCollection.add(foodTruck);