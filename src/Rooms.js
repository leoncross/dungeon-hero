function Rooms (player, monsters, combat, readout) {
  this.player = player // class
  this.monsters = monsters // class
  this.combat = combat // class
  this.readout = readout // class
}

Rooms.prototype.roomSelect = function () {
  this.zombieRoom()
  let zombie = this.monsters.returnMonster('Zombie')
  if (zombie['health'] <= 0 && this.healthChecker()) {
    return this.escapeRoom()
  } else if (zombie['health'] > 0 && !this.healthChecker()) {
    return this.loseGame()
  } else {
    return this.zombieRoom()
  }
}

Rooms.prototype.zombieRoom = function () {
  let hero = this.player.returnHero()
  let zombie = this.monsters.returnMonster('Zombie')
  return this.combat.attackSetup([hero, zombie])
}

Rooms.prototype.monsterRoom = function (difficulty) {
  let hero = this.player.returnHero()
  this.enemy = this.monsters.randomizeMonster(difficulty)
  return this.combat.attackSetup([hero, this.enemy])
}

Rooms.prototype.monsterInRoom = function (attribute) {
  return this.enemy[attribute]
}

Rooms.prototype.loseGame = function () {
  return 'you have lost'
}

Rooms.prototype.escapeRoom = function () {
  return 'you have won!'
}

// to be deleted
Rooms.prototype.healthChecker = function () {
  let hero = this.player.returnHero()
  return hero['health'] > 0
}

module.exports = Rooms
