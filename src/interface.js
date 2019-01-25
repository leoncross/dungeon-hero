let game = new Game()
game.initialize('ARAGORN')

$(document).ready(function () {
  updateInterface()

  $('#playerAttack').click(function () {
    game.combat.attackSequence()
    updateInterface()
  })

  $('#insaneAttack').click(function () {
    game.combat.insaneAttackSequence()
    updateInterface()
  })

  $('#parryAttack').click(function () {
    game.combat.parryAttackSequence()
    updateInterface()
  })

  $('#healthPotion').click(function () {
    game.combat.healthPotionSequence()
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
}
