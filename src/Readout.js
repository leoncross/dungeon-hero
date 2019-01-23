function Readout () {
  this.readoutArray = ['You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.<br>', 'Suddenly, you hear what looks like a zombie running towards you...<br>']
}

Readout.prototype.addReadout = function (message) {
  let messageFormatted = message + '<br>'
  this.readoutArray.push(messageFormatted)
}

Readout.prototype.printReadout = function () {
  return this.readoutArray
}

Readout.prototype.clearReadout = function () {
  this.readoutArray = []
}

module.exports = Readout
