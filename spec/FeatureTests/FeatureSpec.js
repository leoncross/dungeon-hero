
describe('Game', function() {
  var player
  var hero
  var monster
  var zombie
  var dice

  var Combat = require('../../src/Combat');
  var Player = require('../../src/Player');
  var Monster = require('../../src/Monster');
  var Rooms = require('../../src/Rooms');

  beforeEach(function() {
    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };



    player = new Player();
    hero = player.returnHero();
    monster = new Monster();
    zombie = monster.returnMonster('zombie');
    dice = new DiceStub
    kombat = new Combat(dice)
    room = new Rooms(player,monster,kombat);
    kombat.attackSetup([hero, zombie]);
  });

  describe('Player', function() {
    it('expect player to be created', function() {
      expect(player).toBeDefined();
    });
    it('expect hero to be created', function() {
      expect(hero).toBeDefined();
    });
    it('expect hero to have a name', function() {
      expect(hero['name']).toBe('Player');
    });
  });

  describe('Monster', function() {
    it('expect monster to be created', function() {
      expect(monster).toBeDefined();
    });
  });

  describe('Combat', function() {
    it('expect combat to be created', function() {
      expect(kombat).toBeDefined();
    });
  });

  describe('Dice', function() {
    it('expect dice to be created', function() {
      expect(dice).toBeDefined();
    });
  });

  describe('Rooms', function() {
    it('expect room to be created', function() {
      expect(room).toBeDefined();
    });
  });


});
