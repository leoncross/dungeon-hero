
function Monster() {
  this.zombie = {
                name: 'zombie',
                health: 100,
                armor: 6,
                strength: 7,
                dexterity: 5
                }

};

Monster.prototype.zombie = function () {
  return this.zombie;
};

// Monster.prototype.receiveDamage = function (monster, damage) {
//   monster['health'] -= damage
// };



module.exports = Monster;
