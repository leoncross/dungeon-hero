var Dice = require('../src/Dice');
function Combat (dice = new Dice) {
  this.dice = dice
};

Combat.prototype.attackSetup = function (attackers) {
  this.hero = attackers[0]
  this.monster = attackers[1]
  this.attackSquence()
  return attackers
}

Combat.prototype.attackSquence = function () {
  while (true)
    if (this.hero["health"] <= 0) {
      break
    }
    if (this.monster["health"] <= 0) {
      break
    }    
  this.playerAttack()
  this.monsterAttack()
}

Combat.prototype.playerAttack = function () {
  roll = this.diceRoll()
  minRoll = this.monster["armor"] + this.monster["dexterity"]
  if (roll > minRoll) {
    damage = this.hero["strength"] + this.weaponDamage(this.hero)
    this.monster["health"] -= damage
    return damage
  } else {
    return "miss"
  }
}

Combat.prototype.monsterAttack = function () {
  roll = this.diceRoll()
  minRoll = this.hero["armor"] + this.hero["dexterity"]
  if (roll > minRoll) {
    damage = this.monster["strength"] + this.weaponDamage(this.hero)
    this.hero["health"] -= damage
    return damage
  } else {
    return "miss"
  }
}

Combat.prototype.diceRoll = function () {
  return this.dice.rollDice()
}

Combat.prototype.weaponDamage = function (attacker) {
  result = this.dice.rollBetween(attacker["weaponMin"], attacker["weaponMax"])
  return result
}

module.exports = Combat
