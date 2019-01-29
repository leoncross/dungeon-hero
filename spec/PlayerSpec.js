describe('Player', function () {

  var Player = require('../src/Player');

  var player;
  var dice

  beforeEach(function () {
    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    dice = new DiceStub()
    player = new Player(dice);

    hero = {
      name: 'Player',
      health: 100,
      armor: 1,
      armorName: 'cloth',
      armorDamageReduction: 0.1,
      weaponName: 'dagger',
      weaponMin: 6,
      weaponMax: 9,
      strength: 2,
      dexterity: 1,
      berserkMode: 'off',
      healthPotions: 2,
      strengthPotions: 2,
      dexterityPotions: 2,
      dexterityBuff: 0,
      strengthBuff: 0,
      gold: 0
    }

  });

  describe('#returnHero', function() {
    it('returns the hero object', function () {
      expect(player.returnHero()).toEqual(hero);
    });
  });

  describe('#status', function() {
    it('does a status check against a healthy hero', function () {
      player.hero['health'] = 46
      expect(player.status()).toEqual(true);
    });
    it('does a status check against a dead hero', function () {
      player.hero['health'] = 0
      expect(player.status()).toEqual(false);
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
      expect(player.hero['weaponName']).toEqual('dagger');
      player.changeWeapon('throwing Axe', 10, 15);
      expect(player.hero['weaponName']).toEqual('throwing Axe');
      expect(player.hero['weaponMin']).toEqual(10);
      expect(player.hero['weaponMax']).toEqual(15);
    });
  });

  describe('#changeArmor', function() {
    it('change armor', function () {
      expect(player.hero['armorName']).toEqual('cloth');
      player.changeArmor('dragon scale', 5, 0.8);
      expect(player.hero['armorName']).toEqual('dragon scale');
      expect(player.hero['armor']).toEqual(5);
      expect(player.hero['armorDamageReduction']).toEqual(80/100);
    });
  });

  describe('#recieveDamage', function() {
    it('receive a damage', function () {
      expect(player.hero['health']).toEqual(100);
      player.receiveDamage(20);
      expect(player.hero['health']).toEqual(80);
    });
    it('doesnt go below 0', function () {
      expect(player.hero['health']).toEqual(100);
      player.receiveDamage(120);
      expect(player.hero['health']).toEqual(0);
    });
  });

  describe('#returnAttribute', function() {
    it('returns requested attribute', function() {
      expect(player.returnAttribute('armor')).toEqual(1)
    });
  });

  describe('#toggleBerserkMode', function() {
    it('is togglable by passing an argument', function() {
      player.toggleBerserkMode('on')
      expect(player.hero['berserkMode']).toEqual('on')
    });
  });

  describe('#healthCheck', function() {
    it('returns boolean true if alive', function() {
      expect(player.status()).toEqual(true)
    })
    it('returns boolean true if alive', function() {
      player.receiveDamage(110)
      expect(player.hero['health']).toEqual(0);
      expect(player.status()).toEqual(false)
    })
  })

  describe('#playerFindsGold', function() {
    it('increases the players gold', function() {
      spyOn(dice, "rollBetween").and.returnValue(15)
      expect(player.hero['gold']).toEqual(0)
      player.playerFindsGold()
      expect(player.hero['gold']).toEqual(15)
    })
  })

  describe('#returnFoundGold', function() {
    it('returns amount of gold found when called', function() {
      spyOn(dice, "rollBetween").and.returnValue(15)
      expect(player.playerFindsGold()).toEqual(15)
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
    it('equips a strength potion', function() {
      player.equipLoot({name: 'strength', type: 'strengthPotion', rarity: 1})
      expect(player.hero['strengthPotions']).toEqual(3)
    })
    it('equips a dexterity potion', function() {
      player.equipLoot({name: 'dexterity', type: 'dexterityPotion', rarity: 1})
      expect(player.hero['dexterityPotions']).toEqual(3)
    })
  })
});
