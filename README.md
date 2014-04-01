# SF Food Trucks

This application allows you to find food trucks near a location in San Francisco.

Available here: [Heroku](http://sf-nom.herokuapp.com)

Author: [Irene Yiu](http://www.ireneyiu.com)  
[GitHub](http://github.com/ireneyiu) | [LinkedIn](http://www.linkedin.com/in/ireneyiu)

# Backend

- [Flask](http://flask.pocoo.org/)
- [Flask-Assets](http://flask-assets.readthedocs.org/en/latest/)
- [San Francisco Data](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat)

I chose to create a minimal backend using Flask. Since I only have two routes, and Flask is a very lightweight framework, it seemed like a good fit. I have no prior Flask experience and very minimal dabbling with Django, so this was pretty new to me.

While the backend is minimal, I still wanted to structure the app in a way that indicated a clear separation of concerns. I have a separate __init__.py file to setup and configure the web assets, and a views.py file with the actual routes. It may be overkill for a simple app, but I figured this way would be best in case I decide to build this into a larger app in the future.

# Frontend

- [Backbone](http://backbonejs.org/)
- [Google Maps API](https://developers.google.com/maps/)
- [Google Places API](https://developers.google.com/places/)
- [Twitter Bootstrap](http://getbootstrap.com/)

Most of the application logic is handled in Backbone. I used the Google Maps API to set the data points on a map and the Google Places API for the location autocomplete. The pin should initially be set to the user's current location. The search bar was styled using Twitter Bootstrap.

I have no prior experience in Backbone or the Google API's, but I tried to approach the problem in an object-oriented way, breaking things down into individual models and views as they made sense. The hardest part was trying to mesh together the Google map objects and my custom objects in a way that wasn't too tightly coupled.

Since I needed a way to update a few views based on address changes, I also made my own vent object (event aggregator) by extending Backbone.Events. There may be a better "Backbone way" of firing custom events, but this was my workaround.

# Improvements

Given more time, I would have done the following:

- DB Storage: Allow the user to filter the food trucks by type, items, etc. To do so, I would store the data in a database like MongoDB, since the data is already in JSON, and the conversion to BSON should be rather easy. And, as a NoSQL datbase, the lookups should be faster than in a traditional SQL database.
- Testing: Test the frontend using Jasmine and the backend using Flask-Testing.
- User Interface: Add a spinner when fetching the food truck locations. Animate the dropping of trucks.