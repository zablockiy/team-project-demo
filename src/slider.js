// $('.fade').slick({
//   dots: true,
//   arrows : false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

$(document).ready(function(){
  $('.customer-list').slick({
    arrows: false,
    dots: true,
    speed: 2500,
    easing: 'ease',
    autoplay: true,
    autoplayspeed: 6000,
  });
});