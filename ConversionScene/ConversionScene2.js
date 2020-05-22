class ConversionScene2 extends ConversionSceneRoot { //Chuyển từ Game1_2 sang Game1_3
  constructor() {
    super("ConversionScene2");
  }

  create() {
    this.nextScene = "Game1_3";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 1;
    super.create();
  }
}
