$(window).on('scroll', function() {

  var scroll = $(window).scrollTop();

  if(scroll > 10)
    $('.nav').addClass("past-main");
  else
    $('.nav').removeClass("past-main");
});