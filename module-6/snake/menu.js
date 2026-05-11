//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSprite, TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";
import { EGameStatus, SheetData } from "./game.mjs";
import { GameBoardSize } from "./gameBoard.js";

export class TMenu {   // Class to manage the game menu
  constructor(aSpriteCanvas) {
    this.spcvs = aSpriteCanvas;
    this.status = EGameStatus.Idle;
    this.playButton = new TSprite(aSpriteCanvas, SheetData.Play, 0, 0);
    this.resumeButton = new TSprite(aSpriteCanvas, SheetData.Resume, 0, 0);
    this.gameOverScreen = new TSprite(aSpriteCanvas, SheetData.GameOver, 0, 0);
    this.homeButton = new TSprite(aSpriteCanvas, SheetData.Home, 0, 0);
    this.retryButton = new TSprite(aSpriteCanvas, SheetData.Retry, 0, 0);
    this.scoreNumber = new TSpriteNumber(
      aSpriteCanvas,
      SheetData.Number,
      0,
      0,
      0,
      0,
      ESpriteNumberJustifyType.Center
    );
    this.scoreNumber.scale = 0.8;
    this.setPositions();
  }

  setPositions() {  // Center the play and resume buttons, and position the game over screen and its buttons
    const canvasWidth = GameBoardSize.Cols * SheetData.Head.width;
    const canvasHeight = GameBoardSize.Rows * SheetData.Head.height;
    const centerX = (canvasWidth - this.playButton.spi.width) / 2;
    const centerY = (canvasHeight - this.playButton.spi.height) / 2;
    this.playButton.x = centerX;
    this.playButton.y = centerY;
    this.resumeButton.x = centerX;
    this.resumeButton.y = centerY;
    const goCenterX = (canvasWidth - this.gameOverScreen.spi.width) / 2;
    const goCenterY = (canvasHeight - this.gameOverScreen.spi.height) / 2;
    this.gameOverScreen.x = goCenterX;
    this.gameOverScreen.y = goCenterY;
    this.homeButton.x = goCenterX + 65;
    this.homeButton.y = goCenterY + 348;
    this.retryButton.x = goCenterX + 614;
    this.retryButton.y = goCenterY + 348;

    
    this.scoreNumber.moveTo(660, 265); // Position score number on game over screen
  }

  setStatus(aStatus) {
    this.status = aStatus;
  }

  setScore(aScore) {
    this.scoreNumber.value = aScore;
  }

  draw() {     // Draw the appropriate menu based on the current game status
    switch (this.status) {
      case EGameStatus.Idle:
        this.playButton.draw();
        break;
      case EGameStatus.Pause:
        this.resumeButton.draw();
        break;
      case EGameStatus.GameOver:
        this.gameOverScreen.draw();
        this.scoreNumber.draw();
        this.homeButton.draw();
        this.retryButton.draw();
        break;
    }
  }
}


