'use strict'

function Combat (dice, readout) {
  this.dice = dice
  this.readout = readout
};

Combat.prototype.attackSetup = function (attackers) {
  this.hero = attackers[0]
  this.monster = attackers[1]
  return attackers
}

Combat.prototype.attackSequence = function () {
  if (this.healthChecker()) {
    let result = []
    result.push(this.heroAttack())
    result.push(this.monsterAttack())
    return result
  } else if (this.hero['health'] <= 0) {
    return 'you have died'
  } else if (this.monster['health'] <= 0) {
    return 'the monster has died'
  }
}

Combat.prototype.heroAttack = function () {
  let roll = this.diceRoll()
  let minRoll = this.monster['armor'] + this.monster['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    this.monster['health'] -= damage
    this.readout.addReadout('<span style="color: green;">You</span> attack for ' + damage + ' damage')
    return damage
  } else {
    this.readout.addReadout('<span style="color: green;">You</span> attack misses')
    return 'miss'
  }
}

Combat.prototype.monsterAttack = function () {
  let roll = this.diceRoll()
  let minRoll = this.hero['armor'] + this.hero['dexterity']
  if (roll > minRoll) {
    let damage = this.monster['strength'] + this.weaponDamage(this.monster)
    this.hero['health'] -= damage
    this.readout.addReadout(`<span style="color: red;">${this.monster['name']}</span> attacks you for ` + damage + ' damage')
    return damage
  } else {
    this.readout.addReadout(`<span style="color: red;">${this.monster['name']}</span> attack misses`)
    return 'miss'
  }
}

Combat.prototype.healthChecker = function () {
  return ((this.hero['health'] > 0 && this.monster['health'] > 0))
}

Combat.prototype.diceRoll = function () {
  return this.dice.rollDice()
}

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

module.exports = Combat
