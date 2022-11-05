from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import models
import api

app = Flask(__name__)
app.config.from_object('config')

app.register_blueprint(api.api_blueprint, url_prefix='/api')

db = SQLAlchemy()

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)

