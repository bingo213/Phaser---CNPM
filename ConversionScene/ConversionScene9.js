class ConversionScene9 extends Phaser.Scene { //Sau khi cha�y thi� 3 qua� bo�ng cu�ng n��m b�n pha�i
  constructor() {
    super("ConversionScene9");
  }

  create() {
    this.nextScene = "Game4_3";
    this.numberOfBallLeft = 1;
    this.numberOfBallRight= 2;
    super.create();
  }
}
