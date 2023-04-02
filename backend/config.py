from datetime import timedelta
import os

# Project
PROJECT_NAME = "SezonowyOgrod"
PROJECT_VERSION = "0.1.0"
PROJECT_DESCRIPTION = "SezonowyOgrod"
PROJECT_AUTHOR = "Weronika Ścibior & Kamil Żegleń"

# Flask
SECRET_KEY = os.getenv("SECRET_KEY")
JSON_SORT_KEYS = False

# SQLALCHEMY
SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_POOL_SIZE = 50000
SQLALCHEMY_MAX_OVERFLOW = 50000

# JWT
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_TOKEN_LOCATION = ['cookies']
JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
JWT_COOKIE_CSRF_PROTECT = True
JWT_COOKIE_SECURE = False