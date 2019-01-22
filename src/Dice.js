'use strict'
function Dice () {
  this._arrayOfNumbers = []
}

Dice.prototype.rollDice = function () {
  return Math.floor((Math.random() * 20) + 1)
}

Dice.prototype.rollBetween = function (min, max) {
  this._arrayOfNumbers = []
  for (min; min <= max; min++) {
    this._arrayOfNumbers.push(min)
  }
  return this._arrayOfNumbers[Math.floor((Math.random() * this._arrayOfNumbers.length))]
}

module.exports = Dice
