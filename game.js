var config = {
  type: Phaser.AUTO,
  width: 1440,
  height: 800,
  backgroundColor: 0xffffff,
  scene: [StartScene, RateScene, Game1_1, ConversionScene1, Game1_2, ConversionScene2, Game1_3, ConversionScene3, Game4_1],
  pixelArt: true
};

var game = new Phaser.Game(config);
