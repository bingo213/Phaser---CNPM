class Game5_1 extends Phaser.Scene {
  constructor() {
    super("Game5_1");
  }
  preload() {
    this.load.image("h1", "assets/hexagon1.png");
    this.load.image("h2", "assets/hexagon2.png");
    this.load.image("h3", "assets/hexagon3.png");
    this.load.image("h4", "assets/hexagon4.png");
    this.load.image("h5", "assets/hexagon5.png");
    this.load.image("c1", "assets/circle1.png");
    this.load.image("c2", "assets/circle2.png");
    this.load.image("t1", "assets/triangle1.png");
    this.load.image("t2", "assets/triangle2.png");
    this.load.image("s1", "assets/square1.png");
    this.load.image("s2", "assets/square2.png");
    this.load.image("s3", "assets/square3.png");
    this.load.image("s4", "assets/square4.png");
    this.load.image("s5", "assets/square5.png");
    this.load.image("bg5_1", "assets/initscene4.png");
    this.load.image("blueElephant", "assets/blueElephant.png");
    this.load.image("blueElephantSleep", "assets/blueElephantSleep.png");
    this.load.image("purpleElephantSleep", "assets/purpleElephantSleep.png");
    this.load.image("blueMouthOpen", "assets/blueMouthOpen.png");
    this.load.image("redLeftElephant", "assets/redLeftElephant.png");
    this.load.image("bone", "assets/bone.png");
    this.load.image("thigh", "assets/thigh.png");
    this.load.image("next", "assets/next.png");
  }
  create() {
    const gameScene = this.scene.get('Game5_1');

    this.incorrect = 0; //Đếm số lần làm sai

    this.add.image(1440 / 2, 800 / 2, "bg5_1");

    this.next = this.add.image(config.width / 2, config.height / 2 + 100, "next");
    this.next.visible = false;

    this.thigh1 = this.add.image(1120, 130, "thigh");
    this.thigh2 = this.add.image(1180, 130, "thigh");
    this.thigh3 = this.add.image(1240, 130, "thigh");
    this.bone1 = this.add.image(1120, 130, "bone");
    this.bone2 = this.add.image(1180, 130, "bone");
    this.bone3 = this.add.image(1240, 130, "bone");
    this.bone1.visible = false;
    this.bone2.visible = false;
    this.bone3.visible = false;

    this.sleepTime1 = 0; //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi lam ngủ

    const blueElephantX = 330;
    const blueElephantY = 390;
    this.mouthblueX = 230;
    this.mouthblueY = 330;

    const purpleElephantX = 1100;
    const purpleElephantY = 430;
    this.mouthPurpleX = 1220;
    this.mouthPurpleY = 330;

    this.blueElephant = this.add.image(blueElephantX, blueElephantY, "blueElephant");
    this.blueMouthOpen = this.add.image(blueElephantX, blueElephantY, "blueMouthOpen");
    this.blueMouthOpen.visible = false;
    this.blueElephantSleep = this.add.image(blueElephantX, blueElephantY, "blueElephantSleep");
    this.blueElephantSleep.visible = false;
    this.redLeftElephant = this.add.image(blueElephantX, blueElephantY + 20, "redLeftElephant");
    this.redLeftElephant.visible = false;

    this.purpleElephantSleep = this.add.image(purpleElephantX, purpleElephantY, "purpleElephantSleep");

    var backButton = this.add.text(170, 70, 'BACK', { //Nút BACK
      fontFamily: "Roboto Condensed",
      fontSize: 20,
      color: "#1a65ac",
    });

    var shape = new Phaser.Geom.Circle(10, 0, 40);
    backButton.setInteractive(shape, Phaser.Geom.Circle.Contains);
    backButton.on('pointerover', function() { //Hiệu ứng khi di chuột vào nút BACK nút sẽ có màu xanh đậm
      backButton.setTint(0x0000ff);
    });
    backButton.on('pointerout', function() { //Khi chuột không còn ở nút BACK thì trở lại màu như ban đầu
      backButton.clearTint();
    });
    backButton.on('pointerup', () => gameScene.scene.start('startGame')); //Khi nhấn chuột vào nút BACK thì quay trở lại màn hình bắt đầu (StartScene)
    this.add.text(550, 100, "Feed the Elephant", {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000000",
    });

    //thêm các hình khối
    //tron
    this.c1 = this.add.image(555, 640, "c1").setName('circle').setInteractive();
    this.c2 = this.add.image(770, 400, "c2").setName('circle').setInteractive();
    //lục giác
    this.h1 = this.add.image(890, 340, "h1").setName('hexagon').setInteractive();
    this.h2 = this.add.image(750, 640, "h2").setName('hexagon').setInteractive();
    this.h3 = this.add.image(650, 490, "h3").setName('hexagon').setInteractive();
    this.h3.angle = -30;
    this.h4 = this.add.image(600, 300, "h4").setName('hexagon').setInteractive();
    this.h5 = this.add.image(700, 270, "h5").setName('hexagon').setInteractive();
    //vuong
    this.s1 = this.add.image(560, 530, "s1").setName('square').setInteractive();
    this.s1.angle = 38;
    this.s2 = this.add.image(650, 390, "s2").setName('square').setInteractive();
    this.s3 = this.add.image(650, 620, "s3").setName('square').setInteractive();
    this.s3.angle = -10;
    this.s4 = this.add.image(870, 500, "s4").setName('square').setInteractive();
    this.s4.angle = -15;
    //tam giac
    this.t1 = this.add.image(770, 550, "t1").setName('triangle').setInteractive();
    this.t2 = this.add.image(550, 400, "t2").setName('triangle').setInteractive();
    this.t2.angle = 30;

    //t5.setScale(0.8);
    this.canNotSeeShape();

    this.hexagonInBoard = new Hex(this, blueElephantX + 70, blueElephantY - 165, 30, 30, 0x8729e5);
    this.hexagonInBoard.fillColor = 0x8729e5;
    // this.hexagonInBoard.scaleX = 0.5;
    // this.hexagonInBoard.scaleY = 0.5;

    this.hexagonText = this.add.text(config.width / 2 - 10, config.height / 2, 'I eat hexagons', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.tweens.timeline({
      targets: this.hexagonText,
      ease: 'Linear',
      tweens: [{
          x: this.hexagonText.x - 215,
          y: this.hexagonText.y,
          scaleX: 1.5,
          scaleY: 1.5,
          duration: 1500
        },
        {
          x: blueElephantX - 14,
          y: blueElephantY - 230,
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1000
        }
      ]
    });

    setTimeout(() => this.canSeeShape(), 6000);

    //kéo thả các khối
    this.input.setDraggable(this.t1);
    this.input.setDraggable(this.t2);
    this.input.setDraggable(this.h3);
    this.input.setDraggable(this.h4);
    this.input.setDraggable(this.h5);
    this.input.setDraggable(this.c1);
    this.input.setDraggable(this.c2);
    this.input.setDraggable(this.h1);
    this.input.setDraggable(this.h2);
    this.input.setDraggable(this.s1);
    this.input.setDraggable(this.s2);
    this.input.setDraggable(this.s3);
    this.input.setDraggable(this.s4);


    var check = false; //Kiểm tra xem có đang drag hay không

    //Drop zone
    var zone1 = this.add.zone(blueElephantX, blueElephantY, 350, 480).setRectangleDropZone(350, 480);

    //Vị trí các hình khi vào bụng voi lam
    this.blueElephantStomach = [{
        x: blueElephantX - 50,
        y: blueElephantY + 180
      },
      {
        x: blueElephantX + 50,
        y: blueElephantY + 180
      },
      {
        x: blueElephantX + 50,
        y: blueElephantY + 80
      },
      {
        x: blueElephantX - 50,
        y: blueElephantY + 80
      },
      {
        x: blueElephantX + 10,
        y: blueElephantY
      }
    ];

    this.input.on('dragstart', function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
      check = true;
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragend', function(pointer, gameObject, dropped) {
      check = false;
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
      if (gameScene.blueElephantStomach.length === 0) zone1.destroy();
    });

    this.input.on('drop', function(pointer, gameObject) {
      check = false;
      if (elephant === 1) {
        if (gameObject.name === 'hexagon') {
          gameScene.blueMouthOpen.visible = true;
          gameScene.moveToStomatch(elephant, gameObject);
          gameObject.input.enabled = false;

        } else {
          gameScene.incorrect++;
          gameScene.thighTurnToBone(gameScene.incorrect);
          gameScene.redLeftElephant.visible = true;
          setTimeout(function() {
            gameScene.redLeftElephant.visible = false;
          }, 1500);
          gameScene.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
        }

        if (gameScene.incorrect === 3)
          gameScene.giveNotice(gameScene);
        if (gameScene.blueElephantStomach.length === 0)
          setTimeout(() => gameScene.scene.start("ConversionScene10"), 5000);

      }
    });

    var rect1 = new Phaser.Geom.Rectangle(blueElephantX - 180, blueElephantY - 240, 350, 480);

    var elephant = 0;
    this.input.on('pointermove', function(pointer) {
      if (rect1.contains(pointer.x, pointer.y) && check === true) {
        gameScene.blueElephant.visible = false;
        gameScene.blueMouthOpen.visible = true;
        elephant = 1;
      } else {
        gameScene.blueElephant.visible = true;
        gameScene.blueMouthOpen.visible = false;
      }

    });
  }

  update() {
    const gameScene = this.scene.get('Game5_1');
    if (this.blueElephantStomach.length === 0) {
      if (this.sleepTime1 < 150)
        this.sleepTime1++;
      else {
        this.sleepblueElephant();
      }
    }
  }

  back(elephant, gameObject, x, y) {
    if (elephant === 1) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Linear',
        tweens: [{
            x: this.mouthblueX,
            y: this.mouthblueY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: this.mouthblueX,
            y: this.mouthblueY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 1000
          },
          {
            x: x,
            y: y,
            scaleX: 1,
            scaleY: 1,
            duration: 1000
          }
        ]
      });
    }

  }

  moveToStomatch(elephant, gameObject) {
    if (elephant === 1) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Linear',
        tweens: [{
            x: this.mouthblueX,
            y: this.mouthblueY,
            duration: 200
          },
          {
            x: this.blueElephantStomach[0].x,
            y: this.blueElephantStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.blueElephantStomach.shift();
    }

  }

  canSeeShape() {
    this.t1.visible = true;
    this.t2.visible = true;
    this.h3.visible = true;
    this.h4.visible = true;
    this.h5.visible = true;
    this.c1.visible = true;
    this.c2.visible = true;
    this.h1.visible = true;
    this.h2.visible = true;
    this.s1.visible = true;
    this.s2.visible = true;
    this.s3.visible = true;
    this.s4.visible = true;
  }

  canNotSeeShape() {
    this.t1.visible = false;
    this.t2.visible = false;
    this.h3.visible = false;
    this.h4.visible = false;
    this.h5.visible = false;
    this.c1.visible = false;
    this.c2.visible = false;
    this.h1.visible = false;
    this.h2.visible = false;
    this.s1.visible = false;
    this.s2.visible = false;
    this.s3.visible = false;
    this.s4.visible = false;
  }

  thighTurnToBone(incorrect) {
    if (incorrect === 1) {
      this.thigh1.visible = false;
      this.bone1.visible = true;
    } else if (incorrect === 2) {
      this.thigh2.visible = false;
      this.bone2.visible = true;
    } else {
      this.thigh3.visible = false;
      this.bone3.visible = true;
    }
  }

  giveNotice(gameScene) {
    this.canNotSeeShape();
    this.add.text(config.width / 2 - 190, config.height / 2 - 50, 'Too many mistakes!', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.add.text(config.width / 2 - 110, config.height / 2, 'Try again!', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.next.visible = true;
    this.next.setInteractive().on('pointerup', () => gameScene.scene.restart());
  }

  sleepblueElephant() {
    this.h1.visible = false;
    this.h2.visible = false;
    this.h3.visible = false;
    this.h4.visible = false;
    this.h5.visible = false;
    this.blueElephant.visible = false;
    this.blueMouthOpen.visible = false;
    this.hexagonText.visible = false;
    this.hexagonInBoard.visible = false;
    this.blueElephantSleep.visible = true;
  }

}
