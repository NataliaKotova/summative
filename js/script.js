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
    });

    $("#brunch").click(function(){
      navigate('brunchPage');
    });

    $(".fa-shopping-cart").click(function(){
      navigate('myOrder');
      
    });
  
    $('.menu-page__card--circle-plus').click(function() { 
      $('#shoppingCart').html( 
        '<span class="fa-stack fa-2x has-badge" data-count="1" id="shoppingCart" <i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-2x" ></i></span>'); 
  }); 

    //click on hamburger menu
    $('#menu').click(function() {
      $('nav').toggleClass('active');
    });
    $('#close').click(function(){
      $('nav').removeClass('active');
    });
  //modal - more information about dish
  $('#button1').on('click', function() {
    $('#openModal').show();
});
});