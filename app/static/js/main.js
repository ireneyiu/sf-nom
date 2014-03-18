var Search = Backbone.Model.extend({
	// url: '/search',
	// initialize: function() {
	//	this.results = new Results(this.get("results"));
	//	this.trigger("search:ready", this);
	// }
});

var Result = Backbone.Model.extend({

});

var Results = Backbone.Collection.extend({
	model: Result
});

var SearchView = Backbone.View.extend({
	el: 'form',
	events: {
		'submit': 'search',
	},
	initialize: function() {
		_.bindAll(this, 'search');
	},
	search: function() {
		event.preventDefault();
		var location = this.$el.find('input').val();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({'address': location}, function(results, status) {
			console.log(results[0].geometry.location);
		});
		//this.model.performSearch(e.target.value);
	}
});


var SearchLocation = Backbone.Model.extend({

});

var SearchLocationView = Backbone.View.extend({
	render: function() {
		
	}
});


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
	},

	render: function() {
		this.$el.html(this.model.get('name'));
		return this;
	}
});

var searchView = new SearchView({ model: Search});

// var foodTruck = new FoodTruck();
// var foodTruckView = new FoodTruckView({ model: foodTruck});
// var foodTruckCollection = new FoodTruckCollection();
// foodTruckCollection.add(foodTruck);