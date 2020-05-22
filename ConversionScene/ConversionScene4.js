class ConversionScene4 extends ConversionSceneRoot { //Chuyển từ Game2_1 sang Game2_2
  constructor() {
    super("ConversionScene4");
  }

  create() {
    this.nextScene = "Game2_2";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 0;
    super.create();
  }
}
