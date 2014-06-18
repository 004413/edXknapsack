var alertTime = 200;

$(document).ready(function(){ // movement function
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
    var target = $(this);
    house.append(target);
    sackItems.detach(target);
    sackItems = $('#sack .item');
    houseItems = $('#house .item');
    sack = $('#sack');
    house = $('#house');
  });*/
});

function overmass(){
  $('.alert').show(alertTime)
             .delay(alertTime)
             .hide(alertTime);
}
