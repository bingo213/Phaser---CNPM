class ConversionScene9 extends ConversionSceneRoot { //Chuyển từ Game5_1 sang Game5_2
  constructor() {
    super("ConversionScene9");
  }

  create() {
    this.nextScene = "Game5_2";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 0;
    super.create();
  }
}
