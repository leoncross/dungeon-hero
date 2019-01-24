describe('Rooms',function(){

  var Rooms = require('../src/Rooms');
  var room
  var monsters
  var combat
  var player

  beforeEach(function() {
    function PlayerStub() {}
    PlayerStub.prototype = {
      returnHero() {}
    };

    function MonstersStub() {}
    MonstersStub.prototype = {
      returnMonster() {},
      randomizeMonster() {}
    };

    function CombatStub() {}
    CombatStub.prototype = {
      attackSetup() {}
    };
    player = new PlayerStub()
    monsters = new MonstersStub()
    combat = new CombatStub()

    room = new Rooms(player, monsters, combat)

    leonPlayer = {name: 'leon', health: 100, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}
    lucaMonster = {name: 'luca', health: 100, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    lucaAlmostDeadMonster = {name: 'luca', health: 3, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    lucaDeadMonster = {name: 'luca', health: 0, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    leonHurtPlayer = {name: 'leon', health: 47, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}
    leonDeadPlayer = {name: 'leon', health: 0, armor: 5, armorName: 'Plate', weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3}

  });
  describe("#roomSelect", function() {
    it('Checks the players health', function(){
      expect(leonPlayer['health']).toBe(100)
    });
  });

  describe("#roomSelect", function() {
    it("wins game after beating zombie room", function() {
      spyOn(player, "returnHero").and.returnValue(leonPlayer);
      spyOn(monsters, "returnMonster").and.returnValue(lucaDeadMonster);
      spyOn(combat, "attackSetup").and.returnValue([leonHurtPlayer, lucaDeadMonster]);
      expect(room.zombieRoom()).toEqual([leonHurtPlayer, lucaDeadMonster])
      expect(room.roomSelect()).toEqual('you have won!')
    });
    it("loses game after zombie loss", function() {
      spyOn(player, "returnHero").and.returnValue(leonDeadPlayer);
      spyOn(monsters, "returnMonster").and.returnValue(lucaMonster);
      spyOn(combat, "attackSetup").and.returnValue([leonDeadPlayer, lucaMonster]);
      room.roomSelect()
      expect(room.zombieRoom()).toEqual([leonDeadPlayer, lucaMonster])
      expect(room.roomSelect()).toEqual('you have lost')
    });
  });

  describe("#zombieRoom", function() {
    it("returns player after Zombie Room", function() {
      spyOn(player, "returnHero").and.returnValue(leonPlayer);
      spyOn(monsters, "returnMonster").and.returnValue(lucaMonster);
      spyOn(combat, "attackSetup").and.returnValue([leonHurtPlayer, lucaMonster]);
      room.zombieRoom()
      expect(room.roomSelect()).toEqual(room.zombieRoom())
    });
  });

  describe('#monsterRoom', function() {
    it('returns an easy monster (zombie)', function() {
      spyOn(player, "returnHero").and.returnValue(leonPlayer);
      spyOn(monsters, "randomizeMonster").and.returnValue(lucaMonster);
      spyOn(combat, "attackSetup").and.returnValue(leonPlayer);
      expect(room.monsterRoom('easy')).toEqual(leonPlayer)
    })
  })

  describe('#monsterInRoom', function() {
    it('returns the monster in the room', function() {
      spyOn(player, "returnHero").and.returnValue(leonPlayer);
      spyOn(monsters, "randomizeMonster").and.returnValue(lucaMonster);
      spyOn(combat, "attackSetup").and.returnValue(leonPlayer);
      room.monsterRoom('easy')
      expect(room.monsterInRoom()).toEqual(lucaMonster)
    })
  })

// to be deleted
  describe("#healthChecker", function() {
    it("returns true for player being full health", function() {
      spyOn(player, "returnHero").and.returnValue(leonPlayer);
      expect(room.healthChecker()).toEqual(true)
    });
    it("returns false for player being dead", function() {
      spyOn(player, "returnHero").and.returnValue(leonDeadPlayer);
      expect(room.healthChecker()).toEqual(false)
    });
  });

  describe("#escapeRoom", function() {
    it("Win the game", function() {
      expect(room.escapeRoom()).toEqual('you have won!')
    });
  });
  describe("#loseGame", function() {
    it("Lose the game", function() {
      expect(room.loseGame()).toEqual("you have lost")
    });
  });
});
