import pymysql
import pandas as pd
import numpy as np

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yang', charset='utf8');
cursor = db.cursor();

df = pd.read_csv("./project2 설문.csv", encoding='cp949');
print(df.drop(columns='타임스탬프', inplace = True));

num = 0;


def insertUser(userId):
    sql = "insert into t_user values('"+str(userId)+"', '1234', '000-0000-0000', '0000-00-00', 'address1', '0000@00000.000',SYSDATE(), 0)"
    cursor.execute(sql);
    db.commit();

for i in df.values:

    stat1 = [50,50,50,50,50,50];
    stat2 = [50,50,50,50,50,50];

    
    num = num + 1;
    print(num);

    for j in range(6):
        if(i[j].split('.')[0] == '1'):
            stat1[j] = stat1[j] - 25;
        
        else:
            stat1[j] = stat1[j] + 25;
    print(stat1)
    


'''


sql = ""

cursor.execute(sql)

list1 = []










X_train = pd.get_dummies(df.iloc[:,1:-1])
print(X_train)
y_train = pd.get_dummies(df.iloc[:,-1])
print(pd.get_dummies(df.iloc[:,-1]))

X_val = pd.get_dummies(df.iloc[120:,1:-1])
print(X_val)
y_val = pd.get_dummies(df.iloc[120:,-1])
print(pd.get_dummies(df.iloc[:,-1]))

print(X_train.shape)
print(y_train.shape)
print(X_val.shape)
print(y_val.shape)

knn_model = KNeighborsClassifier(n_neighbors=1)
knn_model.fit(X_train, y_train)
pre = knn_model.predict(X_val)
print(pre)
acc = metrics.accuracy_score(pre, y_val)
print(acc)


forest_model = RandomForestClassifier()
result_RF = cross_val_score(forest_model, X_train, y_train, cv=5)
print(result_RF)

param_for = {'max_depth':range(5,12,2)}
GS_for = GridSearchCV(RandomForestClassifier(n_estimators=100, random_state=9), param_for, cv = 5)
GS_for.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)

'''
