var PreloadState = {
	preload: function() {
		this.logo = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"logo");
        this.logo.anchor.setTo(0.5);
        
        this.progressBar = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+200,"progressBar");
        this.progressBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.progressBar);

		this.game.load.image('bgb','assets/images/bg.png');
		this.game.load.image('evenGuide','assets/images/isEven.png');
		this.game.load.image('voyelleGuide','assets/images/isVoyelle.png');
		this.game.load.image('NoBtn','assets/images/No.png');
		this.game.load.image('YesBtn','assets/images/Yes.png');
		this.game.load.image('logo1','assets/images/logo1.png');
		this.game.load.image('playBtn','assets/images/playBtn.png');
		this.game.load.image('howBtn','assets/images/howBtn.png');
		this.game.load.image('backBtn','assets/images/backBtn.png');
		this.game.load.image('scoreBtn','assets/images/score.png');
		this.game.load.image('donkey','assets/images/donkey.png');
		this.game.load.image('human','assets/images/human.png');
		this.game.load.image('alien','assets/images/alien.png');
		this.game.load.image('rick','assets/images/rick.png');
		this.game.load.image('donkeyBg','assets/images/donkeyBg.jpg');
		this.game.load.image('alienBg','assets/images/alienBg.jpg');
		this.game.load.image('rickBg','assets/images/rickBg.jpg');
		this.game.load.image('humanBg','assets/images/humanBg.jpg');

		this.game.load.audio('go','assets/sounds/go.ogg');
		this.game.load.audio('timeOut','assets/sounds/timeout.ogg');
		this.game.load.audio('wrongSound','assets/sounds/wrong.wav');
		this.game.load.audio('correctSound','assets/sounds/correct.wav');
		this.game.load.audio('bgm','assets/sounds/bgm.mp3');
		this.game.load.audio('bounce','assets/sounds/bounce.ogg');
		this.game.load.audio('DonkeyVoice','assets/sounds/DonkeyVoice.ogg');
		this.game.load.audio('AlienVoice','assets/sounds/AlienVoice.ogg');
		this.game.load.audio('RickVoice','assets/sounds/RickVoice.ogg');

		this.game.load.video('howVideo','assets/videos/howVideo.mp4');

	},
	create: function() {
		App42.initialize("766fa131cf5a86ac361d8dc6cf8d111860771c86165448ccb462e37fc8d570c0","0a87c0f63472d6c0a12c03820fd3a4f0a4429b05a2d383e9e08e858e35a21492");  
		this.game.time.events.add(2000,function(){
            this.game.state.start('CheckState');
        },this);
	},

};