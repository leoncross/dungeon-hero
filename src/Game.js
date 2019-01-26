function Game () {
}

Game.prototype.initialize = function (playerName) {
  // var Player
  // var Monster
  // var Dice
  // var Combat
  // var Rooms
  // var Readout
  this.loot = new Loot()
  this.player = new Player(this.loot)
  this.player.changeName(playerName)
  this.hero = this.player.returnHero()
  this.monster = new Monster()
  this.zombie = this.monster.returnMonster('Zombie')
  this.dice = new Dice()
  this.readout = new Readout()
  this.combat = new Combat(this.player, this.monster, this.dice, this.readout)
  this.room = new Rooms(this.player, this.monster, this.combat, this.dice)
  this.play()
}

Game.prototype.play = function () {
  return this.room.monsterRoom('easy')
}

module.exports = Game
