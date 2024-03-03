function fetchScores() {
    fetch('https://raw.githubusercontent.com/Quantaindew/hot-reload-without-backend/main/data/scores.json') // Replace with the actual URL of your JSON file
        .then(response => response.json())
        .then(data => {
            document.getElementById('teamAScore').textContent = data.teamA;
            document.getElementById('teamBScore').textContent = data.teamB;
        })
        .catch(error => console.error('Error fetching scores:', error));
}

// Fetch scores every 5 seconds
setInterval(fetchScores, 5000);

// Initial fetch
fetchScores();
