class ConversionScene5 extends Phaser.Scene {
  constructor() {
    super("ConversionScene5");
  }

  preload(){
    this.load.image("conversionScene", "assets/conversionScene.png");
    this.load.image("ball", "assets/ball.png");
    this.load.image("load", "assets/load.png");
  }

  create(){
    this.add.image(config.width/2, config.height/2,"conversionScene");
    this.loading = this.add.image(config.width/2, config.height/2,"load");
    this.ball_1 = this.add.image(481,74,"ball");
    var ball_2 = this.add.image(935,74,"ball");
  }

  update(){
    if(this.ball_1.x < 903){
        this.ball_1.x += 3;       //Quả bóng di chuyển về bên phải
        this.loading.angle += 3;  //Xoay nút loading tạo hiệu ứng loading...
      }
    else {
      this.scene.start("RateScene");
    }
  }

}
