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




});
