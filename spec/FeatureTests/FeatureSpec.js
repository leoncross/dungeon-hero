/* eslint-disable */

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
  var Readout = require('../../src/Readout');


  beforeEach(function() {
    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    player = new Player();
    hero = player.returnHero();
    monster = new Monster();
    enemy = monster.returnMonster('Zombie');
    dice = new DiceStub
    readout = new Readout
    combat = new Combat(player, monster, dice, readout)
    room = new Rooms(player, monster, combat, readout);

  });

  describe('Player', function() {
    it('expect player to be created', function() {
      expect(player).toBeDefined();
    })
    it('expect hero to be created', function() {
      expect(hero).toBeDefined();
    })
    it('return the hero', function() {
      expect(player.returnHero()).toEqual(hero)
    })
  })

  describe('Monster', function() {
    it('expect monster to be created', function() {
      expect(monster).toBeDefined();
    });
    it('expect zombie to be created', function() {
      expect(enemy).toBeDefined();
    });
    it('return the monster', function() {
      expect(monster.returnMonster('Zombie')).toEqual(enemy);
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
      combat.attackSetup([hero, enemy]);
      combat.attackSequence();
      expect(hero['health']).toBe(92)
    });
    it('combat sequence - zombie receive damage', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy]);
      combat.attackSequence();
      expect(enemy['health']).toBe(23)
    });
    it('combat sequence - zombie is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(8);
      combat.attackSetup([hero, enemy]);
      combat.attackSequence();
      combat.attackSequence();
      combat.attackSequence();
      expect(enemy['health']).toBe(0)
    });
    it('combat sequence - hero is killed', function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(7);
      hero['health'] = 10
      combat.attackSetup([hero, enemy]);
      combat.attackSequence();
      expect(hero['health']).toBe(0)
    });
  });
});
