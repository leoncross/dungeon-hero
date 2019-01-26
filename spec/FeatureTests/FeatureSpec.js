// /* eslint-disable */
//
// describe('Game', function() {
//   var player
//   var hero
//   var monster
//   var zombie
//   var dice
//
//   var Combat = require('../../src/Combat');
//   var Player = require('../../src/Player');
//   var Monster = require('../../src/Monster');
//   var Rooms = require('../../src/Rooms');
//   var Readout = require('../../src/Readout');
//
//
//   beforeEach(function() {
//     function DiceStub() {}
//     DiceStub.prototype = {
//       rollDice() {},
//       rollBetween() {}
//     };
//
//     player = new Player();
//     hero = player.returnHero();
//     monster = new Monster();
//     enemy = monster.returnMonster('Zombie');
//     dice = new DiceStub
//     readout = new Readout
//     combat = new Combat(player, monster, dice, readout)
//     room = new Rooms(player, monster, combat, readout);
//
//   });
//
//   describe('Player', function() {
//     it('return the hero', function() {
//       expect(player.returnHero()).toEqual(hero)
//     })
//   })
//
//   describe('Monster', function() {
//     it('return the monster', function() {
//       expect(monster.returnMonster('Zombie')).toEqual(enemy);
//     });
//   });
// });
