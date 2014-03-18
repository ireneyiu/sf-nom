from app import app
from flask import render_template
import requests

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/locations')
def locations():
  response = requests.get("http://data.sfgov.org/resource/rqzj-sfat.json")
  return response.text