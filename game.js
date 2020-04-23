var config = {
  type: Phaser.AUTO,
  width: 1440,
  height: 800,
  backgroundColor: 0xffffff,
  scene: [StartScene, RateScene,
    Game1_1, ConversionScene1, Game1_2, ConversionScene2, Game1_3, ConversionScene3,
    Game2_1, ConversionScene4, Game2_2, ConversionScene5,
    Game3_1, ConversionScene6, Game3_2,
    Game4_1, ConversionScene7, Game4_2, ConversionScene8, Game4_3,
    Game5_1, ConversionScene9, Game5_2
  ],
  pixelArt: true
};

var game = new Phaser.Game(config);
