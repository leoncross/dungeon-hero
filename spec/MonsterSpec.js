
describe('Monster', function () {
  var Monster = require('../src/Monster');

  var monster = new Monster();
  var zombie = {
                  name: 'zombie',
                  health: 100,
                  armor: 6,
                  strength: 7,
                  dexterity: 5
                  }

  it('monster can receive a damage', function () {
    monster.receiveDamage(zombie, 20);
    expect(zombie['health']).toEqual(80);
  });

  it('selects a monster', function () {
    expect(monster.selectMonster('zombie')).toEqual(zombie)
  });

});
