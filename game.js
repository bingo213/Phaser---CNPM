var config = {
  type: Phaser.AUTO,
  width: 1440,
  height: 800,
  backgroundColor: 0xffffff,
  scene: [StartScene, Game1_1],
  pixelArt: true
};

var game = new Phaser.Game(config);
