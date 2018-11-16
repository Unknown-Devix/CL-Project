var game ={};
//TODO load saved game if exists


//END TODO
game.baseInterval = 1000;
game.playername = "LabGuineaPig";
game.resources = {
  sweets : {
    label : "Sweets",
    currentCount : 0
  },
  oats : {
     label : "Oat Hay",
     currentCount : 0
    },
    fruits : {
      label : "Healthy Fruits",
      currentCount : 0
    },
    vegetables : {
         label : "Healthy Vegetables",
         currentCount : 0
    },
    treats : {
      label: "treats",
      currentCount : 0
    }
};
game.facilities = {
  shed : {
    cost : {
        treats:30,
        vegetables:20,
        sweets:5,
        oats:10,
        fruits:10
    },
    currentCount: 0
  },
  Homelvl: {
    cost : {
        treats:0,
        vegetables:50,
        sweets:5,
        oats:20,
        fruits:10
    },
    currentCount:0
  }
};
game.weight = {
healthyPiggie: {
  cost: {
    treats:0,
    vegetables:10,
    sweets:0,
    oats:20,
    fruits:10
     },
     currentCount:0
},
  fatpig : {
         cost : {
        treats:50,
        vegetables:0,
        sweets:50,
        oats:0,
        fruits:12
    },
    currentCount:0
  },
  overweight:{
    cost : {
        treats:100,
        vegetables:0,
        sweets:60,
        oats:0,
        fruits:1
    },
    currentCount:0
  }
};
$(document).ready(function(){

  $('#playerName').text(game.playername);

   $('.getParticle').click(function(){
       var particle = $(this).attr('particle');
       game.resources[particle].currentCount++;
       $(this).next('span').text("Count: " + game.resources[particle].currentCount);
   });

   $('.buyFacility').click(function(){
       var facility = $(this).attr('facility');
if(game.resources.treats.currentCount >=game.facilities[facility].cost.treats && game.resources.oats.currentCount >=game.facilities[facility].cost.oats && game.resources.vegetables.currentCount >=game.facilities[facility].cost.vegetables &&
game.resources.sweets.currentCount >=game.facilities[facility].cost.sweets  && game.resources.fruits.currentCount >=game.facilities[facility].cost.fruits){
  game.facilities[facility].currentCount++;
  game.resources.treats.currentCount -= game.facilities[facility].cost.treats;
  game.resources.fruits.currentCount -= game.facilities[facility].cost.fruits;
  game.resources.sweets.currentCount -= game.facilities[facility].cost.sweets;
  game.resources.vegetables.currentCount -= game.facilities[facility].cost.vegetables;
  game.resources.oats.currentCount -= game.facilities[facility].cost.oats;
  $(this).next('span').text("Count: " + game.facilities[facility].currentCount);
}else{
  $(this).notify("Not enough food!","error");
}
update();
   });
   $('.buyWeight').click(function(){
       var weight = $(this).attr('weight');
       if(game.resources.treats.currentCount >=game.weight[weight].cost.treats && game.resources.oats.currentCount >=game.weight[weight].cost.oats && game.resources.vegetables.currentCount >=game.weight[weight].cost.vegetables && game.resources.sweets.currentCount >=game.weight[weight].cost.sweets &&
      game.resources.fruits.currentCount >=game.weight[weight].cost.fruits){
         game.weight[weight].currentCount++;
         game.resources.treats.currentCount -= game.weight[weight].cost.treats;
         game.resources.fruits.currentCount -= game.weight[weight].cost.fruits;
         game.resources.sweets.currentCount -= game.weight[weight].cost.sweets;
         game.resources.vegetables.currentCount -= game.weight[weight].cost.vegetables;
         game.resources.oats.currentCount -= game.weight[weight].cost.oats;
  $(this).next('span').text("Count: " + game.weight[weight].currentCount);
}else{
  $(this).notify("Not Fat enough!","error");
  }
update();
   });

  window.setInterval(function(){
    update();
  },game.baseInterval);
});

function update(){
  $('.getParticle').each(function(1,v){
     var particle = $(this).attr('particle');
      $(this).next('span').text("Count: " + game.resources[particle].currentCount);
  });
