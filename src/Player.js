
function Player (dice) {
  this.dice = dice
  this.hero = {
    name: 'Player',
    health: 100,
    armor: 1,
    armorName: 'cloth',
    armorDamageReduction: 0.1,
    weaponName: 'dagger',
    weaponMin: 6,
    weaponMax: 9,
    strength: 2,
    dexterity: 1,
    berserkMode: 'off',
    healthPotions: 2,
    strengthPotions: 2,
    dexterityPotions: 2,
    dexterityBuff: 0,
    strengthBuff: 0,
    gold: 0
  }
};

Player.prototype.returnHero = function () {
  return this.hero
}

Player.prototype.status = function () {
  return (this.hero['health'] > 0) ? true : false
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

Player.prototype.toggleBerserkMode = function (value) {
  this.hero['berserkMode'] = value
}

Player.prototype.playerFindsGold = function () {
  gold = this.dice.rollBetween(1, 100)
  this.hero['gold'] += gold
  return this.returnFoundGold(gold)
}

Player.prototype.returnFoundGold = function (gold) {
  return gold
}

Player.prototype.equipLoot = function (item) {
  if (item['type'] === 'weapon') this.changeWeapon(item['name'], item['weaponMin'], item['weaponMax'])
  if (item['type'] === 'armor') this.changeArmor(item['name'], item['armor'], item['armorDamageReduction'])
  if (item['name'] === 'health') this.hero['healthPotions'] += 1
  if (item['name'] === 'dexterity') this.hero['dexterityPotions'] += 1
  if (item['name'] === 'strength') this.hero['strengthPotions'] += 1
}

module.exports = Player
