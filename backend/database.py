import sqlite3

connection = sqlite3.connect("players.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS players (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	goals INTEGER,
	assists INTEGER,
	ballonDor INTEGER
)
""")

cursor.execute("""
INSERT INTO players (name, goals, assists, ballonDor)
VALUES (?, ?, ?, ?)
""", ("Cristiano Ronaldo", 900, 250, 5))

cursor.execute("""
INSERT INTO players (name, goals, assists, ballonDor)
VALUES (?, ?, ?, ?)
""", ("Lionel Messi", 850, 380, 8))

connection.commit()
connection.close()

print("Database created successfully!")
