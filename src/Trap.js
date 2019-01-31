function Trap (loot) {
  this.loot = loot
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
    if (this.lootTable[i]['rarity'] === 2 || this.lootTable[i]['rarity'] === 3 ) {
      this.rarityLoot.push(this.lootTable[i])
    }
  }
 return this.rarityLoot
}

Trap.prototype.arrangeChest = function () {
  this.chestLoot = []
  this.collectLoot()
  this.findLoot()
  this.chestLoot += this.rarityLoot[Math.floor((Math.random() * this.rarityLoot.length))]
  this.chestLoot.push(this.potionsInLoot())
  this.chestLoot.push(this.potionsInLoot())
  return this.chestLoot
}

Trap.prototype.potionsInLoot = function () {
  potions = [{ name: 'Health', type: 'potion', rarity: 1, price: 75 }, { name: 'Dexterity', type: 'potion', rarity: 1, price: 60 }, { name: 'Strength', type: 'potion', rarity: 1, price: 60 }]
  return potions[Math.floor((Math.random() * potions.length))]
}



module.exports = Trap

// collect loot
//  if lootortrap loot
// give chestloot and put in array
// function to find items in loot chest
// else
//   nojthing

//chest item of a single rarity 2 or 3
//chest with two potions

// need a function to return all 3 in an array
