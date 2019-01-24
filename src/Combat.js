'use strict'

function Combat (player, dice, readout) {
  this.player = player
  this.dice = dice
  this.readout = readout
};

Combat.prototype.attackSetup = function (attackers) {
  this.hero = attackers[0]
  this.monster = attackers[1]
  return attackers
}

Combat.prototype.attackSequence = function () {
  if (this.monster['health'] < 0) return
  if (this.player.status()) this.heroAttack()
  if (this.monster['health'] > 0) this.monsterAttack()
  if (this.player.status() === false) {
    this.readout.playerLoses()
    return 'you have died'
  }
  if (this.monster['health'] <= 0) {
    this.readout.playerWins()
    return 'the monster has died'
  }
}

Combat.prototype.heroAttack = function () {
  let roll = this.dice.rollDice()
  let minRoll = this.monster['armor'] + this.monster['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    this.monster['health'] -= damage
    this.readout.playerDamage(damage)
    return damage
  } else {
    this.readout.playerMisses()
    return 'miss'
  }
}

Combat.prototype.monsterAttack = function () {
  let roll = this.dice.rollDice()
  let minRoll = this.hero['armor'] + this.hero['dexterity']
  if (roll > minRoll) {
    let damage = this.monster['strength'] + this.weaponDamage(this.monster)
    this.hero['health'] -= damage
    this.readout.monsterDamage(this.monster['name'], damage)
    return damage
  } else {
    this.readout.monsterMisses(this.monster['name'])
    return 'miss'
  }
}

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

module.exports = Combat
