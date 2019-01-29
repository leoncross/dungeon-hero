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

  $('#dexPotion').click(function () {
    game.combat.attackSequence(0, 1, 0, 'dexterity', 'dexterity')
    updateInterface()
  })

  $('#strPotion').click(function () {
    game.combat.attackSequence(0, 1, 0, 'strength', 'strength')
    updateInterface()
  })
})

function updateInterface () {
  updateAll()
  var health = game.player.returnAttribute('health')

  if (health > 75) {
    $('#playerImage').attr('src', './static/images/hero.png')
  }

  if (health < 76 && health > 50) {
    $('#playerImage').attr('src', './static/images/hero75.png')
  }

  if (health < 51 && health > 25) {
    $('#playerImage').attr('src', './static/images/hero50.png')
  }

  if (health < 26) {
    $('#playerImage').attr('src', './static/images/hero25.png')
  }

  if (health < 1) {
    var modal = document.getElementById('loseModal')
    modal.style.display = 'block'
  }

  if (game.room.monsterInRoom('health') < 1) {
    $('#takeLoot').show()
    modal = document.getElementById('winModal')
    modal.style.display = 'block'
    $('#monsterName1').text(game.room.monsterInRoom('name').toUpperCase())
    game.loot.lootFinder()

    if (game.loot.returnFoundItem() === 0) {
      $('#takeLoot').hide()
      $('#roomLoot').html(game.readout.noLootFound())
    } else {
      $('#roomLoot').html(game.loot.displayLoot())
      $('#takeLoot').click(function () {
        game.loot.equipLoot()
        $('#roomLoot').html(game.readout.equipLoot())
        $('#takeLoot').hide()
      })
    }
    $('#nextRoom').click(function () {
      console.log('1')
      game.room.nextRoom()
      game.readout.clearReadout()
      modal.style.display = 'none'
      updateAll()
    })
  }
}

function updateAll () {
  $('#monsterPortrait').attr('src', game.room.monsterInRoom('image'))
  $('#playerName').text(game.player.returnAttribute('name'))
  $('#playerHealth').text(game.player.returnAttribute('health'))
  $('#playerArmour').text(game.player.returnAttribute('armor'))

  if (game.player.returnAttribute('strengthBuff') > 0) {
    $('#playerStrength').css('color', 'green')
    $('#playerStrength').text(game.player.returnAttribute('strength') + game.player.returnAttribute('strengthBuff'))
  } else {
    $('#playerStrength').css('color', 'white')
    $('#playerStrength').text(game.player.returnAttribute('strength'))
  }
  if (game.player.returnAttribute('dexterityBuff') > 0) {
    $('#playerDexterity').css('color', 'green')
    $('#playerDexterity').text(game.player.returnAttribute('dexterity') + game.player.returnAttribute('dexterityBuff'))
  } else {
    $('#playerDexterity').css('color', 'white')
    $('#playerDexterity').text(game.player.returnAttribute('dexterity'))
  }

  $('#playerWeapon').text(game.player.returnAttribute('weaponName'))
  $('#armourType').text(game.player.returnAttribute('armorName'))
  $('#monsterName').text(game.room.monsterInRoom('name').toUpperCase())
  $('#monsterHealth').text(game.room.monsterInRoom('health'))
  $('#monsterArmor').text(game.room.monsterInRoom('armor'))
  $('#output').html(game.readout.printReadout())
  $('#healthQuantity').text(game.player.returnAttribute('healthPotions'))
  $('#dexQuantity').text(game.player.returnAttribute('dexterityPotions'))
  $('#strQuantity').text(game.player.returnAttribute('strengthPotions'))
}
