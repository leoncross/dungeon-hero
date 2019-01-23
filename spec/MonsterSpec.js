
describe('Monster', function () {
  var Monster = require('../src/Monster');
  var monster;
  var zombie;

  beforeEach(function() {
    monster = new Monster();
    this.monsters = [
      { name: 'zombie', health: 30, armor: 1, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 },
    ]

  });

  describe('#returnMonster', function () {
    it('selects a monster', function () {
      expect(monster.returnMonster('zombie')).toEqual({ name: 'zombie', health: 30, armor: 1, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 })
    });
  });
  describe('#recieveDamage', function () {
    it('monster can receive a damage', function () {
      monster.returnMonster('zombie')
      monster.receiveDamage('zombie', 8)
      var zombie = monster.returnMonster('zombie')
      expect(zombie['health']).toEqual(22);
    });
  });
  describe('#returnAttribute', function () {
    it('returns various attributes', function () {
      var zombie = monster.returnMonster('zombie')
      expect(monster.returnAttribute(zombie, 'health')).toEqual(30);
      expect(monster.returnAttribute(zombie, 'armor')).toEqual(1);
      expect(monster.returnAttribute(zombie, 'strength')).toEqual(3);
    });
  });
});
