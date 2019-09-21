function navigate(nextPage){
    jQuery('.page').hide();
    jQuery('#' + nextPage).show();
}

$(document).ready(function(){

    $('.welcome-page__container--button').click(function(){
      navigate('landingPage');
      $('.topbar').show();
    });

    $("#brunch").click(function(){
      navigate('brunchPage');
    });

    $("#drinks").click(function(){
      navigate('brunchPage');
    });

    $("#kidsMenu").click(function(){
      navigate('brunchPage');
    });

    $('#desserts').click(function(){
      navigate('brunchPage');
    });

    $('.fa-shopping-cart').click(function(){
      navigate('myOrder');
    });
    
    $('.order-page__footer').click(function(){
      navigate('landingPage');
    });

  $('.item__card--order').click(function() { 
      $('#shoppingCart').html( 
        '<span class="fa-stack fa-2x has-badge" data-count="1" id="shoppingCart"></span><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-2x" ></i>'); 
  }); 

  $('#menu').click(function() {
    $('nav').toggleClass('active');
  });
  
  $('.fa-bars').click(function(){
    
  });
  
  $('.topbar__navigation--menu-go2menu').click(function() {
    navigate('landingPage');
    $('nav').removeClass('active');
  });

  $('.topbar__navigation--menu-go2form').click(function() {
    $('nav').removeClass('active');
    navigate('feedbackPage');
  });

  $('.topbar__navigation--menu-go2progress').click(function(){
    $('nav').removeClass('active');
    navigate('orderProgress');
  });

  // function addOrderReceived(){
  //   $('#orderVisualisation').html( 
  //     '<div class="order-progress__received"><img src="images/order-received-grey.png" alt=""><span class="order-progress__visualisation-icon">order received</span></div>'
  // )};

  // function addOrderCooking(){
  //   $('#orderVisualisation').append( 
  //     '<div class="order-progress__cooking"><img src="images/order-cooking-grey.png" alt=""><span class="order-progress__visualisation-icon">we\'re cooking for you</span></div>'
  // )};

  // function addOrderReady(){
  //   $('#orderVisualisation').append( 
  //     '<div class="order-progress__ready"><img src="images/order-dish-grey.png" alt=""><span class="order-progress__visualisation-icon">order is ready</span></div>'
  // )};


  function addOrderReceived(){
    $('#orderReceived').attr('src','images/order-received-green.png');
    $('#orderReceivedComment').removeClass('order-progress__comment').addClass('green');
  };
  
  function addOrderCooking(){
    $('#orderCooking').attr('src','images/order-cooking-green.png');
    $('#orderCookingComment').removeClass('order-progress__comment').addClass('green');
    $('#orderReceived').attr('src','images/order-received-grey.png');
    $('#orderReceivedComment').removeClass('green').addClass('order-progress__comment');
  };

  function addOrderReady(){
    $('#orderReady').attr('src','images/order-ready-green.jpg');
    $('#orderReadyComment').removeClass('order-progress__comment').addClass('green');
    $('#orderCooking').attr('src','images/order-cooking-grey.png');
    $('#orderCookingComment').removeClass('green').addClass('order-progress__comment');
  };

  function addOrderComing(){
    $('#orderComing').attr('src','images/order-men-green.jpg');
    $('#orderComingComment').removeClass('order-progress__comment').addClass('green');
    $('#orderReady').attr('src','images/order-dish-grey.png');
    $('#orderReadyComment').removeClass('green').addClass('order-progress__comment');
  };

  $('.order-page__button').click(function(){
    $('nav').removeClass('active');
    navigate('orderProgress');
    //rendering timer - order progress page
    //source: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
      var min = 15;
      var sec = 60;
      setInterval(function() {
      $(".order-progress__container--timer").html(min + " : " + sec);
      sec--;
      if (sec == 00) {
        min--;
        sec = 60;
        if (min == 00) {
          min = 15;
        }
      }
    }, 1000);
    
    var orderStatusReceived = setTimeout(addOrderReceived, 3000);
    var orderStatusCooking = setTimeout(addOrderCooking, 6000);
    var orderStatusReady = setTimeout(addOrderReady, 9000);
    var orderStatusComing = setTimeout(addOrderComing,11000);
  });

  //click on hamburger menu
  $('.topbar__button--white').click(function() {
    $('.topbar__button--white').hide();
    $('.topbar__message').show();
    // $('.topbar__button--yellow').show();
  });

  $('#close').click(function(){
    $('nav').toggleClass('active');
  });
//counting items
// plus (clicked)
$('#itemPlus').click(function(){
  var itemsAmount=$('.item__card--amount').text();
  var itemsNumber=Number(itemsAmount);
  var itemsWanted=itemsNumber+1;
  $('.item__card--amount').text(itemsWanted);
});
//minus (clicked)
$('#itemMinus').click(function(){
  var itemsAmount=$('.item__card--amount').text();
  var itemsNumber=Number(itemsAmount);
  if(itemsNumber>1){
    var itemsWanted=itemsNumber-1;
    $('.item__card--amount').text(itemsWanted);
  }
});

//rendering value of items in cart badge
$('#orderButton').click(function(){
  var itemsWanted=$('#itemsAmount').text();
  var itemsWantedNumber=Number(itemsWanted);
  var itemsInCart=$('#itemsInCart').text();
  var itemsInCartNumber=Number(itemsInCart);
  var totalItems=itemsWantedNumber+itemsInCartNumber;
  $('.badge').text(totalItems);
});

});



