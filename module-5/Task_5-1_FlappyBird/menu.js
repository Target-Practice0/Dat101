"use strict";
import { TSprite, TSpriteButton } from "libSprite";
import { startGame } from "./FlappyBird.mjs";

export class TMenu{
    #spTitle;
    #spPlayBtn;
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 230, 190);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
    }

    spPlayBtnClick(){
        console.log("Play button clicked");
        this.#spPlayBtn.hidden = true; 
        this.#spTitle.hidden = true;
        startGame();
    }
}