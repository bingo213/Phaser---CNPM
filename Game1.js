class Game1 extends Phaser.Scene {
  constructor() {
    super("Game1");
  }



  preload(){
    this.load.image("bgcolor","assets/color.png");
    this.load.image("green","assets/green.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
  }

  create(){
    this.add.image(config.width/2, config.height/2,"bgcolor");


    var whitebg = new Phaser.Geom.Rectangle(145,75,1150,609);

   var graphics = this.add.graphics({ fillStyle: { color: 0xffffff } });
   graphics.lineStyle(3,0x3F82C0);
   graphics.strokeRectShape(whitebg);
   graphics.fillRectShape(whitebg);

   this.green = this.add.image(405,560,"green");
   this.pink = this.add.image(701,560,"pink");
   this.yellow = this.add.image(1012,560,"yellow");
   this.done = this.add.image(701,650,"done");
   this.erase = this.add.image(300,550,"erase");
   this.green.setInteractive();
   this.pink.setInteractive();
   this.yellow.setInteractive();
   this.done.setInteractive();
   this.erase.setInteractive();

   this.cir = [];
   this.s1 = this.add.circle(330,240,50,0xffffff);
   this.s2 = this.add.circle(437,345,25,0xffffff);
   this.s3 = this.add.circle(467,385,25,0xffffff);
   this.s4 = this.add.circle(496,425,25,0xffffff);
   this.s5 = this.add.circle(952,280,70,0xffffff);
   this.s1.setStrokeStyle(2,0x000000);
   this.s2.setStrokeStyle(2,0x000000);
   this.s3.setStrokeStyle(2,0x000000);
   this.s4.setStrokeStyle(2,0x000000);
   this.s5.setStrokeStyle(2,0x000000);
   this.s1.setInteractive();
   this.s2.setInteractive();
   this.s3.setInteractive();
   this.s4.setInteractive();
   this.s5.setInteractive();
   this.cir.push(this.s1);
   this.cir.push(this.s2);
   this.cir.push(this.s3);
   this.cir.push(this.s4);
   this.cir.push(this.s5);

   this.r1 = this.add.rectangle(782,179,100,100,0xffffff);
   this.r2 = this.add.rectangle(1100,179,100,100, 0xffffff);
   this.r3 = this.add.rectangle(1100,395,100,100, 0xffffff);
   this.r4 = this.add.rectangle(782,395,100,100, 0xffffff);
   this.r1.setInteractive();
   this.r2.setInteractive();
   this.r3.setInteractive();
   this.r4.setInteractive();
   this.r1.setStrokeStyle(2,0x000000);
   this.r2.setStrokeStyle(2,0x000000);
   this.r3.setStrokeStyle(2,0x000000);
   this.r4.setStrokeStyle(2,0x000000);



   this.color = 0;
   this.isDone = false;
   this.green.on('pointerup',()=>this.color = 1);
   this.pink.on('pointerup',()=>this.color = 2);
   this.yellow.on('pointerup',()=>this.color = 3);
   this.erase.on('pointerup',()=>this.color = 0);
   this.failShape = [];
   this.done.on('pointerup', ()=>this.isDone = true);

}
  update(){
    if(this.color == 1){
    this.input.on('gameobjectdown', this.setGreenColor);
  }
  else if(this.color == 2){
    this.input.on('gameobjectdown', this.setPinkColor);
  }
  else if (this.color == 3){
    this.input.on('gameobjectdown', this.setBlueColor);
  }
  else{
    this.input.on('gameobjectdown', this.setWhiteColor);
  }
  // check();


  if(this.isDone == true){
    for(var i = 0; i < this.cir.length; i++){
      if(this.cir[i].data.values.fillColor != 0x00ff00)
         this.failShape.push(this.cir[i]);
    }
    if(this.failShape.length ==0)
     this.scene.start("Game2");
    else
     this.scene.start("Game1");
  }
}

  setGreenColor(pointer,SHAPE){
    SHAPE.fillColor = 0x00ff00;
  }
  setBlueColor(pointer,SHAPE){
    //SHAPE.setFillStyle(0x0000ff,1);
      SHAPE.fillColor = 0x0000ff;
  }
  setPinkColor(pointer,SHAPE){
    SHAPE.fillColor = 0xff0000;
  }
  setWhiteColor(pointer,SHAPE){
    SHAPE.setFillStyle(0xffffff,1);
  }
  check(){
    for(var i = 0; i < this.cir.length; i++){
      if(this.cir[i].data.values.fillColor != 0x00ff00)
         this.failShape.push(this.cir[i]);
    }
  }
}
