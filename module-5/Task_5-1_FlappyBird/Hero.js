"use strict";
import { TSprite } from "libSprite";

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor(aSpcsv, aSPI,){
        super(aSpcsv, aSPI, 150, 200);
        this.animationSpeed = 15;
        this.#gravity = 0.1;
        this.#speed = 0;
    }

    animate() {
        if (this.y < 400 - this.height) {
            this.#speed += this.#gravity;
            this.y += this.#speed;
            if (this.rotation < 90) {
            this.rotation = this.#speed * 20;
         }
    }
    }

    flap() {
        this.#speed = -4.5;
        if (this.rotation > 0) {
            this.rotation = 0;
        }
    }
}