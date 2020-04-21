var config = {
  type: Phaser.AUTO,
  width: 1440,
  height: 800,
  backgroundColor: 0xffffff,
<<<<<<< HEAD
  scene: [StartScene, Game1_1, Game1_2, Game4_1],
=======
  scene: [StartScene, RateScene,
          Game1_1, ConversionScene1, Game1_2, ConversionScene2, Game1_3, ConversionScene3,
          Game2_1, ConversionScene4, Game2_2, ConversionScene5,
          Game3_1, Game3_2, ConversionScene6,
          Game4_1],
>>>>>>> 2903cd7f8eb93aeb1d919c218c165a3519c85755
  pixelArt: true
};

var game = new Phaser.Game(config);
