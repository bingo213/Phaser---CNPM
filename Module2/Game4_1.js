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
		this.load.image("ha2","assets/voi tim ha mieng.png");
		this.load.image("do1","assets/voi do.png");
    }
    create() {
		const gameScene = this.scene.get('Game4_1');
		this.add.image(1440/2,800/2,"bg1");
        var eat1 = this.add.image(330,450,"eat1");
		var eat2 = this.add.image(1100,450,"eat2");
		var ha1 = this.add.image(330,450,"ha1");
			ha1.scaleX =.7793427; 
			ha1.scaleY =.7579909;
			ha1.visible = false;
		var ha2 = this.add.image(1100,450,"ha2");
			ha2.scaleX =.78186;
			ha2.scaleY = .774294;
			ha2.visible = false;
		var do1 = this.add.image(330,450,"do1");
			do1.scaleX=.72489;
			do1.scaleY= .851282;
			do1.visible =false;
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
		backButton.on('pointerup',()=>gameScene.scene.start('startGame'));  //Khi nhấn chuột vào nút BACK thì quay trở lại màn hình bắt đầu (StartScene)
		this.add.text(550,130,"Feed the Elephant",{
			fontFamily:"Roboto Condensed",
			fontSize:50,
			color:"#1a65ac",
		});
		var check = false;
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
		this.input.setDraggable(c1);
		this.input.setDraggable(c2);
		this.input.setDraggable(c3);
		this.input.setDraggable(c4);
		this.input.setDraggable(c5);
		this.input.setDraggable(t1);
		this.input.setDraggable(t2);
		this.input.setDraggable(t3);
		this.input.setDraggable(t4);
		this.input.setDraggable(t5);
		this.input.setDraggable(s1);
		this.input.setDraggable(s2);
		this.input.setDraggable(s3);
		this.input.setDraggable(s4);

    this.input.on('dragstart', function (pointer, gameObject){});

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

		check = true;
        gameObject.x = dragX;
        gameObject.y = dragY;
		

    });

    this.input.on('dragend',function(pointer, gameObject) {
		check = false;
	/*	if (cir1.contains(c1.x,c1.y) )
		{
			eat1.visible = false;
			do1.visible = true;
			c1.x=600;
			c1.y= 300;
		}else
			
		
		{
			eat1.visible = true;
			do1.visible = false;
			c1.x=600;
			c1.y=300;
		}
		*/
	
	
	
	});
		
		
		
	

		var cir1 = new Phaser.Geom.Circle(220,335,100);
		var cir2 = new Phaser.Geom.Circle(1220,335,100);


    this.input.on('pointermove', function (pointer) {

        if(cir1.contains(pointer.x, pointer.y) && check === true)
        {
            eat1.visible = false;
            ha1.visible = true;
        }
        else
        {
            eat1.visible = true;
            ha1.visible = false;
        }

        if(cir2.contains(pointer.x, pointer.y) && check === true)
        {
            eat2.visible = false;
            ha2.visible = true;
        }
        else
        {
            eat2.visible = true;
            ha2.visible = false;
        }

    

    });	

	}
}