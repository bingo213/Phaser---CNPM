class Game1_1 extends Phaser.Scene {
  constructor() {
    super("Game1_1");
  }

  preload(){
    //Load ảnh
    this.load.image("initscene1","assets/initscene1.png");
    this.load.image("green","assets/green.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("notification","assets/notification.png");
    this.load.image("stateBar","assets/state_bar.png");
    this.load.image("next","assets/next.png");
    this.load.image("eye1_1","assets/eye.png");
    this.load.image("beard","assets/beard.png");
    this.load.image("tree","assets/tree.png");
  }

  create(){
    this.countFill = 0;        //Đếm số lượng hình chưa được tô màu
    this.countFailCorlor = 0;  //Đếm số lượng hình tô sai màu

    this.greenColor = 0x66cc66;
    this.pinkColor = 0xff6699;
    this.yellowColor = 0xffb300;

    var color = 0xffffff;


    const gameScene = this.scene.get('Game1_1');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Background (khung hình chữ nhật, state bar)
   this.add.image(config.width/2, config.height/2,"initscene1");

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

    this.add.text(555, 100, 'Color the shapes', {   //Thêm tiêu đề
      fontFamily: "Roboto Condensed",
      fontSize: 50,
      color: "#000",
    });

   //Thêm cọ và chữ bên phải cọ
   var greenRectangle = new Rect(this,630,580,220,60);
   greenRectangle.setStrokeStyle(0,0xffffff);
   greenRectangle.fillColor = this.greenColor;
   greenRectangle.visible = false;
   var green = this.add.image(545,580,"green");
   var squareText = this.add.text(580, 560, 'Squares', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var pinkRectangle = new Rect(this,918,580,220,60);
   pinkRectangle.setStrokeStyle(0,0xffffff);
   pinkRectangle.fillColor = this.pinkColor;
   pinkRectangle.visible = false;
   var pink = this.add.image(840,580,"pink");
   var triangleText = this.add.text(875, 560, 'Triangles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var yellowRectangle = new Rect(this,1185,580,205,60);
   yellowRectangle.setStrokeStyle(0,0xffffff);
   yellowRectangle.fillColor = this.yellowColor;
   yellowRectangle.visible = false;
   var yellow = this.add.image(1112,580,"yellow");
   var circleText = this.add.text(1147, 560, 'Circles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var next = this.add.image(701,580,"next");
   next.visible = false;
   var beard = this.add.image(340,180,"beard"); //Râu của con bướm
   beard.visible = false;
   var tree = this.add.image(850,350,"tree"); //Cành cây
   tree.visible = false;

   var done = this.add.image(701,660,"done");   //Nút done

   var eraseRectangle = new Rect(this,280,580,205,60);
   eraseRectangle.setStrokeStyle(0,0xffffff);
   eraseRectangle.fillColor = 0xFFEBEE;
   eraseRectangle.visible = false;
   var erase = this.add.image(230,580,"erase"); //Tẩy và chữ Erase bên phải tẩy
   var eraseText = this.add.text(270, 560, 'Erase', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var notification = this.add.image(1030,655,"notification");  //Thông báo khi nhấn nút Done mà chưa tô hết các hình
   notification.visible = false;  //Ban đầu không nhìn thấy thông báo

   var shapes = [];
    //Khai báo và vẽ 5 hình tròn
    shapes.push(new Cir(this,368,253,30));
    shapes.push(new Cir(this,452,366,23));
    shapes.push(new Cir(this,482,401,23));
    shapes.push(new Cir(this,511,440,23));
    shapes.push(new Cir(this,920,312,45));

    //Khai báo và vẽ 5 hình vuông
   shapes.push(new Rect(this, 415,315,50,50));
   shapes[5].setAngle(50);   //Hình r1 là thân chú bướm nên xoay góc 50 độ
   shapes.push(new Rect(this, 827,224,100,100));
   shapes.push(new Rect(this, 1012,224,100,100));
   shapes.push(new Rect(this, 827,404,100,100));
   shapes.push(new Rect(this, 1012,404,100,100));

   //Khai báo và vẽ 8 hình tam giác
   shapes.push(new Tri(this,919, 175, 0, 148, 80, 148, 45, 0));
   shapes.push(new Tri(this,920, 450, 0, 148, 80, 148, 45, 0));
   shapes[11].setAngle(180);
   shapes.push(new Tri(this,1059, 315, 0, 148, 78, 148, 45, 0));
   shapes[12].setAngle(90);
   shapes.push(new Tri(this,779, 315, 0, 148, 78, 148, 45, 0));
   shapes[13].setAngle(-90);
   shapes.push(new Tri(this,530,230, 0,200,100,200,45,0));
   shapes[14].setAngle(50);
   shapes.push(new Tri(this, 300,400, 0,200,100,200,45,0));
   shapes[15].setAngle(-130);
   shapes.push(new Tri(this,615,360, 0,200,100,200,45,0));
   shapes[16].setAngle(125);
   shapes.push(new Tri(this, 415,510, 0,200,100,200,45,0));
   shapes[17].setAngle(155);

   //Khi nhấn chuột vào thì tô màu vừa chọn vào hình
   shapes.forEach(item => {
     item.setInteractive().on('pointerup', ()=>item.color(color));
   });


   var eye = this.add.image(shapes[0].x,shapes[0].y,"eye1_1"); //Mắt con bướm
   eye.visible = false;

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
     pinkRectangle.visible = false;
     yellowRectangle.visible = false;
     eraseRectangle.visible = false;
   });

   //Cọ hồng
   pink.setInteractive(button, Phaser.Geom.Circle.Contains);
   pink.on('pointerover', function(){
     pink.setTint(0xe91e63);
   });
   pink.on('pointerout', function(){
     pink.clearTint();
   });
   pink.on('pointerup',function(){
     color = gameScene.pinkColor;
     pinkRectangle.visible = true;
     greenRectangle.visible = false;
     yellowRectangle.visible = false;
     eraseRectangle.visible = false;
   });

   //Cọ vàng
   yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
   yellow.on('pointerover', function(){
     yellow.setTint(0xf57f17);
   });
   yellow.on('pointerout', function(){
     yellow.clearTint();
   });
   yellow.on('pointerup',function(){
     color = gameScene.yellowColor;
     yellowRectangle.visible = true;
     pinkRectangle.visible = false;
     greenRectangle.visible = false;
     eraseRectangle.visible = false;
   });

   //Tẩy cũng có hiệu ứng khi di chuột qua, khi nhấn chuột vào tẩy thì màu (biến color) được set là màu trắng
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
       yellowRectangle.visible = false;
       pinkRectangle.visible = false;
       greenRectangle.visible = false;
     });

    //Nút Done cũng có hiệu ứng khi di chuột qua
    done.setInteractive(button, Phaser.Geom.Circle.Contains);
    done.on('pointerover', function(){
      done.setTint(0x303f9f);
    });
    done.on('pointerout', function(){
      done.clearTint();
    });
    done.on('pointerup',function(){   //Khi nhấn chuột thì kiểm tra các hình đã được tô chưa, nếu tô thì tô đúng chưa
      for(var i = 0; i < shapes.length; i++){
        gameScene.check(shapes[i]);
      }

      if(gameScene.countFailCorlor > 0)    //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 1s sau đó xóa màu của những hình tô sai
      {
        for(var i = 0; i < shapes.length; i++){
          gameScene.deleteColor(shapes[i]);
        }
      }

        else if(gameScene.countFill > 0){  //Nếu có hình chưa tô thì đưa ra thông báo "Color all the shapes", sau 3s thì ẩn thông báo
          notification.visible = true;
          setTimeout(()=>notification.visible = false,3000);
        }
        else {
          this.visible = false;
          green.visible = false;
          greenRectangle.visible = false;
          pinkRectangle.visible = false;
          yellowRectangle.visible = false;
          eraseRectangle.visible = false;
          pink.visible = false;
          yellow.visible = false;
          erase.visible = false;
          eraseText.visible = false;
          triangleText.visible = false;
          circleText.visible = false;
          squareText.visible = false;
          eye.visible = true;
          beard.visible = true;
          tree.visible = true;
          next.visible = true;
          next.setInteractive().on('pointerup',()=>gameScene.scene.start("ConversionScene1"));
        }

        //Set lại giá trị biến đếm số hình chưa tô và biến đếm số lượng hình tô sai màu
        gameScene.countFill = 0;
        gameScene.countFailCorlor = 0;
       });
 }

//Đếm số hình chưa tô, số hình tô sai, tô sai thì vẽ viền đỏ
check(shape){
        if(shape.isFill() === false) this.countFill++;
        else {
          if(this.isTrueColor(shape) === false){
                shape.drawStroke();
                this.countFailCorlor++;
              }
        }
      }

//Xóa màu và viền đỏ của hình tô màu sai
deleteColor(shape){
       if(shape.isFill() === true && this.isTrueColor(shape) === false){
           setTimeout(function(){
             shape.setStrokeStyle(2,0x000000);
             shape.fillColor = 0xffffff;
           },1500);
         }
     }

 //Kiểm tra đã tô đúng màu hay chưa
 isTrueColor(shape){
   if(shape instanceof Rect){
     if(shape.fillColor === this.greenColor) return true;
     else return false;
   }
   if(shape instanceof Cir){
     if(shape.fillColor === this.yellowColor) return true;
     else return false;
   }
   if(shape instanceof Tri){
     if(shape.fillColor === this.pinkColor) return true;
     else return false;
   }
 }

}
