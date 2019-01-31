describe('Shop', function() {

  var Shop = require('../src/Shop');
  var sinon = require('sinon');

  var shop
  var player
  var dice;
  var loot
  var stub


  beforeEach(function() {

    function PlayerStub() {}
    PlayerStub.prototype = {
      equipLoot() {},
      returnHero() {}
    }

    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    function LootStub() {}
    LootStub.prototype = {
      returnLootTable() {}
    }

    function ReadoutStub() {}
    ReadoutStub.prototype = {
      displayItemInShop() {},
      displayPriceOfItemInShop () {}
    }

    stub = sinon.stub(Math, 'floor')
    player = new PlayerStub()
    dice = new DiceStub()
    loot = new LootStub()
    readout = new ReadoutStub()
    shop = new Shop(player, dice, loot, readout)

  });

  afterEach(function () {
    stub.restore()
  });


  describe('#shopAvailableLoot', function() {
    it("finds loot in shop", function(){
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true}, {value: 2, inShop: true}, {value: 3, inShop: true}])
      stub.returns(1)
      expect(shop.shopItemRandomizer()).toEqual({value: 2, inShop: true})
    })
  })
  describe('#findItemsInShop', function() {
    it("puts items into shop", function(){
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true}, {value: 2, inShop: true}, {value: 3, inShop: true}])
      stub.returns(1)
      expect(shop.findItemsInShop()).toEqual([{value: 2, inShop: true}, {value: 2, inShop: true}, {value: 2, inShop: true}, { name: 'Health', type: 'potion', rarity: 1, price: 75 }, { name: 'Dexterity', type: 'potion', rarity: 1, price: 60 }, { name: 'Strength', type: 'potion', rarity: 1, price: 60 }])
    })
  })
  describe('#displayItemsInShop', function() {
    it("returns the item you specify in shop", function(){
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true}, {value: 2, inShop: true}, {value: 3, inShop: true}])
      spyOn(readout, "displayItemInShop").and.returnValue('returned item')
      stub.returns(2)
      shop.findItemsInShop()
      expect(shop.displayItemsInShop(1)).toEqual('returned item')
    })
  })
  describe('#buyItemFromShop', function() {
    it("enough gold - removes money from hero", function(){
      spyOn(player, 'returnHero').and.returnValue({gold: 1000})
      spyOn(player, 'equipLoot').and.returnValue('equiped item')
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true, price: 100}, {value: 2, inShop: true, price: 100}, {value: 3, inShop: true, price: 100}])
      stub.returns(1)
      shop.findItemsInShop()
      expect(shop.buyItemFromShop(0)).toEqual({value: 2, inShop: true, price: 100})
    })
    it("not enough gold - doesnt remove gold", function(){
      spyOn(player, 'returnHero').and.returnValue({gold: 1})
      spyOn(player, 'equipLoot').and.returnValue('equiped item')
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true}, {value: 2, inShop: true}, {value: 3, inShop: true}])
      stub.returns(1)
      shop.findItemsInShop()
      expect(shop.buyItemFromShop(0)).toEqual('not enough gold')
    })
  })

  describe('#displayPriceOfItemInShop', function() {
    it("returns an attribute of an item in the shop", function(){
      spyOn(player, 'returnHero').and.returnValue({gold: 1000})
      spyOn(player, 'equipLoot').and.returnValue('equiped item')
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true, price: 100}, {value: 2, inShop: true, price: 120}, {value: 3, inShop: true, price: 150}])
      spyOn(readout, "displayPriceOfItemInShop").and.returnValue(100)
      stub.returns(1)
      shop.findItemsInShop()
      expect(shop.displayPriceOfItemInShop(0)).toEqual(100)
    })
  })

  describe('#returnPotionPrice', function() {
    it("returns the price of potions", function(){
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, name: 'health', inShop: true, price: 190}, {value: 2, inShop: true, price: 120}, {value: 3, inShop: true, price: 150}])
      shop.findItemsInShop()
      expect(shop.returnPotionPrice('health')).toEqual('190 gold')
    })
  })

})
