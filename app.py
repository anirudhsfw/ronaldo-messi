from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
	return "Ronaldo vs Messi backend is working!"


@app.route("/api/players")
def players():
	return jsonify({
		"ronaldo": {
			"goals": 900,
			"assists": 250,
			"ballonDor": 5,
		},
		"messi": {
			"goals": 850,
			"assists": 380,
			"ballonDor": 8,
		},
	})


if __name__ == "__main__":
	app.run(debug=True)
