var Preload = function(game){};

Preload.prototype = {
  preload: function(){
    this.game.load.image('blue', 'assets/sapphire.gif');
    this.game.load.image('green', 'assets/emerald.gif');
    this.game.load.image('red', 'assets/ruby.gif');
    this.game.load.image('yellow', 'assets/diamond.gif');
  },
  create: function() {
    this.game.state.start("Main");
  },
}
