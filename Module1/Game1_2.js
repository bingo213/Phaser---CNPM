class Game1_2 extends SceneRoot1 {
  constructor() {
    super("Game1_2");
  }
  create() {
    this.name = "Game1_2";
    this.type = 1; //Kiểu 1: Yêu cầu tô màu vào tất cả các hình
    this.initscene = "initscene2";
    this.notice = "notification";
    this.textTitle = "Color the shapes";
    this.textTitleX = 555;
    this.textTitleY = 100;
    this.amount = 3; //Số lượng cọ ban đầu
    this.conversionScene = "ConversionScene2";
    this.requireBrush = []; //Loại hình bắc buộc phải tô màu
    this.extraTypeShape = []; //Mảng loại hình không bắt buộc phải tô màu
    super.create();
  }
  addShapes(){
    //Khai báo và vẽ 9 hình tam giác
    this.shapes.push(new Tri(this, 1140, 190, 0, 50, 50, 50, 0, 0));
    this.shapes[0].setAngle(135);
    this.shapes.push(new Tri(this, 1140, 264, 0, 100, 100, 100, 0, 0));
    this.shapes[1].setAngle(135);
    this.shapes.push(new Tri(this, 1140, 375, 0, 150, 150, 150, 0, 0));
    this.shapes[2].setAngle(135);
    this.shapes.push(new Tri(this, 900, 200, 0, 70, 70, 70, 0, 0));
    this.shapes[3].setAngle(135);
    this.shapes.push(new Tri(this, 900, 303, 0, 140, 140, 140, 0, 0));
    this.shapes[4].setAngle(135);
    this.shapes.push(new Tri(this, 900, 435, 0, 180, 180, 180, 0, 0));
    this.shapes[5].setAngle(135);
    this.shapes.push(new Tri(this, 300, 243, 0, 70, 70, 70, 0, 0));
    this.shapes[6].setAngle(135);
    this.shapes.push(new Tri(this, 300, 348, 0, 140, 140, 140, 0, 0));
    this.shapes[7].setAngle(135);
    this.shapes.push(new Tri(this, 300, 461, 0, 150, 150, 150, 0, 0));
    this.shapes[8].setAngle(135);

    //Khai báo và vẽ 3 hình tròn
    this.shapes.push(new Cir(this, 500, 276, 30));
    this.shapes.push(new Cir(this, 500, 348, 40));
    this.shapes.push(new Cir(this, 500, 450, 60));

    //Khai báo và vẽ 4 hình vuông
    this.shapes.push(new Rect(this, 668, 492, 100, 100)); //Hộp quà
    //Gốc cây
    this.shapes.push(new Rect(this, 300, 500, 70, 70));
    this.shapes.push(new Rect(this, 900, 472, 65, 65));
    this.shapes.push(new Rect(this, 1140, 406, 55, 55));
  }
  addRequiredBrush(){
     this.requireBrush.push({
       hexColor: 0x27AE60,
       tintColor: 0x1b5e20,
       typeShape: Tri,
       colorRect: new Rect(this, module1Setting.brushX1[0] + 85, module1Setting.brushY, 220, 60),
       image: this.add.image(module1Setting.brushX1[0], module1Setting.brushY, "green"),
       text: this.add.text(module1Setting.brushX1[0] + 35, module1Setting.brushY - 20, "Triangles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       hexColor: 0x85C1E9,
       tintColor: 0x21618C,
       typeShape: Cir,
       colorRect: new Rect(this, module1Setting.brushX1[1] + 80, module1Setting.brushY, 220, 60),
       image: this.add.image(module1Setting.brushX1[1], module1Setting.brushY, "blue"),
       text: this.add.text(module1Setting.brushX1[1] + 35, module1Setting.brushY - 20, "Circles", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     },
     {
       hexColor: 0xE67E22,
       tintColor: 0xBA4A00,
       typeShape: Rect,
       colorRect: new Rect(this, module1Setting.brushX1[2] + 75, module1Setting.brushY, 200, 60),
       image: this.add.image(module1Setting.brushX1[2], module1Setting.brushY, "brown"),
       text: this.add.text(module1Setting.brushX1[2] + 35, module1Setting.brushY - 20, "Squares", {
         fontFamily: "Roboto Condensed",
         fontSize: 35,
         color: "#000",
       })
     });
     super.addRequiredBrush();
  }
}
