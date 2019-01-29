function Readout () {
  // 'You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.<br>', 'Suddenly, you hear what looks like a zombie running towards you...<br>'
  this.readoutArray = []
}

Readout.prototype.addReadout = function (message) {
  if (this.readoutArray.length === 25) this.readoutArray.shift()
  let messageFormatted = message + '<br>'
  this.readoutArray.push(messageFormatted)
}

Readout.prototype.monsterDamage = function (monster, damage) {
  this.addReadout('<span style="color: red;">' + monster + '</span> attacks you for ' + damage + ' damage')
}

Readout.prototype.monsterMisses = function (monster) {
  this.addReadout('<span style="color: red;">' + monster + '</span> attack misses')
}

Readout.prototype.monsterStunned = function (monster) {
  this.addReadout('<span style="color: red;">' + monster + '</span> is still stunned')
}

Readout.prototype.monsterUnstunned = function (monster) {
  this.addReadout('<span style="color: red;">' + monster + '</span> breaks free from the stun and is preparing to attack')
}

Readout.prototype.playerBerserActivated = function (monster) {
  this.addReadout('<span style="color: green;">You</span> enter Beserk mode!')
}

Readout.prototype.playerBerserDisactivated = function (monster) {
  this.addReadout('<span style="color: green;">You</span> leave Beserk mode!')
}

Readout.prototype.playerDamage = function (damage, type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">You</span> attack for ' + damage + ' damage')
  if (type === 'insane') this.addReadout('<span style="color: green;">You</span> strong attack for ' + damage + ' damage')
  if (type === 'quick') this.addReadout('<span style="color: green;">You</span> quick attack for ' + damage + ' damage')
}

Readout.prototype.playerStuns = function () {
  this.addReadout('<span style="color: green;">You</span> stunned the enemy')
}

Readout.prototype.playerWarCry = function () {
  this.addReadout('<span style="color: green;">You</span> emit a piecing War Cry, and gain 1 Strength and 1 Dexterity')
}


Readout.prototype.playerDamageCritical = function (damage, type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">You</span> critical hit on your attack for ' + damage + ' damage')
  if (type === 'insane') this.addReadout('<span style="color: green;">You</span> critical hit on your strong attack for ' + damage + ' damage')
  if (type === 'quick') this.addReadout('<span style="color: green;">You</span> critical hit on your quick attack for ' + damage + ' damage')
}

Readout.prototype.playerPotion = function (type) {
  if (type === 'health') this.addReadout('<span style="color: green;">You</span> drink a health potion and gain 25 health')
}

Readout.prototype.playerMisses = function (type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">Your</span> attack misses')
  if (type === 'insane') this.addReadout('<span style="color: green;">Your</span> strong attack misses')
  if (type === 'quick') this.addReadout('<span style="color: green;">Your</span> quick attack misses')
  if (type === 'stun') this.addReadout('<span style="color: green;">Your</span> stun attack misses')

}

Readout.prototype.playerWins = function () {
  this.addReadout('<span style="color: green;">You have won!</span>')
}

Readout.prototype.playerLoses = function () {
  this.addReadout('<span style="color: red;">You have died</span>')
}

Readout.prototype.playerHealthPotion = function () {
  this.addReadout('<span style="color: green;">You</span> drink a health potion and gain 25 health')
}

Readout.prototype.playerMaxHealth = function () {
  this.addReadout('<span style="color: green;">You</span> reached your max health')
}

Readout.prototype.playerStrengthPotion = function () {
  this.addReadout('<span style="color: green;">You</span> drink a strength potion and gain 5 strength')
}

Readout.prototype.playerDexterityPotion = function () {
  this.addReadout('<span style="color: green;">You</span> drink a dexterity potion and gain 5 dexterity')
}

Readout.prototype.displayFoundWeapon = function (item) {
  return 'you found a ' + item['name'] + ' that does between ' + item['weaponMin'] + '-' + item['weaponMax'] + ' damage' + '<br>would you like to equipt this?'
}

Readout.prototype.displayFoundArmor = function (item) {
  return 'you found ' + item['name'] + ' armor that has an armor rating of ' + item['armor'] + '<br>would you like to equipt this?'
}

Readout.prototype.displayFoundPotion = function (item) {
  return 'you found a ' + item['name'] + ' potion' + '<br>would you like to equipt this?'
}

Readout.prototype.equipLoot = function () {
  return 'You equip the loot'
}

Readout.prototype.noLootFound = function () {
  return 'no loot found'
}

Readout.prototype.printReadout = function () {
  return this.readoutArray
}

Readout.prototype.clearReadout = function () {
  this.readoutArray = []
}

module.exports = Readout
