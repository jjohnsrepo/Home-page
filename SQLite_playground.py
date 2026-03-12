import sqlite3

database ="./home.db"

with sqlite3.connect(database) as conn:
    cursor = conn.cursor()
    
    cursor.execute("DROP TABLE IF EXISTS visitor_count")
    cursor.execute("""
        CREATE TABLE visitor_count (
            count INTEGER
        )
    """)
    cursor.execute("INSERT INTO visitor_count (count) VALUES (0)")
    conn.commit()
    
    cursor.execute("UPDATE visitor_count SET count = 8")
    conn.commit()
    
    cursor.execute("SELECT * FROM visitor_count")
    print(cursor.fetchall())  # [(8,)]