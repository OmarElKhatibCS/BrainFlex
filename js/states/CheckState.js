var CheckState = {
	preload: function() {
		this.stage.backgroundColor = '#42a5f5';
	},

	create: function() {
		//el mochkla Hoon
		var newUser;

		var newUserCheck = localStorage.getItem('newUser');
		
		if(newUserCheck == null) {
			newUser = true;
		} else {
			newUser = false;
		}

		if(!newUser) {
			this.game.state.start("HomeState");
		}
		
		if(newUser) {
			this.fillInfo();
			newUser = false;
			newUserCheck = localStorage.setItem('newUser',newUser);
		}

		localStorage.setItem('newUser',newUser);
	},
	fillInfo: function() {
		//user name
        var userNameTitle = game.add.text(this.game.world.centerX, 100, 'Set Your Name', {
                font: '30px Arial',
                fill: '#FFF'
        });
        userNameTitle.anchor.set(0.5);

        var playerNameBg = this.game.add.sprite(this.game.world.centerX , 180 , 'bgb');
        playerNameBg.anchor.setTo(0.5);
        playerNameBg.height = 50;

        this.playerName = game.add.inputField(this.game.world.centerX-80, 180 - 17, {
            font: '18px Arial',
            fill: '#212121',
            fillAlpha: 0,
            fontWeight: 'bold',
            width: 150,
            max: 20,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            placeHolder: 'playerName',
            textAlign: 'center',
            zoom: true
        });

        this.playerName.setText('Guest');
        this.playerName.blockInput = false;

        var submitBtn = this.game.add.sprite(this.game.world.centerX , 390 , 'bgb');
        submitBtn.width = 140;
        submitBtn.height = 50;
        submitBtn.anchor.setTo(0.5);
        
        var submit = game.add.text(this.game.world.centerX-30 , 380, 'Submit', {
                font: '18px Arial'
        });
        submitBtn.inputEnabled = true;
        submitBtn.input.useHandCursor = true;
        submitBtn.events.onInputDown.add(function() {    
            localStorage.setItem('playerName',this.playerName.value);        
            userNameTitle.destroy();
            this.playerName.destroy();
            submit.destroy();
            this.game.state.start("HomeState");
        },this);

        var resetBtn = this.game.add.sprite(this.game.world.centerX, 460, 'bgb');
        resetBtn.width = 140;
        resetBtn.height = 50;
        resetBtn.anchor.setTo(0.5);

        var reset = game.add.text(this.game.world.centerX-20, 450, 'Clear', {
            font: '18px Arial'
        });
        resetBtn.inputEnabled = true;
        resetBtn.input.useHandCursor = true;
        resetBtn.events.onInputDown.add(function() {
            this.playerName.resetText();
        },this);

        Fabrique.Plugins.InputField.onKeyboardOpen.add(function () {
            console.error("keyboard open", Fabrique.Plugins.InputField.KeyboardOpen)
        });
        Fabrique.Plugins.InputField.onKeyboardClose.add(function () {
            console.error("keyboard close", Fabrique.Plugins.InputField.KeyboardOpen)
        });
	},
};