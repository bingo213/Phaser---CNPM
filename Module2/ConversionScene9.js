class ConversionScene9 extends Phaser.Scene { //Sau khi chaòy thiÌ 3 quaÒ boìng cuÌng nãÌm bên phaÒi
  constructor() {
    super("ConversionScene9");
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
    var ball_3 = this.add.image(965,74,"ball");
  }

  update(){
    if(this.ball_1.x < 903){
        this.ball_1.x += 3;       //QuaÒ boìng di chuyêÒn vêÌ bên phaÒi
        this.loading.angle += 3;  //Xoay nuìt loading taòo hiêòu ýìng loading...
      }
    else {
      this.scene.start("RateScene");
    }
  }

}
