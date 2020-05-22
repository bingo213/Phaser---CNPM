class ConversionScene7 extends ConversionSceneRoot {
  constructor() {
    super("ConversionScene7");
  }

  create() {
    this.nextScene = "Game4_2";
    this.numberOfBallLeft = 3;
    this.numberOfBallRight= 0;
    super.create();
  }
}
