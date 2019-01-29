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

    stub = sinon.stub(Math, 'floor')
    player = new PlayerStub()
    dice = new DiceStub()
    loot = new LootStub()
    shop = new Shop(player, dice, loot)

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
      expect(shop.findItemsInShop()).toEqual([{value: 2, inShop: true}, {value: 2, inShop: true}, {value: 2, inShop: true}])
    })
  })
  describe('#displayItemsInShop', function() {
    it("returns the item you specify in shop", function(){
      spyOn(loot, "returnLootTable").and.returnValue([{value: 1, inShop: true}, {value: 2, inShop: true}, {value: 3, inShop: true}])
      stub.returns(2)
      shop.findItemsInShop()
      expect(shop.displayItemsInShop(1)).toEqual({value: 3, inShop: true})
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
})
