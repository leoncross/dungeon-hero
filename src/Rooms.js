function Rooms (player, monsters, combat) {
  this.player = player // class
  this.monsters = monsters // class
  this.combat = combat // class
}

Rooms.prototype.roomSelect = function () {
  this.zombieRoom()
  if (this.healthChecker() === true) {
    return this.escapeRoom()
  } else {
    return this.loseGame()
  }
}

Rooms.prototype.zombieRoom = function () {
  let hero = this.player.returnHero()
  let zombie = this.monsters.returnMonster('zombie')
  return this.combat.attackSetup([hero, zombie])
}

Rooms.prototype.loseGame = function () {
  return 'you have lost'
}

Rooms.prototype.escapeRoom = function () {
  return 'you have won!'
}

Rooms.prototype.healthChecker = function () {
  let hero = this.player.returnHero()
  if (hero['health'] > 0) {
    return true
  } else {
    return false
  }
}

module.exports = Rooms
