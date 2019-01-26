describe('Player', function () {

  var Player = require('../src/Player');

  var player;

  beforeEach(function () {
    player = new Player();

    hero = {
      name: 'Player',
      health: 100,
      armor: 1,
      armorName: 'Plate',
      weaponName: 'Dagger',
      weaponMin: 5,
      weaponMax: 8,
      strength: 2,
      dexterity: 1,
      healthPotions: 2
    }

  });

  describe('#returnHero', function() {
    it('returns the hero object', function () {
      expect(player.returnHero()).toEqual(hero);
    });
  });

  describe('#status', function() {
    it('does a status check against a healthy hero', function () {
      hero['health'] = 46
      expect(player.status()).toEqual(true);
    });
    it('does a status check against a dead hero', function () {
      hero['health'] = 0
      expect(player.status()).toEqual(true);
    });
  });


  describe('#changeName', function() {
    it('change hero name', function () {
      expect(player.hero['name']).toEqual('Player');
      player.changeName('Aragorn');
      expect(player.hero['name']).toEqual('Aragorn');
    });
  });

  describe('#changeWeapon', function() {
    it('change weapon', function () {
      expect(player.hero['weaponName']).toEqual('Dagger');
      player.changeWeapon('Throwing Axe', 10, 15);
      expect(player.hero['weaponName']).toEqual('Throwing Axe');
      expect(player.hero['weaponMin']).toEqual(10);
      expect(player.hero['weaponMax']).toEqual(15);
    });
  });

  describe('#changeArmor', function() {
    it('change armor', function () {
      expect(player.hero['armorName']).toEqual('Plate');
      player.changeArmor('Full Plate', 5);
      expect(player.hero['armorName']).toEqual('Full Plate');
      expect(player.hero['armor']).toEqual(5);
    });
  });

  describe('#recieveDamage', function() {
    it('receive a damage', function () {
      expect(player.hero['health']).toEqual(100);
      player.receiveDamage(20);
      expect(player.hero['health']).toEqual(80);
    });
  });

  describe('#returnAttribute', function() {
    it('returns requested attribute', function() {
      expect(player.returnAttribute('armor')).toEqual(1)
    });
  });

  describe('#healthCheck', function() {
    it('returns boolean true if alive', function() {
      expect(player.status()).toEqual(true)
    })
    it('returns boolean true if alive', function() {
      player.receiveDamage(110)
      expect(player.hero['health']).toBeLessThan(0);
      expect(player.status()).toEqual(false)
    })
  })

  describe('#equipLoot', function() {
    it('equips the item in the sword slot', function() {
      player.equipLoot({name: 'longsword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1})
      expect(player.hero['weaponName']).toEqual('longsword')
      expect(player.hero['weaponMin']).toEqual(1)
      expect(player.hero['weaponMax']).toEqual(1)
    })
    it('equips the item in the armor slot', function() {
      player.equipLoot({name: 'leather', type: 'armor', armor: 1, rarity: 1})
      expect(player.hero['armorName']).toEqual('leather')
      expect(player.hero['armor']).toEqual(1)
    })
    it('equips a health potion', function() {
      player.equipLoot({name: 'health', type: 'healthPotion', rarity: 1})
      expect(player.hero['healthPotions']).toEqual(3)
    })
  })
});
