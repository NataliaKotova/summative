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