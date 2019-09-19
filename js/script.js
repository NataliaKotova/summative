function navigate(nextPage){
    jQuery('.page').hide();
    jQuery('#' + nextPage).show();
}

$(document).ready(function(){
  // //input, remove placeholder - welcome page
  //   $('#tableNumberInput').click(function(){
  //     $(this).removeAttr('placeholder');
  //   });

  // //input, remove placeholder - item page
  //   $('.item__card--input').click(function(){
  //     $(this).removeAttr('placeholder');
  //   });

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

    $("#desserts").click(function(){
      navigate('brunchPage');
    });

    $(".fa-shopping-cart").click(function(){
      navigate('myOrder');
    });

    $(".menu-page__card--circle-plus").click(function(){
      navigate('itemPage');
    });
    
    $(".order-page__footer").click(function(){
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