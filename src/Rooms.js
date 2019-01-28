function Rooms (player, monsters, combat, dice) {
  this.player = player // class
  this.monsters = monsters // class
  this.combat = combat // class
  this.dice = dice
  this.hero = this.player.returnHero()
}

Rooms.prototype.monsterRoom = function (difficulty, force = false) {
  if (this.dice.rollDice() <= 2 && force === false) {
    this.enemy = this.monsters.randomizeMonster('trap')
  } else {
    this.enemy = this.monsters.randomizeMonster(difficulty)
  }
  return this.combat.attackSetup([this.hero, this.enemy])
}

Rooms.prototype.monsterInRoom = function (attribute) {
  return this.enemy[attribute]
}

module.exports = Rooms
