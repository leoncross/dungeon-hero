'use strict'
// comment var Dice = require('../src/Dice') to use console
var Dice = require('../src/Dice')
function Combat (dice = new Dice()) {
  this.dice = dice
};

Combat.prototype.attackSetup = function (attackers) {
  // loop here until winner
  this.hero = attackers[0]
  this.monster = attackers[1]
  // this.attackSquence()
  return this.hero
}

Combat.prototype.attackSequence = function () {
  this.playerAttack()
  this.monsterAttack()
}

Combat.prototype.playerAttack = function () {
  let roll = this.diceRoll()
  let minRoll = this.monster['armor'] + this.monster['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    this.monster['health'] -= damage
    return damage
  } else {
    return 'miss'
  }
}

Combat.prototype.monsterAttack = function () {
  let roll = this.diceRoll()
  let minRoll = this.hero['armor'] + this.hero['dexterity']
  if (roll > minRoll) {
    let damage = this.monster['strength'] + this.weaponDamage(this.hero)
    this.hero['health'] -= damage
    return damage
  } else {
    return 'miss'
  }
}

Combat.prototype.diceRoll = function () {
  return this.dice.rollDice()
}

Combat.prototype.weaponDamage = function (attacker) {
  let result = this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
  return result
}

module.exports = Combat
