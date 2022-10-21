from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Strona v1.0!'

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)

