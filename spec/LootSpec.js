describe('Loot', function() {

  var Loot = require('../src/Loot');
  var sinon = require('sinon');

  var loot;
  var stub
  var dice


  beforeEach(function() {

    function PlayerStub() {}
    PlayerStub.prototype = {
      equipLoot() {},
      returnHero() {}
    }

    function ReadoutStub() {}
    ReadoutStub.prototype = {
      displayFoundWeapon() {},
      displayFoundArmor() {},
      displayFoundPotion() {},
      noLootFound () {}
    }

    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    player = new PlayerStub()
    readout = new ReadoutStub()
    dice = new DiceStub()
    stub = sinon.stub(Math, 'floor')
    loot = new Loot(player, readout, dice);

    rarityCalculator = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
    table = [
      { name: 'dagger', type: 'weapon', weaponMin: 2, weaponMax: 4, rarity: 1, inShop: true, price: 100  },
      { name: 'sword', type: 'weapon', weaponMin: 5, weaponMax: 7, rarity: 1, inShop: true, price: 100  },
      { name: 'longsword', type: 'weapon', weaponMin: 5, weaponMax: 8, rarity: 1, inShop: true, price: 100  },
      { name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1, inShop: true, price: 100  },
      { name: 'battle axe', type: 'weapon', weaponMin: 9, weaponMax: 15, rarity: 1, inShop: true, price: 500  },
      { name: 'hatchet', type: 'weapon', weaponMin: 8, weaponMax: 12, rarity: 1, inShop: true, price: 60  },
      { name: 'mace', type: 'weapon', weaponMin: 8, weaponMax: 13, rarity: 1, inShop: true, price: 100  },
      { name: 'hammer', type: 'weapon', weaponMin: 11, weaponMax: 12, rarity: 1, inShop: true, price: 100  },
      { name: 'cloth', type: 'armor', armor: 1, rarity: 1, armorDamageReduction: 0.1, inShop: true, price: 105  },
      { name: 'leather', type: 'armor', armor: 5, rarity: 1, armorDamageReduction: 0.25, inShop: true, price: 140  },
      { name: 'chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4, inShop: true, price: 40  },
      { name: 'plate', type: 'armor', armor: 15, rarity: 1, armorDamageReduction: 0.6, inShop: true, price: 100  },
      { name: 'dragon scale', type: 'armor', armor: 20, rarity: 1, armorDamageReduction: 0.8, inShop: true, price: 100  },
      { name: 'health', type: 'potion', rarity: 1, price: 100 },
      { name: 'dexterity', type: 'potion', rarity: 1, price: 100 },
      { name: 'strength', type: 'potion', rarity: 1, price: 100 }
      ]
  });

  afterEach(function () {
    stub.restore()
  });

  describe('#lootFinder', function() {
    it("finds loot based on rarity", function(){
      stub.returns(7)
      expect(loot.lootFinder()).toEqual({ name: 'hammer', type: 'weapon', weaponMin: 11, weaponMax: 12, rarity: 1, inShop: true, price: 100 })
    })
    it("doesnt return loot", function(){
      stub.returns(0)
      expect(loot.lootFinder()).toEqual(0)
    })
  })

  describe('#returnLootTable', function() {
    it('returns the object from the loot table', function() {
      expect(loot.returnLootTable()).toEqual(table)
    })
  })

  describe('#returnFoundItem', function() {
    it('returns the most recently found item', function() {
      stub.returns(7)
      loot.lootFinder()
      expect(loot.returnFoundItem()).toEqual({ name: 'hammer', type: 'weapon', weaponMin: 11, weaponMax: 12, rarity: 1, inShop: true, price: 100 })
    })
  })

  describe('#displayLoot', function() {
    it('calls displayFoundWeapon if weapon', function() {
      spyOn(readout, 'displayFoundWeapon').and.returnValue('weapon found')
      stub.returns(7) // returns the 'hammer'
      loot.lootFinder()
      expect(loot.displayLoot()).toEqual('weapon found');
    })
    it('calls displayFoundArmor if armor', function() {
      spyOn(readout, 'displayFoundArmor').and.returnValue('armor found')
      loot.foundItem = { name: 'chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4, inShop: true, price: 100 }
      expect(loot.displayLoot()).toEqual('armor found');
    })
    it('calls displayFoundPotion if potion', function() {
      spyOn(readout, 'displayFoundPotion').and.returnValue('potion found')
      loot.foundItem = { name: 'strength', type: 'potion', rarity: 1 }
      expect(loot.displayLoot()).toEqual('potion found');
    })
    it('calls displayFoundPotion if potion', function() {
      spyOn(readout, 'noLootFound').and.returnValue('no loot found')
      loot.foundItem = {}
      expect(loot.displayLoot()).toEqual('no loot found');
    })
  })

  describe('#equipLoot', function() {
    it('calls on the player to equip the loot', function() {
      spyOn(player, "equipLoot").and.returnValue("equipped")
      stub.returns(0) // returns the 'armor'
      loot.lootFinder()
      expect(loot.equipLoot()).toEqual("equipped")
    })
  })
})
