from flask import Flask, render_template
import sqlite3
app = Flask(__name__)
database ="./home.db"

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/guests",methods="GET")
def guests():
    try:
        with sqlite3.connect(database) as conn:
            print(f"Opened database with version {sqlite3.sqlite_version}")
            cursor = conn.cursor()
            cursor.execute("select * from guestbook")
            guestbook = cursor.fetchall()
            return guestbook 
    except sqlite3.OperationalError as e:
        return(f"Failed to fetch tables:{e}")


@app.route("/guest",methods="post")
def guest():


    
    

if __name__ == "__main__":
    app.run(debug=True) 