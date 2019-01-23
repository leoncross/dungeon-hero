$(document).ready(function(){

  $( "#start" ).click(function() {
    var playerName = getElementById('playerName');

    var game = new Game()
    game.initialize(playerName)
    $( "#startGame" ).submit();
  });
})
