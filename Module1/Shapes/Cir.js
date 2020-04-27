class Cir extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y, radius) {
    super(scene, x, y, radius * 2, radius * 2, 0xffffff);
    super.setStrokeStyle(2, 0x000000);
    scene.add.existing(this);
  }

  isFill() {
    if (this.fillColor === 0xffffff)
      return false;
    return true;
  }

  drawStroke() {
    this.setStrokeStyle(4, 0xff0000);
  }

  color(color) {
    if (color === 0xffffff)
      this.fillColor = 0xffffff;
    if (this.isFill() === false) {
      this.fillColor = color;
    }
  }

}
