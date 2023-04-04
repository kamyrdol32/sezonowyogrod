from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

from core import db
import models

api_blueprint = Blueprint("api", __name__)


@api_blueprint.route("/reservation/add", methods=["POST"])
@jwt_required()
def add_reservation():
    username = get_jwt_identity()
    user_id = models.User.query.filter_by(Username=username).first().ID

    table_id = request.json.get("table_id", None)
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
    end_date = date + " " + str(hour + 2) + ":00:00"

    reservation = models.Reservation(
        Table_ID=table_id, User_ID=user_id, Start_Date=start_date, End_Date=end_date
    )
    db.session.add(reservation)
    db.session.commit()

    print("[INFO] Reservation added successfully")
    return jsonify({"msg": "Reservation added successfully"}), 200


@api_blueprint.route("/reservation/get", methods=["POST"])
@jwt_required()
def get_reservation():
    Data = []

    date = request.json.get("date", None)
    hour = request.json.get("hour", None)
    peoples = request.json.get("peoples", None)

    start_date = date + " " + str(hour) + ":00:00"
    end_date = date + " " + str(hour + 2) + ":00:00"

    Reservations = models.Reservation.query.filter(
        models.Reservation.Start_Date == start_date,
        models.Reservation.End_Date == end_date,
    ).all()
    AllTables = models.Table.query.all()
    Chairs = models.Table.query.all()

    if peoples % 2 == 1:
        peoples += 1

    for Table in AllTables:
        Status = True
        for Reservation in Reservations:
            if Table.ID == Reservation.Table_ID:
                Status = False
        for Chair in Chairs:
            if Chair.Chairs != peoples and Chair.ID == Table.ID:
                Status = False

        CSS_Class = "" if Status else "reservated"
        Data.append(
            {
                "ID": Table.ID,
                "Chairs": Table.Chairs,
                "Status": Status,
                "CSS_Class": CSS_Class,
            }
        )

    return jsonify(Data), 200


@api_blueprint.route("/reservation/user/get", methods=["POST"])
@jwt_required()
def get_user_reservation():
    Data = []

    username = request.json.get("username", None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400

    user_id = models.User.query.filter_by(Username=username).first().ID
    reservations = models.Reservation.query.filter_by(User_ID=user_id).all()

    for reservation in reservations:
        Data.append(
            {
                "ID_Reservation": reservation.ID,
                "ID_Table": reservation.Table_ID,
                "Data": str(reservation.Start_Date).split(" ")[0],
                "Start_Hour": str(reservation.Start_Date).split(" ")[1][:-3],
                "End_Hour": str(reservation.End_Date).split(" ")[1][:-3],
                "Chairs": models.Table.query.filter_by(ID=reservation.Table_ID)
                .first()
                .Chairs,
            }
        )

    return jsonify(Data), 200


@api_blueprint.route("/reservation/user/cancel", methods=["POST"])
@jwt_required()
def cancel_user_reservation():
    username = request.json.get("username", None)
    ID = request.json.get("ID", None)

    # Get data
    user_id = models.User.query.filter_by(Username=username).first().ID
    reservation = models.Reservation.query.filter_by(User_ID=user_id, ID=ID).first()

    # Delete reservation
    db.session.delete(reservation)
    db.session.commit()

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400

    return jsonify({"msg": "Reservation deleted successfully"}), 200


@api_blueprint.route("/products/get", methods=["GET"])
def get_products():
    try:
        Table = []

        products = models.Products.query.all()
        for product in products:
            Table.append(
                {
                    "ID": product.ID,
                    "Name": product.Name,
                    "Price": product.Price,
                    "Description": product.Description,
                    "Image": product.Image,
                }
            )

        return jsonify({"data": Table}), 200

    except Exception as error:
        return jsonify({"error": str(error)}), 400
