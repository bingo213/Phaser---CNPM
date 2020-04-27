class StartScene extends Phaser.Scene {
  constructor() {
    super("startGame");
  }

  preload() {
    this.load.image("startScene", "assets/background.png");
    this.load.image("game1", "assets/1.png");
    this.load.image("game2", "assets/2.png");
    this.load.image("game3", "assets/3.png");
    this.load.image("game4", "assets/4.png");
    this.load.image("game5", "assets/5.png");
  }
  create() {
    //this.scene.start("playGame");

    this.add.image(config.width / 2, config.height / 2, "startScene");
    //this.startScene.setOrigin(0,0);
    var g1 = this.add.image(460, 310, "game1");
    g1.setInteractive();
    g1.on('pointerup', () => this.scene.start("Game1_1"));

    var g2 = this.add.image(740, 310, "game2");
    g2.setInteractive();
    g2.on('pointerup', () => this.scene.start("Game2_1"));

    var g3 = this.add.image(1020, 310, "game3");
    g3.setInteractive();
    g3.on('pointerup', () => this.scene.start("Game3_2"));

    var g4 = this.add.image(1300, 305, "game4");
    g4.setInteractive();
    g4.on('pointerup', () => this.scene.start("Game4_1"));

    var g5 = this.add.image(460, 570, "game5");
    g5.setInteractive();
    g5.on('pointerup', () => this.scene.start("Game5_1"));


  }
}
