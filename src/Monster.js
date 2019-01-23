
function Monster () {
  this.monsters = [
    { name: 'zombie', health: 30, armor: 1, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 }
  ]
};

Monster.prototype.returnMonster = function (monster) {
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['name'] === monster) {
      return this.monsters[i]
    }
  }
}

Monster.prototype.receiveDamage = function (monster, damage) {
  var returnMonster = this.returnMonster(monster)
  returnMonster['health'] -= damage
  return returnMonster['health']
}

Monster.prototype.returnAttribute = function (monster, type) {
  this.returnMonster(monster)
  return monster[type]
}

module.exports = Monster
