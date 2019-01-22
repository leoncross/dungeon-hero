'use strict';
function Dice(){
}

Dice.prototype.rollDice = function () {
  return Math.floor((Math.random() * 20) + 1);
}

Dice.prototype.rollBetween = function (min, max) {
  var arrayOfNumbers = []
  for(min; min<=max; min++){
    arrayOfNumbers.push(min);
  }
  return arrayOfNumbers[Math.floor((Math.random() * arrayOfNumbers.length))]
};
module.exports = Dice;
