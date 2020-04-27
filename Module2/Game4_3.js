class Game4_3 extends Phaser.Scene {
  constructor() {
    super("Game4_3");
  }
  preload() {
    this.load.image("t1", "assets/triangle1.png");
    this.load.image("t2", "assets/triangle2.png");
    this.load.image("t3", "assets/triangle3.png");
    this.load.image("t4", "assets/triangle4.png");
    this.load.image("t5", "assets/triangle5.png");
    this.load.image("h1", "assets/hexagon1.png");
    this.load.image("h2", "assets/hexagon2.png");
    this.load.image("h3", "assets/hexagon3.png");
    this.load.image("h4", "assets/hexagon4.png");
    this.load.image("h5", "assets/hexagon5.png");
    this.load.image("c1", "assets/circle1.png");
    this.load.image("c2", "assets/circle2.png");
    this.load.image("c3", "assets/circle3.png");
    this.load.image("c4", "assets/circle4.png");
    this.load.image("c5", "assets/circle5.png");
    this.load.image("s1", "assets/square1.png");
    this.load.image("s2", "assets/square2.png");
    this.load.image("s3", "assets/square3.png");
    this.load.image("s4", "assets/square4.png");
    this.load.image("s5", "assets/square5.png");
    this.load.image("bg3", "assets/initscene3.png");
    this.load.image("greenElephant", "assets/greenElephant.png");
    this.load.image("purpleElephant", "assets/purpleElephant.png");
    this.load.image("greenElephantSleep", "assets/greenElephantSleep.png");
    this.load.image("purpleElephantSleep", "assets/purpleElephantSleep.png");
    this.load.image("greenMouthOpen", "assets/greenMouthOpen.png");
    this.load.image("purpleMouthOpen", "assets/purpleMouthOpen.png");
    this.load.image("redRightElephant", "assets/redRightElephant.png");
    this.load.image("redLeftElephant", "assets/redLeftElephant.png");
    this.load.image("bone", "assets/bone.png");
    this.load.image("thigh", "assets/thigh.png");
    this.load.image("next", "assets/next.png");
  }
  create() {
    const gameScene = this.scene.get('Game4_3');

    this.incorrect = 0; //Đếm số lần làm sai

    this.add.image(1440 / 2, 800 / 2, "bg3");

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

    this.sleepTime1 = 0; //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi cam ngủ
    this.sleepTime2 = 0; //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi tím ngủ

    const greenElephantX = 360;
    const greenElephantY = 430;
    this.mouthgreenX = 230;
    this.mouthgreenY = 310;

    const purpleElephantX = 1070;
    const purpleElephantY = 430;
    this.mouthPurpleX = 1220;
    this.mouthPurpleY = 330;

    this.greenElephant = this.add.image(greenElephantX, greenElephantY, "greenElephant");
    this.greenMouthOpen = this.add.image(greenElephantX, greenElephantY, "greenMouthOpen");
    this.greenMouthOpen.visible = false;
    this.greenElephantSleep = this.add.image(greenElephantX, greenElephantY, "greenElephantSleep");
    this.greenElephantSleep.visible = false;
    this.redLeftElephant = this.add.image(greenElephantX, greenElephantY, "redLeftElephant");
    this.redLeftElephant.visible = false;

    this.purpleElephant = this.add.image(purpleElephantX, purpleElephantY, "purpleElephant");
    this.purpleMouthOpen = this.add.image(purpleElephantX, purpleElephantY, "purpleMouthOpen");
    this.purpleMouthOpen.visible = false;
    this.purpleElephantSleep = this.add.image(purpleElephantX, purpleElephantY, "purpleElephantSleep");
    this.purpleElephantSleep.visible = false;
    this.redRightElephant = this.add.image(purpleElephantX, purpleElephantY, "redRightElephant");
    this.redRightElephant.visible = false;

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
    this.c1 = this.add.image(860, 620, "c1").setName('circle').setInteractive();
    this.c2 = this.add.image(770, 400, "c2").setName('circle').setInteractive();
    // luc giac
    this.h1 = this.add.image(550, 390, "h1").setName('hexagon').setInteractive();
    this.h2 = this.add.image(750, 640, "h3").setName('hexagon').setInteractive();
    //vuong
    this.s1 = this.add.image(550, 490, "s1").setName('square').setInteractive();
    this.s1.angle = 38;
    this.s2 = this.add.image(770, 550, "s2").setName('square').setInteractive();
    this.s3 = this.add.image(555, 650, "s3").setName('square').setInteractive();
    this.s3.angle = -10;
    this.s4 = this.add.image(870, 500, "s4").setName('square').setInteractive();
    this.s4.angle = -15;
    this.s5 = this.add.image(600, 300, "s5").setName('square').setInteractive();

    //tam giac
    this.t1 = this.add.image(650, 400, "t1").setName('triangle').setInteractive();
    this.t2 = this.add.image(660, 530, "t2").setName('triangle').setInteractive();
    this.t2.angle = 30;
    this.t3 = this.add.image(750, 270, "t3").setName('triangle').setInteractive();
    this.t3.angle = -30;
    this.t4 = this.add.image(650, 620, "t4").setName('triangle').setInteractive();
    this.t5 = this.add.image(890, 340, "t5").setName('triangle').setInteractive();

    this.canNotSeeShape();

    this.triangleInBoard = new Tri(this, greenElephantX + 20, greenElephantY - 170);
    this.triangleInBoard.fillColor = 0x8729e5;
    this.triangleInBoard.scaleX = 0.5;
    this.triangleInBoard.scaleY = 0.5;
    this.squareInBoard = new Rect(this, purpleElephantX - 20, purpleElephantY - 170, 48, 48);
    this.squareInBoard.fillColor = 0xe7ea0e;

    this.triangleText = this.add.text(config.width / 2 - 10, config.height / 2, 'I eat triangles', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.tweens.timeline({
      targets: this.triangleText,
      ease: 'Linear',
      tweens: [{
          x: this.triangleText.x - 210,
          y: this.triangleText.y,
          scaleX: 1.5,
          scaleY: 1.5,
          duration: 1500
        },
        {
          x: greenElephantX - 50,
          y: greenElephantY - 230,
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1000
        }
      ]
    });

    this.squareText = this.add.text(config.width / 2 - 10, config.height / 2, 'I eat squares', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.squareText.visible = false;
    setTimeout(function() {
      gameScene.tweens.timeline({
        targets: gameScene.squareText,
        ease: 'Linear',
        tweens: [{
            x: gameScene.squareText.x - 200,
            y: gameScene.squareText.y,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 1500
          },
          {
            x: purpleElephantX - 100,
            y: purpleElephantY - 230,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 1000
          }
        ]
      });
      gameScene.squareText.visible = true;
    }, 3000);

    setTimeout(() => this.canSeeShape(), 6000);

    //kéo thả các khối
    this.input.setDraggable(this.t1);
    this.input.setDraggable(this.t2);
    this.input.setDraggable(this.t3);
    this.input.setDraggable(this.t4);
    this.input.setDraggable(this.t5);
    this.input.setDraggable(this.c1);
    this.input.setDraggable(this.c2);
    this.input.setDraggable(this.h1);
    this.input.setDraggable(this.h2);
    this.input.setDraggable(this.s5);
    this.input.setDraggable(this.s1);
    this.input.setDraggable(this.s2);
    this.input.setDraggable(this.s3);
    this.input.setDraggable(this.s4);


    var check = false; //Kiểm tra xem có đang drag hay không

    //Drop zone
    var zone1 = this.add.zone(greenElephantX, greenElephantY, 350, 480).setRectangleDropZone(350, 480);
    var zone2 = this.add.zone(purpleElephantX, purpleElephantY, 350, 480).setRectangleDropZone(350, 480);

    //Vị trí các hình khi vào bụng voi cam
    this.greenElephantStomach = [{
        x: greenElephantX - 50,
        y: greenElephantY + 180
      },
      {
        x: greenElephantX + 50,
        y: greenElephantY + 180
      },
      {
        x: greenElephantX + 50,
        y: greenElephantY + 80
      },
      {
        x: greenElephantX - 50,
        y: greenElephantY + 80
      },
      {
        x: greenElephantX + 10,
        y: greenElephantY
      }
    ];
    //Vị trí các hình khi vào bụng voi tím
    this.purpleElephantStomach = [{
        x: purpleElephantX + 50,
        y: purpleElephantY + 180
      },
      {
        x: purpleElephantX - 50,
        y: purpleElephantY + 180
      },
      {
        x: purpleElephantX + 50,
        y: purpleElephantY + 80
      },
      {
        x: purpleElephantX - 50,
        y: purpleElephantY + 80
      },
      {
        x: purpleElephantX - 10,
        y: purpleElephantY - 30
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
      if (gameScene.greenElephantStomach.length === 0) zone1.destroy();
      if (gameScene.purpleElephantStomach.length === 0) zone2.destroy();
    });

    this.input.on('drop', function(pointer, gameObject) {
      check = false;
      if (elephant === 1) {
        if (gameObject.name === 'triangle') {
          gameScene.greenMouthOpen.visible = true;
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
      }

      if (elephant === 2) {
        if (gameObject.name === 'square') {
          gameScene.purpleMouthOpen.visible = true;
          gameScene.moveToStomatch(elephant, gameObject);
          gameObject.input.enabled = false;
        } else {
          gameScene.incorrect++;
          gameScene.thighTurnToBone(gameScene.incorrect);
          gameScene.redRightElephant.visible = true;
          setTimeout(function() {
            gameScene.redRightElephant.visible = false;
          }, 1500);
          gameScene.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
        }
      }

      if (gameScene.incorrect === 3)
        gameScene.giveNotice(gameScene);
      if (gameScene.greenElephantStomach.length === 0 && gameScene.purpleElephantStomach.length === 0)
        setTimeout(() => gameScene.scene.start("ConversionScene9"), 5000);

    });

    var rect1 = new Phaser.Geom.Rectangle(greenElephantX - 180, greenElephantY - 240, 350, 480);
    var rect2 = new Phaser.Geom.Rectangle(purpleElephantX - 170, purpleElephantY - 240, 350, 480);

    var elephant = 0;
    this.input.on('pointermove', function(pointer) {
      if (rect1.contains(pointer.x, pointer.y) && check === true) {
        gameScene.greenElephant.visible = false;
        gameScene.greenMouthOpen.visible = true;
        elephant = 1;
      } else {
        gameScene.greenElephant.visible = true;
        gameScene.greenMouthOpen.visible = false;
      }

      if (rect2.contains(pointer.x, pointer.y) && check === true) {
        gameScene.purpleElephant.visible = false;
        gameScene.purpleMouthOpen.visible = true;
        elephant = 2;
      } else {
        gameScene.purpleElephant.visible = true;
        gameScene.purpleMouthOpen.visible = false;
      }
    });
  }

  update() {
    const gameScene = this.scene.get('Game4_3');
    if (this.greenElephantStomach.length === 0) {
      if (this.sleepTime1 < 150)
        this.sleepTime1++;
      else {
        this.sleepgreenElephant();
      }
    }
    if (this.purpleElephantStomach.length === 0) {
      if (this.sleepTime2 < 150)
        this.sleepTime2++;
      else {
        this.sleepPurpleElephant();
      }
    }
  }

  back(elephant, gameObject, x, y) {
    if (elephant === 1) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Linear',
        tweens: [{
            x: this.mouthgreenX,
            y: this.mouthgreenY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: this.mouthgreenX,
            y: this.mouthgreenY,
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
    if (elephant === 2) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Power1',
        tweens: [{
            x: this.mouthPurpleX,
            y: this.mouthPurpleY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: this.mouthPurpleX,
            y: this.mouthPurpleY,
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
            x: this.mouthgreenX,
            y: this.mouthgreenY,
            duration: 200
          },
          {
            x: this.greenElephantStomach[0].x,
            y: this.greenElephantStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.greenElephantStomach.shift();
    }
    if (elephant === 2) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Power1',
        tweens: [{
            x: this.mouthPurpleX,
            y: this.mouthgreenY,
            duration: 200
          },
          {
            x: this.purpleElephantStomach[0].x,
            y: this.purpleElephantStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.purpleElephantStomach.shift();
    }
  }
  //hiện các hình
  canSeeShape() {
    this.t1.visible = true;
    this.t2.visible = true;
    this.t3.visible = true;
    this.t4.visible = true;
    this.t5.visible = true;
    this.c1.visible = true;
    this.c2.visible = true;
    this.h1.visible = true;
    this.h2.visible = true;
    this.s5.visible = true;
    this.s1.visible = true;
    this.s2.visible = true;
    this.s3.visible = true;
    this.s4.visible = true;
  }
  //ẩn các hình
  canNotSeeShape() {
    this.t1.visible = false;
    this.t2.visible = false;
    this.t3.visible = false;
    this.t4.visible = false;
    this.t5.visible = false;
    this.c1.visible = false;
    this.c2.visible = false;
    this.h1.visible = false;
    this.h2.visible = false;
    this.s5.visible = false;
    this.s1.visible = false;
    this.s2.visible = false;
    this.s3.visible = false;
    this.s4.visible = false;
  }
  //hiển thị mạng
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
  //khi hết mạng
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
  //voi cam ngủ
  sleepgreenElephant() {
    this.t1.visible = false;
    this.t2.visible = false;
    this.t3.visible = false;
    this.t4.visible = false;
    this.t5.visible = false;
    this.greenElephant.visible = false;
    this.greenMouthOpen.visible = false;
    this.triangleText.visible = false;
    this.triangleInBoard.visible = false;
    this.greenElephantSleep.visible = true;
  }
  //voi tím ngủ
  sleepPurpleElephant() {
    this.s1.visible = false;
    this.s2.visible = false;
    this.s3.visible = false;
    this.s4.visible = false;
    this.s5.visible = false;
    this.purpleElephant.visible = false;
    this.purpleMouthOpen.visible = false;
    this.squareText.visible = false;
    this.squareInBoard.visible = false;
    this.purpleElephantSleep.visible = true;
  }


}
