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
      { name: 'Sword', type: 'weapon', weaponMin: 5, weaponMax: 7, rarity: 1, inShop: true, price: 50 },
      { name: 'Longsword', type: 'weapon', weaponMin: 7, weaponMax: 8, rarity: 1, inShop: true, price: 65 },
      { name: 'Claymore', type: 'weapon', weaponMin: 12, weaponMax: 13, rarity: 2, inShop: true, price: 145 },
      { name: 'Battle Axe', type: 'weapon', weaponMin: 16, weaponMax: 19, rarity: 3, inShop: true, price: 320 },
      { name: 'Hatchet', type: 'weapon', weaponMin: 8, weaponMax: 12, rarity: 2, inShop: true, price: 125 },
      { name: 'Mace', type: 'weapon', weaponMin: 8, weaponMax: 13, rarity: 1, inShop: true, price: 125 },
      { name: 'Warhammer', type: 'weapon', weaponMin: 13, weaponMax: 17, rarity: 2, inShop: true, price: 200 },
      { name: 'Dragon Slayer', type: 'weapon', weaponMin: 23, weaponMax: 27, rarity: 3, inShop: true, price: 400 },
      { name: 'Leather', type: 'armor', armor: 5, rarity: 1, armorDamageReduction: 0.25, inShop: true, price: 140 },
      { name: 'Chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4, inShop: true, price: 210 },
      { name: 'Plate', type: 'armor', armor: 15, rarity: 2, armorDamageReduction: 0.6, inShop: true, price: 300 },
      { name: 'Dragon Scale', type: 'armor', armor: 20, rarity: 3, armorDamageReduction: 0.8, inShop: true, price: 410 },
      { name: 'Health', type: 'potion', rarity: 1, price: 75 },
      { name: 'Dexterity', type: 'potion', rarity: 1, price: 60 },
      { name: 'Strength', type: 'potion', rarity: 1, price: 60 }
     ]
  });

  afterEach(function () {
    stub.restore()
  });

  describe('#lootFinder', function() {
    it("finds loot based on rarity", function(){
      stub.returns(7)
      expect(loot.lootFinder()).toEqual({ name: 'Strength', type: 'potion', rarity: 1, price: 60 })
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
      expect(loot.returnFoundItem()).toEqual({ name: 'Strength', type: 'potion', rarity: 1, price: 60 })
    })
  })

  describe('#displayLoot', function() {
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
