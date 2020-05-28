class Game1_3 extends SceneRoot1 {
  constructor() {
    super("Game1_3");
  }

  create() {
    this.name = "Game1_3";
    this.type = 3;
    this.textTitle = "Colour in the shapes the way you want!";
    this.textTitleX = 320;
    this.nextScene = "RateScene";
    this.extraTypeShape = [];
    this.numberOfBallLeft = 1;
    this.numberOfBallRight = 2;
    super.create();
  }

  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x27AE60,
      tintColor: 0x1b5e20,
      colorRect: new Rect(this, module1Setting.brushX1[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.brushX1[0], module1Setting.brushY, "green")
    }, {
      hexColor: 0xBA68C8,
      tintColor: 0x6C3483,
      colorRect: new Rect(this, module1Setting.brushX1[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.brushX1[1], module1Setting.brushY, "purple")
    }, {
      hexColor: 0xFF7043,
      tintColor: 0xE64A19,
      colorRect: new Rect(this, module1Setting.brushX1[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.brushX1[2], module1Setting.brushY, "orange")
    });
    super.addRequiredBrush();
  }

  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.push(
      this.add.image(this.shapes[6].x, this.shapes[6].y - 30, "window1"),
      this.add.image(this.shapes[7].x, this.shapes[7].y - 20, "window"),
      this.add.image(this.shapes[9].x, this.shapes[9].y - 20, "window")
    );
    super.addExtraImageInFrontOfShape();
  }
  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2, "bg")
    );
    super.addExtraImageBehindShape();
  }

  addShapes() {
    this.shapes.push(
      new Tri(this, 265, 490, 0, 100, 100, 100, 102, 0), //0
      new Tri(this, 775, 293, 0, 100, 90, 100, 50, 0), //1
      new Tri(this, 895, 288, 0, 150, 80, 120, 90, 0), //2
      new Tri(this, 850, 258, 0, 100, 90, 100, 50, 0), //3

      new Rect(this, 420, 410, 206, 131), //4: Đầu tàu
      new Rect(this, 351, 283, 70, 120), //5: Đầu tàu (hình chữ nhật đứng t1 từ trái qua)
      new Rect(this, 585, 320, 120, 170), //6: Đầu tàu (hình chữ nhật đứng t2 từ trái qua)
      new Rect(this, 820, 410, 206, 131), //7: Toa 1
      new Rect(this, 820, 509, 78, 63), //8
      new Rect(this, 1100, 410, 206, 131), //9: Toa 2
      new Rect(this, 1110, 509, 78, 63), //10

      new Cir(this, 357, 512, 35), //11: Bánh xe ở đầu tàu
      new Cir(this, 445, 512, 35), //12
      new Cir(this, 595, 477, 70), //13: Bánh xe lớn
      new Cir(this, 744, 512, 35), //14: Bánh xe ở toa 1
      new Cir(this, 896, 512, 35), //15
      new Cir(this, 1034, 512, 35), //16: Bánh xe ở toa 2
      new Cir(this, 1186, 512, 35) //17
    );
    this.shapes[2].setAngle(20);
    this.shapes[3].setAngle(-39);
  }
}
