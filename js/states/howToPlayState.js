var howToPlayState = {

	create: function(){
		this.video = this.game.add.video('howVideo');

		var sprite = this.video.addToWorld(game.world.centerX, game.world.centerY,.5,.5,.8,.79);

		this.game.time.events.add(700,function(){
			this.video.play(true)
		},this)

		var backBtn = this.game.add.button(20,20,'backBtn');
		backBtn.anchor.setTo(.5);
		backBtn.scale.x *= -1;
		backBtn.onInputDown.add(this.back,this);
		backBtn.width = 40;
		backBtn.height = 40;
	    game.input.onDown.add(this.pause, this);

	},

	pause: function() {
    	this.video.paused = (this.video.paused) ? false : true;
	},

	back: function() {
		this.video.currentTime = 0;
		this.video.destroy();
		this.state.start('HomeState');
	},
};