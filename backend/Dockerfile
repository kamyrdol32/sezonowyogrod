FROM python:3.8-slim-buster

WORKDIR /backend
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "core.py"]