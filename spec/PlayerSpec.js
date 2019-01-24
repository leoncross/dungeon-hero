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
      player.changeWeapon('Throwing Axe', 10, 15);
      expect(player.hero['weaponName']).toEqual('Throwing Axe');
      expect(player.hero['weaponMin']).toEqual(10);
      expect(player.hero['weaponMax']).toEqual(15);

    });
  });

  describe('#changeWeapon', function() {
    it('change armor', function () {
      var player = new Player();
      expect(player.hero['armorName']).toEqual('Plate');
      player.changeArmor(5, 'Full Plate');
      expect(player.hero['armorName']).toEqual('Full Plate');
      expect(player.hero['armor']).toEqual(5);
    });
  });

  describe('#recieveDamage', function() {
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
      expect(player.returnAttribute('armor')).toEqual(1)
    });
  });

  describe('#healthCheck', function() {
    it('returns boolean true if alive', function() {
      var player = new Player();
      expect(player.status()).toEqual(true)
    })
    it('returns boolean true if alive', function() {
      var player = new Player();
      player.receiveDamage(100)
      expect(player.status()).toEqual(false)
    })
  })
});
