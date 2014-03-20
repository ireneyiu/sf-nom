var InfoView = Backbone.View.extend({
	initialize: function() {
		_.bindAll(this, 'render');
	},
	template: _.template('<h3><%= name %></h3><p><%= address %></p><p><%= food %></p>'),
  render: function() {
  	var info = new google.maps.InfoWindow({
  		content: this.template(this.model.attributes)
  	});
  	return info;
  }
});