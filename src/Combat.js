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

Combat.prototype.attackSequence = function (playerModifierToDice, playerModifierToDamage, monsterModifierToDice, potion, playerAttackType) {
  if (this.enemy['health'] < 1 || this.hero['health'] < 1) return 'dead'
  if (potion === 0) this.heroAttack(playerModifierToDice, playerModifierToDamage, playerAttackType)
  if (potion === 'health') return this.healthPotion(playerAttackType)
  if (this.enemy['health'] > 0) this.monsterAttack(monsterModifierToDice)
  return this.endOfCombat()
}

Combat.prototype.endOfCombat = function () {
  if (this.player.status() === false) {
    this.readout.playerLoses()
    return 'you have died'
  }
  if (this.enemy['health'] < 1) {
    this.readout.playerWins()
    return 'the monster has died'
  }
}

Combat.prototype.heroAttack = function (playerModifierToDice, playerModifierToDamage, playerAttackType) {
  let roll = this.dice.rollDice() + playerModifierToDice
  let minRoll = this.enemy['dexterity']
  if (roll > minRoll) {
    var damage = ((this.hero['strength'] + this.weaponDamage(this.hero)) / playerModifierToDamage)
    if (roll >= 19) damage *= 2
    this.enemy['health'] -= parseInt(damage)
    if (this.enemy['health'] < 1) this.enemy['health'] = 0
    this.readout.playerDamage(damage, playerAttackType)
    return damage
  } else {
    this.readout.playerMisses(playerAttackType)
    return 'miss'
  }
}

Combat.prototype.monsterAttack = function (monsterModifierToDice) {
  let roll = this.dice.rollDice()
  let minRoll = (this.hero['dexterity'] + monsterModifierToDice)
  if (roll > minRoll) {
    let damage = (this.enemy['strength'] + this.weaponDamage(this.enemy))
    damage -= parseInt(damage * this.hero['armorDamageReduction'])
    this.hero['health'] -= damage
    this.readout.monsterDamage(this.enemy['name'], damage)
    return damage
  } else {
    this.readout.monsterMisses(this.enemy['name'])
    return 'miss'
  }
}

Combat.prototype.healthPotion = function (playerAttackType) {
  if (this.hero['healthPotions'] > 0) {
    if (this.hero['health'] + 25 >= 100) {
      this.hero['health'] = 100
      this.hero['healthPotions'] -= 1
    } else {
      this.hero['health'] += 25
      this.hero['healthPotions'] -= 1
    }
    this.readout.playerPotion(playerAttackType)
    return 'health potion consumed'
  } else {
    return 'you ran out of potions'
  }
}

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

Combat.prototype.trapSequence = function () {
  if (this.dice.rollDice() <= 10) {
    this.player.recieveDamage(25)
    return 'triggered'
  }
  return 'not triggered'
}

module.exports = Combat
