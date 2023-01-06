from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity, set_access_cookies

import core

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400

    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    user = core.db.session.query(core.models.User).filter_by(Username=username).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401

    if user.Password != core.others.hash_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    # Success - generate access token
    response = jsonify({"msg": "login successful"})
    access_token = create_access_token(identity=username)
    set_access_cookies(response, access_token)
    return response, 200

@auth_blueprint.route('/register', methods=['POST'])
def register():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    reapet_password = request.json.get("reapet_password", None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400

    if not email:
        return jsonify({"msg": "Missing email parameter"}), 400

    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    if not reapet_password:
        return jsonify({"msg": "Missing reapet_password parameter"}), 400

    if password != reapet_password:
        return jsonify({"msg": "Passwords do not match"}), 400

    user = core.db.session.query(core.models.User).filter_by(Username=username).first()
    if user is not None:
        return jsonify({"msg": "User already exists"}), 400

    user = core.models.User(Email=email, Username=username, Password=core.others.hash_password(password))
    core.db.session.add(user)
    core.db.session.commit()


    return jsonify({"msg": "Registered successfully"}), 200


@auth_blueprint.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200