
function Monster () {
  this.monsters = [{
    name: 'zombie',
    health: 100,
    armor: 6,
    strength: 7,
    dexterity: 5
  }]
};

Monster.prototype.selectMonster = function (monster) {
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['name'] === monster) {
      return this.monsters[i]
    }
  }
}

Monster.prototype.receiveDamage = function (monster, damage) {
  monster['health'] -= damage
<<<<<<< HEAD
  return monster['health']
=======
>>>>>>> f8c28391481ff34ae948b7bd7a8d4a452b12ed4c
}

module.exports = Monster
