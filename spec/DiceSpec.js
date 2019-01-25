'use strict';
describe('Dice', function(){

  var Dice = require('../src/Dice');
  var sinon = require('sinon');

  var dice;
  var stub

  beforeEach(function() {
    stub = sinon.stub(Math, 'floor')
    dice = new Dice();
  });

  afterEach(function () {
      stub.restore()
  });

  describe('rollBetween', function() {
    it('return a number between two given values', function(){
      stub.returns(4)
      expect(dice.rollBetween(4,8)).toEqual(8);
      stub.resetBehavior();
    });

    it('expect to push into the array', function(){
      dice.rollBetween(4,8);
      expect(dice._arrayOfNumbers).toEqual([ 4, 5, 6, 7, 8 ]);
    });
  });

  describe('rollDice', function() {
    it('retuns a random number between 1 and 20', function(){
      stub.returns(4)
      expect(dice.rollDice()).toBe(4);
      stub.resetBehavior();
    });
  });
});
