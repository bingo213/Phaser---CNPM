class Game4_2 extends SceneRoot2 {
  constructor() {
    super("Game4_2");
  }
  create() {
    this.amount = 1;
    this.color1 = "blue";
    this.color2 = "purple";
    this.shapeLeftName = "triangle";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight = 1;
    this.conversionScene = "ConversionScene8";

    this.shapes = [];

    this.name = "Game4_2";

    super.create();
  }

  addShapesInBoard() {
    this.shapeLeft = new Tri(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftY - 170);
    this.shapeLeft.fillColor = 0xFFAB00;
    this.shapeLeft.scaleX = 0.5;
    this.shapeLeft.scaleY = 0.5;
  }

  addShapes() {
    this.shapes.push(
      //tron
      { //0
        image: this.add.image(555, 640, "c1").setName('circle')
      }, { //1
        image: this.add.image(770, 400, "c2").setName('circle')
      }, { //2
        image: this.add.image(770, 200, "c3").setName('circle')
      }, { //3
        image: this.add.image(880, 640, "c4").setName('circle')
      },

      //lục giác
      { //4
        image: this.add.image(890, 340, "h1").setName('hexagon')
      }, { //5
        image: this.add.image(750, 640, "h2").setName('hexagon')
      },

      //vuong
      { //6
        image: this.add.image(560, 530, "s1").setName('square')
      }, { //7
        image: this.add.image(650, 390, "s2").setName('square')
      }, { //8
        image: this.add.image(650, 620, "s3").setName('square')
      }, { //9
        image: this.add.image(870, 500, "s4").setName('square')
      }, { //10
        image: this.add.image(600, 200, "s5").setName('square')
      }, { //11
        image: this.add.image(800, 300, "s5").setName('square')
      },

      //tam giac
      { //12
        image: this.add.image(770, 550, "t1").setName('triangle')
      }, { //13
        image: this.add.image(550, 380, "t2").setName('triangle')
      }, { //14
        image: this.add.image(650, 490, "t3").setName('triangle')
      }, { //15
        image: this.add.image(900, 200, "t4").setName('triangle')
      }, { //16
        image: this.add.image(700, 270, "t5").setName('triangle')
      });
    this.shapes[7].image.angle = 38;
    this.shapes[8].image.angle = -10;
    this.shapes[9].image.angle = -15;
    this.shapes[13].image.angle = 30;
    this.shapes[14].image.angle = -30;
  }

}
