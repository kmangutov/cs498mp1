var y_home = $('#home').offset().top;
var y_products = $('#products').offset().top;

var link_home = $('#link-home');
var link_products = $('#link-products');

$(window).on('scroll', function() {

  var scroll = $(window).scrollTop();

  if(scroll > 10)
    $('.nav').addClass("past-main");
  else
    $('.nav').removeClass("past-main");

  if(scroll < y_products)
    link_home.addClass("nav-underline");
  else
    link_home.removeClass("nav-underline");

  if(scroll >= y_products) 
    link_products.addClass("nav-underline");
  else
    link_products.removeClass("nav-underline");
});

$('a[href*=#]').on('click', function(event) {

  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});