game = new Game()
game.initialize('ARAGORN')

$(document).ready(function(){

  $('#playerName').text(game.player.returnAttribute('name'));

  $('#playerHealth').text(game.player.returnAttribute('health'));

  $('#playerArmour').text(game.player.returnAttribute('armor'));

  $('#playerStrength').text(game.player.returnAttribute('strength'));

  $('#playerDexterity').text(game.player.returnAttribute('dexterity'));

  $('#monsterHealth').text(game.monster.returnMonster('zombie').health);

  $('#output').text(game.readout.printReadout());


  $('#playerAttack').click(function(){
    game.combat.attackSequence();
    $('#playerName').text(game.player.returnAttribute('name'));

    $('#playerHealth').text(game.player.returnAttribute('health'));

    $('#playerArmour').text(game.player.returnAttribute('armor'));

    $('#playerStrength').text(game.player.returnAttribute('strength'));

    $('#playerDexterity').text(game.player.returnAttribute('dexterity'));

    $('#monsterHealth').text(game.monster.returnMonster('zombie').health);
  })

})
