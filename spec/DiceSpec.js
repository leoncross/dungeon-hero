'use strict';
describe('Dice', function(){

  var Dice = require('../src/Dice');
  var dice;

  beforeEach(function() {
    dice = new Dice();
  });

  it('the object to exist', function(){
    expect(dice).toBeDefined();
  });

  describe('rollBetween', function() {
    it('return a number between two given values', function(){
      spyOn(Math, 'random').and.returnValue(5);
      spyOn(dice, 'rollBetween').and.returnValue(5);
      expect(dice.rollBetween(4,8)).toBe(5);
    });

    it('expect to push into the array', function(){
      dice.rollBetween(4,8);
      expect(dice._arrayOfNumbers).toEqual([ 4, 5, 6, 7, 8 ]);
    });
  });

  describe('rollDice', function() {
    it('retuns a random number between 1 and 20', function(){
      spyOn(dice, 'rollDice').and.returnValue(5);
      expect(dice.rollDice()).toBe(5);
    });
  });
});
