$(document).ready(function(){

  $('#playerName').text(player.returnAttribute('name'));

  $('#playerHealth').text(player.returnAttribute('health'));

  $('#playerArmour').text(player.returnAttribute('armour'));

  $('#playerStrength').text(player.returnAttribute('strength'));

  $('#playerDexterity').text(player.returnAttribute('dexterity'));

  $('#playerAttack').click(function(){
    combat.attackSequence();
  })

})
