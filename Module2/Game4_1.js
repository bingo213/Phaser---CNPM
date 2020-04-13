class Game4_1 extends Phaser.Scene {
  constructor() {
    super("Game4_1");
  }

    preload()
    {
		this.load.image("","");
		this.load.image("bg1","assets/initscene1.png");
    	this.load.image("eat1","assets/voi cam 2.png");
		this.load.image("eat2","assets/voi tim 2.png");
		this.load.image("sleep1","assets/voi cam sleep.png");
		this.load.image("sleep2","assets/voi tim sleep.png");
    }
    create() {
		this.add.image(1440/2,800/2,"bg1");
        this.add.image(330,450,"eat1");
		this.add.image(1100,450,"eat2");
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


    }
    update() {}
}
