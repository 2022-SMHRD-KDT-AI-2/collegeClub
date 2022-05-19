from flask import Flask, request
from flask_cors import CORS

import pymysql
import json

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yang', charset='utf8')


cursor = db.cursor()

app = Flask(__name__)
CORS(app)


@app.route('/sce', methods=['GET','POST'])
def sce():
    sql = "select * from t_sce"
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string

@app.route('/screen', methods=['GET','POST'])
def sce_select():
    num = request.args["num"]
    sql = "select * from t_screen where sce_num = " + num
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string


@app.route('/screen/text', methods=['GET','POST'])
def text():
    num = request.args["num"]
    sql = "select * from t_text"
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
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


