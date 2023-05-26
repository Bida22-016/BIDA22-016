$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navigationbar').toggleClass('navTage');
  });
   $(window).on('scroll load', function() {
   
     $('.fa-bars').removeClass('fa-times');
     $('.navigationbar').removeClass('navTage');
   });
$(window).scroll(function() {
  if ($(window).scrollTop() > 68) {
    $('header .navigationmenu').addClass('stiky');
  } else {
    $('header .navigationmenu').removeClass('stiky');
  }
});
   
   $('.firstlevelslide').owlCarousel({
     items: 1,
     nav: true,
     dots: false,
     autoplay: true,
     autoplayTimeout: 8000,
     loop: true
     
   });
   $('.row').owlCarousel({
    items: 1,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 8000,
      loop: true
   });
  
});
