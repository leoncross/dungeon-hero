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

  it('retuns a random number between 1 and 20', function(){
    spyOn(Math, 'random').and.returnValue(5);
    spyOn(dice, 'rollDice').and.returnValue(5);
    expect(dice.rollDice()).toBe(5);
  });

  it('return a number between two given values', function(){
    spyOn(Math, 'random').and.returnValue(5)
    spyOn(dice, 'rollBetween').and.returnValue(5);
    expect(dice.rollBetween(4,8)).toBe(5);
  });
});
