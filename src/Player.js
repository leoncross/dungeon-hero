
function Player () {
  this.hero = {
    name: 'Player',
    health: 100,
    armor: 10,
    armorName: 'Plate',
    weaponName: 'Dagger',
    weaponMin: 5,
    weaponMax: 20,
    strength: 10,
    dexterity: 10
  }
};

Player.prototype.hero = function () {
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

module.exports = Player
