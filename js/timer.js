function startTurnTimer() {
  clearInterval(timer);
  let timeLeft = turnTimeLimit;

  let timerDisplay = document.getElementById('timer');
  if (!timerDisplay) {
    timerDisplay = document.createElement('p');
    timerDisplay.id = 'timer';
    statusBox.appendChild(timerDisplay);
  }

  timerDisplay.innerText = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
  clearInterval(timer);
  console.log(`⏰ Time's up! ${playerNames[currentPlayer]} loses their turn.`);
  resetFlippedCards();   // 🔥 FIX
  nextTurn();
}

  }, 1000);
}

function nextTurn() {
  clearInterval(timer);
  currentPlayer = (currentPlayer + 1) % numPlayers;
  updateStatus();
  startTurnTimer();
}