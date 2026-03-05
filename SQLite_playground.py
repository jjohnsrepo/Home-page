import sqlite3

database = "./home.db"

conn = sqlite3.connect(database)
cursor = conn.cursor()
cursor.execute("insert into visitor_count(count) values (5)")
conn.commit()
cursor.execute("select * from visitor_count ")
guestbook = cursor.fetchall()
print(guestbook)