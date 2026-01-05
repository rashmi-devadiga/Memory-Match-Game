function declareWinner() {
  clearInterval(timer);

  const results = playerNames.map((name, index) => ({
    name,
    score: scores[index]
  }));

  results.sort((a, b) => b.score - a.score);

  let html = "";
  results.forEach((player, index) => {
    const medal =
      index === 0 ? "🥇" :
      index === 1 ? "🥈" :
      index === 2 ? "🥉" : "😢";

    html += `
      <div class="score-row">
        ${medal} ${index + 1}${index === 0 ? "st" : index === 1 ? "nd" : "th"}:
        ${player.name} (${player.score} points)
      </div>
    `;
  });

  document.getElementById("scoreContent").innerHTML = html;
  document.getElementById("scoreModal").style.display = "flex";
}

function closeScoreModal() {
  document.getElementById("scoreModal").style.display = "none";
  location.reload(); // restart game
}

function closeScoreboard() {
  document.getElementById("scoreModal").style.display = "none";
}

function restartSamePlayers() {
  // Close scoreboard
  document.getElementById("scoreModal").style.display = "none";

  // Reset state
  board.innerHTML = "";
  flippedCards = [];
  matchedCards = [];
  scores = Array(numPlayers).fill(0);
  currentPlayer = 0;

  // Rebuild board with SAME players
  let totalCards;
  switch (numPlayers) {
    case 1: totalCards = 20; break;
    case 2: totalCards = 30; break;
    case 3: totalCards = 50; break;
    case 4: totalCards = 70; break;
  }

  const requiredPairs = totalCards / 2;
  const selectedImages = cardImages.slice(0, requiredPairs);
  cards = [...selectedImages, ...selectedImages];
  shuffle(cards);

  renderBoard();
  updateStatus();
  startTurnTimer();
}

function goToPlayerSelect() {
  // Close scoreboard
  document.getElementById("scoreModal").style.display = "none";

  // Stop timer
  clearInterval(timer);

  // Hide game UI
  board.innerHTML = "";
  statusBox.style.display = "none";

  // Show player selection card
  document.getElementById("playerSelect").style.display = "block";

  // Reset player buttons
  document.querySelectorAll('.player-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Clear name inputs and hide start button
  document.getElementById("nameInputs").innerHTML = "";
  document.getElementById("startBtn").style.display = "none";

  // Reset game state
  cards = [];
  flippedCards = [];
  matchedCards = [];
  scores = [];
  playerNames = [];
  currentPlayer = 0;
  numPlayers = 1;
}