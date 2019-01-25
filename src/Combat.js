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
//HERO'S NORMAL ATTACK
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

//HERO'S STRONG ATTACK
Combat.prototype.heroInsaneAttack = function () {
  let roll = this.dice.rollDice() - 5
  let minRoll = this.enemy['armor'] + this.enemy['dexterity']
  if (roll > minRoll) {
    let damage = this.hero['strength'] + this.weaponDamage(this.hero)
    damage += Math.floor(damage/2)
    this.enemy['health'] -= damage
    this.readout.playerDamage(damage)
    return damage
  } else {
    this.readout.playerMisses()
    return 'miss'
  }
}
Combat.prototype.insaneAttackSequence = function () {
  if (this.enemy['health'] < 1) return
  if (this.player.status()) this.heroInsaneAttack()
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


// PLAYERS RESTORES HIS HEALTH
Combat.prototype.healthPotion = function () {
  if(this.hero['health'] === 100) return
  if(this.hero['healthPotions'] > 0 ){
    if(this.hero['health'] + 25 >= 100){
      this.hero['health'] = 100
      this.hero['healthPotions'] -= 1
    } else {
      this.hero['health'] += 25
      this.hero['healthPotions'] -= 1
    }
    return this.hero['health']
  } else {
    return 'you ran out of potions'
  }
}
Combat.prototype.healthPotionSequence = function () {
  if (this.enemy['health'] < 1) return
  if (this.player.status()) this.healthPotion()
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

//HERO'S BLOCK
Combat.prototype.heroParryAttack = function () {
  let roll = this.dice.rollDice()
  let minRoll = this.enemy['armor'] + this.enemy['dexterity']
  if (roll > minRoll) {
    let damage = Math.floor(this.hero['strength'] + this.weaponDamage(this.hero)/2)
    this.enemy['health'] -= damage
    if (this.enemy['health'] < 1) this.enemy['health'] = 0
    this.readout.playerDamage(damage)
    return damage
  } else {
    this.readout.playerMisses()
    return 'miss'
  }
}
Combat.prototype.parryAttackSequence = function () {
  if (this.enemy['health'] < 1) return
  if (this.player.status()) this.heroParryAttack()
  if (this.enemy['health'] > 0) this.monsterAttack(12)
  if (this.player.status() === false) {
    this.readout.playerLoses()
    return 'you have died'
  }
  if (this.enemy['health'] < 1) {
    this.readout.playerWins()
    return 'the monster has died'
  }
}

// MONSTER ATTACK
Combat.prototype.monsterAttack = function (parry = 0) {
  let roll = this.dice.rollDice()
  let minRoll = (this.hero['armor'] + this.hero['dexterity'] + parry)
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

Combat.prototype.weaponDamage = function (attacker) {
  return this.dice.rollBetween(attacker['weaponMin'], attacker['weaponMax'])
}

module.exports = Combat
