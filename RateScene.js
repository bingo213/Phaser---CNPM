class RateScene extends Phaser.Scene {
  constructor() {
    super("RateScene");
  }

  preload() {
    this.load.image("rateScene", "assets/rateScene.png");
    this.load.image("next", "assets/next.png");
    this.load.image("grayStar", "assets/grayStar.png");
    this.load.image("yellowStar", "assets/yellowStar.png");
    this.load.image("darkYellowStar", "assets/darkYellowStar.png");
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, "rateScene");

    var rated = 0; //Kiểm tra xem người chơi đã đánh giá chưa, nếu chưa đánh giá thì không nhấn được nút NEXT

    const gameScene = this.scene.get('RateScene');

    this.grayStar = [];
    for(let i = 0; i < 5; i++){
      this.grayStar.push(this.add.image(rateSceneSetting.starX[i], rateSceneSetting.starY, "grayStar"));
    }

   this.yellowStar = [];
   for(let i = 0; i < 5; i++){
     this.yellowStar.push(this.add.image(rateSceneSetting.starX[i], rateSceneSetting.starY, "yellowStar"));
     this.yellowStar[i].visible = false;
   }

   this.darkYellowStar = [];
   for(let i = 0; i < 5; i++){
     this.darkYellowStar.push(this.add.image(rateSceneSetting.starX[i], rateSceneSetting.starY, "darkYellowStar"));
     this.darkYellowStar[i].visible = false;
   }

    var button = new Phaser.Geom.Circle(46, 45, 50);

    for(let i = 0; i < 5; i++){
      this.grayStar[i].setInteractive(button, Phaser.Geom.Circle.Contains);
      this.grayStar[i].on('pointerover', function(){
        for(let j = 0; j < 5; j++){
          if(j<=i){
            gameScene.yellowStar[j].visible = true;
          }
        }
      });
      this.grayStar[i].on('pointerout', function(){
        for(let j = 0; j < 5; j++){
          if(j<=i){
            gameScene.yellowStar[j].visible = false;
          }
        }
      });
      this.grayStar[i].on('pointerdown', function(){
        rated = 1;
        for(let j = 0; j < 5; j++){
          if(j>i){
            gameScene.yellowStar[j].visible = false;
            gameScene.darkYellowStar[j].visible = false;
          }
          else {
            gameScene.darkYellowStar[j].visible = true;
          }
        }

      });
    }

    var next = this.add.image(config.width / 2, config.height / 2 + 100, "next");

    next.setInteractive();
    next.on('pointerover', function() {
      if (rated === 1)
        next.setTint(tintColorNextButton);
    });
    next.on('pointerout', function() {
      if (rated === 1)
        next.clearTint();
    });
    next.on('pointerup', function() {
      if (rated === 1)
        gameScene.scene.start('startGame');
    });
  }
}
