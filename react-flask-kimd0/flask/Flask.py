from flask import Flask, request
from flask_cors import CORS

import pymysql
import json

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='testdb', charset='utf8')


app = Flask(__name__)
CORS(app)


@app.route('/sce', methods=['GET','POST'])
def sce():
    cursor = db.cursor()
    sql = "select * from t_sce"
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string

@app.route('/screen', methods=['GET','POST'])
def sce_select():
    cursor1 = db.cursor()
    num = request.args["num"]
    sql1 = "select * from t_screen where sce_num = " + num
    cursor1.execute(sql1)
    result = cursor1.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string


@app.route('/text', methods=['GET','POST'])
def text():
    cursor2 = db.cursor()
    num = request.args["num"]
    sql2 = "select text_text from t_text where screen_num = " + num
    cursor2.execute(sql2)
    result = cursor2.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string


@app.route('/img', methods=['GET','POST'])
def img():
    cursor3 = db.cursor()
    num = request.args["num"]
    sql3 = "select img_path from t_img where screen_num = " + num
    cursor3.execute(sql3)
    result = cursor3.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string


@app.route('/result', methods=['GET','POST'])
def result():
    cursor = db.cursor()
    sql = "select * from t_stat1 where user_id = 'root'"
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        print(i)
    json_string = json.dumps(result)
    
    return json_string

@app.route('/postData', methods=['GET','POST'])
def insertData():
    print(request.form['file'])
    return 'scucces'



if __name__ == '__main__':
    app.run(host = "220.80.33.51", port = "8083")


