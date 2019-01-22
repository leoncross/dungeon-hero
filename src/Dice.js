'use strict';
function Dice(){
}

Dice.prototype.roll = function () {
  return Math.floor((Math.random() * 20) + 1);
}

module.exports = Dice;
