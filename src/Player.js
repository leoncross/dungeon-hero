
function Player () {
  this.hero = {
    name: 'Player',
    health: 100,
    armor: 1,
    armorName: 'Plate',
    weaponName: 'Dagger',
    weaponMin: 5,
    weaponMax: 8,
    strength: 2,
    dexterity: 1
  }
};

Player.prototype.returnHero = function () {
  return this.hero
}

Player.prototype.changeName = function (name) {
  this.hero['name'] = name
}

Player.prototype.changeWeapon = function (weaponName) {
  this.hero['weaponName'] = weaponName
}

Player.prototype.changeArmor = function (armorName) {
  this.hero['armorName'] = armorName
}

Player.prototype.receiveDamage = function (damage) {
  this.hero['health'] -= damage
}

module.exports = Player
