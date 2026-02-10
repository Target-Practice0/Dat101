"use strict";
import { EGameStatusType, spawnColorButton, gameOver, updateRound } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];
export let round = 0;
let seqIndex = 0;

export function addRandomButton(aColorButtons) {
  const index = Math.floor(Math.random() * aColorButtons.length);
  colorButton = aColorButtons[index];
  sequence.push(colorButton);
  seqIndex = 0;
  colorButton = sequence[0];
  setTimeout(setButtonDown, 500);
}

export function testOfUserInput(aColorButton) {
  if (aColorButton === colorButton) {
    console.log("Correct");
    seqIndex++;
    if (seqIndex < sequence.length) {
      colorButton = sequence[seqIndex];
    } else {
      console.log("Round " + round + " completed");
      round++;
      updateRound(round);
      spawnColorButton();
    }
  } else {
    console.log("Wrong");
    gameOver();
  }
}

function setButtonDown() {
  colorButton.onMouseDown();
  setTimeout(setButtonUp, 500);
}

function setButtonUp() {
  colorButton.onMouseUp();
  seqIndex++;
  if (seqIndex < sequence.length) {
    colorButton = sequence[seqIndex];
    setTimeout(setButtonDown, 500);
  } else {
    EGameStatusType.state = EGameStatusType.Gamer;
    seqIndex = 0;
    colorButton = sequence[0];
  }
}

export function resetSequence() {
  sequence = [];
  seqIndex = 0;
  round = 0;
}
