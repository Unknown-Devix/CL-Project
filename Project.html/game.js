var game ={};
var player = {};

//TODO load saved game if exists


//END TODO
game.baseInterval = 1000;

player.name = "BetaTester";

//curency
player.atomCount = 0;
player.autoAddInterval = 0;

//first upgrade available
player.autoAtomCount = 0;
player.autoAtomBaseCost = 10;


$(document).ready(function(){
  $('#playerName').text(player.name);

   $('#collectAtom').click(function() {
       player.atomCount++;
     $('#atomCount').text(player.atomCount);
});

  $('#buyAutoAtom').click(function(){
if (player.atomCount >= player.autoAtomBaseCost){
      player.autoAtomCount++;
      player.autoAddInterval += 0.2;
      player.atomCount -= player.autoAtomBaseCost;
      player.autoAtomBaseCost *= 1.05;
    }
});


  window.setInterval(function() {
    update();
  },game.baseInterval);
});

function update() {

  console.log('update');
  player.atomCount += player.autoAddInterval;
  $('#atomCount').text(player.atomCount);
};
