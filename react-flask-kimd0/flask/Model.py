import pymysql
import pandas as pd
import numpy as np


from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

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


df = pd.read_csv("./result.csv")
print(df)
X_train = df.iloc[:,:6]
y_train = df.iloc[:,-1]
print(X_train.shape)
print(y_train.shape)


from sklearn.preprocessing import OrdinalEncoder

ordinal_encoder = OrdinalEncoder()
X_train_one_hot = ordinal_encoder.fit_transform(X_train)
print(X_train_one_hot)


param_knn = {'n_neighbors':range(3,10)}
GS_knn = GridSearchCV(KNeighborsClassifier(), param_knn, cv = 3)
GS_knn.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_knn.best_params_)
print('최고 교차검증 점수 : ', GS_knn.best_score_)
print('최고 교차검증 점수 : ', GS_knn.best_estimator_)

param_tree = {}
GS_tree = GridSearchCV(DecisionTreeClassifier(), param_tree, cv = 3)
GS_tree.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_tree.best_params_)
print('최고 교차검증 점수 : ', GS_tree.best_score_)
print('최고 교차검증 점수 : ', GS_tree.best_estimator_)

param_for = {}
GS_for = GridSearchCV(RandomForestClassifier(), param_for, cv = 5)
GS_for.fit(X_train_one_hot, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)

result = [60,40,80, 20,60,40]
X_train = pd.DataFrame(result).T
X_train.columns = ['0','1','2','3','4','5']

X_train_one_hot = ordinal_encoder.transform(X_train)
print(X_train_one_hot)
print(GS_knn.predict(X_train_one_hot))
print(GS_tree.predict(X_train_one_hot))
print(GS_for.predict(X_train_one_hot))
            

'''
db = pymysql.connect(host='220.80.33.51', port=3306, user='root', passwd='1234',
                     db='yangdb', charset='utf8')


cursor = db.cursor()


sql = "select * from t_stat1 a left join t_user_club b on a.user_id = b.user_id"

sql = "select * from t_stat1 inner join t_stat2 on t_stat1.user_id = t_stat2.user_id"


sql = 'select * from t_stat1 left join t_stat2 on t_stat1.user_id = t_stat2.user_id union select * from t_stat1 right join t_stat2 on t_stat1.user_id = t_stat2.user_id;'

cursor.execute(sql)


sql = "select * from t_stat1 inner join t_stat2 on t_stat1.user_id = t_stat2.user_id"





result = cursor.fetchall()

list1 = []

for i in result:
    test_list = list(i)
    list1.append(test_list)
       
df = pd.DataFrame(list1)
df = df.fillna(0)


df.drop(columns=[0, 7, 8, 9],inplace=True)
print(df)


X_train = df.iloc[:,:6]
y_train = df.iloc[:,-1]

extended_X_train = X_train.copy()
for col1 in X_train.columns:
    for col2 in X_train.columns:
        extended_X_train[str(col1)+'x'+str(col2)] = X_train[col1] * X_train[col2]
print(extended_X_train)

tree_model = KNeighborsClassifier()
result_knn = cross_val_score(tree_model, X_train, y_train, cv = 3)
print("knn : ", result_knn.mean())


tree_model = DecisionTreeClassifier(max_depth = 3)
result_tree = cross_val_score(tree_model, X_train, y_train, cv = 3)
print("tree : ", result_tree.mean())


forest_model = RandomForestClassifier()
result_RF = cross_val_score(forest_model, X_train, y_train, cv=3)
print("RandomForest : ", result_RF.mean())


param_knn = {'n_neighbors':range(1,60)}
GS_knn = GridSearchCV(KNeighborsClassifier(), param_knn, cv = 3)
GS_knn.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_knn.best_params_)
print('최고 교차검증 점수 : ', GS_knn.best_score_)
print('최고 교차검증 점수 : ', GS_knn.best_estimator_)


param_tree = {}
GS_tree = GridSearchCV(DecisionTreeClassifier(), param_tree, cv = 3)
GS_tree.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_tree.best_params_)
print('최고 교차검증 점수 : ', GS_tree.best_score_)
print('최고 교차검증 점수 : ', GS_tree.best_estimator_)

param_for = {}
GS_for = GridSearchCV(RandomForestClassifier(), param_for, cv = 5)
GS_for.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)
'''
'''
acc = metrics.accuracy_score(pre, y_val)
print(acc)
'''



