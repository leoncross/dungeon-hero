
describe('Console', function () {
  var Console = require('../src/Console');

  beforeEach(function() {
    console = new Console()
  });

  describe('#opening message', function () {
    it('opening message to player', function () {
      expect(console.consoleArray).toEqual(['You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.', 'Suddenly, you hear what looks like a zombie running towards you...'])
    });
  });
  describe('#addConsole', function () {
    it('returns what it is passed', function () {
      console.clearConsole()
      console.addConsole('test message')
      expect(console.consoleArray).toEqual(['test message'])
    });
  });
  describe('#printConsole', function () {
    it('prints to console', function () {
      console.clearConsole()
      console.addConsole('test message')
      expect(console.printConsole()).toEqual(['test message'])
    });
  });
});
