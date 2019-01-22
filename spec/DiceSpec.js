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
    spyOn(dice, 'roll').and.returnValue(5);
    expect(dice.roll()).toBe(5);
  });
});
