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
  if (potion === 'strength') return this.strengthPotion(playerAttackType)
  if (potion === 'dexterity') return this.dexterityPotion(playerAttackType)
  if (this.enemy['health'] > 0) this.monsterAttack(monsterModifierToDice)
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
  let minRoll = this.enemy['armor'] + this.enemy['dexterity']
  if (roll > minRoll && roll < 19) {
    return this.standardDamage(playerModifierToDamage, playerAttackType);
  } else if (roll > minRoll && roll >= 19) {
    return this.criticalHitDamage(playerModifierToDamage, playerAttackType);
  } else {
    this.readout.playerMisses(playerAttackType)
    return 'miss'
  }
}

Combat.prototype.monsterAttack = function (monsterModifierToDice) {
  let roll = this.dice.rollDice()
  let minRoll = (this.hero['armor'] + this.hero['dexterity'] + this.hero['dexterityBuff'] + monsterModifierToDice)
  if (roll > minRoll) {
    let damage = (this.enemy['strength'] + this.weaponDamage(this.enemy))
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
    this.readout.playerHealthPotion(playerAttackType)
    return 'health potion consumed'
  } else {
    return 'you ran out of health potions'
  }
}

Combat.prototype.strengthPotion = function (playerAttackType) {
  if (this.hero['strengthPotions'] > 0) {
    if (this.hero['strength'] + this.hero['strengthBuff'] >= 20) {
      this.hero['strength'] = 20
      this.hero['strengthPotions'] -= 1
    } else {
      this.hero['strengthBuff'] += 5
      this.hero['strengthPotions'] -= 1
    }
    this.readout.playerStrengthPotion(playerAttackType)
    return 'strength potion consumed'
  } else {
    return 'you ran out of strength potions'
  }
}

Combat.prototype.dexterityPotion = function (playerAttackType) {
  if (this.hero['dexterityPotions'] > 0) {
    if (this.hero['dexterity'] + this.hero['dexterityBuff'] >= 20) {
      this.hero['dexterity'] = 20
      this.hero['dexterityPotions'] -= 1
    } else {
      this.hero['dexterityBuff'] += 5
      this.hero['dexterityPotions'] -= 1
    }
    this.readout.playerDexterityPotion(playerAttackType)
    return 'dexterity potion consumed'
  } else {
    return 'you ran out of dexterity potions'
  }
}

Combat.prototype.standardDamage = function (playerModifierToDamage, playerAttackType) {
  let damage = (this.hero['strength'] + this.hero['strengthBuff'] + this.weaponDamage(this.hero)) / playerModifierToDamage
  damage = parseInt(damage)
  this.enemy['health'] -= damage
  if (this.enemy['health'] < 1) this.enemy['health'] = 0
  this.readout.playerDamage(damage, playerAttackType)
  return damage
}

Combat.prototype.criticalHitDamage = function (playerModifierToDamage, playerAttackType) {
  let damage = ((this.hero['strength'] + this.hero['strengthBuff'] + this.weaponDamage(this.hero)) / playerModifierToDamage)*2
  damage = parseInt(damage)
  this.enemy['health'] -= damage
  if (this.enemy['health'] < 1) this.enemy['health'] = 0
  this.readout.playerDamage(damage, playerAttackType)
  return damage
}

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

module.exports = Combat
