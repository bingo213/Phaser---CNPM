class Game3_1 extends SceneRoot1 {
  constructor() {
    super("Game3_1");
  }

  create() {
    this.name = "Game3_1";
    this.type = 2;
    this.notice = "notification2";
    this.textTitle = "Color the triangles and hexagons";
    this.textTitleX = 405;
    this.nextScene = "Game3_2";
    this.extraTypeShape = [Cir, Rect];
    this.numberOfBallLeft = 2;
    this.numberOfBallRight = 0;
    super.create();
  }
  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x7CB342,
      tintColor: 0x1b5e20,
      typeShape: Tri,
      colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Triangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xE74C3C,
      tintColor: 0x5D4037,
      typeShape: Hex,
      colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "brown"),
      text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Hexagons", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    });
    super.addRequiredBrush();
  }

  addExtraBrush() {
    this.extraBrush.push({
      hexColor: 0xFBC02D,
      tintColor: 0xFFD600,
      colorRect: new Rect(this, module1Setting.extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[0], module1Setting.brushY, "yellow")
    }, {
      hexColor: 0xBFC9CA,
      tintColor: 0x34495e,
      colorRect: new Rect(this, module1Setting.extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[1], module1Setting.brushY, "gray")
    }, {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, module1Setting.extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[2], module1Setting.brushY, "blue")
    }, {
      hexColor: 0xFF1744,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, module1Setting.extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.push(
      this.add.image(config.width / 2 - 35, config.height / 2 - 125, "eye"),
      this.add.image(config.width / 2 + 45, config.height / 2 - 125, "eye"),

    );
    super.addExtraImageInFrontOfShape();
  }
  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2, "background")
    );
    super.addExtraImageBehindShape();
  }

  addShapes() {
    this.shapes.push(
      //Mai cua và càng
      new Hex(this, config.width / 2, config.height / 2, 100, 100), //0
      new Hex(this, 555, 285, 50, 50), //1
      new Hex(this, 886, 285, 50, 50), //2

      //Càng bên trái
      new Tri(this, 623, 325, 0, 64, 32, 0, 64, 64), //3
      new Tri(this, 465, 197, 0, 64, 80, 0, 64, 64), //4
      new Tri(this, 440, 270, 0, 128, 64, 0, 128, 128), //5

      //Lá bên trái
      new Tri(this, 230, 330, 0, 80, 32, 0, 80, 80), //6
      new Tri(this, 300, 420, 0, 80, 32, 0, 80, 80), //7
      new Tri(this, 410, 380, 0, 80, 32, 0, 80, 80), //8
      new Tri(this, 400, 500, 0, 80, 32, 0, 80, 80), //9
      new Tri(this, 335, 500, 0, 80, 32, 0, 80, 80), //10

      //Lá bên phải
      new Tri(this, 1180, 300, 0, 80, 32, 0, 80, 80), //11
      new Tri(this, 1070, 350, 0, 80, 32, 0, 80, 80), //12
      new Tri(this, 1180, 430, 0, 80, 32, 0, 80, 80), //13
      new Tri(this, 1070, 430, 0, 80, 32, 0, 80, 80), //14
      new Tri(this, 1130, 510, 0, 80, 32, 0, 80, 80), //15

      //Càng bên phải
      new Tri(this, 817, 325, 0, 64, 32, 0, 64, 64), //16
      new Tri(this, 970, 200, 0, 64, 80, 10, 64, 64), //17
      new Tri(this, 1000, 270, 0, 128, 64, 0, 128, 128), //18

      //Mắt
      new Cir(this, config.width / 2 - 40, config.height / 2 - 120, 25, 25), //19
      new Cir(this, config.width / 2 + 40, config.height / 2 - 120, 25, 25), //20

      //Chân cua
      //Trái
      new Rect(this, config.width / 2 - 103, config.height / 2 + 100, 100, 30), //21
      new Rect(this, config.width / 2 - 121, config.height / 2 + 68, 100, 30), //22
      new Rect(this, config.width / 2 - 139, config.height / 2 + 36, 100, 30), //23
      //Phải
      new Rect(this, config.width / 2 + 103, config.height / 2 + 100, 100, 30), //24
      new Rect(this, config.width / 2 + 121, config.height / 2 + 68, 100, 30), //25
      new Rect(this, config.width / 2 + 139, config.height / 2 + 36, 100, 30) //26
    );

    this.shapes[3].angle = -60;
    this.shapes[4].angle = -120;
    this.shapes[5].angle = -80;
    this.shapes[6].angle = 180;
    this.shapes[7].angle = 140;
    this.shapes[8].angle = -150;
    this.shapes[9].angle = -160;
    this.shapes[10].angle = 160;
    this.shapes[11].angle = -170;
    this.shapes[12].angle = 140;
    this.shapes[13].angle = 180;
    this.shapes[14].angle = -170;
    this.shapes[15].angle = 180;
    this.shapes[16].angle = 60;
    this.shapes[17].angle = 180;
    this.shapes[18].angle = 80;
    this.shapes[21].angle = -30;
    this.shapes[22].angle = -30;
    this.shapes[23].angle = -30;
    this.shapes[24].angle = 30;
    this.shapes[25].angle = 30;
    this.shapes[26].angle = 30;
  }
}
