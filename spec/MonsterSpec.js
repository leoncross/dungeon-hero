
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
      { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 3, health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' },
      { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', specialAttackDamage: 3, health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 2, stunStatus: false, image: './static/images/batswarm.png' },
      { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 5, health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11, stunStatus: false, image: './static/images/skeleton.png' },
      { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', specialAttackDamage: 5, health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9, stunStatus: false, image: './static/images/goblin.png' },
      { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', specialAttackDamage: 7, health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15, stunStatus: false, image: './static/images/gorgon.png' },
      { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 7, health: 110, armor: 6, strength: 5, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/shadowdemon.png' },
      { name: 'Dragon', difficulty: 'boss', specialAttack: 'Black Flames', specialAttackDamage: 9, health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22, stunStatus: false, image: './static/images/dragon.png' },
      { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
    ]
  });

  afterEach(function () {
      stub.restore()
  });

  describe('#returnEasyMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('easy')).toEqual({ name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 3, health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' })
    });
  });

  describe('#returnMediumMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('medium')).toEqual({ name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 5, health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11, stunStatus: false, image: './static/images/skeleton.png' })
    });
  });

  describe('#returnHardMonster', function () {
    it('selects a monster', function () {
      stub.returns(1)
      expect(monster.randomizeMonster('hard')).toEqual({ name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 7, health: 110, armor: 6, strength: 5, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/shadowdemon.png' })
    });
  });

  describe('#returnMonster', function () {
    it('returns a specific monster that is requested', function() {
      expect(monster.returnMonster('Zombie')).toEqual({ name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 3, health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' })
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
