class Game1_2 extends SceneRoot1 {
  constructor() {
    super("Game1_2");
  }
  create() {
    this.name = "Game1_2";
    this.type = 1;
    this.notice = "notification";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.conversionScene = "ConversionScene2";
    this.extraTypeShape = [];
    this.numberOfBallLeft = 2;
    this.numberOfBallRight = 1;
    super.create();
  }

  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x27AE60,
      tintColor: 0x1B5E20,
      typeShape: Tri,
      colorRect: new Rect(this, module1Setting.brushX1[0] + 85, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX1[0] + 35, module1Setting.brushY - 20, "Triangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0x85C1E9,
      tintColor: 0x21618C,
      typeShape: Cir,
      colorRect: new Rect(this, module1Setting.brushX1[1] + 80, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[1], module1Setting.brushY, "blue"),
      text: this.add.text(module1Setting.brushX1[1] + 35, module1Setting.brushY - 20, "Circles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xE67E22,
      tintColor: 0xBA4A00,
      typeShape: Rect,
      colorRect: new Rect(this, module1Setting.brushX1[2] + 75, module1Setting.brushY, 200, 60),
      image: this.add.image(module1Setting.brushX1[2], module1Setting.brushY, "brown"),
      text: this.add.text(module1Setting.brushX1[2] + 35, module1Setting.brushY - 20, "Squares", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    });
    super.addRequiredBrush();
  }
  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.push(
      this.add.image(505, 300, "snowman"),
      this.add.image(530, 290, "carrot"),
      this.add.image(this.shapes[12].x, this.shapes[12].y - 40, "bow")
    );
    super.addExtraImageInFrontOfShape();
  }
  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2 - 20, "snow_background")
    );
    super.addExtraImageBehindShape();
  }
  addShapes() {
    this.shapes.push(
      //Cây thông
      new Tri(this, 1140, 190, 0, 50, 50, 50, 0, 0), //0
      new Tri(this, 1140, 264, 0, 100, 100, 100, 0, 0), //1
      new Tri(this, 1140, 375, 0, 150, 150, 150, 0, 0), //2
      new Tri(this, 900, 200, 0, 70, 70, 70, 0, 0), //3
      new Tri(this, 900, 303, 0, 140, 140, 140, 0, 0), //4
      new Tri(this, 900, 435, 0, 180, 180, 180, 0, 0), //5
      new Tri(this, 300, 243, 0, 70, 70, 70, 0, 0), //6
      new Tri(this, 300, 348, 0, 140, 140, 140, 0, 0), //7
      new Tri(this, 300, 461, 0, 150, 150, 150, 0, 0), //8
      //Người tuyết
      new Cir(this, 500, 276, 30), //9
      new Cir(this, 500, 348, 40), //10
      new Cir(this, 500, 450, 60), //11
      //Hộp quà
      new Rect(this, 668, 492, 100, 100), //12
      //Thân cây thông
      new Rect(this, 300, 500, 70, 70), //13
      new Rect(this, 900, 472, 65, 65), //14
      new Rect(this, 1140, 406, 55, 55) //15
    );
    this.shapes[0].setAngle(135);
    this.shapes[1].setAngle(135);
    this.shapes[2].setAngle(135);
    this.shapes[3].setAngle(135);
    this.shapes[4].setAngle(135);
    this.shapes[5].setAngle(135);
    this.shapes[6].setAngle(135);
    this.shapes[7].setAngle(135);
    this.shapes[8].setAngle(135);
  }
}
