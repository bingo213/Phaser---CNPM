class ConversionScene3 extends ConversionSceneRoot { //Sau khi chạy thì 3 quả bóng cùng nằm bên phải
  constructor() {
    super("ConversionScene3");
  }

  create() {
    this.nextScene = "RateScene";
    this.numberOfBallLeft = 1;
    this.numberOfBallRight= 2;
    super.create();
  }

}
