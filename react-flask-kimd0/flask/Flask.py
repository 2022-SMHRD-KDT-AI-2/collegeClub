from flask import Flask, render_template
from flask import request, redirect
from flask_cors import CORS

import pymysql
import json

db = mymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='test

json_string = {
    "id": "hello world"
}
json_string = json.dumps(json_string)

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)

@app.route('/', methods=['GET','POST'])
def index():
    
    return json_string


if __name__ == '__main__':
    app.run(host = "0.0.0.0", port = "5000", debug = True)


