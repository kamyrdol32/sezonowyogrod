###
# Change name of config file to config.py
###

# Flask
TESTING = True
DEBUG = True
FLASK_ENV = 'development'
SECRET_KEY = ''
JSON_SORT_KEYS = False

# SQLALCHEMY
SQLALCHEMY_DATABASE_URI = 'mysql://SezonowyOgrod:FZwL!BeSO/*i6mZY@192.168.0.200:3306/SezonowyOgrod'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_POOL_SIZE = 50000
SQLALCHEMY_MAX_OVERFLOW = 50000