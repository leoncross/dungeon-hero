describe('Game', function(){

  var Game = require('../src/Game');

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

    var player = PlayerStub()
    var monster = MonstersStub()
    var combat = CombatStub()
    var dice = DiceStub()
    var game = new Game()

  });
});
