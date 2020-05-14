class Game4_1 extends Phaser.Scene {
  constructor() {
    super("Game4_1");
  }
  preload() {
    this.load.image("t1", "assets/triangle1.png");
    this.load.image("t2", "assets/triangle2.png");
    this.load.image("t3", "assets/triangle3.png");
    this.load.image("t4", "assets/triangle4.png");
    this.load.image("t5", "assets/triangle5.png");
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
    this.load.image("bg1", "assets/initscene1.png");
    this.load.image("orangeElephant", "assets/orangeElephant.png");
    this.load.image("purpleElephant", "assets/purpleElephant.png");
    this.load.image("orangeElephantSleep", "assets/orangeElephantSleep.png");
    this.load.image("purpleElephantSleep", "assets/purpleElephantSleep.png");
    this.load.image("orangeMouthOpen", "assets/orangeMouthOpen.png");
    this.load.image("purpleMouthOpen", "assets/purpleMouthOpen.png");
    this.load.image("redRightElephant", "assets/redRightElephant.png");
    this.load.image("redLeftElephant", "assets/redLeftElephant.png");
    this.load.image("bone", "assets/bone.png");
    this.load.image("thigh", "assets/thigh.png");
    this.load.image("next", "assets/next.png");
  }
  create() {
    const gameScene = this.scene.get('Game4_1');

    this.incorrect = 0; //Đếm số lần làm sai

    this.add.image(1440 / 2, 800 / 2, "bg1");

    this.next = this.add.image(config.width / 2, config.height / 2 + 100, "next");
    this.next.visible = false;

    this.func = new Function2();

    this.func.setUp(this);

    this.sleepTime1 = 0; //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi cam ngủ
    this.sleepTime2 = 0; //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi tím ngủ

    this.leftElephant = [];
    this.orangeElephant = this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, "orangeElephant");
    this.orangeMouthOpen = this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, "orangeMouthOpen");
    this.orangeMouthOpen.visible = false;
    this.orangeElephantSleep = this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, "orangeElephantSleep");
    this.orangeElephantSleep.visible = false;
    this.redLeftElephant = this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, "redLeftElephant");
    this.redLeftElephant.visible = false;

    this.purpleElephant = this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, "purpleElephant");
    this.purpleMouthOpen = this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, "purpleMouthOpen");
    this.purpleMouthOpen.visible = false;
    this.purpleElephantSleep = this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, "purpleElephantSleep");
    this.purpleElephantSleep.visible = false;
    this.redRightElephant = this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, "redRightElephant");
    this.redRightElephant.visible = false;

    //thêm các hình khối
    this.c1 = this.add.image(600, 300, "c1").setName('circle').setInteractive();
    this.c2 = this.add.image(770, 400, "c2").setName('circle').setInteractive();
    this.c3 = this.add.image(560, 530, "c3").setName('circle').setInteractive();
    this.c4 = this.add.image(750, 640, "c4").setName('circle').setInteractive();
    this.c5 = this.add.image(860, 620, "c5").setName('circle').setInteractive();
    //vuong
    this.s1 = this.add.image(750, 270, "s1").setName('square').setInteractive();
    this.s1.angle = 38;
    this.s2 = this.add.image(770, 550, "s2").setName('square').setInteractive();
    this.s3 = this.add.image(650, 620, "s3").setName('square').setInteractive();
    this.s3.angle = -10;
    this.s4 = this.add.image(870, 500, "s4").setName('square').setInteractive();
    this.s4.angle = -15;
    //tam giac
    this.t1 = this.add.image(650, 390, "t1").setName('triangle').setInteractive();
    this.t2 = this.add.image(550, 400, "t2").setName('triangle').setInteractive();
    this.t2.angle = 30;
    this.t3 = this.add.image(650, 490, "t3").setName('triangle').setInteractive();
    this.t3.angle = -30;
    this.t4 = this.add.image(555, 650, "t4").setName('triangle').setInteractive();
    this.t5 = this.add.image(890, 340, "t5").setName('triangle').setInteractive();

    this.canNotSeeShape();

    this.triangleInBoard = new Tri(this, module2Setting.elephantLeftX + 20, module2Setting.elephantLeftX - 100);
    this.triangleInBoard.fillColor = 0x8729e5;
    this.triangleInBoard.scaleX = 0.5;
    this.triangleInBoard.scaleY = 0.5;
    this.circleInBoard = new Cir(this, module2Setting.elephantRightX - 20, module2Setting.elephantRightY - 170, 35, 35);
    this.circleInBoard.fillColor = 0xe7ea0e;

    this.triangleText = this.add.text(module2Setting.textStartX, module2Setting.textStartY, 'I eat triangles', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.func.moveTextLeft(this, this.triangleText);

    this.circleText = this.add.text(module2Setting.textStartX, module2Setting.textStartY, 'I eat circles', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.circleText.visible = false;
    setTimeout(function() {
      gameScene.func.moveTextRight(gameScene, gameScene.circleText);
      gameScene.circleText.visible = true;
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
    this.input.setDraggable(this.c3);
    this.input.setDraggable(this.c4);
    this.input.setDraggable(this.c5);
    this.input.setDraggable(this.s1);
    this.input.setDraggable(this.s2);
    this.input.setDraggable(this.s3);
    this.input.setDraggable(this.s4);

    var check = false; //Kiểm tra xem có đang drag hay không

    //Drop zone
    var zone1 = this.add.zone(module2Setting.elephantLeftX - 40, module2Setting.elephantLeftY, 350, 480).setRectangleDropZone(350, 480);
    var zone2 = this.add.zone(module2Setting.elephantRightX + 40, module2Setting.elephantRightY, 350, 480).setRectangleDropZone(350, 480);

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
      if (gameScene.func.elephantLeftStomach.length === 0) zone1.destroy();
      if (gameScene.func.elephantRightStomach.length === 0) zone2.destroy();
    });

    this.input.on('drop', function(pointer, gameObject) {
      check = false;

      if (elephant === 1) {
        if (gameObject.name === 'triangle') {
          gameScene.orangeElephant.visible = true;
          gameScene.func.moveToStomatch(gameScene, elephant, gameObject);
          gameObject.input.enabled = false;
        } else {
          gameScene.incorrect++;
          gameScene.func.thighTurnToBone(gameScene ,gameScene.incorrect);
          gameScene.redLeftElephant.visible = true;
          setTimeout(function() {
            gameScene.redLeftElephant.visible = false;
          }, 1500);
          gameScene.func.back(gameScene, elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
        }
      }

      {
        if (elephant === 2) {
          if (gameObject.name === 'circle') {
            gameScene.purpleElephant.visible = true;
            gameScene.func.moveToStomatch(gameScene, elephant, gameObject);
            gameObject.input.enabled = false;
          } else {
            gameScene.incorrect++;
            gameScene.func.thighTurnToBone(gameScene, gameScene.incorrect);
            gameScene.redRightElephant.visible = true;
            setTimeout(function() {
              gameScene.redRightElephant.visible = false;
            }, 1500);
            gameScene.func.back(gameScene, elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
          }
        }
      }

      if (gameScene.incorrect === 3)
        gameScene.func.giveNotice(gameScene);
      if (gameScene.func.elephantLeftStomach.length === 0 && gameScene.func.elephantRightStomach.length === 0)
        setTimeout(() => gameScene.scene.start("ConversionScene7"), 5000);
      //gameScene.openInput();
    });

    var rect1 = new Phaser.Geom.Rectangle(module2Setting.elephantLeftX - 215, module2Setting.elephantLeftY - 240, 350, 480);
    var rect2 = new Phaser.Geom.Rectangle(module2Setting.elephantRightX - 135, module2Setting.elephantRightY - 240, 350, 480);

    var elephant = 0;
    this.input.on('pointermove', function(pointer) {
      if (rect1.contains(pointer.x, pointer.y) && check === true) {
        gameScene.orangeElephant.visible = false;
        gameScene.orangeMouthOpen.visible = true;
        elephant = 1;
      } else {
        gameScene.orangeElephant.visible = true;
        gameScene.orangeMouthOpen.visible = false;
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
    const gameScene = this.scene.get('Game4_1');
    if (this.func.elephantLeftStomach.length === 0) {
      if (this.sleepTime1 < 150)
        this.sleepTime1++;
      else {
        this.sleepOrangeElephant();
      }
    }
    if (this.func.elephantRightStomach.length === 0) {
      if (this.sleepTime2 < 150)
        this.sleepTime2++;
      else {
        this.sleepPurpleElephant();
      }
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
    this.c3.visible = true;
    this.c4.visible = true;
    this.c5.visible = true;
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
    this.c3.visible = false;
    this.c4.visible = false;
    this.c5.visible = false;
    this.s1.visible = false;
    this.s2.visible = false;
    this.s3.visible = false;
    this.s4.visible = false;
  }

  //voi cam ngủ
  sleepOrangeElephant() {
    this.t1.visible = false;
    this.t2.visible = false;
    this.t3.visible = false;
    this.t4.visible = false;
    this.t5.visible = false;
    this.orangeElephant.visible = false;
    this.orangeMouthOpen.visible = false;
    this.triangleText.visible = false;
    this.triangleInBoard.visible = false;
    this.orangeElephantSleep.visible = true;
  }
  //voi tím ngủ
  sleepPurpleElephant() {
    this.c1.visible = false;
    this.c2.visible = false;
    this.c3.visible = false;
    this.c4.visible = false;
    this.c5.visible = false;
    this.purpleElephant.visible = false;
    this.purpleMouthOpen.visible = false;
    this.circleText.visible = false;
    this.circleInBoard.visible = false;
    this.purpleElephantSleep.visible = true;
  }
}
