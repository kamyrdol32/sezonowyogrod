from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import models
import api
import auth
import others

app = Flask(__name__)
app.config.from_object('config')

app.register_blueprint(api.api_blueprint, url_prefix='/api')
app.register_blueprint(auth.auth_blueprint, url_prefix='/auth')

db = SQLAlchemy()
db.init_app(app)

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)

