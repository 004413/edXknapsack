$(document).ready(function(){ // movement function
  var house = $('#house');
  var sack = $('#sack');
  var houseItems = $('#house .item');
  var sackItems = $('#sack .item');
  houseItems.on('click', function(event){ // when clicked while in house, move to sack
    var target = $(event.target);
    sack.append(target);
    house.remove(target);
  });
  sackItems.on('click', function(event){ // when clicked while in sack, move to house
    var target = $(event.target);
    house.append(target);
    sack.remove(target);
  });
})
