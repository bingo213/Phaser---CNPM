class Rect extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height, 0xffffff);
        this.lineStyle = super.setStrokeStyle(2,0x000000);
        scene.add.existing(this);
      }

  isFill(){
        if(this.fillColor === 0xffffff)
            return false;
        return true;
       }

  isTrueColor(){
        if(this.fillColor === 0x66cc66) return true;
        else
          return false;
       }

  drawStroke(){
        this.setStrokeStyle(4, 0xff0000);
       }

  color(color){
        if(color === 0xffffff)
           this.fillColor = 0xffffff;
        if(this.isFill() === false){
          this.fillColor = color;
        }
  }

}
