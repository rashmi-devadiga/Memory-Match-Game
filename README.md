# Memory-Match-Game

![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

A fun and interactive **Memory Match Game** built using **HTML, CSS, and Vanilla JavaScript**.  
The game supports **1–4 players**, turn-based gameplay, a countdown timer, and a final scoreboard with player rankings.

---

## 📑 Table of Contents

1. [Features](#features)  
2. [Screenshots](#screenshots)  
3. [How to Play](#how-to-play)  
4. [Images Used](#images-used)  
5. [Project Structure](#project-structure)  
6. [Technologies Used](#technologies-used)  
7. [Future Enhancements](#future-enhancements)  

---

## Features

- Supports **1 to 4 players**
- Custom player names
- Flip cards to find matching pairs
- Turn-based timer system
- Automatic turn switching on mismatch or timeout
- Real-time score tracking
- Final scoreboard with player rankings
- Restart game with the same players
- Glassmorphism UI design
- Dynamic grid layout based on number of cards

---

## Screenshots



---

## How to Play

1. Open `index.html` in any modern web browser  
   *(or use Live Server in VS Code)*.
2. Select the number of players.
3. Enter player names.
4. Click **Start Game**.
5. Players take turns flipping two cards:
   - If the cards match, the player earns a point and continues.
   - If they don’t match, the turn switches to the next player.
6. Each turn is limited to **10 seconds**.
7. When all pairs are matched, the winner is displayed.
8. Use the scoreboard options to restart or return to player selection.

---

## Images Used

- `imgb3.jpg` → Game background image
- `imgb2.jpg` → Card back (hidden state)
- `img1.png` – `img35.png` → Card front images

> Image filenames must exactly match those used in CSS and JavaScript.

---

## Project Structure
```md
memory-match-game/
│
├── index.html              # Main HTML file
├── style.css               # Game styling (UI, layout, animations)
│
├── images/                 # Game images
│   ├── imgb3.jpg           # Background image
│   ├── imgb2.jpg           # Card back image
│   ├── img1.png            # Card front images
│   ├── img2.png
│   ├── ...
│   └── img35.png
│
├── screenshots/            # Game screenshots
│   ├── gameplay.png
│   ├── scoreboard.png
│   └── player-select.png
│
└── js/                     # JavaScript files
    ├── data.js             # Images, constants, global state
    ├── game.js             # Core game logic
    ├── ui.js               # DOM updates & UI helpers
    ├── timer.js            # Turn timer logic
    ├── navigation.js       # Modals, restart, navigation logic
    └── main.js             # App entry point
```

---

## Technologies Used

- **HTML5**  
- **CSS3** 
- **JavaScript (Vanilla JS)**  

---

## Future Enhancements

- Sound effects  
- Improved mobile UI  
- Difficulty levels  
- Online multiplayer  
- Save high scores  

---

## Author

**Rashmi Devadiga**
Bachelor of Computer Applications Graduate
[LinkedIn](https://linkedin.com/in/rashmidevadiga) |
[GitHub](https://github.com/rashmi-devadiga)

---

