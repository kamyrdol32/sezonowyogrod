from flask import Blueprint, jsonify

import core

api_blueprint = Blueprint('api', __name__)


@api_blueprint.route('/test')
def test():
    core.db.init_app(core.app)
    with core.app.app_context():
        core.db.create_all()
    return jsonify("Baza danych utworzona")
