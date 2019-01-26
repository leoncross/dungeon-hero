function Readout () {
  // 'You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.<br>', 'Suddenly, you hear what looks like a zombie running towards you...<br>'
  this.readoutArray = []
}

Readout.prototype.addReadout = function (message) {
  if (this.readoutArray.length === 20) this.readoutArray.shift()
  let messageFormatted = message + '<br>'
  this.readoutArray.push(messageFormatted)
}

Readout.prototype.monsterDamage = function (monster, damage) {
  this.addReadout('<span style="color: red;">' + monster + '</span> attacks you for ' + damage + ' damage')
}

Readout.prototype.monsterMisses = function (monster) {
  this.addReadout('<span style="color: red;">' + monster + '</span> attack misses')
}

Readout.prototype.playerDamage = function (damage, type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">You</span> attack for ' + damage + ' damage')
  if (type === 'insane') this.addReadout('<span style="color: green;">You</span> strong attack for ' + damage + ' damage')
  if (type === 'quick') this.addReadout('<span style="color: green;">You</span> quick attack for ' + damage + ' damage')
}

Readout.prototype.playerDamageCritical = function (damage, type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">You</span> critical hit on your attack for ' + damage + ' damage')
  if (type === 'insane') this.addReadout('<span style="color: green;">You</span> critical hit on your strong attack for ' + damage + ' damage')
  if (type === 'quick') this.addReadout('<span style="color: green;">You</span> critical hit on your quick attack for ' + damage + ' damage')
}

Readout.prototype.playerHealthPotion = function (type) {
  if (type === 'health') this.addReadout('<span style="color: green;">You</span> drink a health potion and gain 25 health')
}

Readout.prototype.playerStrengthPotion = function (type) {
  if (type === 'strength') this.addReadout('<span style="color: green;">You</span> drink a strength potion and gain 2 strength')
}

Readout.prototype.playerDexterityPotion = function (type) {
  if (type === 'dexterity') this.addReadout('<span style="color: green;">You</span> drink a dexterity potion and gain 2 dexterity')
}

Readout.prototype.playerMisses = function (type) {
  if (type === 'normal') this.addReadout('<span style="color: green;">Your</span> attack misses')
  if (type === 'insane') this.addReadout('<span style="color: green;">Your</span> strong attack misses')
  if (type === 'quick') this.addReadout('<span style="color: green;">Your</span> quick attack misses')
}

Readout.prototype.playerWins = function () {
  this.addReadout('<span style="color: green;">You have won!</span>')
}

Readout.prototype.playerLoses = function () {
  this.addReadout('<span style="color: red;">You have died</span>')
}

Readout.prototype.printReadout = function () {
  return this.readoutArray
}

Readout.prototype.clearReadout = function () {
  this.readoutArray = []
}

module.exports = Readout
