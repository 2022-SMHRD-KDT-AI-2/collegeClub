from flask import Flask, request
from flask_cors import CORS

import pymysql
import json

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yang', charset='utf8')


cursor = db.cursor()

app = Flask(__name__)
CORS(app)




@app.route('/screen1/text', methods=['GET','POST'])
def index():
    sql = "select text_num, text_text from t_text where screen_num = 1"
    cursor.execute(sql)
    result = cursor.fetchall()
    print(dict(result))
    json_string = json.dumps(result)
    
    return json_string

@app.route('/result', methods=['GET','POST'])
def result():
    sql = "select * from t_stat1 where user_id = 'root'"
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string


if __name__ == '__main__':
    app.run(host = "220.80.33.51", port = "8083")

