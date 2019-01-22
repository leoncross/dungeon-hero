
function Monster() {
  this.monsters = [{
                  name: 'zombie',
                  health: 100,
                  armor: 6,
                  strength: 7,
                  dexterity: 5
                  }]

};

Monster.prototype.selectMonster = function (monster) {
  for(i = 0; i < this.monsters.length; i++) {
    if(this.monsters[i]['name'] === monster) {
      return this.monsters[i];
    }
  }
};

Monster.prototype.receiveDamage = function (monster, damage) {
  monster['health'] -= damage
};

module.exports = Monster;
