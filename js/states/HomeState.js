var HomeState = {
	create: function() {
		this.stage.backgroundColor = '#2196f3';

		this.higherScore = localStorage.getItem('highScore');
		if(this.higherScore > 0 && this.higherScore <= 2500) {
			this.DonkeyVoice = this.game.add.audio('DonkeyVoice');
			this.DonkeyVoice.loop = true;
			this.DonkeyVoice.play();
			var bg = this.game.add.sprite(-65,0,'donkeyBg');
		} else if(this.higherScore > 2500 && this.higherScore <= 5000 ) {
			this.HumanVoice = this.game.add.audio('bgm');
			this.HumanVoice.loop = true;
			this.HumanVoice.play();
			var bg = this.game.add.sprite(0,0,'humanBg');
		} else if(this.higherScore > 5000 && this.higherScore <= 7500 ) {
			this.AlienVoice = this.game.add.audio('AlienVoice');
			this.AlienVoice.loop = true;
			this.AlienVoice.play();
			this.stage.backgroundColor = '#000';
			var bg = this.game.add.sprite(-25,0,'alienBg');
		} else if(this.higherScore > 7500 ) {
			this.RickVoice = this.game.add.audio('RickVoice');
			this.RickVoice.loop = true;
			this.RickVoice.play();
			var bg = this.game.add.sprite(-140,0,'rickBg');
		}

		var logo1 = this.game.add.sprite(this.game.world.centerX,0,'logo1');
		logo1.anchor.setTo(.5,.5);
		logo1.scale.setTo(.7);
		game.add.tween(logo1).to( { y: 150 }, 1000, Phaser.Easing.Bounce.Out, true);
		this.bounceAudio = this.game.add.audio('bounce'); this.correctSound;
		this.bounceAudio.loop = false;
		this.bounceAudio.play();

		var playBtn = this.game.add.button(this.game.world.centerX,this.game.world.centerY,'playBtn');
		playBtn.anchor.setTo(.5);
		playBtn.onInputDown.add(this.play,this);

		var howBtn = this.game.add.button(this.game.world.centerX,this.game.world.centerY+190,'howBtn');
		howBtn.anchor.setTo(.5);
		howBtn.scale.setTo(0.5);
		howBtn.onInputDown.add(this.howToPlay,this);

		if(this.higherScore > 0) {
			var scoreBtn = this.game.add.button(this.game.world.centerX,this.game.world.centerY+110,'scoreBtn');
			scoreBtn.anchor.setTo(.5);
			scoreBtn.onInputDown.add(function(){this.game.state.start('GameOverState');this.stopMusic()},this);
			scoreBtn.width = 50;
			scoreBtn.height = 50;
		}

		if(this.higherScore > 7500) {
			playBtn.x += 100;
			howBtn.x += 100;
			scoreBtn.x += 100;
		}

	},

	play: function() {
		this.game.state.start('GameState');
		this.stopMusic();
	},

	howToPlay: function(){
		this.game.state.start('howToPlayState');
		this.stopMusic();
	},

	stopMusic: function() {
		if(this.higherScore > 0 && this.higherScore <= 2500) {
			this.DonkeyVoice.stop();
		} else if (this.higherScore > 2500 && this.higherScore <= 5000) {
			this.HumanVoice.stop();
		} else if(this.higherScore > 5000 && this.higherScore <= 7500 ) {
			this.AlienVoice.stop();
		} else if(this.higherScore > 7500 ) {
			this.RickVoice.stop();
		}
	},
};