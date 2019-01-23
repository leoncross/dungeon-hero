
function Monster () {
  this.monsters = [
    { name: 'zombie', health: 30, armor: 0, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 }
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
  monster['health'] -= damage
  return monster['health']
}

module.exports = Monster
