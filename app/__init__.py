from flask import Flask
from flask.ext.assets import Environment, Bundle
from webassets.filter import Filter

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('app.config')
app.config.from_pyfile('application.cfg', silent=True)

assets = Environment(app)

js = Bundle(
  'js/libs/jquery.js',
  'js/libs/underscore.js',
  'js/libs/backbone.js',
  filters='rjsmin',
  output='js/libs.js'
)
assets.register('js_libs', js)

bb = Bundle(
  'js/main.js',
  'js/models/*.js',
  'js/collections/*.js',
  'js/views/*.js',
  filters='rjsmin',
  output='js/app.js'
)
assets.register('js_app', bb)

css = Bundle(
  'css/normalize.css',
  'css/styles.css',
  filters='cssmin',
  output='css/min.css'
)
assets.register('css_all', css)

from app import views