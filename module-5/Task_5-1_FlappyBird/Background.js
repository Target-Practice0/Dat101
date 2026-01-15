"use strict";
import { TSprite } from "libSprite";

export class TBackground{
    #spritebackground;
    #spriteGround;

    constructor(aSpcsv, aSPI){
        this.#spritebackground = new TSprite(aSpcsv, aSPI.background, 1, 0);
        const groundPosY = aSPI.background.height - aSPI.ground.height;
        this.#spriteGround = new TSprite(aSpcsv, aSPI.ground, 0, groundPosY);
    }
    drawBackground(){
        this.#spritebackground.draw();
    }
    drawGround(){
        this.#spriteGround.draw();
    }
    animate(){
        let x = this.#spriteGround.x + (this.#spriteGround.width / 2);
        if (x <= 5){
        this.#spriteGround.x = 0;}
        else{this.#spriteGround.x--;}
}
}