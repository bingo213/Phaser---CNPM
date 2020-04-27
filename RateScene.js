class RateScene extends Phaser.Scene {
  constructor() {
    super("RateScene");
  }

  preload() {
    this.load.image("rateScene", "assets/rateScene.png");
    this.load.image("next", "assets/next.png");
    this.load.image("grayStar", "assets/grayStar.png");
    this.load.image("yellowStar", "assets/yellowStar.png");
    this.load.image("darkYellowStar", "assets/darkYellowStar.png");
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, "rateScene");

    var rated = 0; //Kiểm tra xem người chơi đã đánh giá chưa, nếu chưa đánh giá thì không nhấn được nút NEXT

    const gameScene = this.scene.get('RateScene');

    var grayStar1 = this.add.image(config.width / 2 - 260, config.height / 2 - 80, "grayStar");
    var grayStar2 = this.add.image(config.width / 2 - 130, config.height / 2 - 80, "grayStar");
    var grayStar3 = this.add.image(config.width / 2, config.height / 2 - 80, "grayStar");
    var grayStar4 = this.add.image(config.width / 2 + 130, config.height / 2 - 80, "grayStar");
    var grayStar5 = this.add.image(config.width / 2 + 260, config.height / 2 - 80, "grayStar");

    //Các ngôi sao màu vàng ở vị trí giống các ngôi sao màu xám, nhưng người chơi chưa nhìn thấy những ngôi sao này
    var yellowStar1 = this.add.image(grayStar1.x, grayStar1.y, "yellowStar");
    yellowStar1.visible = false;
    var yellowStar2 = this.add.image(grayStar2.x, grayStar2.y, "yellowStar");
    yellowStar2.visible = false;
    var yellowStar3 = this.add.image(grayStar3.x, grayStar3.y, "yellowStar");
    yellowStar3.visible = false;
    var yellowStar4 = this.add.image(grayStar4.x, grayStar4.y, "yellowStar");
    yellowStar4.visible = false;
    var yellowStar5 = this.add.image(grayStar5.x, grayStar5.y, "yellowStar");
    yellowStar5.visible = false;

    //Sao vàng đậm ban đầu người chơi chưa nhìn thấy
    var darkYellowStar1 = this.add.image(grayStar1.x, grayStar1.y, "darkYellowStar");
    darkYellowStar1.visible = false;
    var darkYellowStar2 = this.add.image(grayStar2.x, grayStar2.y, "darkYellowStar");
    darkYellowStar2.visible = false;
    var darkYellowStar3 = this.add.image(grayStar3.x, grayStar3.y, "darkYellowStar");
    darkYellowStar3.visible = false;
    var darkYellowStar4 = this.add.image(grayStar4.x, grayStar4.y, "darkYellowStar");
    darkYellowStar4.visible = false;
    var darkYellowStar5 = this.add.image(grayStar5.x, grayStar5.y, "darkYellowStar");
    darkYellowStar5.visible = false;

    var button = new Phaser.Geom.Circle(46, 45, 50);

    //Hiệu ứng khi di chuột qua các ngôi sao màu xám => các ngôi sao xám sẽ trở thành sao vàng
    //Khi nhấn chuột vào ngôi sao => sao vàng đậm hiện lên
    grayStar1.setInteractive(button, Phaser.Geom.Circle.Contains);
    grayStar1.on('pointerover', function() {
      yellowStar1.visible = true;
    });
    grayStar1.on('pointerout', function() {
      yellowStar1.visible = false;
    });
    grayStar1.on('pointerdown', function() {
      rated = 1;

      darkYellowStar1.visible = true;

      yellowStar2.visible = false;
      darkYellowStar2.visible = false;
      yellowStar3.visible = false;
      darkYellowStar3.visible = false;
      yellowStar4.visible = false;
      darkYellowStar4.visible = false;
      yellowStar5.visible = false;
      darkYellowStar5.visible = false;
    });

    grayStar2.setInteractive(button, Phaser.Geom.Circle.Contains);
    grayStar2.on('pointerover', function() {
      yellowStar1.visible = true;
      yellowStar2.visible = true;
    });
    grayStar2.on('pointerout', function() {
      yellowStar1.visible = false;
      yellowStar2.visible = false;
    });
    grayStar2.on('pointerdown', function() {
      rated = 1;

      darkYellowStar1.visible = true;
      darkYellowStar2.visible = true;

      yellowStar3.visible = false;
      darkYellowStar3.visible = false;
      yellowStar4.visible = false;
      darkYellowStar4.visible = false;
      yellowStar5.visible = false;
      darkYellowStar5.visible = false;
    });

    grayStar3.setInteractive(button, Phaser.Geom.Circle.Contains);
    grayStar3.on('pointerover', function() {
      yellowStar1.visible = true;
      yellowStar2.visible = true;
      yellowStar3.visible = true;
    });
    grayStar3.on('pointerout', function() {
      yellowStar1.visible = false;
      yellowStar2.visible = false;
      yellowStar3.visible = false;
    });
    grayStar3.on('pointerdown', function() {
      rated = 1;

      darkYellowStar1.visible = true;
      darkYellowStar2.visible = true;
      darkYellowStar3.visible = true;

      yellowStar4.visible = false;
      darkYellowStar4.visible = false;
      yellowStar5.visible = false;
      darkYellowStar5.visible = false;
    });

    grayStar4.setInteractive(button, Phaser.Geom.Circle.Contains);
    grayStar4.on('pointerover', function() {
      yellowStar1.visible = true;
      yellowStar2.visible = true;
      yellowStar3.visible = true;
      yellowStar4.visible = true;
    });
    grayStar4.on('pointerout', function() {
      yellowStar1.visible = false;
      yellowStar2.visible = false;
      yellowStar3.visible = false;
      yellowStar4.visible = false;
    });
    grayStar4.on('pointerdown', function() {
      rated = 1;

      darkYellowStar1.visible = true;
      darkYellowStar2.visible = true;
      darkYellowStar3.visible = true;
      darkYellowStar4.visible = true;

      yellowStar5.visible = false;
      darkYellowStar5.visible = false;
    });

    grayStar5.setInteractive(button, Phaser.Geom.Circle.Contains);
    grayStar5.on('pointerover', function() {
      yellowStar1.visible = true;
      yellowStar2.visible = true;
      yellowStar3.visible = true;
      yellowStar4.visible = true;
      yellowStar5.visible = true;
    });
    grayStar5.on('pointerout', function() {
      yellowStar1.visible = false;
      yellowStar2.visible = false;
      yellowStar3.visible = false;
      yellowStar4.visible = false;
      yellowStar5.visible = false;
    });
    grayStar5.on('pointerdown', function() {
      rated = 1;

      darkYellowStar1.visible = true;
      darkYellowStar2.visible = true;
      darkYellowStar3.visible = true;
      darkYellowStar4.visible = true;
      darkYellowStar5.visible = true;
    });



    var next = this.add.image(config.width / 2, config.height / 2 + 100, "next");

    var button = new Phaser.Geom.Circle(46, 45, 50);
    next.setInteractive(button, Phaser.Geom.Circle.Contains);
    next.on('pointerover', function() {
      if (rated === 1)
        next.setTint(0x303f9f);
    });
    next.on('pointerout', function() {
      if (rated === 1)
        next.clearTint();
    });
    next.on('pointerup', function() {
      if (rated === 1)
        gameScene.scene.start('startGame');
    });
  }
}
