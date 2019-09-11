function navigate(currentPage, nextPage){
    jQuery('#' + currentPage).hide();
    jQuery('#' + nextPage).show();
}

$(document).ready(function(){
    $(".welcome-page__container--button").click(function(){
      navigate('welcome-page','landing-page');
    });
  });