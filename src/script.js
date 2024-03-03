function fetchScores() {
    fetch('/data/scores.json') // Replace with the actual URL of your JSON file
        .then(response => response.json())
        .then(data => {
            document.getElementById('teamAScore').textContent = data.teamA;
            document.getElementById('teamBScore').textContent = data.teamB;
        })
        .catch(error => console.error('Error fetching scores:', error));
}

// Fetch scores every 30 seconds
setInterval(fetchScores, 30000);

// Initial fetch
fetchScores();
