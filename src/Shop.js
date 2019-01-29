function Shop (player, dice, loot) {
  this.player = player
  this.dice = dice
  this.loot = loot
  this.itemsInShop = []
}

Shop.prototype.shopItemRandomizer = function () {
  var table = this.loot.returnLootTable()
  var possibleItems = []
  for (var i = 0; i < table.length; i++) {
    if (table[i]['inShop'] === true) possibleItems.push(table[i])
  }
  var foundItem = possibleItems[Math.floor((Math.random() * possibleItems.length))]
  return foundItem
}

Shop.prototype.findItemsInShop = function () {
  this.itemsInShop = []
  for (var i = 0; i < 3; i++) {
    this.itemsInShop.push(this.shopItemRandomizer())
  }
  return this.itemsInShop
}

Shop.prototype.displayItemsInShop = function (placeInArray) {
  return this.itemsInShop[placeInArray]
}

Shop.prototype.buyItemFromShop = function (placeInArray) {
  var hero = this.player.returnHero()
  item = this.itemsInShop[placeInArray]
  if (hero['gold'] >= item['price']) {
    hero['gold'] -= item['price']
    this.player.equipLoot(item)
    return item
  } else {
    return 'not enough gold'
  }
}

module.exports = Shop
