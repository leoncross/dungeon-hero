function Rooms (player, monsters, combat, dice) {
  this.player = player // class
  this.monsters = monsters // class
  this.combat = combat // class
  this.dice = dice
  this.hero = this.player.returnHero()
  this.roomJourney = [['easy', true]]
}

Rooms.prototype.setupRoomJourney = function () {
  this.roomRandomizer(['easy', 'medium'])
  this.roomRandomizer(['medium', 'hard'])
  this.roomJourney.push(['shop', true], ['boss', true])
}

Rooms.prototype.roomRandomizer = function (difficulty, number = 3) {
  var n = number
  for (var i = 0; i < n; i++) {
    this.roomJourney.push(difficulty[Math.floor((Math.random() * difficulty.length))])
  }
}

Rooms.prototype.nextRoom = function () {
  this.monsters.resetMonsters()
  room = this.roomJourney.shift()
  if (room.length === 2) {
    this.monsterRoom(room[0], room[1])
  } else {
    this.monsterRoom(room)
  }
  return room
}

Rooms.prototype.monsterRoom = function (difficulty, force = false) {
  if (this.dice.rollDice() <= 2 && force === false) {
    this.enemy = this.monsters.randomizeMonster('trap')
  } else {
    this.enemy = this.monsters.randomizeMonster(difficulty)
  }
  return this.combat.attackSetup([this.hero, this.enemy])
}

Rooms.prototype.monsterInRoom = function (attribute) {
  return this.enemy[attribute]
}

module.exports = Rooms
