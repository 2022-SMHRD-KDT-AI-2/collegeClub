import pymysql
import pandas as pd
import numpy as np

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='testdb', charset='utf8');
cursor = db.cursor();

df = pd.read_csv("./project2 설문.csv", encoding='cp949');
print(df.drop(columns='타임스탬프', inplace = True));

num = 0;
user = [[50 for j in range(6)]for i in range(len(df.values))];


def insertUser(userId):
    sql = "insert into t_user values('"+str(userId)+"', '1234', '000-0000-0000', '0000-00-00', 'address1', '0000@00000.000',SYSDATE(), 0)"
    cursor.execute(sql);
    db.commit();

for i in range(len(df.values)):
    
    if(df.values[i][0].split('.')[0] == '1'):
        user[i][4] = user[i][4] + 15;
        user[i][5] = user[i][5] - 15;
        user[i][0] = user[i][0] - 5;
        user[i][1] = user[i][1] + 5;
        user[i][2] = user[i][2] + 5;
        user[i][3] = user[i][3] - 5;
    else:
        user[i][4] = user[i][4] - 15;
        user[i][5] = user[i][5] + 15;
        user[i][0] = user[i][0] + 5;
        user[i][1] = user[i][1] - 5;
        user[i][2] = user[i][2] - 5;
        user[i][3] = user[i][3] + 5;
        


    if(df.values[i][1].split('.')[0] == '1'):
        user[i][2] = user[i][2] + 15;
        user[i][3] = user[i][3] - 15;
        user[i][0] = user[i][0] + 5;
        user[i][1] = user[i][1] - 5;
        user[i][4] = user[i][4] + 5;
        user[i][5] = user[i][5] - 5;
    else:
        user[i][2] = user[i][2] - 15;
        user[i][3] = user[i][3] + 15;
        user[i][0] = user[i][0] - 5;
        user[i][1] = user[i][1] + 5;
        user[i][4] = user[i][4] - 5;
        user[i][5] = user[i][5] + 5;


    if(df.values[i][2].split('.')[0] == '1'):
        user[i][0] = user[i][0] + 15;
        user[i][1] = user[i][1] - 15;
        user[i][2] = user[i][2] + 5;
        user[i][3] = user[i][3] - 5;
        user[i][4] = user[i][4] - 5;
        user[i][5] = user[i][5] + 5;
    else:
        user[i][0] = user[i][0] - 15;
        user[i][1] = user[i][1] + 15;
        user[i][2] = user[i][2] - 5;
        user[i][3] = user[i][3] + 5;
        user[i][4] = user[i][4] + 5;
        user[i][5] = user[i][5] - 5;
    

    if(df.values[i][3].split('.')[0] == '1'):
        user[i][2] = user[i][2] + 15;
        user[i][3] = user[i][3] - 15;
        user[i][0] = user[i][0] + 5;
        user[i][1] = user[i][1] - 5;
        user[i][4] = user[i][4] + 5;
        user[i][5] = user[i][5] - 5;
    else:
        user[i][2] = user[i][2] - 15;
        user[i][3] = user[i][3] + 15;
        user[i][0] = user[i][0] - 5;
        user[i][1] = user[i][1] + 5;
        user[i][4] = user[i][4] - 5;
        user[i][5] = user[i][5] + 5;


    if(df.values[i][4].split('.')[0] == '1'):
        user[i][0] = user[i][0] + 15;
        user[i][1] = user[i][1] - 15;
        user[i][2] = user[i][2] + 5;
        user[i][3] = user[i][3] - 5;
        user[i][4] = user[i][4] - 5;
        user[i][5] = user[i][5] + 5;
    else:
        user[i][0] = user[i][0] - 15;
        user[i][1] = user[i][1] + 15;
        user[i][2] = user[i][2] - 5;
        user[i][3] = user[i][3] + 5;
        user[i][4] = user[i][4] + 5;
        user[i][5] = user[i][5] - 5;


    if(df.values[i][5].split('.')[0] == '1'):
        user[i][4] = user[i][4] + 15;
        user[i][5] = user[i][5] - 15;
        user[i][0] = user[i][0] - 5;
        user[i][1] = user[i][1] + 5;
        user[i][2] = user[i][2] + 5;
        user[i][3] = user[i][3] - 5;
    else:
        user[i][4] = user[i][4] - 15;
        user[i][5] = user[i][5] + 15;
        user[i][0] = user[i][0] + 5;
        user[i][1] = user[i][1] - 5;
        user[i][2] = user[i][2] - 5;
        user[i][3] = user[i][3] + 5;

            
print(user)
    


'''


sql = ""

cursor.execute(sql)

list1 = []

1. A 지나가는 사람에게 물어본다 B 지도어플을 킨다

for j in range(0, 6, 2):
        if(i[j].split('.')[0] == '1'):
            stat1[j] = stat1[j] + 20;
            stat1[j+1] = stat1[j+1] - 20;
        
        else:
            stat1[j] = stat1[j] - 20;
            stat1[j+1] = stat1[j+1] + 20;

            
    for j in range(1, 6, 2):
        if(i[j].split('.')[0] == '1'):
            stat1[j] = stat1[j] + 20;
            stat1[j-1] = stat1[j-1] - 20;
        
        else:
            stat1[j] = stat1[j] - 20;
            stat1[j-1] = stat1[j-1] + 20;








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
