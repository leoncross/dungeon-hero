function Loot (player) {
  this.player = player
  this.table = [
    { name: 'dagger', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'sword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'longsword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'battle axe', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'hatchet', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'mace', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'hammer', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'cloth', type: 'armor', armor: 1, rarity: 1, armorDamageReduction: 0.1 },
    { name: 'leather', type: 'armor', armor: 5, rarity: 1, armorDamageReduction: 0.25 },
    { name: 'chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4 },
    { name: 'plate', type: 'armor', armor: 15, rarity: 1, armorDamageReduction: 0.6 },
    { name: 'dragon scale', type: 'armor', armor: 20, rarity: 1, armorDamageReduction: 0.8 },
    { name: 'health', type: 'potion', rarity: 1 },
    { name: 'dexterity', type: 'potion', rarity: 1 },
    { name: 'strength', type: 'potion', rarity: 1 }
  ]
  this.rarityCalculator = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
  this.foundItem = 0
}

Loot.prototype.lootFinder = function () {
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

Loot.prototype.returnFoundItem = function () {
  return this.foundItem
}

Loot.prototype.displayLoot = function () {
  if (this.foundItem['type'] === 'weapon') {
    return 'you found a ' + this.foundItem['name'] + ' that does between ' + this.foundItem['weaponMin'] + '-' + this.foundItem['weaponMax'] + ' damage' + '<br>would you like to equipt this?'
  }
  if (this.foundItem['type'] === 'armor') {
    return 'you found ' + this.foundItem['name'] + ' armor that has an armor rating of ' + this.foundItem['armor'] + '<br>would you like to equipt this?'
  }
  if (this.foundItem['type'] === 'potion') {
    return 'you found a ' + this.foundItem['name'] + ' potion' + '<br>would you like to equipt this?'
  }
  if (this.foundItem === 0) return 'no loot found'
}

Loot.prototype.equipLoot = function () {
  return this.player.equipLoot(this.foundItem)
}

module.exports = Loot
