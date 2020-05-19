class Game1_1 extends SceneRoot1 {
  constructor() {
    super("Game1_1");
  }

  create() {
    this.name = "Game1_1";
    this.type = 1;
    this.initscene = "initscene1";
    this.notice = "notification";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 3;
    this.conversionScene = "ConversionScene1";
    this.requireBrush = [];
    this.extraTypeShape = [];
    super.create();
  }
 addRequiredBrush(){
    this.requireBrush.push({
      hexColor: 0x66cc66,
      tintColor: 0x1b5e20,
      typeShape: Rect,
      colorRect: new Rect(this, module1Setting.brushX1[0] + 85, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX1[0] + 35, module1Setting.brushY - 20, "Rectangle", {
        fontFamily: "Roboto Condensed",
        fontSize: 35,
        color: "#000",
      })
    },
    {
      hexColor: 0xff6699,
      tintColor: 0xe91e63,
      typeShape: Tri,
      colorRect: new Rect(this, module1Setting.brushX1[1] + 80, module1Setting.brushY, 220, 60),
      image: this.add.image(module1Setting.brushX1[1], module1Setting.brushY, "pink"),
      text: this.add.text(module1Setting.brushX1[1] + 35, module1Setting.brushY - 20, "Triangles", {
        fontFamily: "Roboto Condensed",
        fontSize: 35,
        color: "#000",
      })
    },
    {
      hexColor: 0xffb300,
      tintColor: 0xf57f17,
      typeShape: Cir,
      colorRect: new Rect(this, module1Setting.brushX1[2] + 75, module1Setting.brushY, 200, 60),
      image: this.add.image(module1Setting.brushX1[2], module1Setting.brushY, "yellow"),
      text: this.add.text(module1Setting.brushX1[2] + 35, module1Setting.brushY - 20, "Circles", {
        fontFamily: "Roboto Condensed",
        fontSize: 35,
        color: "#000",
      })
    });
    super.addRequiredBrush();
 }
  addShapes() {
    //Khai báo và vẽ 5 hình tròn
    this.shapes.push(new Cir(this, 368, 253, 30));
    this.shapes.push(new Cir(this, 452, 366, 23));
    this.shapes.push(new Cir(this, 482, 401, 23));
    this.shapes.push(new Cir(this, 511, 440, 23));
    this.shapes.push(new Cir(this, 920, 312, 45));

    //Khai báo và vẽ 5 hình vuông
    this.shapes.push(new Rect(this, 415, 315, 50, 50));
    this.shapes[5].setAngle(50); //Hình r1 là thân chú bướm nên xoay góc 50 độ
    this.shapes.push(new Rect(this, 827, 224, 100, 100));
    this.shapes.push(new Rect(this, 1012, 224, 100, 100));
    this.shapes.push(new Rect(this, 827, 404, 100, 100));
    this.shapes.push(new Rect(this, 1012, 404, 100, 100));

    //Khai báo và vẽ 8 hình tam giác
    this.shapes.push(new Tri(this, 919, 175, 0, 148, 80, 148, 45, 0));
    this.shapes.push(new Tri(this, 920, 450, 0, 148, 80, 148, 45, 0));
    this.shapes[11].setAngle(180);
    this.shapes.push(new Tri(this, 1059, 315, 0, 148, 78, 148, 45, 0));
    this.shapes[12].setAngle(90);
    this.shapes.push(new Tri(this, 779, 315, 0, 148, 78, 148, 45, 0));
    this.shapes[13].setAngle(-90);
    this.shapes.push(new Tri(this, 530, 230, 0, 200, 100, 200, 45, 0));
    this.shapes[14].setAngle(50);
    this.shapes.push(new Tri(this, 300, 400, 0, 200, 100, 200, 45, 0));
    this.shapes[15].setAngle(-130);
    this.shapes.push(new Tri(this, 615, 360, 0, 200, 100, 200, 45, 0));
    this.shapes[16].setAngle(125);
    this.shapes.push(new Tri(this, 415, 510, 0, 200, 100, 200, 45, 0));
    this.shapes[17].setAngle(155);
  }
}
