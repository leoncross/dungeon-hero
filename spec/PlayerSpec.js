describe('Player', function () {

  var Player = require('../src/Player');

  var player;

  beforeEach(function () {
    player = new Player();
  });

  describe('#changeName', function() {
    it('change hero name', function () {
      expect(player.hero['name']).toEqual('Player');
      player.changeName('Aragorn');
      expect(player.hero['name']).toEqual('Aragorn');
    });
  });

  describe('#changeWeapon', function() {
    it('change weapon', function () {
      expect(player.hero['weaponName']).toEqual('Dagger');
      player.changeWeapon('Throwing Axe');
      expect(player.hero['weaponName']).toEqual('Throwing Axe');
    });
  });

  describe('#changeWeapon', function() {
    it('change armor', function () {
      expect(player.hero['armorName']).toEqual('Plate');
      player.changeArmor('Full Plate');
      expect(player.hero['armorName']).toEqual('Full Plate');
    });
  });

  describe('#changeWeapon', function() {
    it('receive a damage', function () {
      expect(player.hero['health']).toEqual(100);
      player.receiveDamage(20);
      expect(player.hero['health']).toEqual(80);
    });
  });

  describe('#returnAttribute', function() {
    it('returns requested attribute', function() {
      expect(player.returnAttribute('armor')).toEqual(1)
    });
  });

  describe('#healthCheck', function() {
    it('returns boolean true if alive', function() {
      expect(player.status()).toEqual(true)
    })
    it('returns boolean true if alive', function() {
      player.receiveDamage(110)
      expect(player.hero['health']).toBeLessThan(0);
      expect(player.status()).toEqual(false)
    })
  })
});
