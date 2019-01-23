
describe('Monster', function () {
  var Monster = require('../src/Monster');
  var monster;
  var zombie;

  beforeEach(function() {
    monster = new Monster();
    zombie = { name: 'zombie', health: 30, armor: 0, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7 }
  });


  it('selects a monster', function () {
    expect(monster.returnMonster('zombie')).toEqual(zombie)
  });

  it('monster can receive a damage', function () {
    monster.returnMonster('zombie')
    monster.receiveDamage(zombie, 8)
    expect(zombie['health']).toEqual(22);
  });
});
