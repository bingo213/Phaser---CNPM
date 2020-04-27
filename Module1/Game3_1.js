class Game3_1 extends Phaser.Scene {
  constructor() {
    super("Game3_1");
  }

  preload() {
    this.load.image("initscene4", "assets/initscene4.png");
    this.load.image("green", "assets/green.png");
    this.load.image("gray", "assets/gray.png");
    this.load.image("yellow", "assets/yellow.png");
    this.load.image("brown", "assets/brown.png");
    this.load.image("blue", "assets/blue.png");
    this.load.image("pink", "assets/pink.png");
    this.load.image("done", "assets/donebutton.png");
    this.load.image("erase", "assets/erase.png");
    this.load.image("next", "assets/next.png");
    this.load.image("notification2", "assets/notification2.png");
    this.load.image("background", "assets/background3_1.png");
    this.load.image("eye", "assets/eyes.png");
  }
  create() {
    this.countFill = 0; //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0; //Đếm số lượng hình tô sai màu

    var color = 0xffffff;
    this.greenColor = 0x7CB342;
    this.brownColor = 0xE74C3C;
    var grayColor = 0xBFC9CA;
    var blueColor = 0x81D4FA;
    var pinkColor = 0xFF1744;
    var yellowColor = 0xFBC02D;


    const gameScene = this.scene.get('Game3_1'); //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Background (khung hình chữ nhật, state bar)
    this.add.image(config.width / 2, config.height / 2, "initscene4");

    var background = this.add.image(config.width / 2, config.height / 2, "background");
    background.visible = false;

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

    var text1 = this.add.text(405, 100, 'Color the triangles and hexagons', { //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    var text2 = this.add.text(270, 100, 'Great! Now color the rest the way you want! ', { //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    text2.visible = false; //Text2 tạm thời chưa nhìn thấy

    //Màu tùy chọn
    var yellowRectangle = new Rect(this, 275, 580, 120, 60);
    yellowRectangle.setStrokeStyle(0, 0xffffff);
    yellowRectangle.fillColor = yellowColor;
    yellowRectangle.visible = false;
    var yellow = this.add.image(245, 580, "yellow");
    yellow.visible = false;

    var grayRectangle = new Rect(this, 475, 580, 120, 60);
    grayRectangle.setStrokeStyle(0, 0xffffff);
    grayRectangle.fillColor = grayColor;
    grayRectangle.visible = false;
    var gray = this.add.image(445, 580, "gray");
    gray.visible = false;

    var blueRectangle = new Rect(this, 675, 580, 120, 60);
    blueRectangle.setStrokeStyle(0, 0xffffff);
    blueRectangle.fillColor = blueColor;
    blueRectangle.visible = false;
    var blue = this.add.image(645, 580, "blue");
    blue.visible = false;

    var pinkRectangle = new Rect(this, 875, 580, 120, 60);
    pinkRectangle.setStrokeStyle(0, 0xffffff);
    pinkRectangle.fillColor = pinkColor;
    pinkRectangle.visible = false;
    var pink = this.add.image(845, 580, "pink");
    pink.visible = false;

    //Thêm cọ, tẩy và chữ bên phải cọ, tẩy
    var greenRectangle = new Rect(this, 335, 580, 230, 60);
    greenRectangle.setStrokeStyle(0, 0xffffff);
    greenRectangle.fillColor = this.greenColor;
    greenRectangle.visible = false;
    var green = this.add.image(245, 580, "green");
    var triangleText = this.add.text(280, 560, 'Triangles', {
      fontFamily: "Roboto Condensed",
      fontSize: 35,
      color: "#000",
    });

    var brownRectangle = new Rect(this, 728, 580, 230, 60);
    brownRectangle.setStrokeStyle(0, 0xffffff);
    brownRectangle.fillColor = this.brownColor;
    brownRectangle.visible = false;
    var brown = this.add.image(640, 580, "brown");
    var hexagonText = this.add.text(675, 560, 'Hexagons', {
      fontFamily: "Roboto Condensed",
      fontSize: 35,
      color: "#000",
    });

    var eraseRectangle = new Rect(this, 1085, 580, 205, 60);
    eraseRectangle.setStrokeStyle(0, 0xffffff);
    eraseRectangle.fillColor = 0xFFEBEE;
    eraseRectangle.visible = false;
    var erase = this.add.image(1040, 580, "erase"); //Tẩy và chữ Erase bên phải tẩy
    var eraseText = this.add.text(1075, 560, 'Erase', {
      fontFamily: "Roboto Condensed",
      fontSize: 35,
      color: "#000",
    });

    var next = this.add.image(701, 580, "next"); //Nút NEXT ban đầu không nhìn thấy
    next.visible = false;

    var done = this.add.image(701, 660, "done"); //Nút done
    var notification2 = this.add.image(1030, 655, "notification2"); //Thông báo khi nhấn nút Done mà chưa tô hết các hình
    notification2.visible = false; //Ban đầu không nhìn thấy thông báo

    //Vẽ hình
    var shapes = [];
    //Mai cua và càng
    shapes[18] = new Hex(this, config.width / 2, config.height / 2, 100, 100);
    shapes[19] = new Hex(this, 555, 285, 50, 50);
    shapes[20] = new Hex(this, 886, 285, 50, 50);
    //Càng bên trái
    shapes[0] = new Tri(this, 623, 325, 0, 64, 32, 0, 64, 64);
    shapes[0].angle = -60;
    shapes[1] = new Tri(this, 465, 197, 0, 64, 80, 0, 64, 64);
    shapes[1].angle = -120;
    shapes[2] = new Tri(this, 440, 270, 0, 128, 64, 0, 128, 128);
    shapes[2].angle = -80;
    //Lá bên trái
    shapes[3] = new Tri(this, 230, 330, 0, 80, 32, 0, 80, 80);
    shapes[3].angle = 180;
    shapes[4] = new Tri(this, 300, 420, 0, 80, 32, 0, 80, 80);
    shapes[4].angle = 140;
    shapes[5] = new Tri(this, 410, 380, 0, 80, 32, 0, 80, 80);
    shapes[5].angle = -150;
    shapes[6] = new Tri(this, 400, 500, 0, 80, 32, 0, 80, 80);
    shapes[6].angle = -160;
    shapes[7] = new Tri(this, 335, 500, 0, 80, 32, 0, 80, 80);
    shapes[7].angle = 160;
    //Lá bên phải
    shapes[8] = new Tri(this, 1180, 300, 0, 80, 32, 0, 80, 80);
    shapes[8].angle = -170;
    shapes[9] = new Tri(this, 1070, 350, 0, 80, 32, 0, 80, 80);
    shapes[9].angle = 140;
    shapes[10] = new Tri(this, 1180, 430, 0, 80, 32, 0, 80, 80);
    shapes[10].angle = 180;
    shapes[11] = new Tri(this, 1070, 430, 0, 80, 32, 0, 80, 80);
    shapes[11].angle = -170;
    shapes[12] = new Tri(this, 1130, 510, 0, 80, 32, 0, 80, 80);
    shapes[12].angle = 180;
    //Càng bên phải
    shapes[13] = new Tri(this, 817, 325, 0, 64, 32, 0, 64, 64);
    shapes[13].angle = 60;
    shapes[14] = new Tri(this, 970, 200, 0, 64, 80, 10, 64, 64);
    shapes[14].angle = 180;
    shapes[15] = new Tri(this, 1000, 270, 0, 128, 64, 0, 128, 128);
    shapes[15].angle = 80;
    //Mắt
    shapes[16] = new Cir(this, config.width / 2 - 40, config.height / 2 - 120, 25, 25);
    shapes[17] = new Cir(this, config.width / 2 + 40, config.height / 2 - 120, 25, 25);
    var eyeLeft = this.add.image(config.width / 2 - 35, config.height / 2 - 125, "eye");
    eyeLeft.visible = false;
    var eyeRight = this.add.image(config.width / 2 + 45, config.height / 2 - 125, "eye");
    eyeRight.visible = false;
    //Chân cua
    shapes[21] = new Rect(this, config.width / 2 - 103, config.height / 2 + 100, 100, 30); //Trái
    shapes[21].angle = -30;
    shapes[22] = new Rect(this, config.width / 2 - 121, config.height / 2 + 68, 100, 30);
    shapes[22].angle = -30;
    shapes[23] = new Rect(this, config.width / 2 - 139, config.height / 2 + 36, 100, 30);
    shapes[23].angle = -30;
    shapes[24] = new Rect(this, config.width / 2 + 103, config.height / 2 + 100, 100, 30); //Phải
    shapes[24].angle = 30;
    shapes[25] = new Rect(this, config.width / 2 + 121, config.height / 2 + 68, 100, 30);
    shapes[25].angle = 30;
    shapes[26] = new Rect(this, config.width / 2 + 139, config.height / 2 + 36, 100, 30);
    shapes[26].angle = 30;

    //Hiệu ứng tô màu vào hình
    shapes.forEach(element => element.setInteractive().on('pointerup', () => element.color(color)));

    //Hiệu ứng khi di chuột qua cọ vẽ thì cọ có màu đậm hơn, khi chuột ra khỏi vùng cọ vẽ thì cọ trở lại trạng thái ban đầu
    //Khi nhấn chuột vào thì màu (biến color) được set lại
    var button = new Phaser.Geom.Circle(46, 45, 50);
    //Cọ xanh
    green.setInteractive(button, Phaser.Geom.Circle.Contains);
    green.on('pointerover', function() {
      green.setTint(0x1b5e20);
    });
    green.on('pointerout', function() {
      green.clearTint();
    });
    green.on('pointerup', function() {
      color = gameScene.greenColor;
      greenRectangle.visible = true;
      brownRectangle.visible = false;
      eraseRectangle.visible = false;
    });

    //Cọ xám
    brown.setInteractive(button, Phaser.Geom.Circle.Contains);
    brown.on('pointerover', function() {
      brown.setTint(0xD32F2F);
    });
    brown.on('pointerout', function() {
      brown.clearTint();
    });
    brown.on('pointerup', function() {
      color = gameScene.brownColor;
      brownRectangle.visible = true;
      greenRectangle.visible = false;
      eraseRectangle.visible = false;
    });

    //Hiệu ứng khi di chuột qua tẩy
    erase.setInteractive(button, Phaser.Geom.Circle.Contains);
    erase.on('pointerover', function() {
      erase.setTint(0x7878ff);
    });
    erase.on('pointerout', function() {
      erase.clearTint();
    });
    erase.on('pointerup', function() {
      color = 0xffffff;
      eraseRectangle.visible = true;
      brownRectangle.visible = false;
      greenRectangle.visible = false;
      yellowRectangle.visible = false;
      grayRectangle.visible = false;
      pinkRectangle.visible = false;
      blueRectangle.visible = false;
    });

    var complete = false;
    var count = 0;
    //Nút Done cũng có hiệu ứng khi di chuột qua
    done.setInteractive(button, Phaser.Geom.Circle.Contains);
    done.on('pointerover', function() {
      done.setTint(0x303f9f);
    });
    done.on('pointerout', function() {
      done.clearTint();
    });
    done.on('pointerup', function() {
      if (complete === false) {
        for (var i = 0; i < shapes.length; i++) {
          gameScene.check(shapes[i]);
        }

        if (gameScene.countFailCorlor > 0) { //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
          for (var i = 0; i < shapes.length; i++) {
            gameScene.deleteColor(shapes[i]);
          }
        } else if (gameScene.countFill > 0) { //Nếu có hình chưa tô thì đưa ra thông báo "Color all the shapes", sau 3s thì ẩn thông báo
          notification2.visible = true;
          setTimeout(() => notification2.visible = false, 3000);
        } else {
          complete = true;
        }
      }

      if (complete === true) {
        count++;
        text1.visible = false;
        text2.visible = true;
        complete = true;
        green.visible = false;
        brown.visible = false;
        hexagonText.visible = false;
        triangleText.visible = false;
        greenRectangle.visible = false;
        brownRectangle.visible = false;
        eraseRectangle.visible = false;
        blue.visible = true;
        pink.visible = true;
        gray.visible = true;
        yellow.visible = true;
        console.log(complete);

        //Khi đã tô đúng màu vào các hình được yêu cầu và nhấn DONE thì những hình đó không tô vào hay xóa đi được nữa
        shapes.forEach(item => {
          if (item instanceof Hex || item instanceof Tri) {
            item.removeInteractive();
          }
        });


        //Thêm hiệu ứng cho các cọ vừa xuất hiện
        blue.setInteractive(button, Phaser.Geom.Circle.Contains);
        blue.on('pointerover', function() {
          blue.setTint(0x00838F);
        });
        blue.on('pointerout', function() {
          blue.clearTint();
        });
        blue.on('pointerup', function() {
          color = blueColor;
          blueRectangle.visible = true;
          grayRectangle.visible = false;
          pinkRectangle.visible = false;
          yellowRectangle.visible = false;
          eraseRectangle.visible = false;
        });

        gray.setInteractive(button, Phaser.Geom.Circle.Contains);
        gray.on('pointerover', function() {
          gray.setTint(0x5D6D7E);
        });
        gray.on('pointerout', function() {
          gray.clearTint();
        });
        gray.on('pointerup', function() {
          color = grayColor;
          grayRectangle.visible = true;
          blueRectangle.visible = false;
          pinkRectangle.visible = false;
          yellowRectangle.visible = false;
          eraseRectangle.visible = false;
        });

        pink.setInteractive(button, Phaser.Geom.Circle.Contains);
        pink.on('pointerover', function() {
          pink.setTint(0xFF4081);
        });
        pink.on('pointerout', function() {
          pink.clearTint();
        });
        pink.on('pointerup', function() {
          color = pinkColor;
          pinkRectangle.visible = true;
          grayRectangle.visible = false;
          blueRectangle.visible = false;
          yellowRectangle.visible = false;
          eraseRectangle.visible = false;
        });

        yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
        yellow.on('pointerover', function() {
          yellow.setTint(0xFFD600);
        });
        yellow.on('pointerout', function() {
          yellow.clearTint();
        });
        yellow.on('pointerup', function() {
          color = yellowColor;
          yellowRectangle.visible = true;
          grayRectangle.visible = false;
          pinkRectangle.visible = false;
          blueRectangle.visible = false;
          eraseRectangle.visible = false;
        });
        if (count === 2) {
          done.visible = false;
          next.visible = true;
          blue.visible = false;
          pink.visible = false;
          yellow.visible = false;
          gray.visible = false;
          erase.visible = false;
          yellowRectangle.visible = false;
          grayRectangle.visible = false;
          pinkRectangle.visible = false;
          blueRectangle.visible = false;
          eraseRectangle.visible = false;
          eraseText.visible = false;
          eyeLeft.visible = true;
          eyeRight.visible = true;
          background.visible = true;
          next.setInteractive().on('pointerup', () => gameScene.scene.start("ConversionScene6"));
        }
      }


      gameScene.countFill = 0;
      gameScene.countFailCorlor = 0;
    });

  }

  //Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
  check(shape) {
    if (shape instanceof Tri || shape instanceof Hex) {
      if (shape.isFill() === false) this.countFill++;
      else {
        if (this.isTrueColor(shape) === false) {
          shape.drawStroke();
          this.countFailCorlor++;
        }
      }
    }
    if ((shape instanceof Rect || shape instanceof Cir) && this.isTrueColor(shape) === false) {
      shape.drawStroke();
      this.countFailCorlor++;
    }
  }

  //Xóa màu và viền đỏ của hình tô màu sai
  deleteColor(shape) {
    if (shape instanceof Tri || shape instanceof Hex) {
      if (shape.isFill() === true && this.isTrueColor(shape) === false) {
        setTimeout(function() {
          shape.setStrokeStyle(2, 0x000000);
          shape.fillColor = 0xffffff;
        }, 1500);
      }
    } else {
      if (shape.isFill() === true) {
        setTimeout(function() {
          shape.setStrokeStyle(2, 0x000000);
          shape.fillColor = 0xffffff;
        }, 1500);
      }
    }
  }

  //Kiểm tra đã tô đúng màu hay chưa
  isTrueColor(shape) {
    if (shape instanceof Hex) {
      if (shape.fillColor === this.brownColor) return true;
      else return false;
    }
    if (shape instanceof Tri) {
      if (shape.fillColor === this.greenColor) return true;
      else return false;
    }
    if (shape instanceof Cir || shape instanceof Rect) {
      if (shape.fillColor === 0xffffff) return true;
      else return false;
    }
  }
}
