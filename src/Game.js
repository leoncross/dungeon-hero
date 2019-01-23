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
  this.combat = new Combat(this.dice, this.readout)
  this.room = new Rooms(this.player, this.monster, this.combat, this.readout)
  this.startGame()
}

Game.prototype.startGame = function () {
  this.room.roomSelect()
}

module.exports = Game
