class Game2_1 extends SceneRoot1 {
  constructor() {
    super("Game2_1");
  }

  create() {
    this.name = "Game2_1";
    this.type = 2;
    this.initscene = "initscene4";
    this.notice = "notification2";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 2;
    this.conversionScene = "ConversionScene4";
    this.requireBrush = [];
    this.extraBrush = [];
    this.extraTypeShape = [Tri];
    super.create();
  }
  addRequiredBrush(){
     this.requireBrush.push({
       hexColor: 0x00C853,
       tintColor: 0x1b5e20,
       typeShape: Cir,
       colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
       text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Circles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       hexColor: 0xBFC9CA,
       tintColor: 0x34495e,
       typeShape: Rect,
       colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "gray"),
       text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Rectangles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     });
     super.addRequiredBrush();
  }

  addExtraBrush(){
    var extraBrushX = [245, 445, 645, 845];
    this.extraBrush.push({
      hexColor: 0xFBC02D,
      tintColor: 0xFFD600,
      colorRect: new Rect(this, module1Setting.extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[0], module1Setting.brushY, "yellow")
    },
    {
      hexColor: 0x6D4C41,
      tintColor: 0x5D4037,
      colorRect: new Rect(this, module1Setting.extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[1], module1Setting.brushY, "brown")
    },
    {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, module1Setting.extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[2], module1Setting.brushY, "blue")
    },
    {
      hexColor: 0xFFCCBC,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, module1Setting.extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addShapes(){
    this.shapes.push(new Tri(this, 455, 189, 0, 70, 90, 70, 45, 0)); //Hình tam giác thứ 1 từ trái sang
    this.shapes.push(new Tri(this, 715, 249, 0, 150, 70, 150, 32, 0)); //Hình tam giác thứ 2 từ trái sang
    this.shapes.push(new Tri(this, 975, 189, 0, 70, 90, 70, 45, 0)); //Hình tam giác thứ 3 từ trái sang
    this.shapes.push(new Rect(this, 589, 466, 140, 100)); //Hình chữ nhật thứ 2 từ trái sang
    this.shapes.push(new Rect(this, 841, 460, 140, 100)); //Hình chữ nhật thứ 4 từ trái sang
    this.shapes.push(new Rect(this, 455, 380, 122, 308)); //Hình chữ nhật thứ 1 từ trái sang
    this.shapes.push(new Rect(this, 715, 430, 106, 208)); //Hình chữ nhật thứ 3 từ trái sang
    this.shapes.push(new Rect(this, 975, 380, 122, 308)); //Hình chữ nhật thứ 5 từ trái sang
    this.shapes.push(new Cir(this, 275, 450, 60, 60)); //Hình tròn thứ 1 từ trái sang
    this.shapes.push(new Cir(this, 1155, 450, 60, 60)); //Hình tròn thứ 2 từ trái sang
  }

}
