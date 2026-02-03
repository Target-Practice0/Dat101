"use strict";

import { EGameStatusType } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];

export function addRandomButton(aColorButtons){
const index = Math.floor(Math.random() * aColorButtons.length);
colorButton = aColorButtons[index];
sequence.push(colorButton);
colorButton.onMouseDown();
setTimeout(setButtonDown, 500);
}

export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){
        console.log("Correct");
    }else{
        console.log("Wrong");
    }
}


function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 500);

}

function setButtonUp(){
    colorButton.onMouseUp();
    EGameStatusType.state = EGameStatusType.Gamer;
}