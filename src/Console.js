function Console () {
  this.consoleArray = ['You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.', 'Suddenly, you hear what looks like a zombie running towards you...']
}

Console.prototype.addConsole = function (argument) {
  this.consoleArray.push(argument)
};

Console.prototype.printConsole = function () {
  return this.consoleArray
};

Console.prototype.clearConsole = function () {
  this.consoleArray = []
}

module.exports = Console
