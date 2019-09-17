function navigate(nextPage){
    jQuery('.page').hide();
    jQuery('#' + nextPage).show();
}

var items = [
  {
    id:1,
    name:"VEGGIE BREKKIE (V, GF)",
    price:18,
  },
  {
    id:2,
    name:"CRISPY CHICKEN BURGER & CAJUN FRIES",
    price:20,
  }
]

$(document).ready(function(){
    $('.welcome-page__container--button').click(function(){
      navigate('landingPage');
      $('.topbar').show();
    });

    $("#brunch").click(function(){
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
    $('.topbar__button--yellow').show();
  });

  $('#close').click(function(){
    $('nav').toggleClass('active');
  });


});