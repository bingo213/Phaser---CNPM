class SceneRoot1 extends Phaser.Scene {
  preload() {
    //Load ảnh
    this.load.image("initscene1", "assets/initscene1.png");
    this.load.image("initscene2", "assets/initscene2.png");
    this.load.image("initscene3", "assets/initscene3.png");
    this.load.image("initscene4", "assets/initscene4.png");
    this.load.image("initscene5", "assets/initscene5.png");

    this.load.image("green", "assets/green.png");
    this.load.image("pink", "assets/pink.png");
    this.load.image("yellow", "assets/yellow.png");
    this.load.image("brown", "assets/brown.png");
    this.load.image("blue", "assets/blue.png");
    this.load.image("gray", "assets/gray.png");
    this.load.image("purple", "assets/purple.png");
    this.load.image("orange", "assets/orange.png");

    this.load.image("done", "assets/donebutton.png");
    this.load.image("erase", "assets/erase.png");
    this.load.image("notification", "assets/notification.png");
    this.load.image("notification2", "assets/notification2.png");
    this.load.image("stateBar", "assets/state_bar.png");
    this.load.image("next", "assets/next.png");

    this.load.image("eye1_1", "assets/eye.png");
    this.load.image("beard", "assets/beard.png");
    this.load.image("tree", "assets/tree.png");
    this.load.image("carrot", "assets/carrot.png");
    this.load.image("snowman", "assets/snowman.png");
    this.load.image("bow", "assets/bow.png");
    this.load.image("snow_background", "assets/snow background.jpg");
    this.load.image("bg", "assets/bgr.png");
    this.load.image("window1", "assets/window_1.png");
    this.load.image("window", "assets/window.png");
    this.load.image("background2_1", "assets/background2_1.png");
    this.load.image("eye2_2", "assets/eye2_2.png");
    this.load.image("tail", "assets/tail.png");
    this.load.image("nose", "assets/nose.png");
    this.load.image("leg1", "assets/leg1.png");
    this.load.image("leg2", "assets/leg2.png");
    this.load.image("background2_2", "assets/background2_2.png");
    this.load.image("background", "assets/background3_1.png");
    this.load.image("eye", "assets/eyes.png");
    this.load.image("background3_2", "assets/background3_2.png");
    this.load.image("leg", "assets/legBird.png");
    this.load.image("worm", "assets/worm.png");
  }

  create() {
    const gameScene = this.scene.get(this.name);
    this.setUp(gameScene);

    //this.addExtraImageBehindShape();
    this.addShapes();
    this.addExtraImageInFrontOfShape();

    this.countColor = 0;
    this.shapes.forEach(item => {
      item.setInteractive().on('pointerup', () => {
        item.color(this.color);
        if (gameScene.type === 3) {
          gameScene.countColor++;
        }
      })
    });

    this.addRequiredBrush();

    this.addErase();

    this.notification = this.add.image(1030, 655, this.notice); //Thông báo khi nhấn nút Done mà chưa tô hết các hình
    this.notification.visible = false; //Ban đầu không nhìn thấy thông báo

    this.setBrushInteractive(gameScene, gameScene.requireBrush);
    this.button = new Phaser.Geom.Circle(46, 45, 50);

    this.setEraseInteractive(this);

    this.done = this.add.image(701, 660, "done"); //Nút done
    //Nút Done cũng có hiệu ứng khi di chuột qua
    this.done.setInteractive(gameScene.button, Phaser.Geom.Circle.Contains);
    this.done.on('pointerover', function() {
      this.setTint(0x303f9f);
    });
    this.done.on('pointerout', function() {
      this.clearTint();
    });
    this.complete = false;
    this.count = 0;
    this.done.on('pointerup', function() { //Khi nhấn chuột thì kiểm tra các hình đã được tô chưa, nếu tô thì tô đúng chưa
      if (gameScene.type === 1)
        gameScene.doneClick1(gameScene);
      if (gameScene.type === 2)
        gameScene.doneClick2(gameScene);
      if (gameScene.type === 3)
        gameScene.doneClick3(gameScene);

      //Set lại giá trị biến đếm số hình chưa tô và biến đếm số lượng hình tô sai màu
      gameScene.countFill = 0;
      gameScene.countFailCorlor = 0;
    });
  }

  setUp(gameScene) {
    this.countFill = 0; //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0; //Đếm số lượng hình tô sai màu

    this.color = 0xffffff;

    this.requireBrush = [];
    this.extraBrush = [];
    this.extraImageInFrontOfShape = [];
    this.extraImageBehindShape = [];
    this.shapes = [];

    //Background (khung hình chữ nhật, state bar)
    this.add.image(config.width / 2, config.height / 2, this.initscene);

    this.addExtraImageBehindShape();

    this.backButton = this.add.text(170, 70, 'BACK', { //Nút BACK
      fontFamily: "Roboto Condensed",
      fontSize: 20,
      color: "#1a65ac",
    });

    var shape = new Phaser.Geom.Circle(10, 0, 40);
    this.backButton.setInteractive(shape, Phaser.Geom.Circle.Contains);
    this.backButton.on('pointerover', function() { //Hiệu ứng khi di chuột vào nút BACK nút sẽ có màu xanh đậm
      this.setTint(0x0000ff);
    });
    this.backButton.on('pointerout', function() { //Khi chuột không còn ở nút BACK thì trở lại màu như ban đầu
      this.clearTint();
    });
    this.backButton.on('pointerup', () => gameScene.scene.start('startGame')); //Khi nhấn chuột vào nút BACK thì quay trở lại màn hình bắt đầu (StartScene)

    this.title = this.add.text(this.textTitleX, module1Setting.textTitleY, this.textTitle, { //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });

    this.next = this.add.image(701, 580, "next");
    this.next.visible = false;
  }
  addShapes() {}
  addErase() {
    if (this.amount === 3) {
      this.eraseRectangle = new Rect(this, 280, 580, 205, 60);
      this.eraseRectangle.setStrokeStyle(0, 0xffffff);
      this.eraseRectangle.fillColor = 0xFFEBEE;
      this.eraseRectangle.visible = false;
      this.erase = this.add.image(230, 580, "erase"); //Tẩy và chữ Erase bên phải tẩy
      this.eraseText = this.add.text(270, 560, 'Erase', {
        fontFamily: "Roboto Condensed",
        fontSize: 35,
        color: "#000",
      });
    } else {
      this.eraseRectangle = new Rect(this, 1085, 580, 205, 60);
      this.eraseRectangle.setStrokeStyle(0, 0xffffff);
      this.eraseRectangle.fillColor = 0xFFEBEE;
      this.eraseRectangle.visible = false;
      this.erase = this.add.image(1040, 580, "erase"); //Tẩy và chữ Erase bên phải tẩy
      this.eraseText = this.add.text(1075, 560, 'Erase', {
        fontFamily: "Roboto Condensed",
        fontSize: 35,
        color: "#000",
      });
    }
  }
  setEraseInteractive(gameScene) {
    this.erase.setInteractive(gameScene.button, Phaser.Geom.Circle.Contains);
    this.erase.on('pointerover', function() {
      this.setTint(0x7878ff);
    });
    this.erase.on('pointerout', function() {
      this.clearTint();
    });
    this.erase.on('pointerup', () => {
      this.color = 0xffffff;
      this.eraseRectangle.visible = true;
      for (var i = 0; i < this.requireBrush.length; i++) {
        this.requireBrush[i].colorRect.visible = false;
      }
    });
  }
  addRequiredBrush() {
    for (var i = 0; i < this.requireBrush.length; i++) {
      this.requireBrush[i].colorRect.setStrokeStyle(0, 0xffffff);
      this.requireBrush[i].colorRect.fillColor = this.requireBrush[i].hexColor;
      this.requireBrush[i].colorRect.visible = false;
    }
  }
  addExtraBrush() {
    for (var i = 0; i < this.extraBrush.length; i++) {
      this.extraBrush[i].colorRect.setStrokeStyle(0, 0xffffff);
      this.extraBrush[i].colorRect.fillColor = this.extraBrush[i].hexColor;
      this.extraBrush[i].colorRect.visible = false;
    }
  }
  setBrushInteractive(gameScene, arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].image.setInteractive(gameScene.button, Phaser.Geom.Circle.Contains);
      arr[i].image.on('pointerover', function() {
        this.setTint(arr[i].tintColor);
      });
      arr[i].image.on('pointerout', function() {
        this.clearTint();
      });
      arr[i].image.on('pointerup', function() {
        gameScene.color = arr[i].hexColor;
        arr[i].colorRect.visible = true;
        for (let j = 0; j < arr.length; j++) {
          if (j !== i) {
            arr[j].colorRect.visible = false;
            gameScene.eraseRectangle.visible = false;
          }
        }
      });
    }
  }

  //Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
  check(shape) {
    for (let i = 0; i < this.requireBrush.length; i++) {
      if (shape instanceof this.requireBrush[i].typeShape) {
        if (shape.isFill() === false) this.countFill++;
        else {
          if (this.isTrueColor(shape) === false) {
            shape.drawStroke();
            this.countFailCorlor++;
          }
        }
      }
    }
    for (let i = 0; i < this.extraTypeShape.length; i++) {
      if (shape instanceof this.extraTypeShape[i] && this.isTrueColor(shape) === false) {
        shape.drawStroke();
        this.countFailCorlor++;
      }
    }
  }
  //Xóa màu và viền đỏ của hình tô màu sai
  deleteColor(shape) {
    for (let i = 0; i < this.requireBrush.length; i++) {
      if (shape instanceof this.requireBrush[i].typeShape) {
        if (shape.isFill() === true && this.isTrueColor(shape) === false) {
          setTimeout(function() {
            shape.setStrokeStyle(2, 0x000000);
            shape.fillColor = 0xffffff;
          }, 1500);
        }
      }
    }
    for (let i = 0; i < this.extraTypeShape.length; i++) {
      if (shape instanceof this.extraTypeShape[i]) {
        if (shape.isFill() === true) {
          setTimeout(function() {
            shape.setStrokeStyle(2, 0x000000);
            shape.fillColor = 0xffffff;
          }, 1500);
        }
      }
    }
  }
  //Kiểm tra đã tô đúng màu hay chưa
  isTrueColor(shape) {
    for (let i = 0; i < this.requireBrush.length; i++) {
      if (shape instanceof this.requireBrush[i].typeShape) {
        if (shape.fillColor === this.requireBrush[i].hexColor) return true;
        else return false;
      }
    }
    for (let i = 0; i < this.extraTypeShape.length; i++) {
      if (shape instanceof this.extraTypeShape[i]) {
        if (shape.fillColor === 0xffffff) return true;
        else return false;
      }
    }
  }

  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.forEach(img => {
      img.visible = false;
    });
  }

  addExtraImageBehindShape() {
    this.extraImageBehindShape.forEach(img => {
      img.visible = false;
    });
  }

  displayExtraImage() {
    this.extraImageInFrontOfShape.forEach(img => {
      img.visible = true;
    });
    this.extraImageBehindShape.forEach(img => {
      img.visible = true;
    });
  }

  doneClick1(gameScene) {
    for (var i = 0; i < this.shapes.length; i++) {
      this.check(this.shapes[i]);
    }

    if (this.countFailCorlor > 0) //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
    {
      for (let i = 0; i < this.shapes.length; i++) {
        this.deleteColor(this.shapes[i]);
      }
    } else if (this.countFill > 0) { //Nếu có hình chưa tô thì đưa ra thông báo "Color all the shapes", sau 3s thì ẩn thông báo
      this.notification.visible = true;
      setTimeout(() => this.notification.visible = false, 3000);
    } else {
      this.done.visible = false;
      this.eraseText.visible = false;
      this.eraseRectangle.visible = false;
      this.erase.visible = false;
      for (let i = 0; i < this.requireBrush.length; i++) {
        this.requireBrush[i].colorRect.visible = false;
        this.requireBrush[i].image.visible = false;
        this.requireBrush[i].text.visible = false;
      }
      this.next.visible = true;
      this.displayExtraImage();
      this.next.setInteractive().on('pointerup', () => gameScene.scene.start(gameScene.conversionScene));
    }
  }

  doneClick2(gameScene) {
    if (this.complete === false) {
      for (var i = 0; i < this.shapes.length; i++) {
        this.check(this.shapes[i]);
      }
      if (this.countFailCorlor > 0) {
        for (var i = 0; i < this.shapes.length; i++) {
          this.deleteColor(this.shapes[i]);
        }
      } else if (this.countFill > 0) {
        this.notification.visible = true;
        setTimeout(() => this.notification.visible = false, 3000);
      } else {
        this.complete = true;
      }
    }

    if (this.complete === true) {
      this.count++;
      for (let i = 0; i < this.requireBrush.length; i++) {
        this.requireBrush[i].image.visible = false;
        this.requireBrush[i].text.visible = false;
        this.requireBrush[i].colorRect.visible = false;
      }

      this.title.visible = false;
      this.add.text(270, module1Setting.textTitleY, 'Great! Now color the rest the way you want! ', { //Thêm tiêu đề
        fontFamily: "Roboto Condensed",
        fontSize: 50,
        color: "#000",
      });

      //Khi đã tô đúng màu vào các hình được yêu cầu và nhấn DONE thì những hình đó không tô vào hay xóa đi được nữa
      this.shapes.forEach(item => {
        for (let i = 0; i < this.requireBrush.length; i++)
          if (item instanceof this.requireBrush[i].typeShape) {
            item.removeInteractive();
          }
      });
      this.addExtraBrush();
      this.setBrushInteractive(this, this.extraBrush);
      if (this.count === 2) {
        this.done.visible = false;
        this.next.visible = true;
        this.erase.visible = false;
        this.eraseRectangle.visible = false;
        this.eraseText.visible = false;
        for (let i = 0; i < this.extraBrush.length; i++) {
          this.extraBrush[i].image.visible = false;
          this.extraBrush[i].colorRect.visible = false;
        }
        this.displayExtraImage();
        this.next.setInteractive().on('pointerup', () => gameScene.scene.start(gameScene.conversionScene));
      }
    }

  }

  doneClick3(gameScene) {
    if (this.countColor > 0) {
      this.done.visible = false;
      this.erase.visible = false;
      this.eraseRectangle.visible = false;
      this.eraseText.visible = false;
      for (let i = 0; i < this.requireBrush.length; i++) {
        this.requireBrush[i].image.visible = false;
        this.requireBrush[i].colorRect.visible = false;
      }
      this.next.visible = true;
      this.displayExtraImage();
      this.next.setInteractive().on('pointerup', () => gameScene.scene.start(gameScene.conversionScene));
    }
  }

}
