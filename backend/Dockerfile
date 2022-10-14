# Image
FROM python:3.8-slim-buster

# Work directory
WORKDIR /backend

# Requirements & Installations
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy source code
COPY . .