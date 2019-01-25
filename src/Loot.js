function Loot (player) {
  this.player = player
  this.table = [
      {name: 'dagger', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'sword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'longsword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'battle axe', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'hatchet', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'mace', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'hammer', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
      {name: 'cloth', type: 'armor', armor: 1, rarity: 1},
      {name: 'leather', type: 'armor', armor: 1, rarity: 1},
      {name: 'chainmail', type: 'armor', armor: 1, rarity: 1},
      {name: 'plate', type: 'armor', armor: 1, rarity: 1},
      {name: 'health', type: 'potion', rarity: 1},
      {name: 'dexterity', type: 'potion', rarity: 1},
      {name: 'strength', type: 'potion', rarity: 1}
    ]
  this.rarityCalculator = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
  this.foundItem = 0
}

Loot.prototype.lootFinder = function () {
  this.foundItem = 0
  var rarity = this.rarityCalculator[Math.floor(Math.random() * this.rarityCalculator.length)]
  var possibleItems = []
  for (i = 0; i < table.length; i++){
    if (this.table[i]['rarity'] === rarity) possibleItems.push(table[i])
  }
  if (possibleItems.length === 0) return 0
  return this.foundItem = possibleItems[Math.floor((Math.random() * possibleItems.length))]
}

Loot.prototype.returnFoundItem = function() {
  return this.foundItem
}

Loot.prototype.equipLoot = function() {
  return this.player.equipLoot()
}





module.exports = Loot
