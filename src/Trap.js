function Trap (loot, readout) {
  this.loot = loot
  this.readout = readout
}

Trap.prototype.collectLoot = function () {
  this.lootTable = this.loot.returnLootTable()
  return this.lootTable
}

Trap.prototype.lootOrTrap = function () {
  result = ['trap', 'loot']
  return result[Math.floor((Math.random() * result.length))]
}

Trap.prototype.findLoot = function () {
  this.rarityLoot = []
  for (i = 0; i < this.lootTable.length; i++) {
    if (this.lootTable[i]['rarity'] === 2 || this.lootTable[i]['rarity'] === 3) {
      this.rarityLoot.push(this.lootTable[i])
    }
  }
  return this.rarityLoot
}

Trap.prototype.arrangeChest = function () {
  this.chestLoot = []
  this.collectLoot()
  this.findLoot()
  this.chestLoot.push(this.rarityLoot[Math.floor((Math.random() * this.rarityLoot.length))])
  this.potionsInLoot()
  return this.chestLoot
}

Trap.prototype.potionsInLoot = function () {
  potions = [{ name: 'Health', type: 'potion', rarity: 1, price: 75 }, { name: 'Dexterity', type: 'potion', rarity: 1, price: 60 }, { name: 'Strength', type: 'potion', rarity: 1, price: 60 }]
  for (i = 0; i < 2; i++) {
    this.chestLoot.push(potions[Math.floor((Math.random() * potions.length))])
  }
  return this.chestLoot
}

Trap.prototype.returnLootChest = function (placeInArray) {
  return this.readout.displayItemFromChest(this.chestLoot[placeInArray])
}

module.exports = Trap
