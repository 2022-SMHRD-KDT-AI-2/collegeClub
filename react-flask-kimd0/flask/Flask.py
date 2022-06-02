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
import random

df = pd.read_csv("./data.csv")
X_train = df.iloc[:,:6]

y_train = df.iloc[:,-1]
print(X_train)
print(y_train)


from sklearn.preprocessing import OrdinalEncoder
ordinal_encoder = OrdinalEncoder()
X_train_one_hot = ordinal_encoder.fit_transform(X_train)
y_train_one_hot = pd.get_dummies(y_train)
print(X_train_one_hot)


param_knn = {'n_neighbors':range(3,10)}
GS_knn = GridSearchCV(KNeighborsClassifier(), param_knn, cv = 3)
GS_knn.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_knn.best_params_)
print('최고 교차검증 점수 : ', GS_knn.best_score_)
print('최고 교차검증 점수 : ', GS_knn.best_estimator_)


param_tree = {"max_depth":range(1,15)}
GS_tree = GridSearchCV(DecisionTreeClassifier(), param_tree, cv = 3)
GS_tree.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_tree.best_params_)
print('최고 교차검증 점수 : ', GS_tree.best_score_)
print('최고 교차검증 점수 : ', GS_tree.best_estimator_)

param_for = {"max_depth":range(1,12)}
GS_for = GridSearchCV(RandomForestClassifier(), param_for, cv = 5)
GS_for.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)

result = [[80,10,70,30,30,70],[70,20,35,80,70,30],[80,25,80,60,40,90]
         ,[50,30,10,50,60,20],[80,50,20,90,20,30]]
X_train = pd.DataFrame(result)
print(X_train)
X_train.columns = ['0','1','2','3','4','5']

X_train_one_hot = ordinal_encoder.transform(X_train)
print(X_train_one_hot)
print(GS_knn.predict(X_train_one_hot))
print(GS_tree.predict(X_train_one_hot))
print(GS_for.predict(X_train_one_hot))




db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yangdb3', charset='utf8')


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
            X_train_one_hot = ordinal_encoder.transform(X_train)
            result10 = GS_knn.predict(X_train_one_hot)
            print(result10)
            result20 = GS_tree.predict(X_train_one_hot)
            result30 = GS_for.predict(X_train_one_hot)
            a = random.randrange(1,12)
            print(a)
            b = random.randrange(12,28)
            c = random.randrange(28,38)
            d = random.randrange(38,43)
            e = random.randrange(43,47)
            f = random.randrange(47,60)
            sql = "select cc_num from t_cc where club_num in("+str(result10[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result31 = cursor4.fetchone()
            print(result31)
            
            sql = "select cc_name from t_cc where club_num in("+str(result10[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result41 = cursor4.fetchone()

            sql = "select cc_exp from t_cc where club_num in("+str(result10[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result42 = cursor4.fetchone()

            sql = "select cc_img from t_cc where club_num in("+str(result10[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result51 = cursor4.fetchone()

            sql = "select cc_num from t_cc where club_num in("+str(result20[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result32 = cursor4.fetchone()

            sql = "select cc_name from t_cc where club_num in("+str(result20[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result43 = cursor4.fetchone()

            sql = "select cc_exp from t_cc where club_num in("+str(result20[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result44 = cursor4.fetchone()

            sql = "select cc_img from t_cc where club_num in("+str(result20[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result52 = cursor4.fetchone()

            sql = "select cc_num from t_cc where club_num in("+str(result30[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result33 = cursor4.fetchone()

            sql = "select cc_name from t_cc where club_num in("+str(result30[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result45 = cursor4.fetchone()

            sql = "select cc_exp from t_cc where club_num in("+str(result30[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result46 = cursor4.fetchone()

            sql = "select cc_img from t_cc where club_num in("+str(result30[0])+") and cc_num in("+str(a)+", "+str(b)+", "+str(c)+", "+str(d)+", "+str(e)+", "+str(f)+")"
            cursor4.execute(sql)
            result53 = cursor4.fetchone()
            
            
            d = {"cc_name1":result41, "cc_exp1":result42, "cc_name2":result43, "cc_exp2":result44, "cc_name3":result45, "cc_exp3":result46, "cc_num1":result31, "cc_num2":result32, "cc_num3":result33, "cc_img1":result51, "cc_img2":result52, "cc_img3":result53}
            
    finally:
        json_string = json.dumps(d)
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




