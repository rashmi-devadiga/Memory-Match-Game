function renderBoard() {
  board.innerHTML = '';
  flippedCards = [];

  // Set columns based on number of cards
  const total = cards.length;
  let columns;
  if (total === 20) columns = 5;     // 4x5
  else if (total === 30) columns = 6; // 5x6
  else if (total === 50) columns = 10; // 5x10
  else if (total === 70) columns = 10; // 7x10
  else columns = 5;

  board.style.gridTemplateColumns = `repeat(${columns}, 80px)`;

  cards.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = image;
    card.innerHTML = `<img src="images/question.png" alt="card" width="60" height="60">`;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function updateStatus() {
  turnDisplay.textContent = `Current Player: ${playerNames[currentPlayer]}`;
  scoresDisplay.innerHTML = scores
    .map((score, i) => `${playerNames[i]}: ${score}`)
    .join(' | ');
}

function resetFlippedCards() {
  flippedCards.forEach(card => {
    card.classList.remove('flip');
    card.innerHTML = `<img src="images/question.png" alt="card">`;
  });
  flippedCards = [];
}
