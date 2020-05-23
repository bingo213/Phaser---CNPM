class Game5_2 extends SceneRoot2 {
  constructor() {
    super("Game5_2");
  }
  create() {
    this.amount = 2;
    this.color1 = "orange";
    this.color2 = "purple";
    this.shapeLeftName = "square";
    this.shapeRightName = "hexagon";
    this.numberOfBallLeft = 1;
    this.numberOfBallRight = 1;
    this.conversionScene = "ConversionScene5";

    this.shapes = [];

    this.name = "Game5_2";

    super.create();
  }
  addShapesInBoard() {
    this.shapeLeft = new Rect(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftY - 170, 100, 100);
    this.shapeLeft.fillColor = 0x80DDEA;
    this.shapeLeft.scaleX = 0.5;
    this.shapeLeft.scaleY = 0.5;
    this.shapeRight = new Hex(this, module2Setting.elephantRightX - 20, module2Setting.elephantRightY - 170, 36, 36);
    this.shapeRight.fillColor = 0xFF7043;
  }

  addShapes() {
    this.shapes.push(

      //luc giac
      { //0
        image: this.add.image(600, 300, "h1").setName('hexagon')
      }, { //1
        image: this.add.image(770, 400, "h2").setName('hexagon')
      }, { //2
        image: this.add.image(560, 530, "h3").setName('hexagon')
      }, { //3
        image: this.add.image(750, 640, "h4").setName('hexagon')
      }, { //4
        image: this.add.image(860, 620, "h5").setName('hexagon')
      },

      //vuong
      { //5
        image: this.add.image(750, 270, "s1").setName('square')
      }, { //6
        image: this.add.image(770, 550, "s2").setName('square')
      }, { //7
        image: this.add.image(650, 620, "s3").setName('square')
      }, { //8
        image: this.add.image(870, 500, "s4").setName('square')
      }, { //9
        image: this.add.image(890, 340, "s5").setName('square')
      },

      //tam giac
      { //10
        image: this.add.image(650, 390, "t1").setName('triangle')
      }, { //11
        image: this.add.image(550, 400, "t2").setName('triangle')
      }, { //12
        image: this.add.image(650, 200, "t3").setName('triangle')
      },

      //tron
      { //13
        image: this.add.image(650, 490, "c1").setName('circle')
      }, { //14
        image: this.add.image(555, 650, "c2").setName('circle')
      }, { //15
        image: this.add.image(850, 250, "c2").setName('circle')
      }, { //16
        image: this.add.image(780, 490, "c3").setName('circle')
      });

    this.shapes[5].image.angle = 38;
    this.shapes[7].image.angle = -10;
    this.shapes[8].image.angle = -15;
    this.shapes[11].image.angle = 30;
    this.shapes[12].image.angle = 50;
  }
}
