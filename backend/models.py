from datetime import datetime

from core import db


class User(db.Model):
    __tablename__ = 'Users'
    ID = db.Column(db.Integer, primary_key=True)
    Email = db.Column(db.String(128), unique=True, nullable=False)
    Username = db.Column(db.String(128), unique=True, nullable=False)
    Password = db.Column(db.String(128), nullable=False)
    Phone = db.Column(db.String(128), nullable=True)
    Created_Date = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, Email, Username, Password):
        self.Email = Email
        self.Username = Username
        self.Password = Password

    def __repr__(self):
        return '<User %r>' % self.Username


class Table(db.Model):
    __tablename__ = 'Table'
    ID = db.Column(db.Integer, primary_key=True)
    Chairs = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Chair %r>' % self.Name


class Reservation(db.Model):
    __tablename__ = 'Reservation'
    ID = db.Column(db.Integer, primary_key=True)
    Table_ID = db.Column(db.Integer, nullable=False)
    User_ID = db.Column(db.Integer, nullable=False)
    Start_Date = db.Column(db.DateTime)
    End_Date = db.Column(db.DateTime)
    Created_Date = db.Column(db.DateTime, default=datetime.utcnow)

    def __int__(self, Table_ID, User_ID, Start_Date, End_Date):
        self.Table_ID = Table_ID
        self.User_ID = User_ID
        self.Start_Date = Start_Date
        self.End_Date = End_Date

    def __repr__(self):
        return '<Chair %r>' % self.Name


class Products(db.Model):
    __tablename__ = "Products"
    ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(128), unique=True, nullable=False)
    Description = db.Column(db.String(256), unique=False, nullable=False)
    Price = db.Column(db.Integer, unique=True, nullable=False)
    Image = db.Column(db.Text(10000000), unique=False, nullable=True)
