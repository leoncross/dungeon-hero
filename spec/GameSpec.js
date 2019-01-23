describe('Game', function(){

  var Game = require('../src/Game');
  var player
  var monster
  var combat
  var dice
  var room
  var game


  beforeEach(function() {

    function DiceStub() {}
    DiceStub.prototype = {
    };

    function PlayerStub() {}
    PlayerStub.prototype = {
    };

    function MonstersStub() {}
    MonstersStub.prototype = {
    };

    function CombatStub() {}
    CombatStub.prototype = {
    };

    function RoomStub() {}
    RoomStub.prototype = {
    };

    player = PlayerStub()
    monster = MonstersStub()
    combat = CombatStub()
    dice = DiceStub()
    room = RoomStub()
    game = new Game()

  });

  describe('initialize', function(){
    it('the object to exist', function(){
      expect(game).toBeDefined();
    });
  });
});
