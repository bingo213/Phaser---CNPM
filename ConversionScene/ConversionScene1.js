class ConversionScene1 extends ConversionSceneRoot { //Chuyển từ Game1_1 sang Game 1_2
  constructor() {
    super("ConversionScene1");
  }

  create() {
    this.nextScene = "Game1_2";
    this.numberOfBallLeft = 3;
    this.numberOfBallRight= 0;
    super.create();
  }
}
