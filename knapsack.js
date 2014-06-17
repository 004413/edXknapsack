$(document).ready(function(){ // movement function
  $('.alert').hide();
  var house = $('#house');
  var sack = $('#sack');
  var houseItems = $('#house .item');
  var sackItems = $('#sack .item');
  houseItems.on('click', function(event){ // when clicked while in house, move to sack
    var target = $(this);
    sack.append(target);
    houseItems.remove(target);
    houseItems = $('#house .item');
    sackItems = $('#sack .item');
    house = $('#house');
    sack = $('#sack');
  });
  sackItems.on('click', function(event){ // when clicked while in sack, move to house
    var target = $(this);
    console.log("Hi there.");
    house.append(target);
    sackItems.remove(target);
    sackItems = $('#sack .item');
    houseItems = $('#house .item');
    sack = $('#sack');
    house = $('#house');
  });
});

function overmass(){
  $('.alert').show(200).delay(200).hide(200);

}
