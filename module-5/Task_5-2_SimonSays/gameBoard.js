"use strict";
import { TSprite } from "libSprite";
import { TColorButton } from "./colorbutton.js";  

export class TGameBoard extends TSprite {
    #colorButtons;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI.Background, 0, 0);
    this.#colorButtons = [
        new TColorButton(aSpcvs, aSPI.ButtonYellow),
        new TColorButton(aSpcvs, aSPI.ButtonBlue),
        new TColorButton(aSpcvs, aSPI.ButtonRed),
        new TColorButton(aSpcvs, aSPI.ButtonGreen),
    ];
  }
}


