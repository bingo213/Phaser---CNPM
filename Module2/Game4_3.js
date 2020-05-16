class Game4_3 extends SceneRoot2 {
  constructor() {
    super("Game4_3");
  }

  create() {
    this.amount = 2;
    this.color1 = "green";
    this.color2 = "purple";
    this.shapeLeftName = "triangle";
    this.shapeRightName = "square";
    this.bg = "bg3";
    this.conversionScene = "ConversionScene9";

    this.shapes = [];

    this.name = "Game4_3";

    super.create();
  }
  addShapesInBoard() {
    this.shapeLeft = new Tri(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftY - 170);
    this.shapeLeft.fillColor = 0x48C9B0;
    this.shapeLeft.scaleX = 0.5;
    this.shapeLeft.scaleY = 0.5;
    this.shapeRight = new Rect(this, module2Setting.elephantRightX - 20, module2Setting.elephantRightY - 170, 48, 48);
    this.shapeRight.fillColor = 0xFF8F00;
  }

  addShapes() {
    //thêm các hình khối
    //tron
    this.shapes.push({ //0
      image: this.add.image(860, 620, 'c1').setName('circle')
    },
    { //1
      image: this.add.image(770, 400, 'c2').setName('circle')
    },

    // luc giac
    { //2
      image: this.add.image(550, 390, 'h1').setName('hexagon')
    },
    { //3
      image: this.add.image(750, 640, 'h3').setName('hexagon')
    },

    //vuong
    {  //4
      image: this.add.image(550, 490, 's1').setName('square')
    },
    {  //5
      image: this.add.image(770, 550, 's2').setName('square')
    },
    {  //6
      image: this.add.image(555, 650, 's3').setName('square')
    },
    { //7
      image: this.add.image(870, 500, 's4').setName('square')
    },
    { //8
      image: this.add.image(600, 300, 's5').setName('square')
    },

    //tam giac
    { //9
      image: this.add.image(650, 400, 't1').setName('triangle')
    },
    {  //10
      image: this.add.image(660, 530, 't2').setName('triangle')
    },
    { //11
      image: this.add.image(750, 270, 't3').setName('triangle')
    },
    { //12
      image: this.add.image(650, 620, 't4').setName('triangle')
    },
    { //13
      image: this.add.image(890, 340, 't5').setName('triangle')
    });
    this.shapes[4].image.angle = 38;
    this.shapes[6].image.angle = -10;
    this.shapes[7].image.angle = -15;
    this.shapes[10].image.angle = 30;
    this.shapes[11].image.angle = -30;
  }

}
