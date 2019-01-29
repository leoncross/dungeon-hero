
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
      { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 3, weaponMax: 6, stunStatus: false, image: './static/images/zombie.png' },
      { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', specialAttackDamage: 3, health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 2, weaponMax: 5, stunStatus: false, image: './static/images/batswarm.png' },
      { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 4, health: 65, armor: 2, strength: 4, dexterity: 2, weaponMin: 5, weaponMax: 9, stunStatus: false, image: './static/images/skeleton.png' },
      { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', specialAttackDamage: 5, health: 75, armor: 5, strength: 5, dexterity: 4, weaponMin: 6, weaponMax: 10, stunStatus: false, image: './static/images/goblin.png' },
      { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', specialAttackDamage: 6, health: 90, armor: 6, strength: 5, dexterity: 6, weaponMin: 7, weaponMax: 11, stunStatus: false, image: './static/images/gorgon.png' },
      { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 8, health: 120, armor: 6, strength: 6, dexterity: 4, weaponMin: 8, weaponMax: 13, stunStatus: false, image: './static/images/shadowdemon.png' },
      { name: 'Dragon', difficulty: 'boss', specialAttack: 'Black Flames', specialAttackDamage: 10, health: 180, armor: 8, strength: 8, dexterity: 8, weaponMin: 12, weaponMax: 18, stunStatus: false, image: './static/images/dragon.png' },
      { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
    ]
  });

  afterEach(function () {
      stub.restore()
  });

  describe('#returnEasyMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('easy')).toEqual({ name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 3, weaponMax: 6, stunStatus: false, image: './static/images/zombie.png' })
    });
  });

  describe('#returnMediumMonster', function () {
    it('selects a monster', function () {
      stub.returns(0)
      expect(monster.randomizeMonster('medium')).toEqual({ name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 4, health: 65, armor: 2, strength: 4, dexterity: 2, weaponMin: 5, weaponMax: 9, stunStatus: false, image: './static/images/skeleton.png' })
    });
  });

  describe('#returnHardMonster', function () {
    it('selects a monster', function () {
      stub.returns(1)
      expect(monster.randomizeMonster('hard')).toEqual({ name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 8, health: 120, armor: 6, strength: 6, dexterity: 4, weaponMin: 8, weaponMax: 13, stunStatus: false, image: './static/images/shadowdemon.png' })
    });
  });

  describe('#returnMonster', function () {
    it('returns a specific monster that is requested', function() {
      expect(monster.returnMonster('Zombie')).toEqual({ name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 3, weaponMax: 6, stunStatus: false, image: './static/images/zombie.png' })
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
      expect(zombie['health']).toEqual(27);
    });
  });
  describe('#returnAttribute', function () {
    it('returns various attributes', function () {
      var zombie = monster.returnMonster('Zombie')
      expect(monster.returnAttribute(zombie, 'health')).toEqual(35);
      expect(monster.returnAttribute(zombie, 'armor')).toEqual(3);
      expect(monster.returnAttribute(zombie, 'strength')).toEqual(3);
    });
  });
});
