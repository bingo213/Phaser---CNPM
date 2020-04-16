class Game4_1 extends Phaser.Scene {
  constructor() {
    super("Game4_1");
  }
  
    preload()
    {
		this.load.image("t1","assets/triangle1.png");
		this.load.image("t2","assets/triangle2.png");
		this.load.image("t3","assets/triangle3.png");
		this.load.image("t4","assets/triangle4.png");
		this.load.image("t5","assets/triangle5.png");
		this.load.image("c1","assets/circle1.png");
		this.load.image("c2","assets/circle2.png");
		this.load.image("c3","assets/circle3.png");
		this.load.image("c4","assets/circle4.png");
		this.load.image("c5","assets/circle5.png");
		this.load.image("s1","assets/square1.png");
		this.load.image("s2","assets/square2.png");
		this.load.image("s3","assets/square3.png");
		this.load.image("s4","assets/square4.png");
		this.load.image("s5","assets/square5.png");
		this.load.image("bg1","assets/initscene1.png");
    	this.load.image("eat1","assets/voi1.png");
		this.load.image("eat2","assets/voi2.png");
		this.load.image("sleep1","assets/voi cam sleep.png");
		this.load.image("sleep2","assets/voi tim sleep.png");
		this.load.image("ha1","assets/voi ha mieng.png");
		
    }
    create() {
		var x=0;
		this.add.image(1440/2,800/2,"bg1");
        this.add.image(330,450,"eat1");
		if (x == 0) this.add.image(1100,450,"eat2");
		if (x == 1) this.add.image(330,450,"ha1");
		var backButton = this.add.text(170, 70, 'BACK', {   //Nút BACK
			fontFamily: "Roboto Condensed",
			fontSize: 20,
			color: "#1a65ac",
		});
		var shape = new Phaser.Geom.Circle(10,0,40);
		backButton.setInteractive(shape, Phaser.Geom.Circle.Contains);	
		backButton.on('pointerover', function(){   //Hiệu ứng khi di chuột vào nút BACK nút sẽ có màu xanh đậm
			backButton.setTint(0x00ff00);
		});
		backButton.on('pointerout',function(){    //Khi chuột không còn ở nút BACK thì trở lại màu như ban đầu
			backButton.clearTint();
		});
		backButton.on('pointerup',()=>gameScene.scene.start('startGame'));
		this.add.text(550,130,"Feed the Elephant",{
			fontFamily:"Roboto Condensed",
			fontSize:50,
			color:"#1a65ac",
		});
		//thêm các hình khối
		//tron
		var c1= this.add.image(600,300,"c1").setInteractive();
		var c2=this.add.image(770,425,"c2").setInteractive();
		var c3 = this.add.image(560,530,"c3").setInteractive();
		var c4 = this.add.image(750,640,"c4").setInteractive();
		var c5 = this.add.image(860,600,"c5").setInteractive();
		//vuong
		var s1= this.add.image(750,310,"s1").setInteractive();
		s1.angle= 38;
		var s2 = this.add.image(770,550,"s2").setInteractive();
		var s3 = this.add.image(650,605,"s3").setInteractive();
		s3.angle = -10;
		var s4 = this.add.image(870,500,"s4").setInteractive();
		s4.scaleX =.7; s4.scaleY=.7;s4.angle = -15;
		//tam giac
		var t1= this.add.image(650,390,"t1").setInteractive();
		
		var t2=this.add.image(550,400,"t2").setInteractive();
		t2.angle=30;
		
		var t3= this.add.image(650,490,"t3").setInteractive();
		t3.angle = -30;
		var t4 = this.add.image(555,650,"t4").setInteractive();
		var t5 = this.add.image(890,370,"t5").setInteractive();
		//kéo thả các khối
		this.input.setDraggable(c1,s1,c2,t2);
		this.input.setDraggable(t1);

    this.input.on('dragstart', function (pointer, gameObject){});

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

		if (dragY>340 && dragY<370 && dragX>130 && dragX<170) x=1; else x =0;
        gameObject.x = dragX;
        gameObject.y = dragY;
		

    });

    this.input.on('dragend', function (pointer, gameObject) {

        gameObject.clearTint();

    });
		
		
		
		
    }
    update() {}
}

