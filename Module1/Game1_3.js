class Game1_3 extends Phaser.Scene {
  constructor() {
    super("Game1_3");
  }
  preload(){
    this.load.image("initscene3","assets/initscene3.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("green","assets/green.png");
    this.load.image("purple","assets/purple.png");
    this.load.image("orange","assets/orange.png");
  }

  create(){
    this.greenColor  = 0x27AE60;
    this.purpleColor = 0xBA68C8;
    this.orangeColor = 0xFF7043;
    var color = 0xffffff;

    const gameScene = this.scene.get('Game1_3');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới
    this.add.image(config.width/2, config.height/2,"initscene3");
    var backButton = this.add.text(170, 70, 'BACK', {   //Nút BACK
       fontFamily: "Roboto Condensed",
       fontSize: 20,
       color: "#1a65ac",
     });

     var shape = new Phaser.Geom.Circle(10,0,40);
     backButton.setInteractive(shape, Phaser.Geom.Circle.Contains);
     backButton.on('pointerover', function(){   //Hiệu ứng khi di chuột vào nút BACK nút sẽ có màu xanh đậm
       backButton.setTint(0x0000ff);
     });
     backButton.on('pointerout',function(){    //Khi chuột không còn ở nút BACK thì trở lại màu như ban đầu
       backButton.clearTint();
     });
     backButton.on('pointerup',()=>gameScene.scene.start('startGame'));  //Khi nhấn chuột vào nút BACK thì quay trở lại màn hình bắt đầu (StartScene)

     //Thêm cọ vẽ
     var green = this.add.image(545,580,"green");
     var purple = this.add.image(840,580,"purple");
     var orange = this.add.image(1112,580,"orange");

     var done = this.add.image(701,660,"done");   //Nút done
     var erase = this.add.image(230,580,"erase"); //Tẩy và chữ Erase bên phải tẩy
     this.add.text(270, 560, 'Erase', {
       fontFamily: "Roboto Condensed",
       fontSize: 35,
       color: "#000",
     });

     this.add.text(320, 100, 'Colour in the shapes the way you want!', {   //Thêm tiêu đề
       fontFamily: "Roboto Condensed",
       fontSize: 50,
       color: "#000",
     });

     //Khai báo và vẽ 4 tam giác
     var t1 = new Tri(this,265, 490, 0, 100, 100, 100, 102, 0);
     var t2 = new Tri(this,775, 293, 0, 100, 90, 100,50, 0);
     var t3 = new Tri(this,895, 288, 0, 150, 80, 120,90, 0);
     t3.setAngle(20);
     var t4 = new Tri(this,850, 258, 0, 100, 90, 100,50, 0);
     t4.setAngle(-39);

     //Khai báo và vẽ 7 hình chữ nhật
     var r1 = new Rect(this,420,410,206,131);
     var r2 = new Rect(this,351,283,70,120);
     var r3 = new Rect(this,585,320,120,170);
     var r4 = new Rect(this,820,410,206,131);
     var r5 = new Rect(this,820,509,78,63);
     var r6 = new Rect(this,1100,410,206,131);
     var r7 = new Rect(this,1110,509,78,63);

     //Khai báo và vẽ 7 hình tròn
     var c1 = new Cir(this,357,512,35);
     var c2 = new Cir(this,445,512,35);
     var c3 = new Cir(this,595,477,70);
     var c4 = new Cir(this,744,512,35);
     var c5 = new Cir(this,896,512,35);
     var c6 = new Cir(this,1034,512,35);
     var c7 = new Cir(this,1186,512,35);

     //Khi nhấn chuột vào thì tô màu vừa chọn vào hình
     c1.setInteractive().on('pointerup',()=>c1.color(color));
     c2.setInteractive().on('pointerup',()=>c2.color(color));
     c3.setInteractive().on('pointerup',()=>c3.color(color));
     c4.setInteractive().on('pointerup',()=>c4.color(color));
     c5.setInteractive().on('pointerup',()=>c5.color(color));
     c6.setInteractive().on('pointerup',()=>c6.color(color));
     c7.setInteractive().on('pointerup',()=>c7.color(color));

     r1.setInteractive().on('pointerup',()=>r1.color(color));
     r2.setInteractive().on('pointerup',()=>r2.color(color));
     r3.setInteractive().on('pointerup',()=>r3.color(color));
     r4.setInteractive().on('pointerup',()=>r4.color(color));
     r5.setInteractive().on('pointerup',()=>r5.color(color));
     r6.setInteractive().on('pointerup',()=>r6.color(color));
     r7.setInteractive().on('pointerup',()=>r7.color(color));

     t1.setInteractive().on('pointerup',()=>t1.color(color));
     t2.setInteractive().on('pointerup',()=>t2.color(color));
     t3.setInteractive().on('pointerup',()=>t3.color(color));
     t4.setInteractive().on('pointerup',()=>t4.color(color));

     //Hiệu ứng khi di chuột qua cọ vẽ thì cọ có màu đậm hơn, khi chuột ra khỏi vùng cọ vẽ thì cọ trở lại trạng thái ban đầu
     //Khi nhấn chuột vào thì màu (biến color) được set lại
     var button = new Phaser.Geom.Circle(46,45,50);
     //Cọ xanh
     green.setInteractive(button, Phaser.Geom.Circle.Contains);
     green.on('pointerover', function(){
       green.setTint(0x1b5e20);
     });
     green.on('pointerout', function(){
       green.clearTint();
     });
     green.on('pointerup',()=> color = gameScene.greenColor );

     //Cọ tím
     purple.setInteractive(button, Phaser.Geom.Circle.Contains);
     purple.on('pointerover', function(){
       purple.setTint(0x6C3483);
     });
     purple.on('pointerout', function(){
       purple.clearTint();
     });
     purple.on('pointerup',()=> color = gameScene.purpleColor);

     //Cọ vàng
     orange.setInteractive(button, Phaser.Geom.Circle.Contains);
     orange.on('pointerover', function(){
       orange.setTint(0xE64A19);
     });
     orange.on('pointerout', function(){
       orange.clearTint();
     });
     orange.on('pointerup',()=> color = gameScene.orangeColor);

     //Tẩy cũng có hiệu ứng khi di chuột qua, khi nhấn chuột vào tẩy thì màu (biến color) được set là màu trắng
    erase.setInteractive(button, Phaser.Geom.Circle.Contains);
     erase.on('pointerover', function(){
       erase.setTint(0x7878ff);
     });
     erase.on('pointerout', function(){
       erase.clearTint();
     });
      erase.on('pointerup',()=> color = 0xffffff);

      //Nút Done cũng có hiệu ứng khi di chuột qua
      done.setInteractive(button, Phaser.Geom.Circle.Contains);
      done.on('pointerover', function(){
        done.setTint(0x303f9f);
      });
      done.on('pointerout', function(){
        done.clearTint();
      });
      done.on('pointerup',()=>gameScene.scene.start("RateScene"));
  }
}
