from flask import Flask

app = Flask(__name__)
app.debug = True
app.config['API_JSON'] = 'http://data.sfgov.org/resource/rqzj-sfat.json';
app.config['GOOGLE_API_KEY'] = 'AIzaSyCL0ibBZq-hze7LKR1i3Q38fDO3GqiuwXI';

from app import views