class Game1_1 extends SceneRoot1 {
  constructor() {
    super("Game1_1");
  }

  create() {
    this.name = "Game1_1";
    this.type = 1;
    this.notice = "notification";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.nextScene = "Game1_2";
    this.numberOfBallLeft = 3;
    this.numberOfBallRight = 0;
    this.extraTypeShape = [];
    super.create();
  }
  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x66cc66,
      tintColor: 0x1b5e20,
      typeShape: Rect,
      colorRect: new Rect(this, module1Setting.brushX1[0] + 85, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX1[0] + 35, module1Setting.brushY - 20, "Rectangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xff6699,
      tintColor: 0xe91e63,
      typeShape: Tri,
      colorRect: new Rect(this, module1Setting.brushX1[1] + 80, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[1], module1Setting.brushY, "pink"),
      text: this.add.text(module1Setting.brushX1[1] + 35, module1Setting.brushY - 20, "Triangles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0xffb300,
      tintColor: 0xf57f17,
      typeShape: Cir,
      colorRect: new Rect(this, module1Setting.brushX1[2] + 75, module1Setting.brushY, 200, 60),
      image: this.add.image(module1Setting.brushX1[2], module1Setting.brushY, "yellow"),
      text: this.add.text(module1Setting.brushX1[2] + 35, module1Setting.brushY - 20, "Circles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    });
    super.addRequiredBrush();
  }
  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.push(
      this.add.image(368, 253, "eye1_1")
    );
    super.addExtraImageInFrontOfShape();
  }
  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(340, 180, "beard"),
      this.add.image(850, 350, "tree")
    );
    super.addExtraImageBehindShape();
  }
  addShapes() {
    //Khai báo và vẽ 5 hình tròn
    this.shapes.push(
      new Cir(this, 368, 253, 30), //0: Đầu con bướm
      new Cir(this, 482, 401, 23), //1: Thân bướm
      new Cir(this, 452, 366, 23), //2: Thân bướm
      new Cir(this, 512, 438, 23), //3: Thân bướm
      new Cir(this, 920, 312, 45), //4: Nhị hoa

      new Rect(this, 415, 315, 50, 50), //5: Thân bướm
      //Lá của hoa
      new Rect(this, 827, 224, 100, 100), //6
      new Rect(this, 1012, 224, 100, 100), //7
      new Rect(this, 827, 404, 100, 100), //8
      new Rect(this, 1012, 404, 100, 100), //9

      //Cánh bướm
      new Tri(this, 919, 175, 0, 148, 80, 148, 45, 0), //10
      new Tri(this, 920, 450, 0, 148, 80, 148, 45, 0), //11
      new Tri(this, 1059, 315, 0, 148, 78, 148, 45, 0), //12
      new Tri(this, 779, 315, 0, 148, 78, 148, 45, 0), //13
      //Cánh hoa
      new Tri(this, 530, 230, 0, 200, 100, 200, 45, 0), //14
      new Tri(this, 300, 400, 0, 200, 100, 200, 45, 0), //15
      new Tri(this, 615, 360, 0, 200, 100, 200, 45, 0), //16
      new Tri(this, 415, 510, 0, 200, 100, 200, 45, 0), //17
    );
    this.shapes[5].setAngle(50);
    this.shapes[11].setAngle(180);
    this.shapes[12].setAngle(90);
    this.shapes[13].setAngle(-90);
    this.shapes[14].setAngle(50);
    this.shapes[15].setAngle(-130);
    this.shapes[16].setAngle(125);
    this.shapes[17].setAngle(155);
  }
}
