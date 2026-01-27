"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";
import { menu } from "./FlappyBird.mjs";

const fnEat = "./Media/food.mp3";
const fnHeroisDead = "./Media/heroisdead.mp3";
const fnGameOver = "./Media/gameover.mp3";

export class THero extends TSprite {
  #gravity;
  #speed;
  #wave;
  #sfEat;
  #sfHeroIsDead;
  #sfGameOver;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 100, 100);
    this.animationSpeed = 20;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    this.#wave = new TSineWave(1, 1);
    this.y += this.#wave.value;
    this.debug = false;
    this.#sfEat = null;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }

  animate() {
    const hasGravity = (EGameStatus.state === EGameStatus.gaming) || (EGameStatus.state === EGameStatus.heroIsDead);
    if (hasGravity) {
      if (this.y < 400 - this.height) {
        this.#speed += this.#gravity; // increase speed due to gravity
        this.y += this.#speed; // update position based on speed
        if (this.rotation < 90) {
          // limit max rotation
          this.rotation = this.#speed * 25; // tilt down based on speed
        }
      } else {
        EGameStatus.state = EGameStatus.gameOver;
        this.animationSpeed = 0;
        this.#sfGameOver = new TSoundFile(fnGameOver);
        this.#sfGameOver.play();
        if (this.#sfHeroIsDead === null) {
        this.#sfHeroIsDead = new TSoundFile(fnHeroisDead);
        this.#sfHeroIsDead.play();}
        menu.stopSound();
      }
    } else if (EGameStatus.state === EGameStatus.idle) {
      this.y += this.#wave.value;
    }
  }

  dead () {
    this.#sfHeroIsDead = new TSoundFile(fnHeroisDead);
    this.#sfHeroIsDead.play();
    this.#sfGameOver = new TSoundFile(fnGameOver);
    this.#sfGameOver.play();
    menu.stopSound();
  }

  flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }
  eat() {
    if (this.#sfEat === null) {
      this.#sfEat = new TSoundFile(fnEat);
    }
    else {
      this.#sfEat.stop();
    }
    this.#sfEat.play();
  }
}
