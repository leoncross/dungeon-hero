function Loot (player, readout) {
  this.player = player
  this.readout = readout
  this.table = [
    { name: 'dagger', type: 'weapon', weaponMin: 2, weaponMax: 4, rarity: 1 },
    { name: 'sword', type: 'weapon', weaponMin: 5, weaponMax: 7, rarity: 1 },
    { name: 'longsword', type: 'weapon', weaponMin: 5, weaponMax: 8, rarity: 1 },
    { name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1 },
    { name: 'battle axe', type: 'weapon', weaponMin: 9, weaponMax: 15, rarity: 1 },
    { name: 'hatchet', type: 'weapon', weaponMin: 8, weaponMax: 12, rarity: 1 },
    { name: 'mace', type: 'weapon', weaponMin: 8, weaponMax: 13, rarity: 1 },
    { name: 'hammer', type: 'weapon', weaponMin: 11, weaponMax: 12, rarity: 1 },
    { name: 'cloth', type: 'armor', armor: 1, rarity: 1, armorDamageReduction: 0.1 },
    { name: 'leather', type: 'armor', armor: 5, rarity: 1, armorDamageReduction: 0.25 },
    { name: 'chainmail', type: 'armor', armor: 10, rarity: 1, armorDamageReduction: 0.4 },
    { name: 'plate', type: 'armor', armor: 15, rarity: 1, armorDamageReduction: 0.6 },
    { name: 'dragon scale', type: 'armor', armor: 20, rarity: 1, armorDamageReduction: 0.8 },
    { name: 'health', type: 'potion', rarity: 1 },
    { name: 'dexterity', type: 'potion', rarity: 1 },
    { name: 'strength', type: 'potion', rarity: 1 }
  ]
  this.rarityCalculator = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
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
  if (this.foundItem['type'] === 'weapon') return this.readout.displayFoundWeapon(this.foundItem)
  if (this.foundItem['type'] === 'armor') return this.readout.displayFoundArmor(this.foundItem)
  if (this.foundItem['type'] === 'potion') return this.readout.displayFoundPotion(this.foundItem)
  return this.readout.noLootFound()
}

Loot.prototype.equipLoot = function () {
  return this.player.equipLoot(this.foundItem)
}

module.exports = Loot
