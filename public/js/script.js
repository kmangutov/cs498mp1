var y_home=$("#home").offset().top,y_products=$("#products").offset().top,link_home=$("#link-home"),link_products=$("#link-products");$(window).on("scroll",function(){var a=$(window).scrollTop();a>10?$(".nav").addClass("past-main"):$(".nav").removeClass("past-main"),y_products>a?link_home.addClass("nav-underline"):link_home.removeClass("nav-underline"),a>=y_products?link_products.addClass("nav-underline"):link_products.removeClass("nav-underline")}),$("a[href*=#]").on("click",function(a){a.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},500)});