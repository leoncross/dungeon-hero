describe('Game', function(){

  var Player = require('../src/Player');
  var Loot = require('../src/Loot');
  var Monster = require('../src/Monster');
  var Dice = require('../src/Dice');
  var Combat = require('../src/Combat');
  var Rooms = require('../src/Rooms');
  var Game = require('../src/Game');
  var Readout = require('../src/Readout');
  var sinon = require('sinon');

  var player
  var loot
  var monster
  var combat
  var dice
  var stub
  var room
  var game
  var readout

  beforeEach(function () {
    game = new Game()
    player = new Player();
    hero = player.returnHero()
    monster = new Monster()
    dice = new Dice()
    stub = sinon.stub(Math, 'floor')
    readout = new Readout()
    loot = new Loot(player, readout)
    combat = new Combat(player, monster, dice, readout)
    room = new Rooms(player, monster, combat, dice)
  });

  afterEach(function () {
    stub.restore()
  });

  describe('player', function(){
    it('the object to exist', function(){
      expect(player).toBeDefined();
    });
    it('returns the hero object', function () {
      expect(hero.name).toEqual('Player');
      player.changeName('Guy')
      expect(hero.name).toEqual('Guy');
    });
    it('checks the player\'s health', function(){
      expect(player.status()).toEqual(true)
    })
    it('checks the player\'s health', function(){
      hero.health = 0
      expect(player.status()).toEqual(false)
    })
  })

  describe('monster',function () {
    it('the object to exist', function(){
      expect(monster).toBeDefined();
    });
    it('returns the monster object', function () {
      zombie = monster.returnMonster('Zombie')
      expect(zombie.name).toEqual('Zombie');
    });
  })

  describe('combat',function () {
    it('the object to exist', function(){
      expect(combat).toBeDefined();
    });

    it('the object to exist', function(){
      expect(combat.player).toBeDefined();
    });

    it('the object to exist', function(){
      expect(combat.monster).toBeDefined();
    });

    it('the object to exist', function(){
      expect(combat.dice).toBeDefined();
    });

    it('the object to exist', function(){
      expect(combat.readout).toBeDefined();
    });


    describe('heroAttack', function () {
      // it('players takes 1 str potion', function () {
      //   // console.log(combat.monster.monsters[0]);
      //   combat.monster.monsters[0].dexterity = 100
      //   // console.log(combat.monster.monsters[0]);
      //   combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
      //   expect(combat.heroAttack(0, 0, 2)).toEqual('miss')
      // })
    })

    describe('potions sequences', function() {
      // STRENGHTH
      it('players takes 1 str potion', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'strength')
        expect(combat.player.hero["strength"] + combat.player.hero["strengthBuff"]).toEqual(7)
        expect(combat.player.hero["health"]).toEqual(100)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players takes 2 str potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'strength')
        expect(combat.player.hero["strength"] + combat.player.hero["strengthBuff"]).toEqual(7)
        combat.attackSequence(0, 1 ,0, 'strength')
        expect(combat.player.hero["strength"] + combat.player.hero["strengthBuff"]).toEqual(12)
        expect(combat.player.hero["health"]).toEqual(100)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players tries to take 3 str potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'strength')
        expect(combat.player.hero["strength"] + combat.player.hero["strengthBuff"]).toEqual(7)
        combat.attackSequence(0, 1 ,0, 'strength')
        expect(combat.player.hero["strength"] + combat.player.hero["strengthBuff"]).toEqual(12)
        expect(combat.attackSequence(0, 1 ,0, 'strength')).toEqual('you ran out of strength potions')
      })

      // DEXTERITY
      it('players takes 1 dex potion', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'dexterity')
        expect(combat.player.hero["dexterity"] + combat.player.hero["dexterityBuff"]).toEqual(6)
        expect(combat.player.hero["health"]).toEqual(100)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players takes 2 dex potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'dexterity')
        expect(combat.player.hero["dexterity"] + combat.player.hero["dexterityBuff"]).toEqual(6)
        combat.attackSequence(0, 1 ,0, 'dexterity')
        expect(combat.player.hero["dexterity"] + combat.player.hero["dexterityBuff"]).toEqual(11)
        expect(combat.player.hero["health"]).toEqual(100)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players tries to take 3 dex potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.attackSequence(0, 1 ,0, 'dexterity')
        expect(combat.player.hero["dexterity"] + combat.player.hero["dexterityBuff"]).toEqual(6)
        combat.attackSequence(0, 1 ,0, 'dexterity')
        expect(combat.player.hero["dexterity"] + combat.player.hero["dexterityBuff"]).toEqual(11)
        expect(combat.attackSequence(0, 1 ,0, 'dexterity')).toEqual('you ran out of dexterity potions')
      })

      // HEALTH
      it('players takes 1 str potion', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.player.hero["health"] = 7
        combat.attackSequence(0, 1 ,0, 'health')
        expect(combat.player.hero["health"]).toEqual(32)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players takes 2 str potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.player.hero["health"] = 7
        combat.attackSequence(0, 1 ,0, 'health')
        expect(combat.player.hero["health"]).toEqual(32)
        combat.attackSequence(0, 1 ,0, 'health')
        expect(combat.player.hero["health"]).toEqual(57)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
      })
      it('players tries to take 3 str potions', function () {
        spyOn(dice, "rollDice").and.returnValue(18);
        spyOn(dice, "rollBetween").and.returnValue(5);
        spyOn(player, "status").and.returnValue(true);
        combat.attackSetup([combat.player.hero, combat.monster.monsters[0]])
        combat.player.hero["health"] = 7
        combat.attackSequence(0, 1 ,0, 'health')
        expect(combat.player.hero["health"]).toEqual(32)
        combat.attackSequence(0, 1 ,0, 'health')
        expect(combat.player.hero["health"]).toEqual(57)
        expect(combat.monster.monsters[0]["health"]).toEqual(35)
        expect(combat.attackSequence(0, 1 ,0, 'health')).toEqual('you ran out of health potions')
      })
    })
  })

  describe('dice',function () {
    it('the object to exist', function(){
      expect(dice).toBeDefined();
    });

    it('the object to exist', function(){
      expect(dice._arrayOfNumbers).toEqual([]);
    });
  })

  describe('room',function () {
    it('the object to exist', function(){
      expect(room).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.player).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.monsters).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.combat).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.dice).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.hero).toBeDefined();
    });

    it('the object to exist', function(){
      expect(room.roomJourney).toBeDefined();
    });

    describe('monsterRoom', function() {
      it('the object to exist', function(){
        stub.returns(1)
        expect(dice.rollDice()).toBe(1);
        spyOn(monster, "randomizeMonster").and.returnValue(room.monsters.monsters[7]);
        expect(room.monsterRoom('easy', false)).toEqual([room.hero, room.monsters.monsters[7]])
        stub.resetBehavior();
      });
    })
  })

  describe('game',function () {
    it('the object to exist', function(){
      expect(game).toBeDefined();
    });
  })

  describe('loot',function () {
    it('the object to exist', function(){
      expect(loot).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.player).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.readout).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.readout.readoutArray).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.table).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.rarityCalculator).toBeDefined();
    });

    it('the object to exist', function(){
      expect(loot.foundItem).toBe(0);
    });

  })


  describe('play', function(){
    it('expect to call zombie room', function(){
      // console.log(hero.name);
      // game.initialize('hero')
    });
  });

});
