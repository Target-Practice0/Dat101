"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas, TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell, EBoardCellInfoType } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  menu: null,
  score: 0,
  potentialScore: 100,
  currentScoreNumber: null,
  potentialScoreNumber: null,
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  GameProps.score = 0; // Reset score
  GameProps.potentialScore = 100;
  if (GameProps.menu) {
    GameProps.menu.setScore(GameProps.score);
  }
  if (GameProps.currentScoreNumber) {
    GameProps.currentScoreNumber.value = GameProps.score;
  }
  if (GameProps.potentialScoreNumber) {
    GameProps.potentialScoreNumber.value = GameProps.potentialScore;
  }
  gameSpeed = 4; // Reset game speed
  GameProps.gameBoard.getCell(5, 3).infoType = EBoardCellInfoType.Empty; // set the starting position of the tail to the snake on the game board to empty
}

export function baitIsEaten() {
  GameProps.bait.update(); // Move the bait to a new random position
  GameProps.snake.grow(); // Grow the snake
  GameProps.score += GameProps.potentialScore;
  GameProps.potentialScore = 100;
  if (GameProps.menu) {
    GameProps.menu.setScore(GameProps.score);
  }
  if (GameProps.currentScoreNumber) {
    GameProps.currentScoreNumber.value = GameProps.score;
  }
  if (GameProps.potentialScoreNumber) {
    GameProps.potentialScoreNumber.value = GameProps.potentialScore;
  }
  console.log("Bait eaten!");

  increaseGameSpeed(); // Increase game speed
}

//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

export function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle;

  GameProps.menu = new TMenu(spcvs);

  GameProps.currentScoreNumber = new TSpriteNumber(spcvs, SheetData.Number, 10, 10, 0, 4, ESpriteNumberJustifyType.Left);
  GameProps.potentialScoreNumber = new TSpriteNumber(spcvs, SheetData.Number, 10, 100, 100, 3, ESpriteNumberJustifyType.Left);
  GameProps.currentScoreNumber.alpha = 0.5;
  GameProps.potentialScoreNumber.alpha = 0.5;

  newGame(); // Initialize the game objects

  GameProps.gameStatus = EGameStatus.Idle; // Show menu initially

  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  console.log("Game canvas is updating!");
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();

  if (GameProps.gameStatus === EGameStatus.Playing || GameProps.gameStatus === EGameStatus.Pause) {
    GameProps.bait.draw();
    GameProps.snake.draw();
  }

  if (GameProps.gameStatus !== EGameStatus.Idle) {
    GameProps.currentScoreNumber.draw();
    GameProps.potentialScoreNumber.draw();
  }

  if (GameProps.gameStatus !== EGameStatus.Playing) {
    GameProps.menu.draw();
  }

  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      GameProps.potentialScore = Math.max(0, GameProps.potentialScore - 1); // Decrease potential score over time, minimum 0
      if (GameProps.potentialScoreNumber) {
        GameProps.potentialScoreNumber.value = GameProps.potentialScore;
      }
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        GameProps.menu.setStatus(EGameStatus.GameOver);
        console.log("Game over!");
      }
      break;
  }
}

function increaseGameSpeed() {
  gameSpeed += 0.25; // Increase game speed by 0.25
  clearInterval(hndUpdateGame); // Clear the existing interval
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Set a new interval with the updated game speed
  console.log("Increase game speed!");
  console.log(`Current game speed: ${gameSpeed}`);
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        GameProps.menu.setStatus(EGameStatus.Pause);
        console.log("Game paused!");
      } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.menu.setStatus(EGameStatus.Playing);
        console.log("Game resumed!");
      }
      break;
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}

function onCanvasClick(event) {
  // Get the mouse position relative to the canvas
  const rect = cvs.getBoundingClientRect();
  const scaleX = cvs.width / rect.width;
  const scaleY = cvs.height / rect.height;
  const mouseX = (event.clientX - rect.left) * scaleX;
  const mouseY = (event.clientY - rect.top) * scaleY;
  switch (GameProps.gameStatus) {
    case EGameStatus.Idle:
      if (isClickOnButton(mouseX, mouseY, GameProps.menu.playButton)) {
        newGame();
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.menu.setStatus(EGameStatus.Playing);
      }
      break;
    case EGameStatus.Pause:
      if (isClickOnButton(mouseX, mouseY, GameProps.menu.resumeButton)) {
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.menu.setStatus(EGameStatus.Playing);
      }
      break;
    case EGameStatus.GameOver:
      if (isClickOnButton(mouseX, mouseY, GameProps.menu.homeButton)) {
        GameProps.gameStatus = EGameStatus.Idle;
        GameProps.menu.setStatus(EGameStatus.Idle);
      } else if (isClickOnButton(mouseX, mouseY, GameProps.menu.retryButton)) {
        newGame();
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.menu.setStatus(EGameStatus.Playing);
      }
      break;
  }
}

function isClickOnButton(x, y, button) {
  return x >= button.x && x <= button.x + button.spi.width && y >= button.y && y <= button.y + button.spi.height;
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
cvs.addEventListener("click", onCanvasClick);
