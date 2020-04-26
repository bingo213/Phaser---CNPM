class Game3_2 extends Phaser.Scene {
  constructor() {
    super("Game3_2");
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
    this.load.image("eye","assets/eyes.png");
    this.load.image("background3_2","assets/background3_2.png");
    this.load.image("leg","assets/legBird.png");
    this.load.image("worm","assets/worm.png");
  }
  create(){
    this.countFill = 0;        //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0;  //Đếm số lượng hình tô sai màu

    var color = 0xffffff;
    this.greenColor = 0x66CC66;
    this.blueColor  = 0x66CCFF;
    var grayColor   = 0xBFC9CA;
    var brownColor  = 0xDC7633;
    var pinkColor   = 0xFF6699;
    var yellowColor = 0xFBC02D;


    const gameScene = this.scene.get('Game3_2');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Background (khung hình chữ nhật, state bar)
   this.add.image(config.width/2, config.height/2,"initscene5");

   var background = this.add.image(config.width/2, config.height/2,"background3_2");
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

    var text1 = this.add.text(405, 100, 'Color the circles and hexagons', {   //Thêm tiêu đề
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
    var yellowRectangle = new Rect(this,275,580,120,60);
    yellowRectangle.setStrokeStyle(0,0xffffff);
    yellowRectangle.fillColor = yellowColor;
    yellowRectangle.visible = false;
   var yellow = this.add.image(245,580,"yellow");
   yellow.visible = false;

   var grayRectangle = new Rect(this,475,580,120,60);
   grayRectangle.setStrokeStyle(0,0xffffff);
   grayRectangle.fillColor = grayColor;
   grayRectangle.visible = false;
   var gray = this.add.image(445,580,"gray");
   gray.visible = false;

   var brownRectangle = new Rect(this,675,580,120,60);
   brownRectangle.setStrokeStyle(0,0xffffff);
   brownRectangle.fillColor = brownColor;
   brownRectangle.visible = false;
   var brown = this.add.image(645,580,"brown");
   brown.visible = false;

   var pinkRectangle = new Rect(this,875,580,120,60);
   pinkRectangle.setStrokeStyle(0,0xffffff);
   pinkRectangle.fillColor = pinkColor;
   pinkRectangle.visible = false;
   var pink = this.add.image(845,580,"pink");
   pink.visible = false;

   //Thêm cọ, tẩy và chữ bên phải cọ, tẩy
   var greenRectangle = new Rect(this,335,580,230,60);
   greenRectangle.setStrokeStyle(0,0xffffff);
   greenRectangle.fillColor = this.greenColor;
   greenRectangle.visible = false;
   var green = this.add.image(245,580,"green");
   var hexagonText = this.add.text(280, 560, 'Hexagons', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var blueRectangle = new Rect(this,728,580,230,60);
   blueRectangle.setStrokeStyle(0,0xffffff);
   blueRectangle.fillColor = this.blueColor;
   blueRectangle.visible = false;
   var blue = this.add.image(640,580,"blue");
   var circleText = this.add.text(675, 560, 'Circles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var eraseRectangle = new Rect(this,1085,580,205,60);
   eraseRectangle.setStrokeStyle(0,0xffffff);
   eraseRectangle.fillColor = 0xFFEBEE;
   eraseRectangle.visible = false;
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
   var shapes = [];

   //Chim mẹ
   shapes[0] = new Hex(this,config.width/2 - 220, config.height/2 - 55, 100, 100); //Thân
   shapes[0].angle = -10;
   var leg = this.add.image(config.width/2 - 220, config.height/2 + 70, "leg");
   leg.visible = false;
   shapes[1] = new Cir(this, config.width/2 - 100, config.height/2 - 160, 70, 70); //Đầu
   var eye1 = this.add.image(config.width/2 - 50, config.height/2 - 160,"eye");
   eye1.visible = false;
   shapes[2] = new Tri(this, config.width/2 - 365,config.height/2 - 107, 0, 130, 48, 0, 96, 130);//Đuôi
   shapes[2].angle = -70;
   shapes[3] = new Hex(this,300,config.height/2 + 50, 55, 55);
   shapes[3].angle = -10;
   shapes[4] = new Hex(this,380,config.height/2 + 100, 30, 30);
   shapes[4].angle = 10;
   var worm = this.add.image(config.width/2 + 20, config.height/2 - 110, "worm");
   worm.visible = false;
   shapes[5] = new Tri(this,config.width/2, config.height/2 - 110,0, 80, 32, 0, 64, 80); //Mỏ
   shapes[5].angle = 117;
   //Tổ rơm
   shapes[15] = new Tri(this, config.width/2 + 280, config.height/2 - 33, 0, 400, 128, 0, 128, 300);
   shapes[15].angle = 73;
   shapes[16] = new Tri(this, config.width/2 + 400, config.height/2 + 60, 0, 150, 64, 0, 64, 200);
   shapes[16].angle = -90;
   shapes[17] = new Tri(this, config.width/2 + 310, config.height/2 +80, 0, 180, 64, 0, 64, 150);
   shapes[17].angle = 70;
   //Chim non
   shapes[6] = new Hex(this, config.width/2 + 130, config.height/2 - 71, 40, 40); //Thân
   shapes[7] = new Cir(this, config.width/2 + 130, config.height/2 - 150,42,42); //Đầu
   var eye2 = this.add.image(config.width/2 + 110, config.height/2 - 160,"eye");
   eye2.visible = false;
   shapes[8] = new Tri(this,config.width/2 + 84, config.height/2 - 200,0, 48, 20, 0, 40, 48); //Mỏ
   shapes[8].angle = -40;
   shapes[9] = new Cir(this, config.width/2 + 300, config.height/2 - 71, 35, 35); //Thân
   shapes[10] = new Cir(this, config.width/2 + 260, config.height/2 - 140,42,42); //Đầu
   var eye3 = this.add.image(config.width/2 + 235, config.height/2 - 150,"eye");
   eye3.visible = false;
   shapes[11] = new Tri(this,config.width/2 + 210, config.height/2 - 185,0, 48, 20, 0, 40, 48); //Mỏ
   shapes[11].angle = -45;
   shapes[12] = new Hex(this, config.width/2 + 390, config.height/2 - 69, 40, 40); //Thân
   shapes[13] = new Cir(this, config.width/2 + 390, config.height/2 - 148,42,42); //Đầu
   var eye4 = this.add.image(config.width/2 + 370, config.height/2 - 158,"eye");
   eye4.visible = false;
   shapes[14] = new Tri(this,config.width/2 + 344, config.height/2 - 198,0, 48, 20, 0, 40, 48); //Mỏ
   shapes[14].angle = -40;



   //Hiệu ứng tô màu vào hình
   shapes.forEach(element => element.setInteractive().on('pointerup', ()=>element.color(color)));

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
   green.on('pointerup',function(){
      color = gameScene.greenColor;
      greenRectangle.visible = true;
      blueRectangle.visible = false;
      eraseRectangle.visible = false;
    });

   //Cọ xám
   blue.setInteractive(button, Phaser.Geom.Circle.Contains);
   blue.on('pointerover', function(){
     blue.setTint(0x3498DB);
   });
   blue.on('pointerout', function(){
     blue.clearTint();
   });
   blue.on('pointerup',function(){
      color = gameScene.blueColor;
      blueRectangle.visible = true;
      greenRectangle.visible = false;
      eraseRectangle.visible = false;
    });

   //Hiệu ứng khi di chuột qua tẩy
   erase.setInteractive(button, Phaser.Geom.Circle.Contains);
    erase.on('pointerover', function(){
      erase.setTint(0x7878ff);
    });
    erase.on('pointerout', function(){
      erase.clearTint();
    });
    erase.on('pointerup',function(){
       color = 0xffffff;
       eraseRectangle.visible = true;
       blueRectangle.visible = false;
       greenRectangle.visible = false;
       yellowRectangle.visible = false;
       grayRectangle.visible = false;
       pinkRectangle.visible = false;
       brownRectangle.visible = false;
     });

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
            for(var i = 0; i < shapes.length; i++){
              gameScene.check(shapes[i]);
            }

          if(gameScene.countFailCorlor > 0){    //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
                    for(var i = 0; i < shapes.length; i++){
                      gameScene.deleteColor(shapes[i]);
                    }
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
         blue.visible = false;
         hexagonText.visible = false;
         circleText.visible = false;
         greenRectangle.visible = false;
         blueRectangle.visible = false;
         eraseRectangle.visible = false;
         brown.visible = true;
         pink.visible = true;
         gray.visible = true;
         yellow.visible = true;
         console.log(complete);

         //Khi đã tô đúng màu vào các hình được yêu cầu và nhấn DONE thì những hình đó không tô vào hay xóa đi được nữa
         shapes.forEach(item => {
           if(item instanceof Hex || item instanceof Cir){
             item.removeInteractive();
           }
         });


         //Thêm hiệu ứng cho các cọ vừa xuất hiện
         brown.setInteractive(button, Phaser.Geom.Circle.Contains);
         brown.on('pointerover', function(){
           brown.setTint(0xBA4A00);
         });
         brown.on('pointerout', function(){
           brown.clearTint();
         });
         brown.on('pointerup',function(){
            color = brownColor;
            brownRectangle.visible = true;
            grayRectangle.visible = false;
            pinkRectangle.visible = false;
            yellowRectangle.visible = false;
            eraseRectangle.visible = false;
          });

         gray.setInteractive(button, Phaser.Geom.Circle.Contains);
         gray.on('pointerover', function(){
           gray.setTint(0x5D6D7E);
         });
         gray.on('pointerout', function(){
           gray.clearTint();
         });
         gray.on('pointerup',function(){
            color = grayColor;
            grayRectangle.visible = true;
            brownRectangle.visible = false;
            pinkRectangle.visible = false;
            yellowRectangle.visible = false;
            eraseRectangle.visible = false;
          });

         pink.setInteractive(button, Phaser.Geom.Circle.Contains);
         pink.on('pointerover', function(){
           pink.setTint(0xFF4081);
         });
         pink.on('pointerout', function(){
           pink.clearTint();
         });
         pink.on('pointerup',function(){
            color = pinkColor;
            pinkRectangle.visible = true;
            grayRectangle.visible = false;
            brownRectangle.visible = false;
            yellowRectangle.visible = false;
            eraseRectangle.visible = false;
          });

         yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
         yellow.on('pointerover', function(){
           yellow.setTint(0xFFD600);
         });
         yellow.on('pointerout', function(){
           yellow.clearTint();
         });
         yellow.on('pointerup',function(){
            color = yellowColor;
            yellowRectangle.visible = true;
            grayRectangle.visible = false;
            pinkRectangle.visible = false;
            brownRectangle.visible = false;
            eraseRectangle.visible = false;
          });
         if(count === 2){
           done.visible = false;
           next.visible = true;
           brown.visible = false;
           pink.visible = false;
           yellow.visible = false;
           gray.visible = false;
           erase.visible = false;
           yellowRectangle.visible = false;
           grayRectangle.visible = false;
           pinkRectangle.visible = false;
           brownRectangle.visible = false;
           eraseRectangle.visible = false;
           eraseText.visible = false;
           eye1.visible = true;
           eye2.visible = true;
           eye3.visible = true;
           eye4.visible = true;
           leg.visible = true;
           background.visible = true;
           next.setInteractive().on('pointerup',()=>gameScene.scene.start("ConversionScene5"));
         }
       }


       gameScene.countFill = 0;
       gameScene.countFailCorlor = 0;
     });

  }

  //Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
  check(shape){
          if(shape instanceof Cir || shape instanceof Hex){
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
    if(shape instanceof Cir || shape instanceof Hex){
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
     if(shape instanceof Hex){
       if(shape.fillColor === this.greenColor) return true;
       else return false;
     }
     if(shape instanceof Cir){
       if(shape.fillColor === this.blueColor) return true;
       else return false;
     }
     if(shape instanceof Tri || shape instanceof Rect){
       if(shape.fillColor === 0xffffff) return true;
       else return false;
     }
    }
}
