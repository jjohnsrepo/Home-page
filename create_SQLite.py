import sqlite3

database = "./home"

create_table = [ 
    """CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY, 
            name text NOT NULL, 
            begin_date DATE, 
            end_date DATE
        );""",

    """CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY, 
            name TEXT NOT NULL, 
            priority INT, 
            project_id INT NOT NULL, 
            status_id INT NOT NULL, 
            begin_date DATE NOT NULL, 
            end_date DATE NOT NULL, 
            FOREIGN KEY (project_id) REFERENCES projects (id)
        );"""
]
try:
    with sqlite3.connect(database) as conn:
        print(f"Opened database with version {sqlite3.sqlite_version}")
        cursor = conn.cursor()
        # for table in create_table:
        #     cursor.execute(table)
        conn.commit()
        print("Tables created successfully.")
except sqlite3.OperationalError as e:
    print("Failed to create tables:", e)