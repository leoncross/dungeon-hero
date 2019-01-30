function Loot (player, readout, dice) {
  this.player = player
  this.readout = readout
  this.dice = dice
  this.table = [
    { name: 'Sword', type: 'weapon', weaponMin: 5, weaponMax: 7, rarity: 1, inShop: true, price: 100 },
    { name: 'Longsword', type: 'weapon', weaponMin: 5, weaponMax: 8, rarity: 1, inShop: true, price: 100 },
    { name: 'Claymore', type: 'weapon', weaponMin: 12, weaponMax: 13, rarity: 1, inShop: true, price: 100 },
    { name: 'Battle Axe', type: 'weapon', weaponMin: 9, weaponMax: 15, rarity: 1, inShop: true, price: 500 },
    { name: 'Hatchet', type: 'weapon', weaponMin: 8, weaponMax: 12, rarity: 1, inShop: true, price: 60 },
    { name: 'Mace', type: 'weapon', weaponMin: 8, weaponMax: 13, rarity: 1, inShop: true, price: 100 },
    { name: 'Hammer', type: 'weapon', weaponMin: 11, weaponMax: 12, rarity: 1, inShop: true, price: 100 },
    { name: 'Leather', type: 'armor', armor: 5, rarity: 1, armorDamageReduction: 0.25, inShop: true, price: 140 },
    { name: 'Chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4, inShop: true, price: 40 },
    { name: 'Plate', type: 'armor', armor: 15, rarity: 1, armorDamageReduction: 0.6, inShop: true, price: 100 },
    { name: 'Dragon Scale', type: 'armor', armor: 20, rarity: 1, armorDamageReduction: 0.8, inShop: true, price: 100 },
    { name: 'Health', type: 'potion', rarity: 1, price: 100 },
    { name: 'Dexterity', type: 'potion', rarity: 1, price: 100 },
    { name: 'Strength', type: 'potion', rarity: 1, price: 100 }
  ]
  this.rarityCalculator = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
  this.foundItem = 0
}

Loot.prototype.lootFinder = function (rarityCalculator = this.rarityCalculator) {
  this.foundItem = 0
  var rarity = this.rarityCalculator[Math.floor(Math.random() * this.rarityCalculator.length)]
  var possibleItems = []
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i]['rarity'] === rarity) possibleItems.push(this.table[i])
  }
  if (possibleItems.length === 0) return 0
  this.foundItem = possibleItems[Math.floor((Math.random() * possibleItems.length))]
  return this.foundItem
}

Loot.prototype.returnLootTable = function () {
  return this.table
}

Loot.prototype.returnFoundItem = function () {
  return this.foundItem
}

Loot.prototype.displayLoot = function () {
  if (this.foundItem['type'] === 'weapon') return this.readout.displayFoundWeapon(this.foundItem)
  if (this.foundItem['type'] === 'armor') return this.readout.displayFoundArmor(this.foundItem)
  if (this.foundItem['type'] === 'potion') return this.readout.displayFoundPotion(this.foundItem)
  return this.readout.noLootFound()
}

Loot.prototype.equipLoot = function () {
  return this.player.equipLoot(this.foundItem)
}

module.exports = Loot
