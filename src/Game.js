function Game () {}

Game.prototype.initialize = function (playerName) {
  // var Player
  // var Monster
  // var Dice
  // var Combat
  // var Rooms
  // var Readout
  this.player = new Player()
  this.readout = new Readout()
  this.loot = new Loot(this.player, this.readout)
  this.player.changeName(playerName)
  this.hero = this.player.returnHero()
  this.monster = new Monster()
  this.zombie = this.monster.returnMonster('Zombie')
  this.dice = new Dice()
  this.combat = new Combat(this.player, this.monster, this.dice, this.readout)
  this.room = new Rooms(this.player, this.monster, this.combat, this.dice)
  this.play()
}

Game.prototype.play = function () {
  return game.room.nextRoom()
}

module.exports = Game
