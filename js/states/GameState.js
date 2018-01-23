//hon el GameEngine
var GameState = {
	//hon hotena lon el stage la azra2 mn Material Design te3 Google
	preload: function() {
		this.colors = ['#2196f3','#3f51b5','#673ab7','#9c27b0','#e91e63',
		'#f44336','#ffc107','#ff9800','#ffeb3b','#795548','#ff5722','#009688','#3f51b5'];
	},
	//hon hotet kol el iyam ele momkn tomro2 bl lo3ba
	create: function() {
		this.stage.backgroundColor = '#f90';
		this.goSound = this.game.add.audio('go');
		this.timeOutSound = this.game.add.audio('timeOut');
		this.wrongSound = this.game.add.audio('wrongSound');
		this.correctSound = this.game.add.audio('correctSound');
		this.bgm = this.game.add.audio('bgm');
		this.soundsArr = [this.goSound,this.timeOutSound,this.wrongSound,this.correctSound,this.bgm];

		this.timeOutSound.loop = false;
		this.goSound.loop = false;
		this.wrongSound.loop = false;
		this.correctSound.loop = false;
		this.bgm.loop = true;
		this.bgm.play();
		this.goSound.play();

		this.isEven = false;
		this.isVoyelle = false;
		this.typeEven = false;
		this.typeVoyelle = false;
		this.falseTry = 0;
		this.trueTry = 0;
		this.score = 0;
		this.type = null;
		//array la chuf el tatabo2 ben el 2 array
		this.lettres = ['A','E','I','U','Y','G','K','L','P','R','S','T','F'];
		this.voyelle = ['A','E','I','U','Y'];
		//array lal el ar2am
		this.numbers = [2,3,4,5,6,7,8,9];
		this.ranT = null;
		this.createText();
		this.checkEorV();
		this.showText();
		this.createButtons();

		this.startTimer = false;

		this.game.time.events.add(1500,function(){
			this.startTimer = true;
		},this);

		this.count = 3600;

		this.milliSecond = 10000;

		var timer = game.time.create(false);
		timer.loop(this.milliSecond,function(){
			var bgColor = this.game.rnd.pick(this.colors);
			this.stage.backgroundColor = bgColor;
			evenGuide.destroy();
			voyelleGuide.destroy();
		},this);

        //izhar el Guides
		var evenGuide = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY-100,'evenGuide');
		var voyelleGuide = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+100,'voyelleGuide');
		evenGuide.anchor.setTo(0.5);
		voyelleGuide.anchor.setTo(0.5);

		timer.start();

		//ezhar nass el score 3al chacha
		var style = {font:'20px Arial',fill:'#000'};
		this.scoreText = this.game.add.text(300,10,this.score,style);
		this.countText = this.game.add.text(this.game.world.centerX,10,this.count,style);

		var backBtn = this.game.add.button(20,20,'backBtn');
		backBtn.anchor.setTo(.5);
		backBtn.scale.x *= -1;
		backBtn.onInputDown.add(this.back,this);
		backBtn.width = 40;
		backBtn.height = 40;
	},

	back: function(){
		this.state.start('HomeState');
		for (i = 0 ; i < this.soundsArr.length; i++ ){
			this.soundsArr[i].stop();
		};
	},

	//3amal el nass
	createText: function() {
		//est5raj ima 3ashwa2ya mn el Array esma bl Docs PhaserDataGenerator
		this.number = this.game.rnd.pick(this.numbers);
		this.lettre = this.game.rnd.pick(this.lettres);

		//ta2akod mn eza el harf voyelle
		this.voyelle.forEach(function(element){
			if(this.lettre == element) {
				this.isVoyelle = true;
			}
		},this);

		//hon la nchuf eza nombre even y3ne byn2osem 3a 2
		if(this.number % 2 == 0) {
			this.isEven = true;
		} else {
			this.isEven = false;
		}
	},
	//hon 3mlnaha la nchuf eza lah tkun bi field el Even aw Voyelle mn ima 3shwa2ya bthded el no3
	checkEorV: function() {
		var n = this.game.rnd.integer();
		if(n % 2 == 0) {
			this.typeEven = true;
			this.typeVoyelle = false;
		} else {
			this.typeEven = false;
			this.typeVoyelle = true;
		}
	},
	//ezhar el klma el 3shw2ya ele 3mlnaha
	showText: function() {
		var bgb = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY-50,'bgb');
		bgb.anchor.setTo(0.5);
		bgb.scale.setTo(0.6);
		var bgb2 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+50,'bgb');
		bgb2.anchor.setTo(0.5);
		bgb2.scale.setTo(0.6);

		var t = this.game.rnd.integer();
		if(t % 2 == 0){
			this.ranT = this.lettre + this.number;
		} else {
			this.ranT = this.number + this.lettre;
		}
		
		var style = {font:'40px Arial',fill:'#000'};
		
		if(this.typeEven && !this.typeVoyelle) {
			this.text = this.game.add.text(bgb.x,bgb.y,this.ranT,style);
			this.text.anchor.setTo(0.5);
		} else if(!this.typeEven && this.typeVoyelle) {
			this.text = this.game.add.text(bgb2.x,bgb2.y,this.ranT,style);
			this.text.anchor.setTo(0.5);
		}
	},
	//raj3na kol chi la ima el asesye
	resetText: function() {
		this.number = null;
		this.lettre = null;
		this.ranT = null;
		this.isVoyelle = false;
		this.isEven = false;
		this.text.destroy();
		this.createText();
		this.checkEorV();
		this.showText();
	},
	//hon la nt2aked eza jawab el User Sah aw la2 eza kabas Yes ma3 t8yir score
	checkAnsYes: function() {
		if(this.typeEven){
			if(this.isEven) {
				this.score += 50;
				this.trueTry += 1;
				this.falseTry = 0;
				this.correctSound.play();
			} else if(!this.isEven) {
				this.falseTry += 1;
				this.trueTry = 0;
				this.wrongSound.play();
			}
		} else if(this.typeVoyelle){
			if(this.isVoyelle) {
				this.score += 50;
				this.trueTry += 1;
				this.falseTry = 0;
				this.correctSound.play();
			}else if(!this.isVoyelle) {
				this.falseTry += 1;
				this.trueTry = 0;
				this.wrongSound.play();
			}
		}
	},
	//hon la nt2aked eza jawab el User Sah aw la2 eza kabas No ma3 t8yir score
	checkAnsNo: function() {
		if(this.typeEven){
			if(!this.isEven) {
				this.score += 50;
				this.trueTry += 1;
				this.correctSound.play();
			} 
			else if(this.isEven) {
				this.falseTry += 1;
				this.trueTry = 0;
				this.wrongSound.play();
			}
		} else if(this.typeVoyelle){
			if(!this.isVoyelle) {
				this.score += 50;
				this.trueTry += 1;
				this.correctSound.play();
			} 
			else if(this.isVoyelle) {
				this.falseTry += 1;
				this.trueTry = 0;
				this.wrongSound.play();
			}
		}
	},
	//3mal el kbset Yes w el No
	createButtons: function() {
		var yesButton = this.game.add.button(290,610,'YesBtn');
		yesButton.onInputDown.add(this.checkAnsYes, this);
		yesButton.onInputDown.add(this.resetText, this);
		yesButton.anchor.setTo(0.5);

		var noButton = this.game.add.button(70,610,'NoBtn');
		noButton.onInputDown.add(this.checkAnsNo, this);
		noButton.onInputDown.add(this.resetText, this);
		noButton.anchor.setTo(0.5);

		yesButton.scale.setTo(0.7);
		noButton.scale.setTo(0.7);
	},
	//taha2o2 eza imet el score az8ar mn 0 5liha sefer w jibna imet el Score kol ma tt8yer
	update: function() {
		if(this.score <= 0)
			this.score = 0;
		if(this.count <= 0) {
			this.count = 0;
			this.highScore = this.score;
			this.higherScore();
			this.timeOutSound.play();
			for (i = 0 ; i < this.soundsArr.length; i++ ){
				this.soundsArr[i].stop();
			};
			this.game.state.start('GameOverState');
			/*this.saveScore(this.score);
			print(this.saveScore(this.score));*/
		}
		if(this.trueTry == 5){
			this.score += 50;
			this.trueTry = 0;
			this.falseTry = 0;
		} 
		if(this.falseTry > 2) {
			this.trueTry = 0;
		}
		if(this.falseTry == 5) {
			this.count -= 500;
			this.score -= 1000;
			this.falseTry = 0;
		}

		this.scoreText.text = this.score;
		
		if(this.startTimer)
			this.count = this.count - 1;
		
		this.countText.text = Math.floor(this.count/60);
	},
	higherScore: function(){
		if (localStorage.getItem('highScore') == null) {
			this.higherScore = localStorage.setItem('highScore',this.score);
		}
		else {
			if(localStorage.getItem('highScore') < this.score) {
				localStorage.setItem('highScore',this.score);
			}
		}
     },
	saveScore: function(n){
     if(n){
          var gameName = "FlexBrain";  
          var userName = this.playerName;
          if(userName == ""){
               userName = "Guest";
          }  
          var gameScore = n;  
          var result;
          var scoreBoardService = new App42ScoreBoard();    
          scoreBoardService.saveUserScore(gameName,userName,gameScore,{ success: function(object){} }); 
     }
}
};