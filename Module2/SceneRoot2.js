class SceneRoot2 extends Phaser.Scene {
  preload() {
    for (var i = 1; i <= 5; i++) {
      this.load.image("t" + i, "assets/triangle" + i + ".png");
      this.load.image("c" + i, "assets/circle" + i + ".png");
      this.load.image("s" + i, "assets/square" + i + ".png");
      this.load.image("h" + i, "assets/hexagon" + i + ".png");
    }

    this.load.image("initscene", "assets/initscene.png");
    this.load.image("ball", "assets/ball.png");

    this.load.image("greenElephant", "assets/greenElephant.png");
    this.load.image("greenMouthOpen", "assets/greenMouthOpen.png");
    this.load.image("greenElephantSleep", "assets/greenElephantSleep.png");

    this.load.image("purpleElephant", "assets/purpleElephant.png");
    this.load.image("purpleMouthOpen", "assets/purpleMouthOpen.png");
    this.load.image("purpleElephantSleep", "assets/purpleElephantSleep.png");

    this.load.image("blueElephant", "assets/blueElephant.png");
    this.load.image("blueMouthOpen", "assets/blueMouthOpen.png");
    this.load.image("blueElephantSleep", "assets/blueElephantSleep.png");

    this.load.image("orangeElephant", "assets/orangeElephant.png");
    this.load.image("orangeMouthOpen", "assets/orangeMouthOpen.png");
    this.load.image("orangeElephantSleep", "assets/orangeElephantSleep.png");

    this.load.image("redRightElephant", "assets/redRightElephant.png");
    this.load.image("redLeftElephant", "assets/redLeftElephant.png");

    this.load.image("bone", "assets/bone.png");
    this.load.image("thigh", "assets/thigh.png");
    this.load.image("next", "assets/next.png");
  }
  create() {

    const gameScene = this.scene.get(this.name);
    var check = false; //Kiểm tra xem có đang drag hay không
    var elephant = 0;
    this.setUp();
    this.addStateBar();
    this.addElephant(this.amount);
    this.backButtonSetUp(gameScene);
    this.addShapes();
    this.canNotSeeShape();
    this.addShapesInBoard();
    this.requireSetUp(this.amount, gameScene);
    this.setDraggable();

    this.input.on('dragstart', function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
      check = true;
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    //Drop zone
    this.zone1 = this.add.zone(module2Setting.elephantLeftX, module2Setting.elephantLeftY, 350, 480).setRectangleDropZone(350, 480);
    if (this.amount === 2) {
      this.zone2 = this.add.zone(module2Setting.elephantRightX, module2Setting.elephantRightY, 350, 480).setRectangleDropZone(350, 480);
    }

    this.input.on('dragend', function(pointer, gameObject, dropped) {
      check = false;
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
      if (gameScene.leftElephantStomach.length === 0) gameScene.zone1.destroy();
      if (gameScene.amount === 2) {
        if (gameScene.rightElephantStomach.length === 0) gameScene.zone2.destroy();
      }
    });

    this.input.on('drop', function(pointer, gameObject) {
      check = false;
      if (elephant === 1) {
        gameScene.dropLeft(gameObject, gameScene, elephant);
      }
      if (elephant === 2 && gameScene.amount === 2) {
        gameScene.dropRight(gameObject, gameScene, elephant);
      }

      if (gameScene.incorrect === 3)
        gameScene.giveNotice(gameScene);
      gameScene.checkSuccess(gameScene, gameScene.conversionScene);
    });

    this.rect1 = new Phaser.Geom.Rectangle(module2Setting.elephantLeftX - 180, module2Setting.elephantLeftY - 240, 350, 480);
    if (this.amount === 2) {
      this.rect2 = new Phaser.Geom.Rectangle(module2Setting.elephantRightX - 170, module2Setting.elephantRightY - 240, 350, 480);
    }

    this.input.on('pointermove', function(pointer) {
      if (gameScene.rect1.contains(pointer.x, pointer.y) && check === true) {
        gameScene.leftElephant[0].visible = false;
        gameScene.leftElephant[1].visible = true;
        elephant = 1;
      } else {
        gameScene.leftElephant[0].visible = true;
        gameScene.leftElephant[1].visible = false;
      }
      if (gameScene.amount === 2) {
        if (gameScene.rect2.contains(pointer.x, pointer.y) && check === true) {
          gameScene.rightElephant[0].visible = false;
          gameScene.rightElephant[1].visible = true;
          elephant = 2;
        } else {
          gameScene.rightElephant[0].visible = true;
          gameScene.rightElephant[1].visible = false;
        }
      }
    });
  }
  update() {
    if (this.leftElephantStomach.length === 0) {
      if (this.sleepTime1 < 150)
        this.sleepTime1++;
      else {
        this.sleepLeftElephant();
      }
    }
    if (this.amount === 2) {
      if (this.rightElephantStomach.length === 0) {
        if (this.sleepTime2 < 150)
          this.sleepTime2++;
        else {
          this.sleepRightElephant();
        }
      }
    }
  }

  setUp() {
    this.incorrect = 0; //Đếm số lần làm sai

    this.add.image(1440 / 2, 800 / 2, "initscene");

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

    this.leftElephantStomach = [{
        x: module2Setting.elephantLeftX - 100,
        y: module2Setting.elephantLeftY + 180
      },
      {
        x: module2Setting.elephantLeftX + 50,
        y: module2Setting.elephantLeftY + 180
      },
      {
        x: module2Setting.elephantLeftX + 50,
        y: module2Setting.elephantLeftY + 100
      },
      {
        x: module2Setting.elephantLeftX - 100,
        y: module2Setting.elephantLeftY + 100
      },
      {
        x: module2Setting.elephantLeftX - 50,
        y: module2Setting.elephantLeftY + 20
      }
    ];
    //Vị trí các hình khi vào bụng voi tím
    this.rightElephantStomach = [{
        x: module2Setting.elephantRightX + 100,
        y: module2Setting.elephantRightY + 180
      },
      {
        x: module2Setting.elephantRightX - 50,
        y: module2Setting.elephantRightY + 180
      },
      {
        x: module2Setting.elephantRightX + 100,
        y: module2Setting.elephantRightY + 100
      },
      {
        x: module2Setting.elephantRightX - 50,
        y: module2Setting.elephantRightY + 100
      },
      {
        x: module2Setting.elephantRightX + 50,
        y: module2Setting.elephantRightY + 20
      }
    ];

  }

  addStateBar(){
    for(let i = 0; i < this.numberOfBallLeft; i++){
      this.add.image(conversionSceneSetting.ballLeftX[i], conversionSceneSetting.ballY, "ball");
    }
    for(let i = 0; i < this.numberOfBallRight; i++){
      this.add.image(conversionSceneSetting.ballRightX[i], conversionSceneSetting.ballY, "ball");
    }
  }

  addElephant(amount) {
    this.leftElephant = [];
    this.leftElephant.push(this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, this.color1 + "Elephant"));
    this.leftElephant.push(this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, this.color1 + "MouthOpen"));
    this.leftElephant[1].visible = false;
    this.leftElephant.push(this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, this.color1 + "ElephantSleep"));
    this.leftElephant[2].visible = false;
    this.leftElephant.push(this.add.image(module2Setting.elephantLeftX, module2Setting.elephantLeftY, "redLeftElephant"));
    this.leftElephant[3].visible = false;

    if (amount === 2) {
      this.rightElephant = [];
      this.rightElephant.push(this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, this.color2 + "Elephant"));
      this.rightElephant.push(this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, this.color2 + "MouthOpen"));
      this.rightElephant[1].visible = false;
      this.rightElephant.push(this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, this.color2 + "ElephantSleep"));
      this.rightElephant[2].visible = false;
      this.rightElephant.push(this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, "redRightElephant"));
      this.rightElephant[3].visible = false;
    } else {
      this.rightElephant = this.add.image(module2Setting.elephantRightX, module2Setting.elephantRightY, this.color2 + "ElephantSleep");
    }
  }
  backButtonSetUp(gameScene) {
    var backButton = this.add.text(170, 70, 'BACK', { //Nút BACK
      fontFamily: font,
      fontSize: backButtonSetting.fontSize,
      color: backButtonSetting.color,
    });

    var shape = new Phaser.Geom.Rectangle(0, 0, 55, 25);

    backButton.setInteractive(shape, Phaser.Geom.Rectangle.Contains);
    backButton.on('pointerover', function() { //Hiệu ứng khi di chuột vào nút BACK nút sẽ có màu xanh đậm
      backButton.setTint(backButtonSetting.tintColor);
    });
    backButton.on('pointerout', function() { //Khi chuột không còn ở nút BACK thì trở lại màu như ban đầu
      backButton.clearTint();
    });
    backButton.on('pointerup', () => gameScene.scene.start('startGame')); //Khi nhấn chuột vào nút BACK thì quay trở lại màn hình bắt đầu (StartScene)
    this.add.text(550, 100, "Feed the Elephant", {
      fontFamily: font,
      fontSize: textTitleSetting.fontSize,
      color: textTitleSetting.color
    });
  }
  addShapes() {}
  moveTextLeft() {
    this.tweens.timeline({
      targets: this.textLeft,
      ease: 'Linear',
      tweens: [{
          x: module2Setting.textStartX - 210,
          y: module2Setting.textStartY,
          scaleX: 1.5,
          scaleY: 1.5,
          duration: 1500
        },
        {
          x: module2Setting.elephantLeftX - 50,
          y: module2Setting.elephantLeftY - 230,
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1000
        }
      ]
    });
  }
  moveTextRight() {
    this.tweens.timeline({
      targets: this.textRight,
      ease: 'Linear',
      tweens: [{
          x: module2Setting.textStartX - 200,
          y: module2Setting.textStartY,
          scaleX: 1.5,
          scaleY: 1.5,
          duration: 1500
        },
        {
          x: module2Setting.elephantRightX - 100,
          y: module2Setting.elephantRightY - 230,
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1000
        }
      ]
    });
  }
  addShapesInBoard() {};
  requireSetUp(amount, gameScene) {
    this.textLeft = this.add.text(config.width / 2 - 10, config.height / 2, 'I eat ' + this.shapeLeftName, {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.moveTextLeft();

    if (amount === 2) {
      this.textRight = this.add.text(config.width / 2 - 10, config.height / 2, 'I eat ' + this.shapeRightName, {
        fontFamily: "Roboto Condensed",
        fontSize: 50,
        color: "#000",
      });
      this.textRight.visible = false;
      setTimeout(function() {
        gameScene.moveTextRight();
        gameScene.textRight.visible = true;
      }, 3000);
    }
    setTimeout(() => this.canSeeShape(), amount * 3000);
  }
  setDraggable() {
    this.shapes.forEach(shape => {
      shape.image.setInteractive();
      this.input.setDraggable(shape.image);
    });
  }
  back(elephant, gameObject, x, y) {
    if (elephant === 1) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Linear',
        tweens: [{
            x: module2Setting.elephantLeftMouthX,
            y: module2Setting.elephantLeftMouthY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: module2Setting.elephantLeftMouthX,
            y: module2Setting.elephantLeftMouthY,
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
            x: module2Setting.elephantRightMouthX,
            y: module2Setting.elephantRightMouthY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: module2Setting.elephantRightMouthX,
            y: module2Setting.elephantRightMouthY,
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
  moveToLeftStomatch(gameObject) {
    this.tweens.timeline({
      targets: gameObject,
      ease: 'Linear',
      tweens: [{
          x: module2Setting.elephantLeftMouthX,
          y: module2Setting.elephantLeftMouthY,
          duration: 200
        },
        {
          x: this.leftElephantStomach[0].x,
          y: this.leftElephantStomach[0].y,
          scaleX: 0.7,
          scaleY: 0.7,
          angle: 180,
          ease: 'Bounce.easeOut',
          duration: 2000
        }
      ]
    });
    this.leftElephantStomach.shift();
  }
  moveToRightStomatch(gameObject) {
    this.tweens.timeline({
      targets: gameObject,
      ease: 'Power1',
      tweens: [{
          x: module2Setting.elephantRightMouthX,
          y: module2Setting.elephantRightMouthY,
          duration: 200
        },
        {
          x: this.rightElephantStomach[0].x,
          y: this.rightElephantStomach[0].y,
          scaleX: 0.7,
          scaleY: 0.7,
          angle: 180,
          ease: 'Bounce.easeOut',
          duration: 2000
        }
      ]
    });
    this.rightElephantStomach.shift();
  }

  dropLeft(gameObject, gameScene, elephant) {
    if (gameObject.name === this.shapeLeftName) {
      this.leftElephant[1].visible = true;
      this.moveToLeftStomatch(gameObject);
      gameObject.input.enabled = false;

    } else {
      this.incorrect++;
      this.thighTurnToBone(gameScene.incorrect);
      this.leftElephant[3].visible = true;
      setTimeout(function() {
        gameScene.leftElephant[3].visible = false;
      }, 1500);
      this.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
    }
  }
  dropRight(gameObject, gameScene, elephant) {
    if (gameObject.name === this.shapeRightName) {
      this.rightElephant[1].visible = true;
      this.moveToRightStomatch(gameObject);
      gameObject.input.enabled = false;
    } else {
      this.incorrect++;
      this.thighTurnToBone(gameScene.incorrect);
      this.rightElephant[3].visible = true;
      setTimeout(function() {
        gameScene.rightElephant[3].visible = false;
      }, 1500);
      this.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
    }
  }

  //hiện các hình
  canSeeShape() {
    this.shapes.forEach(shape => {
      shape.image.visible = true;
    });
  }
  //ẩn các hình
  canNotSeeShape() {
    this.shapes.forEach(shape => {
      shape.image.visible = false;
    });
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
      fontFamily: font,
      fontSize: 50,
      color: "#000",
    });
    this.add.text(config.width / 2 - 110, config.height / 2, 'Try again!', {
      fontFamily: font,
      fontSize: 50,
      color: "#000",
    });
    this.next.visible = true;
    this.next.setInteractive().on('pointerup', () => gameScene.scene.restart());
  }
  //voi bên trái ngủ
  sleepLeftElephant() {
    for (var i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].image.name === this.shapeLeftName) {
        this.shapes[i].image.visible = false;
      }
    }
    this.leftElephant[0].visible = false;
    this.leftElephant[1].visible = false;
    this.textLeft.visible = false;
    this.shapeLeft.visible = false;
    this.leftElephant[2].visible = true;
  }
  //voi bên phải ngủ
  sleepRightElephant() {
    for (var i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].image.name === this.shapeRightName) {
        this.shapes[i].image.visible = false;
      }
    }
    this.rightElephant[0].visible = false;
    this.rightElephant[1].visible = false;
    this.textRight.visible = false;
    this.shapeRight.visible = false;
    this.rightElephant[2].visible = true;
  }

  checkSuccess(gameScene, conversionScene) {
    if (this.amount === 2) {
      if (this.leftElephantStomach.length === 0 && this.rightElephantStomach.length === 0)
        setTimeout(() => gameScene.scene.start(conversionScene), 5000);
    } else {
      if (this.leftElephantStomach.length === 0)
        setTimeout(() => gameScene.scene.start(conversionScene), 3000);
    }
  }
}
