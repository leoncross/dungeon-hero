describe('Game', function(){


  var player
  var monster
  var combat
  var dice
  var room
  var game


  beforeEach(function() {
    var Game = require('../src/Game');
    // function DiceStub() {}
    // DiceStub.prototype = {
    // };
    //
    // function PlayerStub() {}
    // PlayerStub.prototype = {
    //   changeName(){}
    // };
    //
    // function MonstersStub() {}
    // MonstersStub.prototype = {
    //   returnMonster(){}
    // };
    //
    // function CombatStub() {}
    // CombatStub.prototype = {
    // };

    // function RoomStub() {}
    // RoomStub.prototype = {
    //   roomSelect(){}
    //   zombieRoom(){}
    // };

    // player = new PlayerStub()
    // monster = new MonstersStub()
    // combat = new CombatStub()
    // dice = new DiceStub()
    // room = new RoomStub()
    loot = jasmine.createSpyObj('loot',['lootFinder']);
    player = jasmine.createSpyObj('player',['changeName','returnHero']);
    monster = jasmine.createSpyObj('monster',['returnMonster', 'randomizeMonster', 'resetMonsters', 'receiveDamage', 'returnAttribute']);
    combat = jasmine.createSpyObj('combat',['attackSetup','attackSequence', 'endOfCombat', 'heroAttack']);
    dice = jasmine.createSpyObj('dice',['rollDice','rollBetween']);
    room = jasmine.createSpyObj('room',['monsterRoom','monsterinRoom']);
    game = new Game('hero')

  });

  describe('initialize', function(){
    it('the object to exist', function(){
      expect(loot).toBeDefined();
    });

    it('the object to exist', function(){
      expect(player).toBeDefined();
    });

    it('the object to exist', function(){
      expect(monster).toBeDefined();
    });

    it('the object to exist', function(){
      expect(combat).toBeDefined();
    });

    it('the object to exist', function(){
      expect(dice).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room).toBeDefined();
    });

    it('the object to exist', function(){
      expect(game).toBeDefined();
    });

    describe('play', function(){
      it('expect to call zombie room', function(){
        // game.play()
        // expect(room.monsterRoom).toHaveBeenCalledWith('easy')
      });
    });

  });
});
