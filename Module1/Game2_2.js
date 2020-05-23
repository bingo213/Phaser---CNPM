class Game2_2 extends SceneRoot1 {
  constructor() {
    super("Game2_2");
  }

  create() {
    this.name = "Game2_2";
    this.type = 2;
    this.notice = "notification2";
    this.textTitle = "Color the triangles and rectangles";
    this.textTitleX = 380;
    this.conversionScene = "ConversionScene5";
    this.extraTypeShape = [Cir];
    this.numberOfBallLeft = 1;
    this.numberOfBallRight = 1;
    super.create();
  }
  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x00C853,
      tintColor: 0x1b5e20,
      typeShape: Rect,
      colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Rectangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xBFC9CA,
      tintColor: 0x34495e,
      typeShape: Tri,
      colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "gray"),
      text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Triangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    });
    super.addRequiredBrush();
  }

  addExtraBrush() {
    var extraBrushX = [245, 445, 645, 845];
    this.extraBrush.push({
      hexColor: 0xFBC02D,
      tintColor: 0xFFD600,
      colorRect: new Rect(this, extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[0], module1Setting.brushY, "yellow")
    }, {
      hexColor: 0x6D4C41,
      tintColor: 0x5D4037,
      colorRect: new Rect(this, extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[1], module1Setting.brushY, "brown")
    }, {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[2], module1Setting.brushY, "blue")
    }, {
      hexColor: 0xFFCCBC,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2, "background2_2"),
      this.add.image(585, 271, "eye2_2"),
      this.add.image(1210, 410, "tail"),
      this.add.image(340, 180, "nose"),
      this.add.image(759, 440, "leg1"),
      this.add.image(1000, 430, "leg2")
    );
    super.addExtraImageBehindShape();
  }

  addShapes() {
    this.shapes.push(
      new Tri(this, 291, 261, 0, 60, 60, 80, 42, 0), //0: Răng cá sấu
      new Tri(this, 365, 301, 0, 60, 60, 80, 42, 0), //1: Răng cá sấu
      new Tri(this, 440, 342, 0, 60, 60, 80, 42, 0), //2: Răng cá sấu
      new Tri(this, 810, 260, 0, 80, 80, 80, 42, 0), //3: Gai trên lưng
      new Tri(this, 900, 260, 0, 80, 80, 80, 42, 0), //4: Gai trên lưng
      new Tri(this, 990, 260, 0, 80, 80, 80, 42, 0), //5: Gai trên lưng
      new Tri(this, 1122, 345, 0, 80, 80, 80, 42, 0), //6: Gai trên đuôi
      new Rect(this, 400, 260, 265, 60), //7: Hàm trên con cá sấu
      new Rect(this, 385, 410, 265, 60), //8: Hàm dưới con cá sấu
      new Rect(this, 859, 360, 414, 116), //9: Thân con cá sấu
      new Rect(this, 1122, 420, 110, 65), //10: Đuôi con cá sấu
      new Cir(this, 585, 352, 65, 65), //11: Đầu cá sấu
      new Cir(this, 410, 520, 20, 20), //12: Hình tròn bên dưới cá sấu
      new Cir(this, 480, 490, 35, 35), //13: Hình tròn bên dưới cá sấu
      new Cir(this, 820, 480, 30, 30), //14: Hình tròn bên dưới cá sấu
      new Cir(this, 920, 500, 45, 45), //15: Hình tròn bên dưới cá sấu
      new Cir(this, 1115, 500, 35, 35), //16: Hình tròn bên dưới cá sấu
    );
    this.shapes[0].setAngle(-49);
    this.shapes[1].setAngle(-49);
    this.shapes[2].setAngle(-49);
    this.shapes[7].setAngle(28.69);
  }
}
