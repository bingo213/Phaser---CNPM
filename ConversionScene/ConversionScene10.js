class ConversionScene10 extends Phaser.Scene { //Chuyển từ Game5_1 sang Game5_2
  constructor() {
    super("ConversionScene10");
  }

  create() {
    this.nextScene = "Game5_2";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 0;
    super.create();
  }
}
