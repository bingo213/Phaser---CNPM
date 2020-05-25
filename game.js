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
  ]
};

var font = "Roboto Condensed";

var backButtonSetting = {
  fontSize: 20,
  color: "#1a65ac",
  tintColor: 0x0000ff
};

var textTitleSetting = {
  fontSize: 50,
  color: "#000"
}

var textNextToBrush = { //Chữ bên cạnh cọ, tẩy
  fontSize: 35,
  color: "#000"
};

var conversionSceneSetting = {
  ballLeftX: [480, 510, 540], //Tọa độ x của bóng bên trái
  ballRightX: [970, 940, 910],//Tọa độ x của bóng bên phải
  ballY: 74 //Tọa độ y của bóng
};

var module1Setting = {
  textTitleY: 100, //Tọa độ y của title
  brushY: 580, //Tọa độ y của cọ và tẩy
  eraseX1: 230, //Tọa độ x của tẩy khi game thuộc kiểu 1 hoặc 3 (this.type)
  eraseX2: 1040, //Tọa độ x của tẩy khi game thuộc kiểu 2 (this.type === 2)
  extraBrushX: [245, 445, 645, 845], //Tọa độ x của cọ khi có 4 cọ (tọa độ x của cọ phụ)
  brushX1: [545, 840, 1112], //Tọa độ x của cọ khi có 3 cọ
  brushX2: [245, 640] //Tọa độ x của cọ khi có 2 cọ
};

var module2Setting = {
  textStartX: config.width / 2 - 10, //Tọa độ x của chữ yêu cầu (I eat ...) khi bắt đầu
  textStartY: config.height / 2, //Tọa độ y của chữ yêu cầu (I eat ...) khi bắt đầu
  elephantLeftX: 360, //Tọa độ voi bên trái
  elephantLeftY: 430,
  elephantLeftMouthX: 230, //Vị trí miệng voi trái
  elephantLeftMouthY: 330,
  elephantRightX: 1070, //Tọa độ voi phải
  elephantRightY: 430,
  elephantRightMouthX: 1220, //Vị trí miệng voi phải
  elephantRightMouthY: 330
};

var rateSceneSetting = {
    //Tọa độ x của 5 ngôi sao
    starX: [config.width / 2 - 260,
      config.width / 2 - 130,
      config.width / 2,
      config.width / 2 + 130,
      config.width / 2 + 260],
    starY: config.height / 2 - 80 //Tọa độ y của sao
}

var game = new Phaser.Game(config);
