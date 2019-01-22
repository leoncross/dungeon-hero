
function Player() {
    this.hero = {
                name: 'Conan',
                health: 100,
                armor: 10,
                armorName: 'Plate',
                weaponName: 'Dagger',
                strength: 10,
                dexterity: 10
                }
};

Player.prototype.hero = function () {
  return this.hero;
}

Player.prototype.changeName = function (name) {
  this.hero['name'] = name
};



module.exports = Player;
