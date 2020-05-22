class ConversionScene6 extends ConversionSceneRoot { //Giống ConversionScene4, chỉ khác là chuyển sang Game3_2
  constructor() {
    super("ConversionScene6");
  }

  create() {
    this.nextScene = "Game3_2";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight= 0;
    super.create();
  }
}
