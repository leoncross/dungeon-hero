'use strict'
function Dice () {
  this._arrayOfNumbers = []
}

Dice.prototype.rollDice = function () {
  return this.rollBetween(1, 20)
}

Dice.prototype.rollBetween = function (min, max) {
  this._arrayOfNumbers = []
  for (min; min <= max; min++) {
    this._arrayOfNumbers.push(min)
  }
  return this._arrayOfNumbers[Math.floor((Math.random() * this._arrayOfNumbers.length))]
}

module.exports = Dice
