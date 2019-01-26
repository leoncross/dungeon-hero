
function Monster () {
  this.monsters = [
    { name: 'Zombie', difficulty: 'easy', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 },
    { name: 'Bat Swarm', difficulty: 'easy', health: 70, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 4 },
    { name: 'Skeleton', difficulty: 'medium', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11 },
    { name: 'Goblin', difficulty: 'medium', health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9 },
    { name: 'Gorgon', difficulty: 'hard', health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15 },
    { name: 'Shadow Demon', difficulty: 'hard', health: 110, armor: 6, strength: 8, dexterity: 4, weaponMin: 8, weaponMax: 12 },
    { name: 'Dragon', difficulty: 'boss', health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22 },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25 }
  ]
};

Monster.prototype.randomizeMonster = function (difficulty) {
  this.resetMonsters()
  var randMonster = []
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['difficulty'] === difficulty) {
      randMonster.push(this.monsters[i])
    }
  }
  return randMonster[Math.floor(Math.random() * randMonster.length)]
}

Monster.prototype.returnMonster = function (name) {
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['name'] === name) {
      return this.monsters[i]
    }
  }
}

Monster.prototype.resetMonsters = function () {
  this.monsters = [
    { name: 'Zombie', difficulty: 'easy', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 },
    { name: 'Bat Swarm', difficulty: 'easy', health: 70, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 4 },
    { name: 'Skeleton', difficulty: 'medium', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11 },
    { name: 'Goblin', difficulty: 'medium', health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9 },
    { name: 'Gorgon', difficulty: 'hard', health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15 },
    { name: 'Shadow Demon', difficulty: 'hard', health: 110, armor: 6, strength: 8, dexterity: 4, weaponMin: 8, weaponMax: 12 },
    { name: 'Dragon', difficulty: 'boss', health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22 },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25 }
  ]
  return this.monsters
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
