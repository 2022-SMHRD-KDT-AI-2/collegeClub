import pymysql

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

db = pymysql.connect(host='localhost', port=3306, user='root', passwd='1234',
                     db='yangdb3', charset='utf8');
cursor = db.cursor();

df = pd.read_csv("./clubs.csv", encoding="euc-kr")
print(df.iloc[0,:])

def insertTcc(tcc):
    print(tcc[2])
    sql = "insert into t_cc values(null, '"+str(tcc[1])+"', '/tccimg/tccimg"+str(tcc[0])+"', '"+str(tcc[2])+"', "+str(tcc[3])+")"


    cursor.execute(sql);
    
    

print(len(df))
for i in range(len(df)):
    insertTcc(df.iloc[i,:])

db.commit();
