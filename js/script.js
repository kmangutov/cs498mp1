var y_home = $('#home').offset().top;
var y_products = $('#products').offset().top;


$(window).on('scroll', function() {

  var scroll = $(window).scrollTop();

  if(scroll > 10)
    $('.nav').addClass("past-main");
  else
    $('.nav').removeClass("past-main");
});

$('a[href*=#]').on('click', function(event) {

  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});