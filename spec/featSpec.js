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
      player.changeName('Cazzettino')
      expect(hero.name).toEqual('Cazzettino');
    });
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
      // console.log(game.initialize('hero'));
      // game.play()
      // // console.log(game);
      // expect(game.room.nextRoom()).toHaveBeenCalled()
    });
  });

});
