let game = new Game()
game.initialize('ARAGORN')

$(document).ready(function () {
  updateInterface()

  $('#playerAttack').click(function () {
    game.combat.attackSequence(0, 1, 0, 0, 'normal')
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
    game.combat.attackSequence(0, 1, 0, 'health', 'health')
    updateInterface()
  })
})

function updateInterface () {
  updateAll()

  var health = game.player.returnAttribute('health')
  var blood75 = document.getElementById('blood75')
  var blood50 = document.getElementById('blood50')
  var blood25 = document.getElementById('blood25')

  if (health < 76 && health > 50) {
    blood75.style.display = "block"
    blood50.style.display = "none"
    blood25.style.display = "none"
  }

  if (health < 51 && health > 25) {
    blood75.style.display = "none"
    blood50.style.display = "block"
    blood25.style.display = "none"
  }

  if (health < 26) {
    blood75.style.display = "none"
    blood50.style.display = "none"
    blood25.style.display = "block"
  }

  if(health < 1) {

    var modal = document.getElementById('loseModal')
    modal.style.display = 'block'
  }

  if (game.room.monsterInRoom('health') < 1) {
    var modal = document.getElementById('winModal')
    modal.style.display = 'block'
    $('#monsterName1').text(game.room.monsterInRoom('name').toUpperCase())
    $('#easyRoom').click(function () {
      game.room.monsterRoom('easy')
      game.readout.clearReadout()
      modal.style.display = 'none'
      updateAll()
    })
    $('#mediumRoom').click(function () {
      game.room.monsterRoom('medium')
      game.readout.clearReadout()
      modal.style.display = 'none'
      updateAll()
    })
    $('#hardRoom').click(function () {
      game.room.monsterRoom('hard')
      game.readout.clearReadout()
      modal.style.display = 'none'
      updateAll()
    })
    $('#bossRoom').click(function () {
      game.room.monsterRoom('boss', true)
      game.readout.clearReadout()
      modal.style.display = 'none'
      updateAll()
    })
  }

  function updateAll () {
    $("#monsterPortrait").attr("src",game.room.monsterInRoom('image'));
    $('#playerName').text(game.player.returnAttribute('name'))
    $('#playerHealth').text(game.player.returnAttribute('health'))
    $('#playerArmour').text(game.player.returnAttribute('armor'))
    $('#playerStrength').text(game.player.returnAttribute('strength'))
    $('#playerDexterity').text(game.player.returnAttribute('dexterity'))
    $('#playerWeapon').text(game.player.returnAttribute('weaponName'))
    $('#armourType').text(game.player.returnAttribute('armorName'))
    $('#monsterName').text(game.room.monsterInRoom('name').toUpperCase())
    $('#monsterHealth').text(game.room.monsterInRoom('health'))
    $('#monsterArmor').text(game.room.monsterInRoom('armor'))
    $('#output').html(game.readout.printReadout())
  }
}
