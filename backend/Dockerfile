# Image
FROM python:3.8-slim-buster

# Work directory
WORKDIR /backend

# Environment variables
ENV FLASK_APP=core.py
ENV FLASK_RUN_HOST=0.0.0.0

# Requirements & Installations
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Expose port
EXPOSE 5000

# Copy source code
COPY . .

# Run
CMD ["flask", "run"]