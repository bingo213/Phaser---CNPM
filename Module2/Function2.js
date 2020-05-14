class Function2 {
constructor(){
  //Vị trí các hình khi vào bụng voi cam
  this.elephantLeftStomach = [{
      x: module2Setting.elephantLeftX - 50,
      y: module2Setting.elephantLeftY + 180
    },
    {
      x: module2Setting.elephantLeftX + 50,
      y: module2Setting.elephantLeftY + 180
    },
    {
      x: module2Setting.elephantLeftX + 50,
      y: module2Setting.elephantLeftY + 80
    },
    {
      x: module2Setting.elephantLeftX - 50,
      y: module2Setting.elephantLeftY + 80
    },
    {
      x: module2Setting.elephantLeftX + 10,
      y: module2Setting.elephantLeftY
    }
  ];
  //Vị trí các hình khi vào bụng voi tím
  this.elephantRightStomach = [{
      x: module2Setting.elephantRightX + 50,
      y: module2Setting.elephantRightY + 180
    },
    {
      x: module2Setting.elephantRightX - 50,
      y: module2Setting.elephantRightY + 180
    },
    {
      x: module2Setting.elephantRightX + 50,
      y: module2Setting.elephantRightY + 80
    },
    {
      x: module2Setting.elephantRightX - 50,
      y: module2Setting.elephantRightY + 80
    },
    {
      x: module2Setting.elephantRightX - 10,
      y: module2Setting.elephantRightY - 30
    }
  ];
}
  setUp(gameScene){
    gameScene.thigh1 = gameScene.add.image(1120, 130, "thigh");
    gameScene.thigh2 = gameScene.add.image(1180, 130, "thigh");
    gameScene.thigh3 = gameScene.add.image(1240, 130, "thigh");
    gameScene.bone1 = gameScene.add.image(1120, 130, "bone");
    gameScene.bone2 = gameScene.add.image(1180, 130, "bone");
    gameScene.bone3 = gameScene.add.image(1240, 130, "bone");
    gameScene.bone1.visible = false;
    gameScene.bone2.visible = false;
    gameScene.bone3.visible = false;

    var backButton = gameScene.add.text(170, 70, 'BACK', { //Nút BACK
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
    gameScene.add.text(550, 100, "Feed the Elephant", {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000000",
    });
  }

  moveTextLeft(gameScene, text){
    gameScene.tweens.timeline({
      targets: text,
      ease: 'Linear',
      tweens: [{
          x: module2Setting.textStartX - 200,
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
  moveTextRight(gameScene, text){
  gameScene.tweens.timeline({
    targets: text,
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

  moveToStomatch(gameScene, elephant, gameObject) {
    if (elephant === 1) {
      gameScene.tweens.timeline({
        targets: gameObject,
        ease: 'Linear',
        tweens: [{
            x: module2Setting.elephantLeftMouthX,
            y: module2Setting.elephantLeftMouthY,
            duration: 200
          },
          {
            x: this.elephantLeftStomach[0].x,
            y: this.elephantLeftStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.elephantLeftStomach.shift();
    }
    if (elephant === 2) {
      gameScene.tweens.timeline({
        targets: gameObject,
        ease: 'Power1',
        tweens: [{
            x: module2Setting.elephantRightMouthX,
            y: module2Setting.elephantRightMouthY,
            duration: 200
          },
          {
            x: this.elephantRightStomach[0].x,
            y: this.elephantRightStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.elephantRightStomach.shift();
    }
  }

  back(gameScene, elephant, gameObject, x, y) {
    if (elephant === 1) {
      gameScene.tweens.timeline({
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
      gameScene.tweens.timeline({
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

  giveNotice(gameScene) {
    gameScene.canNotSeeShape();
    gameScene.add.text(config.width / 2 - 190, config.height / 2 - 50, 'Too many mistakes!', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    gameScene.add.text(config.width / 2 - 110, config.height / 2, 'Try again!', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    gameScene.next.visible = true;
    gameScene.next.setInteractive().on('pointerup', () => gameScene.scene.restart());
  }

  //hiển thị mạng
  thighTurnToBone(gameScene, incorrect) {
    if (incorrect === 1) {
      gameScene.thigh1.visible = false;
      gameScene.bone1.visible = true;
    } else if (incorrect === 2) {
      gameScene.thigh2.visible = false;
      gameScene.bone2.visible = true;
    } else {
      gameScene.thigh3.visible = false;
      gameScene.bone3.visible = true;
    }
  }

}
