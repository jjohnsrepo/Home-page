from flask import Flask, request, render_template
import sqlite3
app = Flask(__name__)
database ="./home.db"

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/guests",methods=["GET"])
def guests():
    #Needs to return an array of objects
    try:
        with sqlite3.connect(database) as conn:
            print(f"Opened database with version {sqlite3.sqlite_version}")
            cursor = conn.cursor()
            cursor.execute("select * from guestbook")
            guestbook = cursor.fetchall()
            return guestbook 
    except sqlite3.OperationalError as e:
        return(f"Failed to fetch tables:{e}")


@app.route("/guest",methods=["POST"])
def guest():
    print("request recieved")
    data = request.get_json()
    insert_statement = """
        insert into guestbook(name,message)
        values(?,?)
    """
    payload = (data['name'],data['message'])
    try:
        with sqlite3.connect(database) as conn:
            print(f"Opened database with version {sqlite3.sqlite_version}")
            cursor = conn.cursor()
            cursor.execute(insert_statement,payload)
            conn.commit()
            return "Successfull"
    except sqlite3.OperationalError as e:
        print("Failed to create tables:", e)
    return "Faield"


    
    

if __name__ == "__main__":
    app.run(debug=True) 