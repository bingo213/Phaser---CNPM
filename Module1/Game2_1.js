class Game2_1 extends Phaser.Scene {
  constructor() {
    super("Game2_1");
  }

  preload(){
    this.load.image("initscene4","assets/initscene4.png");
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
    this.load.image("background2_1","assets/background2_1.png");
  }
  create(){
    this.countFill = 0;        //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0;  //Đếm số lượng hình tô sai màu

    var color = 0xffffff;
    this.greenColor = 0x00C853;
    this.grayColor  = 0xBFC9CA;
    var blueColor   = 0x81D4FA;
    var pinkColor   = 0xFFCCBC;
    var yellowColor = 0xFBC02D;
    var brownColor  = 0x6D4C41;

    const gameScene = this.scene.get('Game2_1');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Background (khung hình chữ nhật, state bar)
   this.add.image(config.width/2, config.height/2,"initscene4");
   var background = this.add.image(config.width/2, config.height/2,"background2_1");//Hình phụ, chỉ khi hoàn thành yêu cầu mới có thể nhìn thấy
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

    var text1 = this.add.text(405, 100, 'Color the rectangles and circles', {   //Thêm tiêu đề
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
   var circleText = this.add.text(280, 560, 'Circle', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });
   var gray = this.add.image(640,580,"gray");
   var rectangleText = this.add.text(675, 560, 'Rectangles', {
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

   //Vẽ hình
   var t1 = new Tri(this, 455, 189, 0, 70, 90, 70, 45, 0); //Hình tam giác thứ 1 từ trái sang
   var t2 = new Tri(this, 715, 249, 0, 150, 70, 150, 32, 0);  //Hình tam giác thứ 2 từ trái sang
   var t3 = new Tri(this, 975, 189, 0, 70, 90, 70, 45, 0); //Hình tam giác thứ 3 từ trái sang
   var r2 = new Rect(this, 589, 466, 140, 100); //Hình chữ nhật thứ 2 từ trái sang
   var r4 = new Rect(this, 841, 460, 140, 100); //Hình chữ nhật thứ 4 từ trái sang
   var r1 = new Rect(this, 455, 380, 122, 308); //Hình chữ nhật thứ 1 từ trái sang
   var r3 = new Rect(this, 715, 430, 106, 208); //Hình chữ nhật thứ 3 từ trái sang
   var r5 = new Rect(this, 975, 380, 122, 308); //Hình chữ nhật thứ 5 từ trái sang
   var c1 = new Cir(this, 275, 450, 60,60);    //Hình tròn thứ 1 từ trái sang
   var c2 = new Cir(this, 1155, 450, 60,60);   //Hình tròn thứ 2 từ trái sang

   t1.setInteractive().on('pointerup',()=> t1.color(color));
   t2.setInteractive().on('pointerup',()=> t2.color(color));
   t3.setInteractive().on('pointerup',()=> t3.color(color));
   r1.setInteractive().on('pointerup',()=> r1.color(color));
   r2.setInteractive().on('pointerup',()=> r2.color(color));
   r3.setInteractive().on('pointerup',()=> r3.color(color));
   r4.setInteractive().on('pointerup',()=> r4.color(color));
   r5.setInteractive().on('pointerup',()=> r5.color(color));
   c1.setInteractive().on('pointerup',()=> c1.color(color));
   c2.setInteractive().on('pointerup',()=> c2.color(color));

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
          gameScene.check(r5);

          gameScene.check(c1);
          gameScene.check(c2);

          gameScene.check(t1);
          gameScene.check(t2);
          gameScene.check(t3);

          if(gameScene.countFailCorlor > 0){    //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
             gameScene.deleteColor(r1);
             gameScene.deleteColor(r2);
             gameScene.deleteColor(r3);
             gameScene.deleteColor(r4);
             gameScene.deleteColor(r5);

             gameScene.deleteColor(c1);
             gameScene.deleteColor(c2);

             gameScene.deleteColor(t1);
             gameScene.deleteColor(t2);
             gameScene.deleteColor(t3);
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
         complete = true;
         green.visible = false;
         gray.visible = false;
         rectangleText.visible = false;
         circleText.visible = false;
         blue.visible = true;
         pink.visible = true;
         brown.visible = true;
         yellow.visible = true;
         console.log(complete);
         //Khi đã tô đúng màu vào các hình được yêu cầu và nhấn DONE thì những hình đó không tô vào hay xóa đi được nữa
         r1.removeInteractive();
         r2.removeInteractive();
         r3.removeInteractive();
         r4.removeInteractive();
         r5.removeInteractive();
         c1.removeInteractive();
         c2.removeInteractive();

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
           next.setInteractive().on('pointerup',()=>gameScene.scene.start("ConversionScene4"));
         }
       }


       gameScene.countFill = 0;
       gameScene.countFailCorlor = 0;
     });

  }

  //Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
  check(shape){
          if(shape instanceof Rect || shape instanceof Cir){
             if(shape.isFill() === false) this.countFill++;
             else {
                if(this.isTrueColor(shape) === false){
                    shape.drawStroke();
                    this.countFailCorlor++;
                }
              }
            }
            if(shape instanceof Tri && this.isTrueColor(shape) === false)
                {
                  shape.drawStroke();
                  this.countFailCorlor++;
                }
        }

  //Xóa màu và viền đỏ của hình tô màu sai
  deleteColor(shape){
    if(shape instanceof Rect || shape instanceof Cir){
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
       if(shape.fillColor === this.grayColor) return true;
       else return false;
     }
     if(shape instanceof Cir){
       if(shape.fillColor === this.greenColor) return true;
       else return false;
     }
     if(shape instanceof Tri){
       if(shape.fillColor === 0xffffff) return true;
       else return false;
     }
   }
}
