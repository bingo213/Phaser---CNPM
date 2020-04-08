class Game1_1 extends Phaser.Scene {
  constructor() {
    super("Game1_1");
  }



  preload(){
    this.load.image("bgcolor","assets/color.png");
    this.load.image("green","assets/green.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("notification","assets/notification.png");
  }

  create(){

    var colorGreen = 0x66cc66;
    var colorPink = 0xff6699;
    var colorYellow = 0xffb300;
    var color = 0xffffff;

    var countFill = 0;
    var countFailCorlor = 0;

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
        if(this.fillColor === colorGreen) return true;
        else {
          return false;
        }
      }
      drawStroke(){
        this.setStrokeStyle(4, 0xff0000);
      }
      check(){
        if(this.isFill() === false) countFill++;
        else {
          if(this.isTrueColor() === false){
                this.drawStroke();
                countFailCorlor++;
              }
        }
      }
    }

    class Cir extends Phaser.GameObjects.Ellipse {
      constructor(scene, x, y, radius) {
        super(scene, x, y, radius*2, radius*2, 0xffffff);
        super.setStrokeStyle(2,0x000000);
        scene.add.existing(this);
      }
      isFill(){
        if(this.fillColor === 0xffffff)
            return false;
        return true;
      }
      isTrueColor(){
        if(this.fillColor === colorYellow) return true;
        else {
          return false;
        }
      }
      drawStroke(){
        this.setStrokeStyle(4, 0xff0000);
      }
      check(){
        if(this.isFill() === false) countFill++;
        else {
          if(this.isTrueColor() === false){
                this.drawStroke();
                countFailCorlor++;
              }
        }
      }
    }

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
        if(this.fillColor === colorPink) return true;
        else {
          return false;
        }
      }
      drawStroke(){
        this.setStrokeStyle(4, 0xff0000);
      }
      check(){
        if(this.isFill() === false) countFill++;
        else {
          if(this.isTrueColor() === false){
                this.drawStroke();
                countFailCorlor++;
              }
        }
      }
    }


    this.add.image(config.width/2, config.height/2,"bgcolor");

   var graphics = this.add.graphics();
   graphics.lineStyle(3,0x3F82C0);
   graphics.fillStyle(0xffffff,1);
   //graphics.strokeRectShape(whitebg);
   graphics.fillRoundedRect(145,60,1150,633,30);
   graphics.strokeRoundedRect(145,60,1150,633,30);

   var green = this.add.image(505,560,"green");
   var pink = this.add.image(800,560,"pink");
   var yellow = this.add.image(1092,560,"yellow");
   var done = this.add.image(701,650,"done");
   var erase = this.add.image(230,650,"erase");

   var notification = this.add.image(1030,645,"notification");
   notification.visible = false;


    var c1 =  new Cir(this,368,253,30);
    var c2 = new Cir(this,452,366,23);
    var c3 = new Cir(this,482,401,23);
    var c4 = new Cir(this,511,440,23);
    var c5 = new Cir(this,920,312,45);

   var r1 = new Rect(this, 415,315,50,50);
   r1.setAngle(50);
   var r2 = new Rect(this, 827,224,100,100);
   var r3 = new Rect(this, 1012,224,100,100);
   var r4 = new Rect(this, 827,404,100,100);
   var r5 = new Rect(this, 1012,404,100,100);

   var t1 = new Tri(this,919, 175, 0, 148, 80, 148, 45, 0);
   var t2 = new Tri(this,920, 450, 0, 148, 80, 148, 45, 0);
   t2.setAngle(180);
   var t3 = new Tri(this,1059, 315, 0, 148, 78, 148, 45, 0);
   t3.setAngle(90);
   var t4 = new Tri(this,779, 315, 0, 148, 78, 148, 45, 0);
   t4.setAngle(-90);

   var t5 = new Tri(this,530,230, 0,200,100,200,45,0);
   t5.setAngle(50);
   var t6 = new Tri(this, 300,400, 0,200,100,200,45,0);
   t6.setAngle(-130);
   var t7 = new Tri(this,615,360, 0,200,100,200,45,0);
   t7.setAngle(125);
   var t8 = new Tri(this, 415,510, 0,200,100,200,45,0);
   t8.setAngle(155);

   c1.setInteractive().on('pointerup',()=>c1.fillColor = color);
   c2.setInteractive().on('pointerup',()=>c2.fillColor = color);
   c3.setInteractive().on('pointerup',()=>c3.fillColor = color);
   c4.setInteractive().on('pointerup',()=>c4.fillColor = color);
   c5.setInteractive().on('pointerup',()=>c5.fillColor = color);
   r1.setInteractive().on('pointerup',()=>r1.fillColor = color);
   r2.setInteractive().on('pointerup',()=>r2.fillColor = color);
   r3.setInteractive().on('pointerup',()=>r3.fillColor = color);
   r4.setInteractive().on('pointerup',()=>r4.fillColor = color);
   r5.setInteractive().on('pointerup',()=>r5.fillColor = color);
   t1.setInteractive().on('pointerup',()=>t1.fillColor = color);
   t2.setInteractive().on('pointerup',()=>t2.fillColor = color);
   t3.setInteractive().on('pointerup',()=>t3.fillColor = color);
   t4.setInteractive().on('pointerup',()=>t4.fillColor = color);
   t5.setInteractive().on('pointerup',()=>t5.fillColor = color);
   t6.setInteractive().on('pointerup',()=>t6.fillColor = color);
   t7.setInteractive().on('pointerup',()=>t7.fillColor = color);
   t8.setInteractive().on('pointerup',()=>t8.fillColor = color);


   var button = new Phaser.Geom.Circle(46,45,50);
   green.setInteractive(button, Phaser.Geom.Circle.Contains);
   green.on('pointerover', function(){
     green.setTint(0x1b5e20);
   });
   green.on('pointerout', function(){
     green.clearTint();
   });
   green.on('pointerup',()=> color = colorGreen );


   pink.setInteractive(button, Phaser.Geom.Circle.Contains);
   pink.on('pointerover', function(){
     pink.setTint(0xe91e63);
   });
   pink.on('pointerout', function(){
     pink.clearTint();
   });
   pink.on('pointerup',()=> color = colorPink);

   yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
   yellow.on('pointerover', function(){
     yellow.setTint(0xf57f17);
   });
   yellow.on('pointerout', function(){
     yellow.clearTint();
   });
   yellow.on('pointerup',()=> color = colorYellow);

  erase.setInteractive(button, Phaser.Geom.Circle.Contains);
   erase.on('pointerover', function(){
     erase.setTint(0x7878ff);
   });
   erase.on('pointerout', function(){
     erase.clearTint();
   });
    erase.on('pointerup',()=> color = 0xffffff);

    const gameScene = this.scene.get('Game1_1');


    done.setInteractive(button, Phaser.Geom.Circle.Contains);
    done.on('pointerover', function(){
      done.setTint(0x303f9f);
    });
    done.on('pointerout', function(){
      done.clearTint();
    });
    done.on('pointerup',function(){
      c1.check();
      c2.check();
      c3.check();
      c4.check();
      c5.check();

      r1.check();
      r2.check();
      r3.check();
      r4.check();
      r5.check();

      t1.check();
      t2.check();
      t3.check();
      t4.check();
      t5.check();
      t6.check();
      t7.check();
      t8.check();
      //console.log(countFailCorlor + "\n" + countFill);
      if(countFailCorlor > 0)
           setTimeout(()=>gameScene.scene.restart(),3000);

        else if(countFill > 0){
          notification.visible = true;
          setTimeout(()=>gameScene.scene.restart(),3000);
        }
        else gameScene.scene.start("Game1_2");
      });

 }


}
