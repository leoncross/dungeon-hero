describe('Trap', function(){

  var Trap = require('../src/Trap');
  var sinon = require('sinon');

  var trap;
  var stub
  var loot

  beforeEach(function() {

    function LootStub() {}
    LootStub.prototype = {
      returnLootTable() {}
    }

    stub = sinon.stub(Math, 'floor')

    loot = new LootStub()
    trap = new Trap(loot);

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

  describe('#lootOrTrap', function () {
    it('returns loot table from Loot', function () {
      spyOn(loot, 'returnLootTable').and.returnValue({})
      stub.returns(1)
      expect(trap.collectLoot()).toEqual({})
    })
  })

  describe('#findLoot', function () {
    it('returns an array of either rarity 2 or 3', function () {
      spyOn(loot, 'returnLootTable').and.returnValue([{rarity: 1}, {rarity: 2}, {rarity: 3}])
      trap.collectLoot()
      expect(trap.findLoot()).toEqual([{rarity: 2}, {rarity: 3}])
    })
  })

  describe('#lootOrTrap', function () {
    it('does a 50 / 50 on whether trap or loot', function () {
      stub.returns(1)
      expect(trap.lootOrTrap()).toEqual('loot')
    })
    it('does a 50 / 50 on whether trap or loot', function () {
      stub.returns(0)
      expect(trap.lootOrTrap()).toEqual('trap')
    })
  })

});
