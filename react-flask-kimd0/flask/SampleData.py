import pymysql
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier # KNN 분류모델
from sklearn.tree import DecisionTreeClassifier # 의사결정나무 분류모댈
from sklearn.model_selection import cross_val_score #교차검증 도구
#보팅
from sklearn.ensemble import VotingClassifier
#랜덤포레스트(배깅의 대표 모델)
from sklearn.ensemble import RandomForestClassifier
#에이다 부스팅(부스팅의 기본 모델)
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import BaggingClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.ensemble import StackingClassifier

from sklearn.model_selection import GridSearchCV

#선형 회귀 모델
from sklearn.linear_model import LinearRegression
#회귀 평가 지표 MSE
from sklearn.metrics import mean_squared_error

from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense


df_club_member = pd.read_csv("./club_member.csv");
print(df_club_member)
df_club_member = df_club_member.drop_duplicates(['user_id']);

df_mbti = pd.read_csv("./mbti.csv");
print(df_mbti);

df_left = pd.merge(df_mbti, df_club_member, on = "user_id", how = "left")

df_left.dropna(inplace = True)
print(df_left)


X_train = df_left.iloc[:,3:-2];
print(X_train)
y_train = pd.get_dummies(df_left.iloc[:,-2]);
print(y_train)

print(df_left["club_type_id"].unique())

param_knn = {}
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
GS_for = GridSearchCV(RandomForestClassifier(),param_for, cv = 3)
GS_for.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)



model = Sequential()

model.add(Dense(300, input_dim = 24, activation = "sigmoid"))

model.add(Dense(500, activation = "relu"))
model.add(Dense(1000, activation = "relu"))
model.add(Dense(500, activation = "relu"))

model.add(Dense(4, activation = "softmax"))

model.compile(loss = "categorical_crossentropy", optimizer = 'ADAM', metrics = ['acc'])
h = model.fit(X_train, y_train, validation_split=0.3, epochs = 10)

plt.figure(figsize = (15,5))
plt.plot(h.history['acc'], label = 'acc')
plt.plot(h.history['val_acc'], label = "val_acc")
plt.legend()

plt.show()

'''
db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='testdb', charset='utf8');
cursor = db.cursor();

df = pd.read_csv("./project2 설문.csv", encoding='cp949');

print(df.drop(columns='타임스탬프', inplace = True));
print(df)

num = 0;
user = [[50 for j in range(6)]for i in range(len(df.values))];


def insertUser(userId):
    sql = "insert into t_user values('sampleroot"+str(i)+"', '1234', '000-0000-0000', '0000-00-00', 'address1', '0000@00000.000',SYSDATE(), 0)"
    cursor.execute(sql);
    db.commit();

def insertstat1(data, num):
    sql = "insert into t_stat1 values(null, "+str(data[0])+", "+str(data[1])+", "+str(data[2])+", "+str(data[3])+", "+str(data[4])+", "+str(data[5])+", 'sampleroot"+str(num)+"')"
    cursor.execute(sql);
    db.commit();

def insertclub(data):
    sql = "insert into t_user_club values(null, 'sampleroot"+str(i)+"', "+str(data)+")"
    cursor.execute(sql);
    db.commit();

'''


'''
X_train = pd.get_dummies(df.iloc[:,1:-1])
print(X_train)
y_train = pd.get_dummies(df.iloc[:,-1])
print(pd.get_dummies(df.iloc[:,-1]))

X_val = pd.get_dummies(df.iloc[20:,1:-1])
print(X_val)
y_val = pd.get_dummies(df.iloc[20:,-1])
print(pd.get_dummies(df.iloc[:,-1]))

param_knn = {}
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
GS_for = GridSearchCV(RandomForestClassifier(),param_for, cv = 3)
GS_for.fit(X_train, y_train)
print('최적 파라미터값 : ', GS_for.best_params_)
print('최고 교차검증 점수 : ', GS_for.best_score_)
print('최고 교차검증 점수 : ', GS_for.best_estimator_)
'''
'''
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

    
        '''
    
    




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
