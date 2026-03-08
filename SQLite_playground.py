import sqlite3

database = "./home.db"

conn = sqlite3.connect(database)
cursor = conn.cursor()
cursor.execute("select * from guestbook ")
guestbook = cursor.fetchall()
cursor.execute("select * from visitor_count")
visitors = cursor.fetchall()
print(guestbook)
print(visitors)