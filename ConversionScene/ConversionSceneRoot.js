class ConversionSceneRoot extends Phaser.Scene {
  preload() {
    this.load.image("conversionScene", "assets/conversionScene.png");
    this.load.image("ball", "assets/ball.png");
    this.load.image("load", "assets/load.png");
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, "conversionScene");
    this.loading = this.add.image(config.width / 2, config.height / 2, "load");
    this.ballLeft = [];
    this.ballRight = [];
    for(let i = 0; i < this.numberOfBallLeft; i++){
      this.ballLeft.push(this.add.image(conversionSceneSetting.ballLeftX[i], conversionSceneSetting.ballY, "ball"));
    }
    for(let i = 0; i < this.numberOfBallRight; i++){
      this.ballRight.push(this.add.image(conversionSceneSetting.ballRightX[i], conversionSceneSetting.ballY, "ball"));
    }
    this.dynamicBall = this.ballLeft[this.numberOfBallLeft - 1];
  }

  update() {
    if (this.dynamicBall.x < conversionSceneSetting.ballRightX[this.numberOfBallRight]) {
      this.dynamicBall.x += 3; //Quả bóng di chuyển về bên phải
      this.loading.angle += 3; //Xoay nút loading tạo hiệu ứng loading...
    } else {
      this.scene.start(this.nextScene);
    }
  }

}
