
const ronaldo = {
	goals: 900,
	assists: 250,
	ballonDor: 5
};

const messi = {
	goals: 850,
	assists: 380,
	ballonDor: 8
};

document.getElementById("ronaldo-goals").textContent = ronaldo.goals;
document.getElementById("ronaldo-assists").textContent = ronaldo.assists;
document.getElementById("ronaldo-ballon").textContent = ronaldo.ballonDor;

document.getElementById("messi-goals").textContent = messi.goals;
document.getElementById("messi-assists").textContent = messi.assists;
document.getElementById("messi-ballon").textContent = messi.ballonDor;
document.getElementById("compare-button").addEventListener("click", function () {
    if (ronaldo.goals > messi.goals) {
        document.getElementById("result").textContent = "Ronaldo has more goals.";
    } else if (messi.goals > ronaldo.goals) {
        document.getElementById("result").textContent = "Messi has more goals.";
    } else {
        document.getElementById("result").textContent = "They have the same number of goals.";
    }
});