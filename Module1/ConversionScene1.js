class ConversionScene1 extends Phaser.Scene {
  constructor() {
    super("ConversionScene1");
  }

  preload(){
    this.load.image("conversionScene", "assets/conversionScene.png");
    this.load.image("ball", "assets/ball.png");
    this.load.image("load", "assets/load.png");
  }

  create(){
    this.add.image(config.width/2, config.height/2,"conversionScene");
    this.loading = this.add.image(config.width/2, config.height/2,"load");
    var ball_1 = this.add.image(481,74,"ball");
    var ball_2 = this.add.image(510,74,"ball");
    this.ball_3 = this.add.image(541,74,"ball");
  }

  update(){
    if(this.ball_3.x < 965){
        this.ball_3.x += 3;       //Quả bóng di chuyển về bên phải
        this.loading.angle += 3;  //Xoay nút loading tạo hiệu ứng loading...
      }
    else {
      this.scene.start("Game1_2");
    }
  }

}
