describe('Rooms',function(){

  var Rooms = require('../src/Rooms');
  var room
  var monsters
  var combat
  var player

  beforeEach(function() {
    function PlayerStub() {}
    PlayerStub.prototype = {
      returnHero() {
        return {name: 'hero', health: 100, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}
      }
    };

    function MonstersStub() {}
    MonstersStub.prototype = {
      returnMonster() {},
      randomizeMonster() {},
      resetMonsters() {}
    };

    function CombatStub() {}
    CombatStub.prototype = {
      attackSetup() {}
    };

    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    player = new PlayerStub()
    monsters = new MonstersStub()
    combat = new CombatStub()

    dice = new DiceStub()

    room = new Rooms(player, monsters, combat, dice)

    healthyMonster = {name: 'monster', health: 100, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    almostDeadMonster = {name: 'monster', health: 3, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    deadMonster = {name: 'monster', health: 0, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}

    healthyHero = {name: 'hero', health: 100, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}
    hurtHero = {name: 'hero', health: 47, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}
    deadHero = {name: 'hero', health: 0, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}

  });

  describe('#monsterRoom', function() {
    it('returns an easy monster (zombie)', function() {
      spyOn(player, "returnHero").and.returnValue(healthyHero);
      spyOn(monsters, "randomizeMonster").and.returnValue(healthyMonster);
      spyOn(combat, "attackSetup").and.returnValue(healthyHero);
      expect(room.monsterRoom('easy')).toEqual(healthyHero)
    })
    it('forces boss fight regardless of roll', function() {
      spyOn(dice, "rollDice").and.returnValue(1);
      spyOn(combat, "attackSetup").and.returnValue('boss');
      expect(room.monsterRoom('boss', true)).toEqual('boss')
    })
    it('points to trapRoom if fails dice roll', function() {
      spyOn(dice, "rollDice").and.returnValue(5);
      spyOn(combat, "attackSetup").and.returnValue('trap');
      expect(room.monsterRoom('medium')).toEqual('trap')
    })
  })
  describe('#monsterInRoom', function() {
    it('returns the name of the monster in the room', function() {
      spyOn(player, "returnHero").and.returnValue(healthyHero);
      spyOn(monsters, "randomizeMonster").and.returnValue(healthyMonster);
      spyOn(combat, "attackSetup").and.returnValue(healthyHero);
      room.monsterRoom('easy')
      expect(room.monsterInRoom('name')).toEqual('monster')
    })
    it('returns the armorName of the monster in the room', function() {
      spyOn(player, "returnHero").and.returnValue(healthyHero);
      spyOn(monsters, "randomizeMonster").and.returnValue(healthyMonster);
      spyOn(combat, "attackSetup").and.returnValue(healthyHero);
      room.monsterRoom('easy')
      expect(room.monsterInRoom('armorName')).toEqual('Leather')
    })
  })
});
