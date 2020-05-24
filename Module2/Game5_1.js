class Game5_1 extends SceneRoot2 {
  constructor() {
    super("Game5_1");
  }
  create() {
    this.amount = 1;
    this.color1 = "blue";
    this.color2 = "purple";
    this.shapeLeftName = "hexagon";
    this.numberOfBallLeft = 2;
    this.numberOfBallRight = 0;
    this.conversionScene = "ConversionScene9";

    this.shapes = [];

    this.name = "Game5_1";

    super.create();
  }

  addShapesInBoard() {
    this.shapeLeft = new Hex(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftY - 170, 30, 30);
    this.shapeLeft.fillColor = 0x2980B9;
  }

  addShapes() {
    this.shapes.push(
      //tron
      { //0
        image: this.add.image(555, 640, "c1").setName('circle')
      }, { //1
        image: this.add.image(770, 400, "c2").setName('circle')
      },

      //lục giác
      { //2
        image: this.add.image(890, 340, "h1").setName('hexagon')
      }, { //3
        image: this.add.image(750, 640, "h2").setName('hexagon')
      }, { //4
        image: this.add.image(650, 490, "h3").setName('hexagon')
      }, { //5
        image: this.add.image(600, 300, "h4").setName('hexagon')
      }, { //6
        image: this.add.image(700, 270, "h5").setName('hexagon')
      },

      //vuong
      { //7
        image: this.add.image(560, 530, "s1").setName('square')
      }, { //8
        image: this.add.image(650, 390, "s2").setName('square')
      }, { //9
        image: this.add.image(650, 620, "s3").setName('square')
      }, { //10
        image: this.add.image(870, 500, "s4").setName('square')
      },

      //tam giac
      { //11
        image: this.add.image(770, 550, "t1").setName('triangle')
      }, { //12
        image: this.add.image(550, 400, "t2").setName('triangle')
      });

    this.shapes[4].image.angle = -30;
    this.shapes[7].image.angle = 38;
    this.shapes[9].image.angle = -10;
    this.shapes[10].image.angle = -15;
    this.shapes[12].image.angle = 30;
  }
}
