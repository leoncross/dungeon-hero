describe('Player', function () {

  var Player = require('../src/Player');

  describe('#changeName', function() {
    it('change hero name', function () {
      var player = new Player();
      expect(player.hero['name']).toEqual('Player');
      player.changeName('Aragorn');
      expect(player.hero['name']).toEqual('Aragorn');
    });
  });

  describe('#changeWeapon', function() {
    it('change weapon', function () {
      var player = new Player();
      expect(player.hero['weaponName']).toEqual('Dagger');
      player.changeWeapon('Throwing Axe');
      expect(player.hero['weaponName']).toEqual('Throwing Axe');
    });
  });

  describe('#changeWeapon', function() {
    it('change armor', function () {
      var player = new Player();
      expect(player.hero['armorName']).toEqual('Plate');
      player.changeArmor('Full Plate');
      expect(player.hero['armorName']).toEqual('Full Plate');
    });
  });

  describe('#changeWeapon', function() {
    it('receive a damage', function () {
      var player = new Player();
      expect(player.hero['health']).toEqual(100);
      player.receiveDamage(20);
      expect(player.hero['health']).toEqual(80);
    });
  });

  describe('#returnAttribute', function() {
    var player = new Player();
    it('returns requested attribute', function() {
      expect(player.returnAttribute('health')).toEqual(100)
    });
  });
});
