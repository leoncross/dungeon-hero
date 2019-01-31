'use strict'

function Combat (player, monster, dice, readout) {
  this.player = player
  this.monster = monster
  this.dice = dice
  this.readout = readout
};

Combat.prototype.attackSetup = function (attackers) {
  this.hero = attackers[0]
  this.hero['strengthBuff'] = 0
  this.hero['dexterityBuff'] = 0
  this.enemy = attackers[1]
  return attackers
}

Combat.prototype.attackSequence = function (playerModifierToDice, playerModifierToDamage, monsterModifierToDice, potion, playerAttackType) {
  if (this.enemy['health'] < 1 || this.hero['health'] < 1) return 'dead'
  if (potion === 0) this.heroAttack(playerModifierToDice, playerModifierToDamage, playerAttackType)
  if (potion === 'health') return this.healthPotion(playerAttackType)
  if (potion === 'strength') return this.strengthPotion(playerAttackType)
  if (potion === 'dexterity') return this.dexterityPotion(playerAttackType)
  if (this.enemy['health'] > 0) this.monsterAttack(monsterModifierToDice)
  return this.endOfCombat()
}

Combat.prototype.endOfCombat = function () {
  if (this.enemy['health'] < 1) return this.player.playerFindsGold()
}

Combat.prototype.heroAttack = function (playerModifierToDice, playerModifierToDamage, playerAttackType) {
  this.heroBerserkMode()
  var roll = this.dice.rollDice() + playerModifierToDice
  var minRoll = this.enemy['dexterity']
  if (roll > minRoll) return this.playerSuccessRoll(roll, playerModifierToDice, playerModifierToDamage, playerAttackType)
  if (roll < minRoll) return this.readout.playerMisses(playerAttackType)
}

Combat.prototype.playerSuccessRoll = function (roll, playerModifierToDice, playerModifierToDamage, playerAttackType) {
  if (playerAttackType === 'warcry') return this.heroWarCry()
  if (playerAttackType === 'stun') return this.playerStuns()
  var damage = this.playerDamageToEnemy(roll, playerModifierToDamage)
  this.readout.playerDamage(damage, playerAttackType)
  return damage
}

Combat.prototype.playerDamageToEnemy = function (roll, playerModifierToDamage) {
  var damage = ((this.hero['strength'] + this.weaponDamage(this.hero)) / playerModifierToDamage)
  if (this.hero['berserkMode'] === 'on') damage *= 2
  if (roll >= 19) damage *= 2
  this.enemy['health'] -= parseInt(damage)
  if (this.enemy['health'] < 1) this.enemy['health'] = 0
  return parseInt(damage)
}

Combat.prototype.monsterAttack = function (monsterModifierToDice) {
  var roll = this.dice.rollDice()
  var minRoll = (this.hero['dexterity'] + monsterModifierToDice)
  if (this.enemy['stunStatus'] === true) return this.monsterStunStatus(roll)
  if (roll >= 19) return this.monsterSpecialAttack()
  if (roll > minRoll) return this.monsterSuccessRoll()
  return this.readout.monsterMisses(this.enemy['name'])
}

Combat.prototype.monsterSuccessRoll = function () {
  let damage = (this.enemy['strength'] + this.weaponDamage(this.enemy))
  damage -= parseInt(damage * this.hero['armorDamageReduction'])
  this.hero['health'] -= damage
  this.readout.monsterDamage(this.enemy['name'], damage)
  return damage
}

Combat.prototype.monsterSpecialAttack = function () {
  let damage = (this.enemy['strength'] + this.weaponDamage(this.enemy) + this.enemy['specialAttackDamage'])
  damage -= parseInt(damage * this.hero['armorDamageReduction'])
  this.hero['health'] -= damage
  this.readout.monsterSpecialAttack(this.enemy['name'], this.enemy['specialAttack'], damage)
  return damage
}

Combat.prototype.monsterStunStatus = function (roll) {
  if (roll > 10) {
    this.enemy['stunStatus'] = false
    this.readout.monsterUnstunned(this.enemy['name'])
    return 'broke free'
  } else {
    this.readout.monsterStunned(this.enemy['name'])
    return 'stunned'
  }
}

Combat.prototype.heroBerserkMode = function () {
  if (this.hero['health'] <= 25 && this.hero['berserkMode'] === 'off') {
    this.player.toggleBerserkMode('on')
    this.readout.playerBerserActivated()
    return 'activated'
  }
  if (this.hero['health'] > 25 && this.hero['berserkMode'] === 'on') {
    this.player.toggleBerserkMode('off')
    this.readout.playerBerserDisactivated()
    return 'disactivated'
  }
}

Combat.prototype.heroWarCry = function () {
  this.hero['dexterityBuff'] += 1
  this.hero['strengthBuff'] += 1
  this.readout.playerWarCry()
}

Combat.prototype.playerStuns = function () {
  this.enemy['stunStatus'] = true
  return this.readout.playerStuns()
}

Combat.prototype.healthPotion = function (playerAttackType) {
  if (this.hero['healthPotions'] === 0) return 'you ran out of health potions'
  if (this.hero['health'] >= 100) return this.readout.playerMaxHealth(playerAttackType)
  this.hero['health'] += 25
  if (this.hero['health'] + 25 >= 100) this.hero['health'] = 100
  this.hero['healthPotions'] -= 1
  this.readout.playerHealthPotion(playerAttackType)
  this.heroBerserkMode()
  return 'health potion consumed'
}

Combat.prototype.strengthPotion = function (playerAttackType) {
  if (this.hero['strengthPotions'] > 0) {
    this.hero['strengthBuff'] += 5
    this.hero['strengthPotions'] -= 1
    this.readout.playerStrengthPotion(playerAttackType)
    return 'strength potion consumed'
  } else {
    return 'you ran out of strength potions'
  }
}

Combat.prototype.dexterityPotion = function (playerAttackType) {
  if (this.hero['dexterityPotions'] > 0) {
    this.hero['dexterityBuff'] += 5
    this.hero['dexterityPotions'] -= 1
    this.readout.playerDexterityPotion(playerAttackType)
    return 'dexterity potion consumed'
  } else {
    return 'you ran out of dexterity potions'
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
