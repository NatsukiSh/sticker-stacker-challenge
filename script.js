//Select the element that we need to interact with from the HTML
const grid = document.querySelector(".grid");
const stackBtn = document.querySelector(".stack");
const scoreCounter = document.querySelector(".score-counter");
const endGameScreen = document.querySelector(".end-game-screen");
const playAgainBtn = document.querySelector(".play-again");

//Create game grid matrix
//0-empty cell
//1 -bar-segment
const gridMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0], //this is stating current currentRowIndex
];

//These are variables to keep track of the game values as we play
let currentRowIndex = gridMatrix.length - 1;
let barDirection = "right";
let barSize = 3;
let isGameOver = false;
let score = 0;

function draw() {
  //First, make sure always reset the display when call this function
  grid.innerHTML = "";

  //for (let i = 0; i < gridMatrix.length ; i ++){}
  gridMatrix.forEach(function (rowContent) {
    rowContent.forEach(function (cellContent) {
      //Create a cell
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (cellContent === 1) {
        cell.classList.add("bar");
      }

      grid.appendChild(cell);
    });
  });
}

draw();
