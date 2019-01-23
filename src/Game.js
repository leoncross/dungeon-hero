function Game () {
}

Game.prototype.initialize = function (playerName) {
  console.log(playerName)
  // let Player
  // let Monster
  // let Dice
  // let Combat
  // let Rooms
  this.player = new Player()
  this.player.changeName(playerName)
  this.hero = this.player.returnHero()
  this.monster = new Monster()
  this.dice = new Dice()
  this.combat = new Combat(this.dice)
  this.room = new Rooms(this.player, this.monster, this.combat)
  this.startGame()
}

Game.prototype.startGame = function () {
  this.room.roomSelect()
}

module.exports = Game
