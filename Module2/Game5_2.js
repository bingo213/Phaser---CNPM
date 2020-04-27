class Game5_2 extends Phaser.Scene {
  constructor() {
    super("Game5_2");
  }
  preload() {
    this.load.image("t1", "assets/triangle1.png");
    this.load.image("t2", "assets/triangle2.png");
    this.load.image("c1", "assets/circle1.png");
    this.load.image("c2", "assets/circle2.png");
    this.load.image("c3", "assets/circle3.png");
    this.load.image("h1", "assets/hexagon1.png");
    this.load.image("h2", "assets/hexagon2.png");
    this.load.image("h3", "assets/hexagon3.png");
    this.load.image("h4", "assets/hexagon4.png");
    this.load.image("h5", "assets/hexagon5.png");
    this.load.image("s1", "assets/square1.png");
    this.load.image("s2", "assets/square2.png");
    this.load.image("s3", "assets/square3.png");
    this.load.image("s4", "assets/square4.png");
    this.load.image("s5", "assets/square5.png");
    this.load.image("bg2", "assets/initscene5.png");
    this.load.image("orangeElephant", "assets/orangeElephant.png");
    this.load.image("purpleElephant", "assets/purpleElephant.png");
    this.load.image("orangeElephantSleep", "assets/orangeElephantSleep.png");
    this.load.image("purpleElephantSleep", "assets/purpleElephantSleep.png");
    this.load.image("orangeMouthOpen", "assets/orangeMouthOpen.png");
    this.load.image("purpleMouthOpen", "assets/purpleMouthOpen.png");
    this.load.image("redRightElephant", "assets/redRightElephant.png");
    this.load.image("redLeftElephant", "assets/redLeftElephant.png");
    this.load.image("bone","assets/bone.png");
    this.load.image("thigh","assets/thigh.png");
    this.load.image("next", "assets/next.png");
  }
  create() {
    const gameScene = this.scene.get('Game5_2');

    this.incorrect = 0;  //Đếm số lần làm sai

    this.add.image(1440 / 2, 800 / 2, "bg2");

    this.next = this.add.image(config.width/2, config.height/2 + 100, "next");
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

    this.sleepTime1 = 0;  //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi cam ngủ
    this.sleepTime2 = 0;  //Biến sleepTime dùng trong hàm update(), set thời gian trước khi voi tím ngủ

    const orangeElephantX = 330;
    const orangeElephantY = 430;
    this.mouthOrangeX = 230;
    this.mouthOrangeY = 330;

    const purpleElephantX = 1100;
    const purpleElephantY = 430;
    this.mouthPurpleX = 1220;
    this.mouthPurpleY = 330;

    this.orangeElephant = this.add.image(orangeElephantX, orangeElephantY, "orangeElephant");
    this.orangeMouthOpen = this.add.image(orangeElephantX, orangeElephantY, "orangeMouthOpen");
    this.orangeMouthOpen.visible = false;
    this.orangeElephantSleep = this.add.image(orangeElephantX, orangeElephantY, "orangeElephantSleep");
    this.orangeElephantSleep.visible = false;
    this.redLeftElephant = this.add.image(orangeElephantX, orangeElephantY, "redLeftElephant");
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
    //luc giac
    this.h1 = this.add.image(600, 300, "h1").setName('hexagon').setInteractive();
    this.h2 = this.add.image(770, 400, "h2").setName('hexagon').setInteractive();
    this.h3 = this.add.image(560, 530, "h3").setName('hexagon').setInteractive();
    this.h4 = this.add.image(750, 640, "h4").setName('hexagon').setInteractive();
    this.h5 = this.add.image(860, 620, "h5").setName('hexagon').setInteractive();
    //vuong
    this.s1 = this.add.image(750, 270, "s1").setName('square').setInteractive();
    this.s1.angle = 38;
    this.s2 = this.add.image(770, 550, "s2").setName('square').setInteractive();
	this.s3 = this.add.image(650, 620, "s3").setName('square').setInteractive();
    this.s3.angle = -10;
    this.s4 = this.add.image(870, 500, "s4").setName('square').setInteractive();
    this.s4.angle = -15;
	this.s5 = this.add.image(890,340,"s5").setName('square').setInteractive();
    
	//tam giac
    this.t1 = this.add.image(650, 390, "t1").setName('square').setInteractive();
	
    this.t2 = this.add.image(550, 400, "t2").setName('square').setInteractive();
    this.t2.angle = 30;
	//tron
    this.c1 = this.add.image(650, 490, "c1").setName('circle').setInteractive();
	
    this.c2 = this.add.image(555, 650, "c2").setName('circle').setInteractive();
	
    this.canNotSeeShape();

    this.squareInBoard = new Rect(this, orangeElephantX + 70, orangeElephantY - 195,60,60);
    this.squareInBoard.fillColor = 0x8729e5;
    this.squareInBoard.scaleX = 0.5;
    this.squareInBoard.scaleY = 0.5;
    this.hexagonInBoard = new Hex(this, purpleElephantX - 70, purpleElephantY - 195, 36, 36);
    this.hexagonInBoard.fillColor = 0xe7ea0e;

    this.squareText = this.add.text(config.width/2 - 10, config.height/2, 'I eat squares', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.tweens.timeline({
      targets: this.squareText,
      ease: 'Linear',
      tweens: [{
          x: this.squareText.x - 200,
          y: this.squareText.y,
          scaleX: 1.5,
          scaleY: 1.5,
          duration: 1500
        },
        {
          x: orangeElephantX ,
          y: orangeElephantY - 260,
          scaleX: 0.6,
          scaleY: 0.6,
          duration: 1000
        }
      ]
    });

    this.hexagonText = this.add.text(config.width/2 - 10, config.height/2, 'I eat hexagons', {
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    this.hexagonText.visible = false;
    setTimeout(function(){
      gameScene.tweens.timeline({
        targets: gameScene.hexagonText,
        ease: 'Linear',
        tweens: [{
            x: gameScene.hexagonText.x - 200,
            y: gameScene.hexagonText.y,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 1500
          },
          {
            x: purpleElephantX - 156,
            y: purpleElephantY - 260,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 1000
          }
        ]
      });
       gameScene.hexagonText.visible = true;
     }, 3000);

    setTimeout(()=>this.canSeeShape(), 6000);

    //kéo thả các khối
    this.input.setDraggable(this.t1);
    this.input.setDraggable(this.t2);
    this.input.setDraggable(this.c1);
    this.input.setDraggable(this.c2);
    this.input.setDraggable(this.h1);
    this.input.setDraggable(this.h2);
    this.input.setDraggable(this.h3);
    this.input.setDraggable(this.h4);
    this.input.setDraggable(this.h5);
    this.input.setDraggable(this.s1);
    this.input.setDraggable(this.s2);
    this.input.setDraggable(this.s3);
    this.input.setDraggable(this.s4);
	this.input.setDraggable(this.s5);
	


    var check = false;  //Kiểm tra xem có đang drag hay không

    //Drop zone
    var zone1 = this.add.zone(orangeElephantX, orangeElephantY, 350, 480).setRectangleDropZone(350, 480);
    var zone2 = this.add.zone(purpleElephantX, purpleElephantY, 350, 480).setRectangleDropZone(350, 480);

    //Vị trí các hình khi vào bụng voi cam
    this.orangeElephantStomach = [{
        x: orangeElephantX -50,
        y: orangeElephantY + 180
      },
      {
        x: orangeElephantX + 50,
        y: orangeElephantY + 180
      },
      {
        x: orangeElephantX + 50,
        y: orangeElephantY + 80
      },
      {
        x: orangeElephantX - 50,
        y: orangeElephantY + 80
      },
      {
        x: orangeElephantX + 10,
        y: orangeElephantY
      }];
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
      }];

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
      if (gameScene.orangeElephantStomach.length === 0) zone1.destroy();
      if (gameScene.purpleElephantStomach.length === 0) zone2.destroy();
    });

    this.input.on('drop', function(pointer, gameObject) {
      check = false;
	  //gameScene.blockInput();
      if (elephant === 1) {
        if (gameObject.name === 'square') {
          gameScene.orangeMouthOpen.visible = true;
          gameScene.moveToStomatch(elephant, gameObject);
		  gameObject.input.enabled = false;
        } else {
          gameScene.incorrect ++;
          gameScene.thighTurnToBone(gameScene.incorrect);
          gameScene.redLeftElephant.visible = true;
          setTimeout(function() {
            gameScene.redLeftElephant.visible = false;
          }, 1500);
          gameScene.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
        }
	}

	{  
		if (elephant === 2) {
        if (gameObject.name === 'hexagon') {
          gameScene.purpleMouthOpen.visible = true;
          gameScene.moveToStomatch(elephant, gameObject);
		  gameObject.input.enabled = false;
        } else {
          gameScene.incorrect ++;
          gameScene.thighTurnToBone(gameScene.incorrect);
          gameScene.redRightElephant.visible = true;
          setTimeout(function() {
            gameScene.redRightElephant.visible = false;
          }, 1500);
          gameScene.back(elephant, gameObject, gameObject.input.dragStartX, gameObject.input.dragStartY);
        }
      }
	}

      if(gameScene.incorrect === 3)
         gameScene.giveNotice(gameScene);
      if(gameScene.orangeElephantStomach.length === 0 && gameScene.purpleElephantStomach.length === 0)
         setTimeout(()=>gameScene.scene.start("ConversionScene5"),5000);
      //gameScene.openInput();
    });

    var rect1 = new Phaser.Geom.Rectangle(orangeElephantX -180, orangeElephantY -240, 350,480);
    var rect2 = new Phaser.Geom.Rectangle(purpleElephantX -170, purpleElephantY -240, 350,480);

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
    const gameScene = this.scene.get('Game5_2');
    if (this.orangeElephantStomach.length === 0) {
      if(this.sleepTime1 < 150)
        this.sleepTime1++;
      else {
          this.sleepOrangeElephant();
        }
      }
    if (this.purpleElephantStomach.length === 0) {
      if(this.sleepTime2 < 150)
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
            x: this.mouthOrangeX,
            y: this.mouthOrangeY,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 200
          },
          {
            x: this.mouthOrangeX,
            y: this.mouthOrangeY,
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
            x: this.mouthOrangeX,
            y: this.mouthOrangeY,
            duration: 200
          },
          {
            x: this.orangeElephantStomach[0].x,
            y: this.orangeElephantStomach[0].y,
            scaleX: 0.7,
            scaleY: 0.7,
            angle: 180,
            ease: 'Bounce.easeOut',
            duration: 2000
          }
        ]
      });
      this.orangeElephantStomach.shift();
    }
    if (elephant === 2) {
      this.tweens.timeline({
        targets: gameObject,
        ease: 'Power1',
        tweens: [{
            x: this.mouthPurpleX,
            y: this.mouthOrangeY,
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
   canSeeShape(){
     this.t1.visible = true;
     this.t2.visible = true;
     this.c1.visible = true;
     this.c2.visible = true;
     this.s5.visible = true;
     this.h1.visible = true;
     this.h2.visible = true;
     this.h3.visible = true;
     this.h4.visible = true;
     this.h5.visible = true;
     this.s1.visible = true;
     this.s2.visible = true;
     this.s3.visible = true;
     this.s4.visible = true;
   }
//ẩn các hình
   canNotSeeShape(){
     this.t1.visible = false;
     this.t2.visible = false;
     this.c1.visible = false;
     this.c2.visible = false;
     this.s5.visible = false;
     this.h1.visible = false;
     this.h2.visible = false;
     this.h3.visible = false;
     this.h4.visible = false;
     this.h5.visible = false;
     this.s1.visible = false;
     this.s2.visible = false;
     this.s3.visible = false;
     this.s4.visible = false;
   }
//hiển thị mạng
   thighTurnToBone(incorrect){
     if(incorrect === 1){
       this.thigh1.visible = false;
       this.bone1.visible = true;
     }
     else if (incorrect === 2){
       this.thigh2.visible = false;
       this.bone2.visible = true;
     }
     else{
       this.thigh3.visible = false;
       this.bone3.visible = true;
     }
   }
//khi hết mạng
   giveNotice(gameScene){
     this.canNotSeeShape();
     this.add.text(config.width/2 - 190, config.height/2 - 50, 'Too many mistakes!', {
       fontFamily: "Roboto Condensed",
       fontSize: 50,
       color: "#000",
     });
     this.add.text(config.width/2 - 110, config.height/2, 'Try again!', {
       fontFamily: "Roboto Condensed",
       fontSize: 50,
       color: "#000",
     });
     this.next.visible = true;
     this.next.setInteractive().on('pointerup',()=>gameScene.scene.restart());
   }
//voi cam ngủ
  sleepOrangeElephant() {
    this.s1.visible = false;
    this.s2.visible = false;
    this.s3.visible = false;
    this.s4.visible = false;
    this.s5.visible = false;
    this.orangeElephant.visible = false;
    this.orangeMouthOpen.visible = false;
    this.squareText.visible = false;
    this.squareInBoard.visible = false;
    this.orangeElephantSleep.visible = true;
  }
//voi tím ngủ
  sleepPurpleElephant() {
    this.h1.visible = false;
    this.h2.visible = false;
    this.h3.visible = false;
    this.h4.visible = false;
    this.h5.visible = false;
    this.purpleElephant.visible = false;
    this.purpleMouthOpen.visible = false;
    this.hexagonText.visible = false;
    this.hexagonInBoard.visible = false;
    this.purpleElephantSleep.visible = true;
  }
	blockInput(){
	 this.t1.input.enabled = false;
     this.t2.input.enabled = false;
     this.t3.input.enabled = false;
     this.t4.input.enabled = false;
     this.t5.input.enabled = false;
     this.c1.input.enabled = false;
     this.c2.input.enabled = false;
     this.c3.input.enabled = false;
     this.c4.input.enabled = false;
     this.c5.input.enabled = false;
     this.s1.input.enabled = false;
     this.s2.input.enabled = false;
     this.s3.input.enabled = false;
     this.s4.input.enabled = false;
	}
	openInput(){
		if (this.t1.x>540 && this.t1.x<900) this.t1.input.enabled = true;
    	if (this.t2.x>540 && this.t2.x<900) this.t2.input.enabled = true;
    	if (this.t3.x>540 && this.t3.x<900) this.t3.input.enabled = true;
    	if (this.t4.x>540 && this.t4.x<900) this.t4.input.enabled = true;
		if (this.t5.x>540 && this.t5.x<900) this.t5.input.enabled = true;
    	if (this.c1.x>540 && this.c1.x<900) this.c1.input.enabled = true;
    	if (this.c2.x>540 && this.c2.x<900) this.c2.input.enabled = true;
		if (this.c3.x>540 && this.c3.x<900) this.c3.input.enabled = true;
    	if (this.c4.x>540 && this.c4.x<900) this.c4.input.enabled = true;
    	if (this.c5.x>540 && this.c5.x<900) this.c5.input.enabled = true;
		if (this.s1.x>540 && this.s1.x<900) this.s1.input.enabled = true;
    	if (this.s2.x>540 && this.s2.x<900) this.s2.input.enabled = true;
    	if (this.s3.x>540 && this.s3.x<900) this.s3.input.enabled = true;
     	if (this.s4.x>540 && this.s4.x<900) this.s4.input.enabled = true;
	}
}
