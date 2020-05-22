class ConversionScene8 extends Phaser.Scene { //Chuyển từ Game4_2 sang Game4_3
  constructor() {
    super("ConversionScene8");
  }

  create() {
    this.nextScene = "Game4_3";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 1;
    super.create();
  }
}
