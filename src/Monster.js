
function Monster () {
  this.monsters = [
    { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' },
    { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 2, stunStatus: false, image: './static/images/batswarm.png' },
    { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11, stunStatus: false, image: './static/images/skeleton.png' },
    { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9, stunStatus: false, image: './static/images/goblin.png' },
    { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15, stunStatus: false, image: './static/images/gorgon.png' },
    { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', health: 110, armor: 6, strength: 5, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/shadowdemon.png' },
    { name: 'Dragon', difficulty: 'boss', specialAttack:'Black Flame', health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22, stunStatus: false, image: './static/images/dragon.png' },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
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
    { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', health: 30, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' },
    { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 1, weaponMax: 2, stunStatus: false, image: './static/images/batswarm.png' },
    { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', health: 50, armor: 1, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 11, stunStatus: false, image: './static/images/skeleton.png' },
    { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', health: 55, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9, stunStatus: false, image: './static/images/goblin.png' },
    { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', health: 90, armor: 6, strength: 4, dexterity: 6, weaponMin: 9, weaponMax: 15, stunStatus: false, image: './static/images/gorgon.png' },
    { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', health: 110, armor: 6, strength: 5, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/shadowdemon.png' },
    { name: 'Dragon', difficulty: 'boss', specialAttack:'Black Flame', health: 300, armor: 6, strength: 13, dexterity: 8, weaponMin: 15, weaponMax: 22, stunStatus: false, image: './static/images/dragon.png' },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
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
