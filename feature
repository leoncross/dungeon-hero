var dio = new Player();
var monster = new Monster();
var dice = new Dice()
var kombat = new Combat(dice);
var room = new Rooms(dio,monster,kombat)
room.roomSelect()

var game = new Game()
game.initialize('pisellino')
game.combat.attackSetup([game.hero, game.zombie]);
game.combat.attackSequence();
game.room.roomSelect();
