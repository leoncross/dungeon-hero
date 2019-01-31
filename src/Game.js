function Game () {}

Game.prototype.initialize = function (playerName) {
  this.dice = new Dice()
  this.flavourText = new FlavourText()
  this.readout = new Readout(this.flavourText)
  this.player = new Player(this.dice)
  this.loot = new Loot(this.player, this.readout, this.dice)
  this.player.changeName(playerName)
  this.hero = this.player.returnHero()
  this.monster = new Monster()
  this.combat = new Combat(this.player, this.monster, this.dice, this.readout)
  this.room = new Rooms(this.player, this.monster, this.combat, this.dice)
  this.shop = new Shop(this.player, this.dice, this.loot, this.readout)
  this.play()
}

Game.prototype.play = function () {
  this.room.setupRoomJourney()
  this.readout.displayFlavourText()
  return game.room.nextRoom()
}

module.exports = Game
