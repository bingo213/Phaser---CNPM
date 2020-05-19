class Game2_2 extends SceneRoot1 {
  constructor() {
    super("Game2_2");
  }

  create() {
    this.name = "Game2_2";
    this.type = 2;
    this.initscene = "initscene5";
    this.notice = "notification2";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 2;
    this.conversionScene = "ConversionScene5";
    this.requireBrush = [];
    this.extraBrush = [];
    this.extraTypeShape = [Cir];
    super.create();
  }
  addRequiredBrush(){
     this.requireBrush.push({
       hexColor: 0x00C853,
       tintColor: 0x1b5e20,
       typeShape: Rect,
       colorRect: new Rect(this, this.brushX2[0] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(this.brushX2[0], module1Setting.brushY, "green"),
       text: this.add.text(this.brushX2[0] + 35, module1Setting.brushY - 20, "Rectangle", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       hexColor: 0xBFC9CA,
       tintColor: 0x34495e,
       typeShape: Tri,
       colorRect: new Rect(this, this.brushX2[1] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(this.brushX2[1], module1Setting.brushY, "gray"),
       text: this.add.text(this.brushX2[1] + 35, module1Setting.brushY - 20, "Triangles", {
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
      colorRect: new Rect(this, extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[0], module1Setting.brushY, "yellow")
    },
    {
      hexColor: 0x6D4C41,
      tintColor: 0x5D4037,
      colorRect: new Rect(this, extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[1], module1Setting.brushY, "brown")
    },
    {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[2], module1Setting.brushY, "blue")
    },
    {
      hexColor: 0xFFCCBC,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addShapes(){
    this.shapes.push(new Tri(this, 291, 261, 0, 60, 60, 80, 42, 0)); //Răng cá sấu
    this.shapes[0].setAngle(-49);
    this.shapes.push(new Tri(this, 365, 301, 0, 60, 60, 80, 42, 0)); //Răng cá sấu
    this.shapes[1].setAngle(-49);
    this.shapes.push(new Tri(this, 440, 342, 0, 60, 60, 80, 42, 0)); //Răng cá sấu
    this.shapes[2].setAngle(-49);
    this.shapes.push(new Tri(this, 810, 260, 0, 80, 80, 80, 42, 0)); //Gai trên lưng
    this.shapes.push(new Tri(this, 900, 260, 0, 80, 80, 80, 42, 0)); //Gai trên lưng
    this.shapes.push(new Tri(this, 990, 260, 0, 80, 80, 80, 42, 0)); //Gai trên lưng
    this.shapes.push(new Tri(this, 1122, 345, 0, 80, 80, 80, 42, 0)); //Gai trên đuôi
    this.shapes.push(new Rect(this, 400, 260, 265, 60)); //Hàm trên con cá sấu
    this.shapes[7].setAngle(28.69);
    this.shapes.push(new Rect(this, 385, 410, 265, 60)); //Hàm dưới con cá sấu
    this.shapes.push(new Rect(this, 859, 360, 414, 116)); //Thân con cá sấu
    this.shapes.push(new Rect(this, 1122, 420, 110, 65)); //Đuôi con cá sấu
    this.shapes.push(new Cir(this, 585, 352, 65, 65)); //Đầu cá sấu
    this.shapes.push(new Cir(this, 410, 520, 20, 20)); //Hình tròn bên dưới cá sấu
    this.shapes.push(new Cir(this, 480, 490, 35, 35)); //Hình tròn bên dưới cá sấu
    this.shapes.push(new Cir(this, 820, 480, 30, 30)); //Hình tròn bên dưới cá sấu
    this.shapes.push(new Cir(this, 920, 500, 45, 45)); //Hình tròn bên dưới cá sấu
    this.shapes.push(new Cir(this, 1115, 500, 35, 35)); //Hình tròn bên dưới cá sấu
  }
  }
