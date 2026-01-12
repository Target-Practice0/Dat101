"use strict";
import { TSprite } from "libSprite";

export class TBackground{
    #spritebackground;
    #spriteGround;

    constructor(aSpcsv, aSPI){
        this.#spritebackground = new TSprite(aSpcsv, aSPI.background, 0, 0);
        const groundPosY = aSPI.background.height - aSPI.ground.height;
        this.#spriteGround = new TSprite(aSpcsv, aSPI.ground, 0, groundPosY);
    }
    draw(){
        this.#spritebackground.draw();
        this.#spriteGround.draw();
    }
}