
$(function() {

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

  var img_width = 300;//$('.carousel-item').width();
  var index = 0;
  var size = 3;
  var x = 0;

  $('#carousel-left').on('click', function(event){

    if(index > 0) {
      x -= img_width;
      $('.carousel-content')
        .animate({left: -1 * x + "px"}, 800);
      index--;
      console.log("new index: " + index);
    }
  });

  $('#carousel-right').on('click', function(event){

    if(index < size - 1) {
      x += img_width;
      $('.carousel-content')
        .animate({left: -1 * x + "px"}, 800);

      index++;
      console.log("new index: " + index);
    }
  });

  $("#modal-launcher, #modal-background, #modal-close").click(function() {
        $("#modal-content, #modal-background").toggleClass("active");
  });

  $(".open-modal").click(function() {
    $(".modal-background").fadeIn();
  });

  $(".modal-background").click(function(){

    $(".modal-background").fadeOut();
  });

});