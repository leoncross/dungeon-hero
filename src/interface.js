let game = new Game()
game.initialize('ARAGORN')

$(document).ready(function () {
  updateInterface()

  $('#playerAttack').click(function () {
    game.combat.attackSequence(0, 1 ,0, 0, 'normal')
    updateInterface()
  })

  $('#insaneAttack').click(function () {
    game.combat.attackSequence(-5, 0.5, 0, 0, 'insane')
    updateInterface()
  })

  $('#parryAttack').click(function () {
    game.combat.attackSequence(0, 2, 5, 0, 'quick')
    updateInterface()
  })

  $('#healthPotion').click(function () {
    game.combat.attackSequence(0, 1 ,0, 'health', 'health')
    updateInterface()
  })

})

function updateInterface () {
  $('#playerName').text(game.player.returnAttribute('name'))
  $('#playerHealth').text(game.player.returnAttribute('health'))
  $('#playerArmour').text(game.player.returnAttribute('armor'))
  $('#playerStrength').text(game.player.returnAttribute('strength'))
  $('#playerDexterity').text(game.player.returnAttribute('dexterity'))
  $('#playerWeapon').text(game.player.returnAttribute('weaponName'))
  $('#armourType').text(game.player.returnAttribute('armorName'))
  $('#monsterName').text(game.monster.returnMonster('Zombie').name.toUpperCase())
  $('#monsterHealth').text(game.monster.returnMonster('Zombie').health)
  $('#monsterArmor').text(game.monster.returnMonster('Zombie').armor)
  $('#output').html(game.readout.printReadout())

  if(game.monster.returnMonster('Zombie').health < 1) {
    var modal = document.getElementById('winModal')
    modal.style.display = "block"
    $('#monsterName1').text(game.monster.returnMonster('Zombie').name.toUpperCase())
    $('#easyRoom').click(function () {
      game.room.monsterRoom('easy')
      modal.style.display = "none"
    })
  }

  if(game.player.returnAttribute('health') < 1) {
    console.log('this is a loss')
  }

}
