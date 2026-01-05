function selectPlayers(count, button) {
  numPlayers = count;

  // Make buttons behave like image (only one green)
  document.querySelectorAll('.player-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');

  const container = document.getElementById('nameInputs');
  const startBtn = document.getElementById('startBtn');
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Enter name for Player ${i + 1}`;
    input.id = `playerName${i}`;
    container.appendChild(input);
  }

  startBtn.style.display = 'inline-block';
}

function startGame() {
  scores = Array(numPlayers).fill(0);
  playerNames = [];

  for (let i = 0; i < numPlayers; i++) {
    const nameInput = document.getElementById(`playerName${i}`);
    const name = nameInput && nameInput.value.trim();
    playerNames.push(name || `Player ${i + 1}`);
  }

  document.getElementById('playerSelect').style.display = 'none';
  statusBox.style.display = 'block';
  currentPlayer = 0;
  matchedCards = [];

  // Determine total cards based on number of players
  let totalCards;
  switch (numPlayers) {
    case 1:
      totalCards = 20;
      break;
    case 2:
      totalCards = 30;
      break;
    case 3:
      totalCards = 50;
      break;
    case 4:
      totalCards = 70;
      break;
    default:
      totalCards = 20;
  }

  const requiredPairs = totalCards / 2;
  const selectedImages = cardImages.slice(0, requiredPairs);
  cards = [...selectedImages, ...selectedImages];
  shuffle(cards);
  renderBoard();
  updateStatus();
  startTurnTimer();
}

function flipCard() {
  if (
    flippedCards.length < 2 &&
    !this.classList.contains('flip') &&
    !this.classList.contains('matched')
  ) {
    this.classList.add('flip');
    this.innerHTML = `<img src="images/${this.dataset.image}" alt="">`;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.image === card2.dataset.image) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    scores[currentPlayer]++;
    matchedCards.push(card1, card2);
    flippedCards = [];

    updateStatus();

    if (matchedCards.length === cards.length) {
      declareWinner();
    } else {
      startTurnTimer();
    }
  } else {
    setTimeout(() => {
  resetFlippedCards();   // FIX
  nextTurn();
}, 800);

  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

