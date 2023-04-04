from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy()
db.init_app(app)
jwt = JWTManager(app)

from api import api_blueprint
from auth import auth_blueprint

app.register_blueprint(api_blueprint, url_prefix='/api')
app.register_blueprint(auth_blueprint, url_prefix='/auth')


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)


