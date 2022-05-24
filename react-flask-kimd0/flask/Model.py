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




db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='testdb', charset='utf8')


cursor = db.cursor()


sql = "select * from t_stat1 a left join t_user_club b on a.user_id = b.user_id"
'''
sql = "select * from t_stat1 inner join t_stat2 on t_stat1.user_id = t_stat2.user_id"
'''
'''
sql = 'select * from t_stat1 left join t_stat2 on t_stat1.user_id = t_stat2.user_id union select * from t_stat1 right join t_stat2 on t_stat1.user_id = t_stat2.user_id;'
'''
cursor.execute(sql)

'''
sql = "select * from t_stat1 inner join t_stat2 on t_stat1.user_id = t_stat2.user_id"
'''




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
X_val = df.iloc[:40,:6]
y_train = df.iloc[:,-1]
y_val = df.iloc[:40,-1]


sc = StandardScaler()
sc.fit(X_train)
tf_X_train = sc.transform(X_train)
print(X_train)
print(y_train)

extended_X_train = X_train.copy()
for col1 in X_train.columns:
    for col2 in X_train.columns:
        extended_X_train[str(col1)+'x'+str(col2)] = X_train[col1] * X_train[col2]
print(extended_X_train)



tree_model = KNeighborsClassifier()
result_knn = cross_val_score(tree_model, X_train, y_train, cv = 3)
print("knn : ", result_knn.mean())


tree_model = DecisionTreeClassifier(max_depth = 3)
result_tree = cross_val_score(tree_model, extended_X_train, y_train, cv = 3)
print("tree : ", result_tree.mean())


forest_model = RandomForestClassifier()
result_RF = cross_val_score(forest_model, X_train, y_train, cv=3)
print("RandomForest : ", result_RF.mean())


ada_model = AdaBoostClassifier()
result_Ada = cross_val_score(ada_model, X_train, y_train, cv=3)
print("Ada : ", result_Ada.mean())


param_knn = {}
GS_knn = GridSearchCV(KNeighborsClassifier(n_neighbors=6), param_knn, cv = 10)
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
acc = metrics.accuracy_score(pre, y_val)
print(acc)
'''



