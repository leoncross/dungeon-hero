function Game () {
}

Game.prototype.initialize = function (playerName) {
  // let Player
  // let Monster
  // let Dice
  // let Combat
  // let Rooms
  // let Readout
  this.player = new Player()
  this.player.changeName(playerName)
  this.hero = this.player.returnHero()
  this.monster = new Monster()
  this.zombie = this.monster.returnMonster('zombie')
  this.dice = new Dice()
  this.readout = new Readout()
  this.combat = new Combat(this.player, this.dice, this.readout)
  this.room = new Rooms(this.player, this.monster, this.combat, this.readout)
  this.play()
}

Game.prototype.play = function () {
  return this.room.roomSelect()
}

module.exports = Game
