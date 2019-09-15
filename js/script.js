function navigate(currentPage, nextPage){
    jQuery('#' + currentPage).hide();
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
    $(".welcome-page__container--button").click(function(){
      navigate('welcome-page','landing-page');
    });

    $("#brunch").click(function(){
      navigate('landingPage','brunchPage');
    });

    $(".fa-shopping-cart").click(function(){
      jQuery('#myOrder').show();
      
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