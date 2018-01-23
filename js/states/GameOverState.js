var GameOverState = {
	create: function () {
		var username = localStorage.getItem('playerName');
		var highScore = localStorage.getItem('highScore');

		var usernameText = this.game.add.text(this.game.world.centerX,80,username,{font : '40px Arial'});
		usernameText.anchor.setTo(.5);

		var highScoreTitle = this.game.add.text(this.game.world.centerX,200,'Your High Score Is ',{font:'25px Arial',fill:'#FFF'});
		highScoreTitle.anchor.setTo(.5);

		var highScoreText = this.game.add.text(this.game.world.centerX,250,highScore,{font: '18px Arial',fill:'#FFF'});
		highScoreText.anchor.setTo(.5);

		var flexTitle = this.game.add.text(this.game.world.centerX,350,'Your Brain Is Flex Like An',{font:'18px Arial',fill:'#FFF'});
		flexTitle.anchor.setTo(.5);

		if(highScore <= 2500) {
			var flogo = this.game.add.sprite(this.game.world.centerX,450,'donkey');
			flogo.anchor.setTo(.5);
			flogo.width = 100;
			flogo.height = 100;
		} else if (highScore >2500 && highScore <= 5000){
			var flogo = this.game.add.sprite(this.game.world.centerX,450,'human');
			flogo.anchor.setTo(.5);
			flogo.width = 100;
			flogo.height = 100;
		} else if (highScore >5000 && highScore <= 7500) {
			var flogo = this.game.add.sprite(this.game.world.centerX,450,'alien');
			flogo.anchor.setTo(.5);
			flogo.width = 100;
			flogo.height = 100;
		} else {
			var flogo = this.game.add.sprite(this.game.world.centerX,450,'rick');
			flogo.anchor.setTo(.5);
			flogo.width = 100;
			flogo.height = 100;
		}

		var backBtn = this.game.add.button(this.game.world.centerX,550,'backBtn');
		backBtn.anchor.setTo(.5);
		backBtn.scale.x *= -1;
		backBtn.onInputDown.add(this.back,this);
		backBtn.width = 60;
		backBtn.height = 60;

	},
	back: function(){
		this.state.start('HomeState');
	},
};