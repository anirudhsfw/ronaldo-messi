from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
app = Flask(__name__)
CORS(app)


@app.route("/api/players")
def players():
    connection = sqlite3.connect("players.db")
    connection.row_factory = sqlite3.Row

    cursor = connection.cursor()

    cursor.execute("SELECT * FROM players")

    players = cursor.fetchall()

    connection.close()

    return jsonify({
        "ronaldo": {
            "goals": players[0]["goals"],
            "assists": players[0]["assists"],
            "ballonDor": players[0]["ballonDor"]
        },
        "messi": {
            "goals": players[1]["goals"],
            "assists": players[1]["assists"],
            "ballonDor": players[1]["ballonDor"]
        }
    })
if __name__ == "__main__":
    app.run(debug=True)