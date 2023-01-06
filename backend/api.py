from flask import Blueprint, jsonify, request

import core

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/db/create', methods=['GET'])
def create_db():
    with core.app.app_context():
        core.db.create_all()
    return jsonify({"msg": "Database created successfully"}), 200


@api_blueprint.route('/reservation/add', methods=['POST'])
def add_reservation():
    table_id = request.json.get("table_id", None)
    user_id = request.json.get("user_id", None)
    date = request.json.get("date", None)
    hour = request.json.get("hour", None)
    peoples = request.json.get("peoples", None)

    if not table_id:
        return jsonify({"msg": "Missing table_id parameter"}), 400

    if not user_id:
        return jsonify({"msg": "Missing user_id parameter"}), 400

    if not date:
        return jsonify({"msg": "Missing date parameter"}), 400

    if not hour:
        return jsonify({"msg": "Missing hour parameter"}), 400

    if not peoples:
        return jsonify({"msg": "Missing peoples parameter"}), 400

    start_date = date + " " + str(hour) + ":00:00"
    end_date = date + " " + str(hour + 2)  + ":00:00"

    reservation = core.models.Reservation(Table_ID=table_id, User_ID=user_id, Start_Date=start_date, End_Date=end_date)
    core.db.session.add(reservation)
    core.db.session.commit()

    print("Udalo sie")
    return jsonify({"msg": "Reservation added successfully"}), 200


@api_blueprint.route('/reservation/get', methods=['POST'])
def get_reservation():
    reservations = core.models.Reservation.query.all()
    reservations_list = []

    for reservation in reservations:
        reservations_list.append(reservation.serialize())

    return jsonify(reservations_list), 200