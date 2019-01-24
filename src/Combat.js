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
  if (this.enemy['health'] < 0) return
  if (this.player.status()) this.heroAttack()
  if (this.enemy['health'] > 0) this.monsterAttack()
  if (this.player.status() === false) {
    this.readout.playerLoses()
    return 'you have died'
  }
  if (this.enemy['health'] <= 0) {
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
    this.readout.playerDamage(damage)
    return damage
  } else {
    this.readout.playerMisses()
    return 'miss'
  }
}

Combat.prototype.heroInsaneAttack = function () {
  let roll = this.dice.rollDice() - 5
  let minRoll = this.monster['armor'] + this.monster['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    damage += damage/2
    this.monster['health'] -= damage
    this.readout.playerDamage(damage)
    return damage
  } else {
    this.readout.playerMisses()
    return 'miss'
  }
}

// Combat.prototype.heroBlock = function () {
//   let roll = this.dice.rollDice() - 5
//   let minRoll = this.monster['armor'] + this.monster['dexterity']
//   if (roll > minRoll) {
//     let damage = this.hero['strength'] + this.weaponDamage(this.hero)
//     damage += damage/2
//     this.monster['health'] -= damage
//     this.readout.playerDamage(damage)
//     return damage
//   } else {
//     this.readout.playerMisses()
//     return 'miss'
//   }
// }


Combat.prototype.healthPotion = function () {
  if(this.hero['healthPotions']>0){
    if(this.hero['health'] + 25 >= 100){
      this.hero['health'] = 100
    } else {
      this.hero['health'] += 25
    }
    this.hero['healthPotions']--
    return this.hero['health']
  } else {
    return 'you ran out of potions:)'
  }
}

Combat.prototype.monsterAttack = function () {
  let decreasedRoll = this.dice.rollDice()
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
