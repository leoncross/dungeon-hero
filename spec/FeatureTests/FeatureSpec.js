
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
    combat = new Combat(dice)
    room = new Rooms(player,monster,combat);

  });

  describe('Player', function() {
    it('expect player to be created', function() {
      expect(player).toBeDefined();
    });
    it('expect hero to be created', function() {
      expect(hero).toBeDefined();
    });
    it('return the hero', function() {
      expect(player.returnHero()).toEqual(hero);
    });
  });

  describe('Monster', function() {
    it('expect monster to be created', function() {
      expect(monster).toBeDefined();
    });
    it('expect zombie to be created', function() {
      expect(zombie).toBeDefined();
    });
    it('return the monster', function() {
      expect(monster.returnMonster('zombie')).toEqual(zombie);
    });
  });

  describe('Dice', function() {
    it('expect dice to be created', function() {
      expect(dice).toBeDefined();
    });
  });

  describe('Combat', function() {
    it('expect combat to be created', function() {
      expect(combat).toBeDefined();
    });
    it('combat sequence - hero receive damage', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      expect(hero['health']).toBe(92)
    });
    it('combat sequence - zombie receive damage', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      expect(zombie['health']).toBe(23)
    });
    it('combat sequence - zombie is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(8);
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      combat.attackSequence();
      combat.attackSequence();
      expect(zombie['health']).toBe(0)
    });
    it('combat sequence - hero is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(7);
      hero['health'] = 10
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      expect(hero['health']).toBe(0)
    });
  });

  describe('Rooms', function() {
    it('expect room to be created', function() {
      expect(room).toBeDefined();
    });
    it('combat sequence - zombie is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(8);
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      combat.attackSequence();
      combat.attackSequence();
      expect(room.escapeRoom()).toEqual('you have won!')
    });
    it('combat sequence - hero is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(7);
      hero['health'] = 10
      combat.attackSetup([hero, zombie]);
      combat.attackSequence();
      expect(room.roomSelect()).toEqual('you have lost')
    });
  });





});
