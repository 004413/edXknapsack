var alertTime = 200;
var knapsackCapacity = 20;
var nomSound = new Audio("nom.wav");
var bling = new Audio("money.wav");

$(document).ready(function(){ // movement function
  var value = 0;
  var mass = 0;
  var house = $('#house');
  var sack = $('#sack');
  var items = $('.item');
  items.click(function(){
    var itemMass = parseInt($(this).children('img')
                                   .attr('data-weight'));
    var itemValue = parseInt($(this).children('img')
                                    .attr('data-value'));
    if($(this).parent()
              .attr('id')=='house'){
      var newMass = mass + itemMass;
      if(newMass>knapsackCapacity){ // case of knapsack becoming too heavy
        overMass();
      }else{ // add to knapsack
        sack.append( $(this) );
        mass = newMass;
        value += itemValue;
        updateValueAndMass(value,mass);
        bling.play();
      }
    }else{ // remove from knapsack
      house.append( $(this) );
      mass -= itemMass;
      value -= itemValue;
      updateValueAndMass(value,mass);
    }
  });
  $('#restart').click(function(){ // functionality for the restart button
    value = 0;
    mass = 0;
    house.append(items);
    updateValueAndMass(value,mass);
  });
/*  sackItems.on('click', function(event){ // when clicked while in sack, move to house
    var target = $(this);
    house.append(target);
    sackItems.detach(target);
    sackItems = $('#sack .item');
    houseItems = $('#house .item');
    sack = $('#sack');
    house = $('#house');
  });*/
});

// Function executed when knapsackCapacity would be exceeded if item moved (inner if loop above)
function overMass(){
  console.log("Hi there.");
  $('.column').detach();
  $('#restart').detach();
  $('.alert').show(alertTime)
             .delay(3*alertTime);
  for(var nom=0;nom<127;nom++){
    nomSound.play();
  }
}

// Updates quantitative displays below burglar
function updateValueAndMass(value,mass){
  $('#burglar').text("Value: $"+value+"; Mass: "+mass+"kg");
}
