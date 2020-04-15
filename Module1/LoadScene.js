class LoadScene extends Phaser.Scene {
  constructor() {
    super("LoadScene");
  }
  preload(){
    this.load.image("initscene","assets/initscene1.png");
    this.load.image("green","assets/green.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("notification","assets/notification.png");
    this.load.image("stateBar","assets/state_bar.png");
    this.load.image("next","assets/next.png");
    this.load.image("eye","assets/eye.png");
    this.load.image("beard","assets/beard.png");
    this.load.image("tree","assets/tree.png");

    this.load.image("initscene2","assets/initscene2.png");
    this.load.image("brown","assets/brown.png");
    this.load.image("blue","assets/blue.png");
    this.load.image("next","assets/next.png");
    this.load.image("carrot","assets/carrot.png");
    this.load.image("snowman","assets/snowman.png");
    this.load.image("bow","assets/bow.png");
    this.load.image("snow_background","assets/snow background.png");

    this.load.image("initscene3","assets/initscene3.png");
    this.load.image("purple","assets/purple.png");
    this.load.image("orange","assets/orange.png");
    this.load.image("next","assets/next.png");
    this.load.image("bg","assets/bgr.png");
    this.load.image("window1","assets/window_1.png");
    this.load.image("window","assets/window.png");
  }
}
