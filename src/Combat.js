'use strict'

function Combat (player, monster, dice, readout) {
  this.player = player
  this.monster = monster
  this.dice = dice
  this.readout = readout
};

Combat.prototype.attackSetup = function (attackers) {
  this.hero = attackers[0]
  this.enemy = attackers[1]
  return attackers
}

Combat.prototype.attackSequence = function () {
  if (this.enemy['health'] < 1) return
  if (this.player.status()) this.heroAttack()
  if (this.enemy['health'] > 0) this.monsterAttack()
  if (this.player.status() === false) {
    this.readout.playerLoses()
    return 'you have died'
  }
  if (this.enemy['health'] < 1) {
    this.readout.playerWins()
    return 'the monster has died'
  }
}

Combat.prototype.heroAttack = function () {
  let roll = this.dice.rollDice()
  let minRoll = this.enemy['armor'] + this.enemy['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    this.enemy['health'] -= damage
    if (this.enemy['health'] < 1) this.enemy['health'] = 0
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
    let damage = this.enemy['strength'] + this.weaponDamage(this.enemy)
    this.hero['health'] -= damage
    this.readout.monsterDamage(this.enemy['name'], damage)
     return damage
  } else {
    this.readout.monsterMisses(this.enemy['name'])
    return 'miss'
  }
}

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

module.exports = Combat
