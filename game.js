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
    Game5_1, ConversionScene9, Game5_2, ConversionScene10
  ],
  pixelArt: true
};
var module1Setting = {
  brushY: 580,
  eraseX1: 280,
  eraseX2: 1085
}

var module2Setting = {
  textStartX: config.width / 2 - 10,
  textStartY: config.height / 2,
  elephantLeftX: 360,
  elephantLeftY: 430,
  elephantLeftMouthX: 230,
  elephantLeftMouthY: 330,
  elephantRightX: 1070,
  elephantRightY: 430,
  elephantRightMouthX: 1220,
  elephantRightMouthY: 330
};

var game = new Phaser.Game(config);
