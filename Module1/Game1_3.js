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
    this.load.image("next","assets/next.png");
    this.load.image("bg","assets/bgr.png");
    this.load.image("window1","assets/window_1.png");
    this.load.image("window","assets/window.png");
  }

  create(){
    this.greenColor  = 0x27AE60;
    this.purpleColor = 0xBA68C8;
    this.orangeColor = 0xFF7043;
    var color = 0xffffff;

    const gameScene = this.scene.get('Game1_3');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới
    this.add.image(config.width/2, config.height/2,"initscene3");

    var bg = this.add.image(config.width/2, config.height/2,"bg"); //Bckground hiện lên khi hoàn thành game
    bg.visible = false;
    var next = this.add.image(701,580,"next"); //Nút NEXT (ban đầu không nhìn thấy)
    next.visible = false;

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
     var eraseText = this.add.text(270, 560, 'Erase', {
       fontFamily: "Roboto Condensed",
       fontSize: 35,
       color: "#000",
     });

     this.add.text(320, 100, 'Colour in the shapes the way you want!', {   //Thêm tiêu đề
       fontFamily: "Roboto Condensed",
       fontSize: 50,
       color: "#000",
     });

     var shapes = [];
     //Khai báo và vẽ 4 tam giác
     shapes.push(new Tri(this,265, 490, 0, 100, 100, 100, 102, 0));
     shapes.push(new Tri(this,775, 293, 0, 100, 90, 100,50, 0));
     shapes.push(new Tri(this,895, 288, 0, 150, 80, 120,90, 0));
     shapes[2].setAngle(20);
     shapes.push(new Tri(this,850, 258, 0, 100, 90, 100,50, 0));
     shapes[3].setAngle(-39);

     //Khai báo và vẽ 7 hình chữ nhật
     shapes.push(new Rect(this,420,410,206,131));
     shapes.push(new Rect(this,351,283,70,120));
     shapes.push(new Rect(this,585,320,120,170));
     shapes.push(new Rect(this,820,410,206,131));
     shapes.push(new Rect(this,820,509,78,63));
     shapes.push(new Rect(this,1100,410,206,131));
     shapes.push(new Rect(this,1110,509,78,63));

     //Khai báo và vẽ 7 hình tròn
     shapes.push(new Cir(this,357,512,35));
     shapes.push(new Cir(this,445,512,35));
     shapes.push(new Cir(this,595,477,70));
     shapes.push(new Cir(this,744,512,35));
     shapes.push(new Cir(this,896,512,35));
     shapes.push(new Cir(this,1034,512,35));
     shapes.push(new Cir(this,1186,512,35));

     //Cửa sổ - Hình ảnh phụ
     var window1 = this.add.image(shapes[6].x, shapes[6].y -30, "window1");
     window1.visible = false;
     var window2 = this.add.image(shapes[7].x,shapes[7].y - 20,"window");
     window2.visible = false;
     var window3 = this.add.image(shapes[9].x,shapes[9].y - 20,"window");
     window3.visible = false;

     this.countColor = 0;

     //Khi nhấn chuột vào thì tô màu vừa chọn vào hình
     shapes.forEach(item => {
       item.setInteractive().on('pointerup', function(){
         item.color(color);
         gameScene.countColor++;
       })
     });

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
      done.on('pointerup',function(){
        if(gameScene.countColor > 0){
        this.visible = false;
        green.visible = false;
        purple.visible = false;
        orange.visible = false;
        erase.visible = false;
        eraseText.visible = false;
        bg.visible = true;
        window1.visible = true;
        window2.visible = true;
        window3.visible = true;
        next.visible = true;
        next.setInteractive().on('pointerup',()=>gameScene.scene.start("ConversionScene3"));
      }
      });
  }

}
