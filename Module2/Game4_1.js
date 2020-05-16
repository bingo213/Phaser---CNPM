class Game4_1 extends SceneRoot2 {
  constructor() {
    super("Game4_1");
  }
  create() {
    this.amount = 2;
    this.color1 = "orange";
    this.color2 = "purple";
    this.shapeLeftName = "triangle";
    this.shapeRightName = "circle";
    this.bg = "bg1";
    this.conversionScene = "ConversionScene7";

    this.shapes = [];

    this.name = "Game4_1";

    super.create();
  }
  addShapesInBoard() {
    this.shapeLeft = new Tri(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftY - 170);
    this.shapeLeft.fillColor = 0xFF4081;
    this.shapeLeft.scaleX = 0.5;
    this.shapeLeft.scaleY = 0.5;
    this.shapeRight = new Cir(this, module2Setting.elephantRightX - 20, module2Setting.elephantRightY - 170, 35, 35);
    this.shapeRight.fillColor = 0x00C853;
  }
  addShapes(){
    this.shapes.push(
    //tron
    { //0
      image: this.add.image(600, 300, "c1").setName('circle')
    },
    { //1
      image: this.add.image(770, 400, "c2").setName('circle')
    },
    { //2
      image: this.add.image(560, 530, "c3").setName('circle')
    },
    { //3
      image: this.add.image(750, 640, "c4").setName('circle')
    },
    { //4
      image: this.add.image(860, 620, "c5").setName('circle')
    },

    //vuong
    { //5
      image: this.add.image(750, 270, "s1").setName('square')
    },
    { //6
      image: this.add.image(770, 550, "s2").setName('square')
    },
    { //7
      image: this.add.image(650, 620, "s3").setName('square')
    },
    { //8
      image: this.add.image(870, 500, "s4").setName('square')
    },

    //tam giac
    { //9
      image: this.add.image(650, 390, "t1").setName('triangle')
    },
    { //10
      image: this.add.image(550, 400, "t2").setName('triangle')
    },
    { //11
      image: this.add.image(650, 490, "t3").setName('triangle')
    },
    { //12
      image: this.add.image(555, 650, "t4").setName('triangle')
    },
    { //13
      image: this.add.image(890, 340, "t5").setName('triangle')
    });
    this.shapes[5].image.angle = 38;
    this.shapes[7].image.angle = -10;
    this.shapes[8].image.angle = -15;
    this.shapes[10].image.angle = 30;
    this.shapes[11].image.angle = -30;
  }
}
