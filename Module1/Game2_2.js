class Game2_2 extends Phaser.Scene {
  constructor() {
    super("Game2_2");
  }

  preload(){
    this.load.image("initscene5","assets/initscene5.png");
    this.load.image("green","assets/green.png");
    this.load.image("gray","assets/gray.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("brown","assets/brown.png");
    this.load.image("blue","assets/blue.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("next","assets/next.png");
    this.load.image("notification2","assets/notification2.png");
    this.load.image("eye","assets/eye2_2.png");
    this.load.image("tail","assets/tail.png");
    this.load.image("nose","assets/nose.png");
    this.load.image("leg1","assets/leg1.png");
    this.load.image("leg2","assets/leg2.png");
    this.load.image("background2_2","assets/background2_2.png");
  }
  create(){
    this.countFill = 0;        //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0;  //Đếm số lượng hình tô sai màu

    var color = 0xffffff;
    this.greenColor = 0x28B463;
    this.grayColor  = 0xD5DBDB;
    var blueColor   = 0x81D4FA;
    var pinkColor   = 0xFFCCBC;
    var yellowColor = 0xFBC02D;
    var brownColor  = 0x6D4C41;

    const gameScene = this.scene.get('Game2_2');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Background (khung hình chữ nhật, state bar)
   this.add.image(config.width/2, config.height/2,"initscene5");
   var background = this.add.image(config.width/2, config.height/2,"background2_2");//Hình phụ, chỉ khi hoàn thành yêu cầu mới có thể nhìn thấy
   background.visible = false;

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

    var text1 = this.add.text(380, 100, 'Color the triangles and rectangles', {   //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    var text2 = this.add.text(270, 100, 'Great! Now color the rest the way you want! ', {   //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });
    text2.visible = false; //Text2 tạm thời chưa nhìn thấy

    //Màu tùy chọn
   var yellow = this.add.image(245,580,"yellow");
   yellow.visible = false;
   var brown = this.add.image(445,580,"brown");
   brown.visible = false;
   var blue = this.add.image(645,580,"blue");
   blue.visible = false;
   var pink = this.add.image(845,580,"pink");
   pink.visible = false;

   //Thêm cọ, tẩy và chữ bên phải cọ, tẩy
   var green = this.add.image(245,580,"green");
   var rectangleText = this.add.text(280, 560, 'Rectangles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });
   var gray = this.add.image(640,580,"gray");
   var triangleText = this.add.text(675, 560, 'Triangles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });
   var erase = this.add.image(1040,580,"erase"); //Tẩy và chữ Erase bên phải tẩy
   var eraseText = this.add.text(1075, 560, 'Erase', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var next = this.add.image(701,580,"next"); //Nút NEXT ban đầu không nhìn thấy
   next.visible = false;

   var done = this.add.image(701,660,"done");   //Nút done
   var notification2 = this.add.image(1030,655,"notification2");  //Thông báo khi nhấn nút Done mà chưa tô hết các hình
   notification2.visible = false;  //Ban đầu không nhìn thấy thông báo

   //Hình phụ: mắt, mũi, đuôi cá sấu
   var eye = this.add.image(585,271,"eye");
   eye.visible = false;
   var tail = this.add.image(1210, 410,"tail");
   tail.visible = false;
   var nose = this.add.image(340, 180,"nose");
   nose.visible = false;
   var leg1 = this.add.image(759,440,"leg1");
   leg1.visible = false;
   var leg2 = this.add.image(1000,430,"leg2");
   leg2.visible = false;

   //Vẽ hình
   var t1 = new Tri(this, 291, 261, 0, 60, 60, 80, 42, 0); //Răng cá sấu
   t1.setAngle(-49);
   var t2 = new Tri(this, 365, 301, 0, 60, 60, 80, 42, 0); //Răng cá sấu
   t2.setAngle(-49);
   var t3 = new Tri(this, 440, 342, 0, 60, 60, 80, 42, 0); //Răng cá sấu
   t3.setAngle(-49);
   var t4 = new Tri(this, 810, 260, 0, 80, 80, 80, 42, 0); //Gai trên lưng
   var t5 = new Tri(this, 900, 260, 0, 80, 80, 80, 42, 0); //Gai trên lưng
   var t6 = new Tri(this, 990, 260, 0, 80, 80, 80, 42, 0); //Gai trên lưng
   var t7 = new Tri(this, 1122, 345, 0, 80, 80, 80, 42, 0); //Gai trên đuôi
   var r1 = new Rect(this, 400, 260, 265, 60);   //Hàm trên con cá sấu
   r1.setAngle(28.69);
   var r2 = new Rect(this, 385, 410, 265, 60); //Hàm dưới con cá sấu
   var r3 = new Rect(this, 859, 360, 414, 116); //Thân con cá sấu
   var r4 = new Rect(this, 1122, 420, 110, 65); //Đuôi con cá sấu
   var c1 = new Cir(this, 585, 352, 65,65);    //Đầu cá sấu
   var c2 = new Cir(this, 410, 520, 20,20);   //Hình tròn bên dưới cá sấu
   var c3 = new Cir(this, 480, 490, 35,35);   //Hình tròn bên dưới cá sấu
   var c4 = new Cir(this, 820, 480, 30,30);   //Hình tròn bên dưới cá sấu
   var c5 = new Cir(this, 920, 500, 45,45);   //Hình tròn bên dưới cá sấu
   var c6 = new Cir(this, 1115, 500, 35,35);   //Hình tròn bên dưới cá sấu

   t1.setInteractive().on('pointerup',()=> t1.color(color));
   t2.setInteractive().on('pointerup',()=> t2.color(color));
   t3.setInteractive().on('pointerup',()=> t3.color(color));
   t4.setInteractive().on('pointerup',()=> t4.color(color));
   t5.setInteractive().on('pointerup',()=> t5.color(color));
   t6.setInteractive().on('pointerup',()=> t6.color(color));
   t7.setInteractive().on('pointerup',()=> t7.color(color));
   r1.setInteractive().on('pointerup',()=> r1.color(color));
   r2.setInteractive().on('pointerup',()=> r2.color(color));
   r3.setInteractive().on('pointerup',()=> r3.color(color));
   r4.setInteractive().on('pointerup',()=> r4.color(color));
   c1.setInteractive().on('pointerup',()=> c1.color(color));
   c2.setInteractive().on('pointerup',()=> c2.color(color));
   c3.setInteractive().on('pointerup',()=> c3.color(color));
   c4.setInteractive().on('pointerup',()=> c4.color(color));
   c5.setInteractive().on('pointerup',()=> c5.color(color));
   c6.setInteractive().on('pointerup',()=> c6.color(color));

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
   green.on('pointerup',()=> color = gameScene.greenColor);

   //Cọ xám
   gray.setInteractive(button, Phaser.Geom.Circle.Contains);
   gray.on('pointerover', function(){
     gray.setTint(0x34495e);
   });
   gray.on('pointerout', function(){
     gray.clearTint();
   });
   gray.on('pointerup',()=> color = gameScene.grayColor);

   //Hiệu ứng khi di chuột qua tẩy
   erase.setInteractive(button, Phaser.Geom.Circle.Contains);
    erase.on('pointerover', function(){
      erase.setTint(0x7878ff);
    });
    erase.on('pointerout', function(){
      erase.clearTint();
    });
     erase.on('pointerup',()=> color = 0xffffff);

     var complete = false;
     var count = 0;
     //Nút Done cũng có hiệu ứng khi di chuột qua
     done.setInteractive(button, Phaser.Geom.Circle.Contains);
     done.on('pointerover', function(){
       done.setTint(0x303f9f);
     });
     done.on('pointerout', function(){
       done.clearTint();
     });
     done.on('pointerup',function(){
       if(complete === false){
          gameScene.check(r1);
          gameScene.check(r2);
          gameScene.check(r3);
          gameScene.check(r4);

          gameScene.check(c1);
          gameScene.check(c2);
          gameScene.check(c3);
          gameScene.check(c4);
          gameScene.check(c5);
          gameScene.check(c6);

          gameScene.check(t1);
          gameScene.check(t2);
          gameScene.check(t3);
          gameScene.check(t4);
          gameScene.check(t5);
          gameScene.check(t6);
          gameScene.check(t7);

          if(gameScene.countFailCorlor > 0){    //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
             gameScene.deleteColor(r1);
             gameScene.deleteColor(r2);
             gameScene.deleteColor(r3);
             gameScene.deleteColor(r4);

             gameScene.deleteColor(c1);
             gameScene.deleteColor(c2);
             gameScene.deleteColor(c3);
             gameScene.deleteColor(c4);
             gameScene.deleteColor(c5);
             gameScene.deleteColor(c6);

             gameScene.deleteColor(t1);
             gameScene.deleteColor(t2);
             gameScene.deleteColor(t3);
             gameScene.deleteColor(t4);
             gameScene.deleteColor(t5);
             gameScene.deleteColor(t6);
             gameScene.deleteColor(t7);
           }
         else if(gameScene.countFill > 0){  //Nếu có hình chưa tô thì đưa ra thông báo "Color all the shapes", sau 3s thì ẩn thông báo
             notification2.visible = true;
             setTimeout(()=>notification2.visible = false,3000);
           }
         else {
            complete = true;
           }
         }

       if(complete === true){
         count++;
         text1.visible = false;
         text2.visible = true;
         green.visible = false;
         gray.visible = false;
         rectangleText.visible = false;
         triangleText.visible = false;
         blue.visible = true;
         pink.visible = true;
         brown.visible = true;
         yellow.visible = true;

         //Khi đã tô đúng màu vào các hình được yêu cầu và nhấn DONE thì những hình đó không tô vào hay xóa đi được nữa
         r1.removeInteractive();
         r2.removeInteractive();
         r3.removeInteractive();
         r4.removeInteractive();
         t1.removeInteractive();
         t2.removeInteractive();
         t3.removeInteractive();
         t4.removeInteractive();
         t5.removeInteractive();
         t6.removeInteractive();
         t7.removeInteractive();


         //Thêm hiệu ứng cho các cọ vừa xuất hiện
         blue.setInteractive(button, Phaser.Geom.Circle.Contains);
         blue.on('pointerover', function(){
           blue.setTint(0x00838F);
         });
         blue.on('pointerout', function(){
           blue.clearTint();
         });
         blue.on('pointerup',()=> color = blueColor);

         brown.setInteractive(button, Phaser.Geom.Circle.Contains);
         brown.on('pointerover', function(){
           brown.setTint(0x5D4037);
         });
         brown.on('pointerout', function(){
           brown.clearTint();
         });
         brown.on('pointerup',()=> color = brownColor);

         pink.setInteractive(button, Phaser.Geom.Circle.Contains);
         pink.on('pointerover', function(){
           pink.setTint(0xFF4081);
         });
         pink.on('pointerout', function(){
           pink.clearTint();
         });
         pink.on('pointerup',()=> color = pinkColor);

         yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
         yellow.on('pointerover', function(){
           yellow.setTint(0xFFD600);
         });
         yellow.on('pointerout', function(){
           yellow.clearTint();
         });
         yellow.on('pointerup',()=> color = yellowColor);

         if(count === 2){
           done.visible = false;
           next.visible = true;
           blue.visible = false;
           pink.visible = false;
           yellow.visible = false;
           brown.visible = false;
           erase.visible = false;
           eraseText.visible = false;
           background.visible = true;
           eye.visible = true;
           nose.visible = true;
           leg1.visible = true;
           leg2.visible = true;
           tail.visible = true;
           next.setInteractive().on('pointerup',()=>gameScene.scene.start("ConversionScene4"));
         }
       }


       gameScene.countFill = 0;
       gameScene.countFailCorlor = 0;
     });

  }

  //Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
  check(shape){
          if(shape instanceof Rect || shape instanceof Tri){
             if(shape.isFill() === false) this.countFill++;
             else {
                if(this.isTrueColor(shape) === false){
                    shape.drawStroke();
                    this.countFailCorlor++;
                }
              }
            }
            if(shape instanceof Cir && this.isTrueColor(shape) === false)
                {
                  shape.drawStroke();
                  this.countFailCorlor++;
                }
        }

  //Xóa màu và viền đỏ của hình tô màu sai
  deleteColor(shape){
    if(shape instanceof Rect || shape instanceof Tri){
         if(shape.isFill() === true && this.isTrueColor(shape) === false){
             setTimeout(function(){
               shape.setStrokeStyle(2,0x000000);
               shape.fillColor = 0xffffff;
             },1500);
           }
         }
      else {
        if(shape.isFill() === true){
          setTimeout(function(){
            shape.setStrokeStyle(2,0x000000);
            shape.fillColor = 0xffffff;
          },1500);
        }
      }
  }

   //Kiểm tra đã tô đúng màu hay chưa
   isTrueColor(shape){
     if(shape instanceof Rect){
       if(shape.fillColor === this.greenColor) return true;
       else return false;
     }
     if(shape instanceof Tri){
       if(shape.fillColor === this.grayColor) return true;
       else return false;
     }
     if(shape instanceof Cir){
       if(shape.fillColor === 0xffffff) return true;
       else return false;
     }
   }
}
