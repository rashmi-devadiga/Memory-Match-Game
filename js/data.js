const board = document.querySelector('.game-board');
const turnDisplay = document.getElementById('turn');
const scoresDisplay = document.getElementById('scores');
const statusBox = document.getElementById('status');

const cardImages = [
  'img1.png','img2.png','img3.png','img4.png','img5.png','img6.png','img7.png','img8.png','img9.png','img10.png','img11.png','img12.png',
  'img13.png','img14.png','img15.png','img16.png','img17.png','img18.png','img19.png','img20.png','img21.png','img22.png','img23.png','img24.png',
  'img25.png','img26.png','img27.png','img28.png','img29.png','img30.png','img31.png','img32.png','img33.png','img34.png','img35.png'
];

let cards = [];
let flippedCards = [];
let matchedCards = [];
let currentPlayer = 0;
let numPlayers = 1;
let scores = [];
let playerNames = [];
let timer;
let turnTimeLimit = 10; // 10 seconds