function Rooms (monsters, player, combat) {
  this.monsters = monsters
  this.player = player
  this.combat = combat
  this.hero = {}
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
  let player = this.player.returnPlayer()
  let monster = this.monsters.returnMonster('zombie')
  this.hero = this.combat.attackSetup([player, monster])
  return this.hero
}

Rooms.prototype.loseGame = function () {
  return 'you have lost'
}

Rooms.prototype.escapeRoom = function () {
  return 'you have won!'
}

Rooms.prototype.healthChecker = function () {
  this.hero = this.player.returnPlayer()
  if (this.hero['health'] > 0) {
    return true
  } else {
    return false
  }
}

module.exports = Rooms
