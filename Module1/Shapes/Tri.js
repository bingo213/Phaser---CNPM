class Tri extends Phaser.GameObjects.Triangle {
  constructor(scene, x, y, x1, y1, x2, y2, x3, y3) {
        super(scene, x, y, x1, y1, x2, y2, x3, y3, 0xffffff);
        super.setStrokeStyle(2,0x000000);
        this.trueColor = false;
        scene.add.existing(this);
      }

  isFill(){
        if(this.fillColor === 0xffffff)
            return false;
        return true;
       }

  isTrueColor(){
        if(this.fillColor === 0xff6699) return true;
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
