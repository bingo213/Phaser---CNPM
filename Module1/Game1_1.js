class Game1_1 extends Phaser.Scene {
  constructor() {
    super("Game1_1");
  }

  preload(){
    //Load ảnh
    this.load.image("bgcolor","assets/color.png");
    this.load.image("green","assets/green.png");
    this.load.image("pink","assets/pink.png");
    this.load.image("yellow","assets/yellow.png");
    this.load.image("done","assets/donebutton.png");
    this.load.image("erase","assets/erase.png");
    this.load.image("notification","assets/notification.png");
    this.load.image("stateBar","assets/state_bar.png");
  }

  create(){
    var colorGreen = 0x66cc66;
    var colorPink = 0xff6699;
    var colorYellow = 0xffb300;
    var color = 0xffffff;

    var countFill = 0;        //Đếm số lượng hình chưa được tô màu
    var countFailCorlor = 0;  //Đếm số lượng hình tô sai màu

    const gameScene = this.scene.get('Game1_1');  //Đặt biến gameScene, đoạn dưới dùng biến này để restart lại game, chuyển sang game mới

    //Custom class Rect để quản lý các đối tượng hình chữ nhật, hình vuông
    class Rect extends Phaser.GameObjects.Rectangle {
      constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height, 0xffffff);
        this.lineStyle = super.setStrokeStyle(2,0x000000);
        scene.add.existing(this);
      }

      //Kiểm tra xem hình đã được tô màu hay chưa
      isFill(){
        if(this.fillColor === 0xffffff)
            return false;
        return true;
      }

      //Kiểm tra xem đã tô đúng màu hay chưa
      isTrueColor(){
        if(this.fillColor === colorGreen) return true;
        else {
          return false;
        }
      }

      //Vẽ đường viền (trong trường hợp tô sai)
      drawStroke(){
        this.setStrokeStyle(4, 0xff0000);
      }

      //Tô màu vào hình
      color(){
        if(color === 0xffffff)        //Nếu màu trắng thì tô => đây là để sử dụng tẩy
           this.fillColor = 0xffffff;
        if(this.isFill() === false)   //Nếu hình chưa được tô (màu trắng) thì tô màu vào => không tô màu khác khi hình đã được tô
          this.fillColor = color;
      }

      //Kiểm tra xem đã tô màu chưa, nếu tô thì tô đúng chưa
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

    //Custom class Cir để quản lý các đối tượng hình tròn. Các hàm isFill(), isTrueColor(), drawStroke(), color(), check() giống class Rect ở trên
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
      color(){
        if(color === 0xffffff)
           this.fillColor = 0xffffff;
        if(this.isFill() === false){
          this.fillColor = color;
        }
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

    //Custom class Tri để quản lý các đối tượng hình tam giác. Các hàm isFill(), isTrueColor(), drawStroke(), color(), check() giống class Rect ở trên
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
      color(){
        if(color === 0xffffff)
           this.fillColor = 0xffffff;
        if(this.isFill() === false){
          this.fillColor = color;
        }
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

    this.add.image(config.width/2, config.height/2,"bgcolor"); //background (hình nền)

   //Vẽ khung hình chữ nhật trắng, viền xanh, uốn góc 30 độ
   var graphics = this.add.graphics();
   graphics.lineStyle(3,0x3F82C0);
   graphics.fillStyle(0xffffff,1);
   graphics.fillRoundedRect(145,50,1150,653,30);
   graphics.strokeRoundedRect(145,50,1150,653,30);

   this.add.image(config.width/2,75,"stateBar");    //Thêm thanh trạng thái
   this.add.line(config.width/2, 95, 0, 0, 1150, 0, 0x1a65ac);  //Đường kẻ phân tách phần trạng thái và phần làm bài
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
   var green = this.add.image(545,580,"green");
   this.add.text(580, 560, 'Squares', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });
   var pink = this.add.image(840,580,"pink");
   this.add.text(875, 560, 'Triangles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });
   var yellow = this.add.image(1112,580,"yellow");
   this.add.text(1147, 560, 'Circles', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var done = this.add.image(701,660,"done");   //Nút done
   var erase = this.add.image(230,650,"erase"); //Tẩy và chữ Erase bên phải tẩy
   this.add.text(260, 630, 'Erase', {
     fontFamily: "Roboto Condensed",
     fontSize: 35,
     color: "#000",
   });

   var notification = this.add.image(1030,655,"notification");  //Thông báo khi nhấn nút Done mà chưa tô hết các hình
   notification.visible = false;  //Ban đầu không nhìn thấy thông báo

    //Khai báo và vẽ 5 hình tròn
    var c1 =  new Cir(this,368,253,30);
    var c2 = new Cir(this,452,366,23);
    var c3 = new Cir(this,482,401,23);
    var c4 = new Cir(this,511,440,23);
    var c5 = new Cir(this,920,312,45);

    //Khai báo và vẽ 5 hình vuông
   var r1 = new Rect(this, 415,315,50,50);
   r1.setAngle(50);   //Hình r1 là thân chú bướm nên xoay góc 50 độ
   var r2 = new Rect(this, 827,224,100,100);
   var r3 = new Rect(this, 1012,224,100,100);
   var r4 = new Rect(this, 827,404,100,100);
   var r5 = new Rect(this, 1012,404,100,100);

   //Khai báo và vẽ 8 hình tam giác
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

   //Khi nhấn chuột vào thì tô màu vừa chọn vào hình
   c1.setInteractive().on('pointerup',()=>c1.color());
   c2.setInteractive().on('pointerup',()=>c2.color());
   c3.setInteractive().on('pointerup',()=>c3.color());
   c4.setInteractive().on('pointerup',()=>c4.color());
   c5.setInteractive().on('pointerup',()=>c5.color());
   r1.setInteractive().on('pointerup',()=>r1.color());
   r2.setInteractive().on('pointerup',()=>r2.color());
   r3.setInteractive().on('pointerup',()=>r3.color());
   r4.setInteractive().on('pointerup',()=>r4.color());
   r5.setInteractive().on('pointerup',()=>r5.color());
   t1.setInteractive().on('pointerup',()=>t1.color());
   t2.setInteractive().on('pointerup',()=>t2.color());
   t3.setInteractive().on('pointerup',()=>t3.color());
   t4.setInteractive().on('pointerup',()=>t4.color());
   t5.setInteractive().on('pointerup',()=>t5.color());
   t6.setInteractive().on('pointerup',()=>t6.color());
   t7.setInteractive().on('pointerup',()=>t7.color());
   t8.setInteractive().on('pointerup',()=>t8.color());

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
   green.on('pointerup',()=> color = colorGreen );

   //Cọ hồng
   pink.setInteractive(button, Phaser.Geom.Circle.Contains);
   pink.on('pointerover', function(){
     pink.setTint(0xe91e63);
   });
   pink.on('pointerout', function(){
     pink.clearTint();
   });
   pink.on('pointerup',()=> color = colorPink);

   //Cọ vàng
   yellow.setInteractive(button, Phaser.Geom.Circle.Contains);
   yellow.on('pointerover', function(){
     yellow.setTint(0xf57f17);
   });
   yellow.on('pointerout', function(){
     yellow.clearTint();
   });
   yellow.on('pointerup',()=> color = colorYellow);

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
    done.on('pointerup',function(){   //Khi nhấn chuột thì kiểm tra các hình đã được tô chưa, nếu tô thì tô đúng chưa
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

      if(countFailCorlor > 0)    //Nếu có hình tô sai thì viền đỏ (đã làm trong hàm check()), dừng màn hình 3s sau đó restart lại chính màn chơi này
           setTimeout(()=>gameScene.scene.restart(),3000);

        else if(countFill > 0){  //Nếu có hình chưa tô thì đưa ra thông báo "Color all the shapes", dừng màn hình 3s sau đó restart lại chính màn chơi này
          notification.visible = true;
          setTimeout(()=>gameScene.scene.restart(),3000);
        }
        else gameScene.scene.start("Game1_2");   //Nếu làm đúng thì chuyển sang game tiếp theo (Game1_2)
      });
 }

}
