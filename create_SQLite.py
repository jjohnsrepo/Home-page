import sqlite3

database = "./home.db"

create_table = """CREATE TABLE IF NOT EXISTS guestbook (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name text NOT NULL, 
            message text,
            date_added text default current_timestamp
                    );"""


insert_data = """
    insert into guestbook(name,message)
    values(?,?)
"""
data = ("Aurora","My beautiful wife is named aurora")

try:
    with sqlite3.connect(database) as conn:
        print(f"Opened database with version {sqlite3.sqlite_version}")
        cursor = conn.cursor()
        cursor.execute(create_table)
        cursor.execute(insert_data,data)
        cursor.execute("SELECT * FROM guestbook;")
        print(cursor.fetchall())
        conn.commit()
except sqlite3.OperationalError as e:
    print("Failed to create tables:", e)