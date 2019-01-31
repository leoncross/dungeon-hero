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

  $('#stunAttack').click(function () {
    game.combat.attackSequence(0, 100, 0, 0, 'stun')
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

  $('#warCry').click(function () {
    game.combat.attackSequence(0, 100, 0, 0, 'warcry')
    updateInterface()
  })

  $('#modalButton').click(function () {
    var modal = document.getElementById('trapModal')
    modal.style.display = 'block'
    $('#helpReturn').click(function () {
      modal.style.display = 'none'
    })
    trapInterface()
  })

  $('#helpButton').click(function () {
    var modal = document.getElementById('helpModal')
    modal.style.display = 'block'
    $('#helpReturn').click(function () {
      modal.style.display = 'none'
    })
  })
})

function shopInterface () {
  game.shop.findItemsInShop()
  $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  $('#item1').html(game.shop.displayItemsInShop(0))
  $('#item2').html(game.shop.displayItemsInShop(1))
  $('#item3').html(game.shop.displayItemsInShop(2))
  $('#price1').html(game.shop.displayPriceOfItemInShop(0))
  $('#price2').html(game.shop.displayPriceOfItemInShop(1))
  $('#price3').html(game.shop.displayPriceOfItemInShop(2))
  $('#price4').html(game.shop.returnPotionPrice('health'))
  $('#price5').html(game.shop.returnPotionPrice('strength'))
  $('#price6').html(game.shop.returnPotionPrice('dexterity'))
}

// function for shop
function shopListeners () {
  $('#item1').click(function () {
    game.shop.buyItemFromShop(0)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#item2').click(function () {
    game.shop.buyItemFromShop(1)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#item3').click(function () {
    game.shop.buyItemFromShop(2)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#item4').click(function () {
    game.shop.buyItemFromShop(3)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#item5').click(function () {
    game.shop.buyItemFromShop(4)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#item6').click(function () {
    game.shop.buyItemFromShop(5)
    $('#goldCount').html(game.player.returnAttribute('gold') + ' GOLD')
  })

  $('#nextRoomFromShop').unbind().click(function () {
    game.readout.clearReadout()
    game.room.nextRoom()
    game.readout.displayFlavourText()
    var modal = document.getElementById('shopModal')
    modal.style.display = 'none'
    updateInterface()
  })
}

function trapInterface() {
  $('#skipChest').unbind().click(function () {
    var modal = document.getElementById('trapModal')
    game.readout.clearReadout()
    game.room.nextRoom()
    game.readout.displayFlavourText()
    modal.style.display = 'none'
    updateAll()
  })
}

// function for update shop (after items bought / gold spent etc.)


function updateInterface() {
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
    $('#playerHealth').css('color', 'red')
  }

  if (health < 1) {
    var modal = document.getElementById('loseModal')
    modal.style.display = 'block'
  }

  if (game.room.monsterInRoom('health') < 1) {
    if (game.room.monsterInRoom('name') === 'Dragon') {
      modal = document.getElementById('winnerModal')
      modal.style.display = 'block'
    } else {
      modal = document.getElementById('winModal')
      modal.style.display = 'block'
      $('#takeLoot').show()
      $('#monsterName1').text(game.room.monsterInRoom('name').toUpperCase())
      game.loot.lootFinder()
    }

    if (game.loot.returnFoundItem() === 0) {
      $('#takeLoot').hide()
      $('#roomLoot').html(game.readout.noLootFound())
    } else {
      $('#roomLoot').html(game.loot.displayLoot())
      $('#takeLoot').unbind().click(function () {
        game.loot.equipLoot()
        $('#roomLoot').html(game.readout.equipLoot())
        $('#takeLoot').hide()
      })
    }
    $('#nextRoom').unbind().click(function () {
      game.readout.clearReadout()
      game.room.nextRoom()
      game.readout.displayFlavourText()
      modal.style.display = 'none'
      updateAll()
    })
  }
}

function updateAll () {
  if (game.room.monsterInRoom('name') === 'Shop') {
    var modal = document.getElementById('shopModal')
    modal.style.display = 'block'
    shopInterface()
    shopListeners()
  }

  if(game.room.monsterInRoom('name') === 'Trap') {
    var modal = document.getElementById('trapModal')
    modal.style.display = 'block'
    trapListeners()
  }

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
  var heroDamage = (game.player.returnAttribute('weaponMin') + game.player.returnAttribute('strength')) + '-' +
    (game.player.returnAttribute('weaponMax') + game.player.returnAttribute('strength'))
  $('#playerWeapon').text(game.player.returnAttribute('weaponName'))
  $('#playerDmg').text(heroDamage)
  $('#armourType').text(game.player.returnAttribute('armorName'))
  $('#monsterName').text(game.room.monsterInRoom('name').toUpperCase())
  $('#monsterHealth').text(game.room.monsterInRoom('health'))
  $('#monsterArmor').text(game.room.monsterInRoom('armor'))
  var monsterDamage = ((game.room.monsterInRoom('weaponMin') + game.room.monsterInRoom('strength')) + '-' +
    (game.room.monsterInRoom('weaponMax') + game.room.monsterInRoom('strength')))
  $('#monsterDmg').text(monsterDamage)
  $('#output').html(game.readout.printReadout())
  $('#healthQuantity').text(game.player.returnAttribute('healthPotions'))
  $('#dexQuantity').text(game.player.returnAttribute('dexterityPotions'))
  $('#strQuantity').text(game.player.returnAttribute('strengthPotions'))
  $('#playerGold').text(game.player.returnAttribute('gold'))
}
