function Rooms (monsters, hero, combat) {
  this.monsters = monsters
  this.hero = hero
  this.combat = combat
}

Rooms.prototype.roomSelect = function () {
  this.zombieRoom()
  if (this.healthChecker() === true) this.escapeRoom()
}

Rooms.prototype.zombieRoom = function () {
  this.hero.returnPlayer()
  let monster = this.monsters.returnMonster('zombie')
  let player = this.combat.attackSetup([this.hero, monster])
  return player
}

Rooms.prototype.loseGame = function () {
  return 'you have lost'
}

Rooms.prototype.escapeRoom = function () {
  return 'you have won!'
}

Rooms.prototype.healthChecker = function () {
  let hero = this.hero.returnPlayer()
  if (hero['health'] > 0) {
    return true
  } else {
    return false
  }
}

module.exports = Rooms
