var alertTime = 200;

$(document).ready(function(){ // movement function
  var value = 0;
  var mass = 0;
  var house = $('#house');
  var sack = $('#sack');
  var items = $('.item');
  items.mouseover(function(){
    $(this).css('cursor','pointer');
  });
  items.click(function(){
    if($(this).parent()
              .attr('id')=='house'){
      var newMass = mass + parseInt( $(this).children('img')
                                            .attr('data-weight'));
      if(newMass>20){
        overMass()
      }else{
        sack.append( $(this) );
        mass = newMass
        value += parseInt($(this).children('img')
                                 .attr('data-value'));
        $('#burglar').text("Value: $"+value+"; Mass: "+mass+" kg");
      }
    }else{
      house.append( $(this) );
      mass -= parseInt($(this).children('img')
                              .attr('data-weight'));
      value -= parseInt($(this).children('img')
                               .attr('data-value'));
      $('#burglar').text("Value: $"+value+"; Mass: "+mass+" kg");
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

function overMass(){
  $('.alert').show(alertTime)
             .delay(3*alertTime)
             .hide(alertTime);
}
