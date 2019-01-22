
function Monster() {
  this.zombie = {
                name: 'Zombie',
                health: 100,
                armor: 6,
                strength: 7,
                dexterity: 5
                }
  this.vampyre = {
                  name: 'Vlad',
                  health: 100,
                  armor: 12,
                  strength: 12,
                  dexterity: 10
                  }
  this.wolf = {
                name: 'Fenrir',
                health: 100,
                armor: 10,
                strength: 12,
                dexterity: 10
              }
};

Monster.prototype.zombie = function () {
  return this.zombie;
}

Monster.prototype.vampyre = function () {
  return this.vampyre;
}

Monster.prototype.wolf = function () {
  return this.wolf;
}


module.exports = Monster;
