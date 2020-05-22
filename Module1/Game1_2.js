class Game1_2 extends SceneRoot1 {
  constructor() {
    super("Game1_2");
  }
  create() {
    this.name = "Game1_2";
    this.type = 1; //Kiểu 1: Yêu cầu tô màu vào tất cả các hình
    this.initscene = "initscene2";
    this.notice = "notification";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.amount = 3; //Số lượng cọ ban đầu
    this.conversionScene = "ConversionScene2";
    this.extraTypeShape = [];
    super.create();
  }

  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x27AE60,
      tintColor: 0x1b5e20,
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
    //Khai báo và vẽ 9 hình tam giác
    this.shapes.push(
      new Tri(this, 1140, 190, 0, 50, 50, 50, 0, 0),
      new Tri(this, 1140, 264, 0, 100, 100, 100, 0, 0),
      new Tri(this, 1140, 375, 0, 150, 150, 150, 0, 0),
      new Tri(this, 900, 200, 0, 70, 70, 70, 0, 0),
      new Tri(this, 900, 303, 0, 140, 140, 140, 0, 0),
      new Tri(this, 900, 435, 0, 180, 180, 180, 0, 0),
      new Tri(this, 300, 243, 0, 70, 70, 70, 0, 0),
      new Tri(this, 300, 348, 0, 140, 140, 140, 0, 0),
      new Tri(this, 300, 461, 0, 150, 150, 150, 0, 0),
      new Cir(this, 500, 276, 30),
      new Cir(this, 500, 348, 40),
      new Cir(this, 500, 450, 60),
      new Rect(this, 668, 492, 100, 100),
      new Rect(this, 300, 500, 70, 70),
      new Rect(this, 900, 472, 65, 65),
      new Rect(this, 1140, 406, 55, 55)
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
