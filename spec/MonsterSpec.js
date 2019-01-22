
describe('Monster', function () {
  var Monster = require('../src/Monster');
  var monster;
  var zombie;

  beforeEach(function() {
    monster = new Monster();
    zombie = {
              name: 'zombie',
              health: 100,
              armor: 6,
              strength: 7,
              dexterity: 5
              }
    });


  it('selects a monster', function () {
    expect(monster.selectMonster('zombie')).toEqual(zombie)
  });

  it('monster can receive a damage', function () {
    monster.selectMonster('zombie')
    monster.receiveDamage(zombie, 20)
    expect(zombie['health']).toEqual(80);
  });



});
