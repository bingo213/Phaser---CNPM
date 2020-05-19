class Game3_1 extends SceneRoot1 {
  constructor() {
    super("Game3_1");
  }

  create() {
    this.name = "Game3_1";
    this.type = 2;
    this.initscene = "initscene4";
    this.notice = "notification2";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 2;
    this.conversionScene = "ConversionScene6";
    this.requireBrush = [];
    this.extraBrush = [];
    this.extraTypeShape = [Cir, Rect];
    super.create();
    }
    addRequiredBrush(){
     this.requireBrush.push({
       hexColor: 0x7CB342,
       tintColor: 0x1b5e20,
       typeShape: Tri,
       colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
       text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Triangles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       hexColor: 0xE74C3C,
       tintColor: 0x5D4037,
       typeShape: Hex,
       colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
       image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "brown"),
       text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Hexagons", {
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
      hexColor: 0xBFC9CA,
      tintColor: 0x34495e,
      colorRect: new Rect(this, module1Setting.extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[1], module1Setting.brushY, "gray")
    },
    {
      hexColor: 0x81D4FA,
      tintColor: 0x00838F,
      colorRect: new Rect(this, module1Setting.extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[2], module1Setting.brushY, "blue")
    },
    {
      hexColor: 0xFF1744,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, module1Setting.extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
    }

    addShapes(){
      //Mai cua và càng
      this.shapes[18] = new Hex(this, config.width / 2, config.height / 2, 100, 100);
      this.shapes[19] = new Hex(this, 555, 285, 50, 50);
      this.shapes[20] = new Hex(this, 886, 285, 50, 50);
      //Càng bên trái
      this.shapes[0] = new Tri(this, 623, 325, 0, 64, 32, 0, 64, 64);
      this.shapes[0].angle = -60;
      this.shapes[1] = new Tri(this, 465, 197, 0, 64, 80, 0, 64, 64);
      this.shapes[1].angle = -120;
      this.shapes[2] = new Tri(this, 440, 270, 0, 128, 64, 0, 128, 128);
      this.shapes[2].angle = -80;
      //Lá bên trái
      this.shapes[3] = new Tri(this, 230, 330, 0, 80, 32, 0, 80, 80);
      this.shapes[3].angle = 180;
      this.shapes[4] = new Tri(this, 300, 420, 0, 80, 32, 0, 80, 80);
      this.shapes[4].angle = 140;
      this.shapes[5] = new Tri(this, 410, 380, 0, 80, 32, 0, 80, 80);
      this.shapes[5].angle = -150;
      this.shapes[6] = new Tri(this, 400, 500, 0, 80, 32, 0, 80, 80);
      this.shapes[6].angle = -160;
      this.shapes[7] = new Tri(this, 335, 500, 0, 80, 32, 0, 80, 80);
      this.shapes[7].angle = 160;
      //Lá bên phải
      this.shapes[8] = new Tri(this, 1180, 300, 0, 80, 32, 0, 80, 80);
      this.shapes[8].angle = -170;
      this.shapes[9] = new Tri(this, 1070, 350, 0, 80, 32, 0, 80, 80);
      this.shapes[9].angle = 140;
      this.shapes[10] = new Tri(this, 1180, 430, 0, 80, 32, 0, 80, 80);
      this.shapes[10].angle = 180;
      this.shapes[11] = new Tri(this, 1070, 430, 0, 80, 32, 0, 80, 80);
      this.shapes[11].angle = -170;
      this.shapes[12] = new Tri(this, 1130, 510, 0, 80, 32, 0, 80, 80);
      this.shapes[12].angle = 180;
      //Càng bên phải
      this.shapes[13] = new Tri(this, 817, 325, 0, 64, 32, 0, 64, 64);
      this.shapes[13].angle = 60;
      this.shapes[14] = new Tri(this, 970, 200, 0, 64, 80, 10, 64, 64);
      this.shapes[14].angle = 180;
      this.shapes[15] = new Tri(this, 1000, 270, 0, 128, 64, 0, 128, 128);
      this.shapes[15].angle = 80;
      //Mắt
      this.shapes[16] = new Cir(this, config.width / 2 - 40, config.height / 2 - 120, 25, 25);
      this.shapes[17] = new Cir(this, config.width / 2 + 40, config.height / 2 - 120, 25, 25);
      //Chân cua
      this.shapes[21] = new Rect(this, config.width / 2 - 103, config.height / 2 + 100, 100, 30); //Trái
      this.shapes[21].angle = -30;
      this.shapes[22] = new Rect(this, config.width / 2 - 121, config.height / 2 + 68, 100, 30);
      this.shapes[22].angle = -30;
      this.shapes[23] = new Rect(this, config.width / 2 - 139, config.height / 2 + 36, 100, 30);
      this.shapes[23].angle = -30;
      this.shapes[24] = new Rect(this, config.width / 2 + 103, config.height / 2 + 100, 100, 30); //Phải
      this.shapes[24].angle = 30;
      this.shapes[25] = new Rect(this, config.width / 2 + 121, config.height / 2 + 68, 100, 30);
      this.shapes[25].angle = 30;
      this.shapes[26] = new Rect(this, config.width / 2 + 139, config.height / 2 + 36, 100, 30);
      this.shapes[26].angle = 30;

    }
}
