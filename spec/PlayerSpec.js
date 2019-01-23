// import {Player} from '../src/Player'

describe('Player', function () {
  var Player = require('../src/Player');

  var player = new Player();

  it('can change his name', function () {
    player.changeName('Aragorn');
    expect(player.hero['name']).toEqual('Aragorn');
  });

  it('can change his weapon', function () {
    player.changeWeapon('Throwing Axe');
    expect(player.hero['weaponName']).toEqual('Throwing Axe');
  });

  it('can change his armor', function () {
    player.changeArmor('Full Plate');
    expect(player.hero['armorName']).toEqual('Full Plate');
  });

  it('can receive a damage', function () {
    player.receiveDamage(20);
    expect(player.hero['health']).toEqual(80);
  });




});
