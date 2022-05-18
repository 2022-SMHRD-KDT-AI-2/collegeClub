import pymysql
import pandas as pd
import numpy as np


db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yang', charset='utf8')


cursor = db.cursor()
'''
sql = "select * from t_stat1 inner join t_stat2 on t_stat1.user_id = t_stat2.user_id"
'''
sql = 'select * from t_stat1 left join t_stat2 on t_stat1.user_id = t_stat2.user_id union select * from t_stat1 right join t_stat2 on t_stat1.user_id = t_stat2.user_id;'
Cursor = cursor.execute(sql)



result = cursor.fetchall()

list1 = []

for i in result:
    test_list = list(i)
    list1.append(test_list)
'''
    for j in range(0, Cursor):
        print(i[j])
        list1[j].append(i[j])
'''       
df = pd.DataFrame(list1)
df = df.fillna(0)
print(df)
df.drop(columns=[0, 7, 8, 15],inplace=True)
print(df)

