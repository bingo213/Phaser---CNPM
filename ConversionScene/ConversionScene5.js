class ConversionScene5 extends ConversionSceneRoot {
  constructor() {
    super("ConversionScene5");
  }

  create() {
    this.nextScene = "RateScene";
    this.numberOfBallLeft = 1;
    this.numberOfBallRight= 1;
    super.create();
  }
}
