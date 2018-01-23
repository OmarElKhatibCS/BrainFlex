this.game = new Phaser.Game(360,640,Phaser.AUTO);

Phaser.Device.whenReady(function () {
            game.plugins.add(Fabrique.Plugins.InputField);
});

this.game.state.add("BootState",BootState);
this.game.state.add("PreloadState",PreloadState);
this.game.state.add("CheckState",CheckState);
this.game.state.add("HomeState",HomeState);
this.game.state.add('howToPlayState',howToPlayState);
this.game.state.add("GameState",GameState);
this.game.state.add('GameOverState',GameOverState);
this.game.state.start("BootState");