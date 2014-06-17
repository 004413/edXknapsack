$(document).ready(function(){ // movement function
  $('.alert').hide();
  var value = 0;
  var mass = 0;
  var house = $('#house');
  var sack = $('#sack');
  var items = $('.item');
  items.click(function(){
    if($(this).parent()
              .attr('id')=='house'){
      sack.append( $(this) );
      mass += parseInt($(this).children('img')
                              .attr('data-weight'));
      value += parseInt($(this).children('img')
                               .attr('data-value'));
    }else{
      house.append( $(this) );
      mass -= parseInt($(this).children('img')
                              .attr('data-weight'));
      value -= parseInt($(this).children('img')
                               .attr('data-value'));
    }
  });
/*  sackItems.on('click', function(event){ // when clicked while in sack, move to house
    console.log("Also hi here.");
    var target = $(this);
    console.log("Hi there.");
    house.append(target);
    sackItems.detach(target);
    sackItems = $('#sack .item');
    houseItems = $('#house .item');
    sack = $('#sack');
    house = $('#house');
  });*/
});

function overmass(){
  $('.alert').show(200)
             .delay(200)
             .hide(200);
}
