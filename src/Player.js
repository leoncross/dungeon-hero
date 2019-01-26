
function Player () {
  this.hero = {
    name: 'Player',
    health: 100,
    armor: 1,
    armorName: 'cloth',
    armorDamageReduction: (10/100),
    weaponName: 'dagger',
    weaponMin: 5,
    weaponMax: 8,
    strength: 2,
    dexterity: 1,
    healthPotions: 2
  }
};

Player.prototype.returnHero = function () {
  return this.hero
}

Player.prototype.status = function () {
  if (this.hero['health'] > 0) return true
  if (this.hero['health'] < 1) return false
}

Player.prototype.returnAttribute = function (type) {
  return this.hero[type]
}

Player.prototype.changeName = function (name) {
  this.hero['name'] = name
}

Player.prototype.changeWeapon = function (weaponName, weaponMin, weaponMax) {
  this.hero['weaponName'] = weaponName
  this.hero['weaponMin'] = weaponMin
  this.hero['weaponMax'] = weaponMax
}

Player.prototype.changeArmor = function (armorName, armor, armorDamageReduction) {
  this.hero['armor'] = armor
  this.hero['armorName'] = armorName
  this.hero['armorDamageReduction'] = armorDamageReduction
}

Player.prototype.receiveDamage = function (damage) {
  if ((this.hero['health'] - damage) < 1) {
    this.hero['health'] = 0
  } else {
    this.hero['health'] -= damage
  }
}

Player.prototype.equipLoot = function (item) {
  if (item['type'] === 'weapon') this.changeWeapon(item['name'], item['weaponMin'], item['weaponMax'])
  if (item['type'] === 'armor') this.changeArmor(item['name'], item['armor'])
  if (item['type'] === 'healthPotion') this.hero['healthPotions'] += 1
}

module.exports = Player
