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
    super.create()
  }
  addRequiredBrush(){
     this.requireBrush.push({
       color: "green",
       hexColor: 0x66cc66,
       tintColor: 0x1b5e20,
       typeShape: Cir,
       shapeName: "Circle",
       colorRect: new Rect(this, this.brushX2[0] + 88, module1Setting.brushY, 220, 60),
       image: this.add.image(this.brushX2[0], module1Setting.brushY, "green"),
       text: this.add.text(this.brushX2[0] + 35, module1Setting.brushY - 20, "Circles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       color: "gray",
       hexColor: 0xffb300,
       tintColor: 0xf57f17,
       typeShape: Rect,
       shapeName: "Rectangles",
       colorRect: new Rect(this, this.brushX2[1] + 88, module1Setting.brushY, 200, 60),
       image: this.add.image(this.brushX2[1], module1Setting.brushY, "gray"),
       text: this.add.text(this.brushX2[1] + 35, module1Setting.brushY - 20, "Rectangles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     });
     for(var i = 0; i < this.requireBrush.length; i++){
       this.requireBrush[i].colorRect.setStrokeStyle(0, 0xffffff);
       this.requireBrush[i].colorRect.fillColor = this.requireBrush[i].hexColor;
       this.requireBrush[i].colorRect.visible = false;
     }
  }

  addExtraBrush(){
    var extraBrushX = [245, 445, 645, 845];
    this.extraBrush.push({
      color: "yellow",
      hexColor: 0x66cc66,
      tintColor: 0x1b5e20,
      colorRect: new Rect(this, extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[0], module1Setting.brushY, "yellow")
    },
    {
      color: "brown",
      hexColor: 0xBFC9CA,
      tintColor: 0xf57f17,
      colorRect: new Rect(this, extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[1], module1Setting.brushY, "brown")
    },
    {
      color: "blue",
      hexColor: 0xBFC9CA,
      tintColor: 0xf57f17,
      colorRect: new Rect(this, extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[2], module1Setting.brushY, "blue")
    },
    {
      color: "pink",
      hexColor: 0xBFC9CA,
      tintColor: 0xf57f17,
      colorRect: new Rect(this, extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[3], module1Setting.brushY, "pink")
    });
    for(var i = 0; i < this.extraBrush.length; i++){
      this.extraBrush[i].colorRect.setStrokeStyle(0, 0xffffff);
      this.extraBrush[i].colorRect.fillColor = this.extraBrush[i].hexColor;
      this.extraBrush[i].colorRect.visible = false;
    }
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
