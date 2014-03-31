#SF Food Trucks#

This application allows you to find food trucks hear a location in San Francisco.

Available here: [Heroku](http://sf-nom.herokuapp.com)

By [Irene Yiu](http://www.ireneyiu.com)  
[GitHub](http://github.com/ireneyiu) | [LinkedIn](http://www.linkedin.com/in/ireneyiu)

#Backend#

- [Flask](http://flask.pocoo.org/)
- [Flask-Assets](http://flask-assets.readthedocs.org/en/latest/)
- [San Francisco Data](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat)

I chose to create a minimal backend using Flask. I have no prior Flask experience and very minimal dabbling with Django, so this was pretty new to me. However, I wanted to have a clear separation of concerns, especially if I build this into larger application in the future. I have a separate __init__.py file to setup and configure the web assets, and a views.py file with the actual routes. 

#Frontend#

- [Backbone](http://backbonejs.org/)
- [Google Maps API](https://developers.google.com/maps/)
- [Google Places API](https://developers.google.com/places/)
- [Twitter Bootstrap](http://getbootstrap.com/)

Most of the application logic is handled in Backbone. I used the Google Maps API to set the data points on a map and the Google Places API for the location autocomplete. The search bar styling comes from Twitter Bootstrap.

I have no prior experience in Backbone or the Google API's, but I tried to approach the problem in an object-oriented way, breaking things down into individual models and views as they made sense. The hardest part was trying to mesh together the Google map objects and my custom objects in a way that wasn't too tightly coupled.

