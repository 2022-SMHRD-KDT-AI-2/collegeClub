import pandas as pd
import numpy as np

from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier 
from sklearn.model_selection import cross_val_score 
from sklearn.ensemble import VotingClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from sklearn import metrics



from flask import Flask, request
from flask_cors import CORS


import pymysql
import json

df = pd.read_csv("./result.csv")
X_train = df.iloc[:,:6]

y_train = df.iloc[:,-1]
print(X_train)
print(y_train)


knn_model = KNeighborsClassifier(n_neighbors=5)
knn_model.fit(X_train, y_train)
pre = knn_model.predict(X_train)
acc = metrics.accuracy_score(pre, y_train)
print("1223", acc)

param_knn = {'n_neighbors':range(3,60)}
GS_knn = GridSearchCV(KNeighborsClassifier(), param_knn, cv = 3)
GS_knn.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_knn.best_params_)
print('최고 교차검증 점수 : ', GS_knn.best_score_)
print('최고 교차검증 점수 : ', GS_knn.best_estimator_)


param_tree = {}
GS_tree = GridSearchCV(DecisionTreeClassifier(), param_tree, cv = 10)
GS_tree.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_tree.best_params_)
print('최고 교차검증 점수 : ', GS_tree.best_score_)
print('최고 교차검증 점수 : ', GS_tree.best_estimator_)


param_for = {}
GS_for = GridSearchCV(RandomForestClassifier(), param_for, cv = 10)
GS_for.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)


db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yangdb', charset='utf8')


app = Flask(__name__)
CORS(app)


@app.route('/sce', methods=['GET','POST'])
def sce():
    try:
        with db.cursor() as cursor:
            sql = "select * from t_sce"
            cursor.execute(sql)
            result = cursor.fetchall()
    finally:
        for i in result:
            print(i)
        json_string = json.dumps(result)
        return json_string


@app.route('/screen', methods=['GET','POST'])
def sce_select():
    try:
        with db.cursor() as cursor:
            num = request.args["num"]
            sql = "select * from t_screen where sce_num = " + num
            cursor.execute(sql)
            result = cursor.fetchall()
    finally:
        for i in result:
            print(i)
        json_string = json.dumps(result)
        return json_string


@app.route('/text', methods=['GET','POST'])
def text():
    try:
        with db.cursor() as cursor1:
            num = request.args["num"]
            '''
            sql = "select text_text, img_path from t_text left join t_img on t_text.screen_num = t_img.screen_num where t_text.screen_num ="
            '''
            sql = "select text_text from t_text where screen_num = " + num
            cursor1.execute(sql)
            result = cursor1.fetchall()
    finally:
        for i in result:
            print(i)
        json_string = json.dumps(result)
        return json_string


@app.route('/img', methods=['GET','POST'])
def img():
    try:
        with db.cursor() as cursor2:
            num = request.args["num"]
            sql = "select img_path from t_img where screen_num = " + num
            cursor2.execute(sql)
            result = cursor2.fetchall()
    finally:
        for i in result:
            print(i)
        json_string = json.dumps(result)
        return json_string


@app.route('/result', methods=['GET','POST'])
def result():
    try:
        with db.cursor() as cursor4:
            sql = "select stat1_r, stat1_e, stat1_a, stat1_c, stat1_s, stat1_i from t_stat1 where user_id = 'sampleroot1'"
            cursor4.execute(sql)
            result = cursor4.fetchall()
    finally:
        for i in result:
            print(i)
        json_string = json.dumps(result)
        return json_string

@app.route('/result2', methods=['GET','POST'])
def result2():
    print(result2)
    try:
        with db.cursor() as cursor4:
            sql = "select stat1_r, stat1_e, stat1_a, stat1_c, stat1_s, stat1_i from t_stat1 where user_id = 'sampleroot1'"
            cursor4.execute(sql)
            result = cursor4.fetchall()
            result = result[0]
            X_train = pd.DataFrame(result).T
            X_train.columns = ['0','1','2','3','4','5']
            print(X_train)
            print(GS_knn.predict(X_train))
            print(GS_tree.predict(X_train))
            print(GS_for.predict(X_train))
    finally:
        json_string = json.dumps(result)
        return json_string
    

@app.route('/postData', methods=['GET','POST'])
def insertData():
    try:
        with db.cursor() as cursor5:
            stat1 = request.form['stat1'].split(",")
            print(stat1)
            sql = f"update t_stat1 set stat1_r = {stat1[0]}, stat1_e = {stat1[1]}, stat1_a = {stat1[2]}, stat1_c = {stat1[3]}, stat1_s = {stat1[4]}, stat1_i = {stat1[5]} where user_id = 'sampleroot1'"
            cursor5.execute(sql)
        db.commit()
    finally:
        return 'scucces'



if __name__ == '__main__':
    app.run(host = "220.80.33.51", port = "8083")




