class Game1_3 extends SceneRoot1 {
  constructor() {
    super("Game1_3");
  }

  create() {
    this.name = "Game1_3";
    this.type = 3;
    this.initscene = "initscene3";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 3;
    this.conversionScene = "ConversionScene3";
    this.requireBrush = [];
    this.extraBrush = [];
    super.create();
  }

  addRequiredBrush(){
    var brushX = [545, 840, 1112];
    this.requireBrush.push({
      color: "yellow",
      hexColor: 0x66cc66,
      tintColor: 0x1b5e20,
      colorRect: new Rect(this, brushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(brushX[0], module1Setting.brushY, "yellow")
    },
    {
      color: "brown",
      hexColor: 0xBFC9CA,
      tintColor: 0xf57f17,
      colorRect: new Rect(this, brushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(brushX[1], module1Setting.brushY, "brown")
    },
    {
      color: "pink",
      hexColor: 0xBFC9CA,
      tintColor: 0xf57f17,
      colorRect: new Rect(this, brushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(brushX[2], module1Setting.brushY, "pink")
    });
    for(var i = 0; i < this.requireBrush.length; i++){
      this.requireBrush[i].colorRect.setStrokeStyle(0, 0xffffff);
      this.requireBrush[i].colorRect.fillColor = this.requireBrush[i].hexColor;
      this.requireBrush[i].colorRect.visible = false;
    }
  }

  addShapes(){
    this.shapes.push(new Tri(this, 265, 490, 0, 100, 100, 100, 102, 0));
    this.shapes.push(new Tri(this, 775, 293, 0, 100, 90, 100, 50, 0));
    this.shapes.push(new Tri(this, 895, 288, 0, 150, 80, 120, 90, 0));
    this.shapes[2].setAngle(20);
    this.shapes.push(new Tri(this, 850, 258, 0, 100, 90, 100, 50, 0));
    this.shapes[3].setAngle(-39);

    //Khai báo và vẽ 7 hình chữ nhật
    this.shapes.push(new Rect(this, 420, 410, 206, 131));
    this.shapes.push(new Rect(this, 351, 283, 70, 120));
    this.shapes.push(new Rect(this, 585, 320, 120, 170));
    this.shapes.push(new Rect(this, 820, 410, 206, 131));
    this.shapes.push(new Rect(this, 820, 509, 78, 63));
    this.shapes.push(new Rect(this, 1100, 410, 206, 131));
    this.shapes.push(new Rect(this, 1110, 509, 78, 63));

    //Khai báo và vẽ 7 hình tròn
    this.shapes.push(new Cir(this, 357, 512, 35));
    this.shapes.push(new Cir(this, 445, 512, 35));
    this.shapes.push(new Cir(this, 595, 477, 70));
    this.shapes.push(new Cir(this, 744, 512, 35));
    this.shapes.push(new Cir(this, 896, 512, 35));
    this.shapes.push(new Cir(this, 1034, 512, 35));
    this.shapes.push(new Cir(this, 1186, 512, 35));
  }
}
