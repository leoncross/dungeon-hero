function Readout () {
  this.readoutArray = ['You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.', 'Suddenly, you hear what looks like a zombie running towards you...']
}

Readout.prototype.addReadout = function (argument) {
  this.readoutArray.push(argument)
};

Readout.prototype.printReadout = function () {
  return this.readoutArray
};

Readout.prototype.clearReadout = function () {
  this.readoutArray = []
}

module.exports = Readout
