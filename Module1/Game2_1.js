class Game2_1 extends SceneRoot1 {
  constructor() {
    super("Game2_1");
  }

  create() {
    this.name = "Game2_1";
    this.type = 2;
    this.notice = "notification2";
    this.textTitle = "Color the rectangles and circles";
    this.textTitleX = 405;
    this.nextScene = "Game2_2";
    this.extraTypeShape = [Tri];
    this.numberOfBallLeft = 2;
    this.numberOfBallRight = 0;
    super.create();
  }
  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x00C853,
      tintColor: 0x1b5e20,
      typeShape: Cir,
      colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Circles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xBFC9CA,
      tintColor: 0x34495e,
      typeShape: Rect,
      colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "gray"),
      text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Rectangles", {
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
      colorRect: new Rect(this, module1Setting.extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[0], module1Setting.brushY, "yellow")
    }, {
      hexColor: 0x6D4C41,
      tintColor: 0x5D4037,
      colorRect: new Rect(this, module1Setting.extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[1], module1Setting.brushY, "brown")
    }, {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, module1Setting.extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[2], module1Setting.brushY, "blue")
    }, {
      hexColor: 0xFFCCBC,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, module1Setting.extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2, "background2_1")
    );
    super.addExtraImageBehindShape();
  }

  addShapes() {
    this.shapes.push(
      //Nóc lâu đài
      new Tri(this, 455, 189, 0, 70, 90, 70, 45, 0),
      new Tri(this, 715, 249, 0, 150, 70, 150, 32, 0),
      new Tri(this, 975, 189, 0, 70, 90, 70, 45, 0),

      new Rect(this, 589, 466, 140, 100),
      new Rect(this, 841, 460, 140, 100),
      new Rect(this, 455, 380, 122, 308),
      new Rect(this, 715, 430, 106, 208),
      new Rect(this, 975, 380, 122, 308),
      //Cây
      new Cir(this, 275, 450, 60, 60),
      new Cir(this, 1155, 450, 60, 60)
    );
  }

}
