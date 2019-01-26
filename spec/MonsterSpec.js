
describe('Monster', function () {
  var Monster = require('../src/Monster');
  var sinon = require('sinon');

  var monster;
  var zombie;
  var stub

  beforeEach(function() {

    stub = sinon.stub(Math, 'floor')

    monster = new Monster();

    monsters = [
      { name: 'Zombie', difficulty: 'easy', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 },
      { name: 'Bat Swarm', difficulty: 'easy', health: 70, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 4 },
      { name: 'Skeleton', difficulty: 'medium', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11 },
      { name: 'Goblin', difficulty: 'medium', health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9 },
      { name: 'Gorgon', difficulty: 'hard', health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15 },
      { name: 'Shadow Demon', difficulty: 'hard', health: 110, armor: 6, strength: 8, dexterity: 4, weaponMin: 8, weaponMax: 12 },
      { name: 'Dragon', difficulty: 'boss', health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22 },
      { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25 }
    ]
  });

  afterEach(function () {
      stub.restore()
  });

  describe('#returnEasyMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('easy')).toEqual({ name: 'Zombie', difficulty: 'easy', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 })
    });
  });

  describe('#returnMediumMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('medium')).toEqual({ name: 'Skeleton', difficulty: 'medium', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11 })
    });
  });

  describe('#returnHardMonster', function () {
    it('selects a monster', function () {
      stub.returns(1)
      expect(monster.randomizeMonster('hard')).toEqual({ name: 'Shadow Demon', difficulty: 'hard', health: 110, armor: 6, strength: 8, dexterity: 4, weaponMin: 8, weaponMax: 12 })
    });
  });

  describe('#returnMonster', function () {
    it('returns a specific monster that is requested', function() {
      expect(monster.returnMonster('Zombie')).toEqual({ name: 'Zombie', difficulty: 'easy', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 })
    })
  })

  describe('#resetMonsters', function () {
    it('resets monsters after one has died', function() {
      expect(monster.resetMonsters()).toEqual(monsters)
    })
  })

  describe('#recieveDamage', function () {
    it('monster can receive a damage', function () {
      monster.returnMonster('Zombie')
      monster.receiveDamage('Zombie', 8)
      var zombie = monster.returnMonster('Zombie')
      expect(zombie['health']).toEqual(22);
    });
  });
  describe('#returnAttribute', function () {
    it('returns various attributes', function () {
      var zombie = monster.returnMonster('Zombie')
      expect(monster.returnAttribute(zombie, 'health')).toEqual(30);
      expect(monster.returnAttribute(zombie, 'armor')).toEqual(3);
      expect(monster.returnAttribute(zombie, 'strength')).toEqual(3);
    });
  });
});
