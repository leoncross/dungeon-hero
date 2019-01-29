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
    player = new Player();
    hero = player.returnHero()
    loot = new Loot(player)
    monster = new Monster()
    dice = new Dice()
    stub = sinon.stub(Math, 'floor')
    readout = new Readout()
    combat = new Combat(player, monster, dice, readout)
    room = new Rooms(player, monster, combat, dice)
    game = new Game()
  });

  afterEach(function () {
    stub.restore()
  });
;

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
  })

  describe('dice',function () {
    it('the object to exist', function(){
      expect(dice).toBeDefined();
    });
  })

  describe('room',function () {
    it('the object to exist', function(){
      expect(room).toBeDefined();
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
      spyOn(loot,'returnFoundItem').and.returnValue(loot.table[1])
      // console.log(loot.table[1]);
      // console.log(loot.equipLoot());

    });
  })


  describe('play', function(){
    it('expect to call zombie room', function(){
      // console.log('hi');
      // game.play()

    });
  });

});
