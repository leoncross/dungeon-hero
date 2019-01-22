// import {Player} from '../src/Player'

describe('Player', function () {
  var Player = require('../src/Player');

  beforeEach(function () {

  });

  it('can change his name', function () {
    var player = new Player();
    player.changeName('Aragorn');
    expect(player.hero['name']).toEqual('Aragorn');
  });


});
