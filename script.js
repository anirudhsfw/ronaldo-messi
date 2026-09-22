
fetch("http://127.0.0.1:5000/api/players")
	.then(response => response.json())
	.then(data => {
		const ronaldo = data.ronaldo;
		const messi = data.messi;

		document.getElementById("ronaldo-goals").textContent = ronaldo.goals;
		document.getElementById("ronaldo-assists").textContent = ronaldo.assists;
		document.getElementById("ronaldo-ballon").textContent = ronaldo.ballonDor;

		document.getElementById("messi-goals").textContent = messi.goals;
		document.getElementById("messi-assists").textContent = messi.assists;
		document.getElementById("messi-ballon").textContent = messi.ballonDor;

		document.getElementById("compare-button").addEventListener("click", function () {
			if (ronaldo.goals > messi.goals) {
				document.getElementById("result").textContent =
					"Ronaldo has more goals.";
			} else if (messi.goals > ronaldo.goals) {
				document.getElementById("result").textContent =
					"Messi has more goals.";
			} else {
				document.getElementById("result").textContent =
					"They have the same number of goals.";
			}
		});
	})
	.catch(error => {
		console.error("Error loading player data:", error);
	});
