from flask import Flask

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('app.config')
app.config.from_pyfile('application.cfg', silent=True)

from app import views