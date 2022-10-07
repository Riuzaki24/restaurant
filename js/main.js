$(document).ready(function(){
  $('.slaider__list').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    infifnite: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    touchThreshold: 10,
    responsive:
    [
      {
        breakpoint: 1230,
        settings:{
          slidesToShow: 2,
        } ,
      },
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        } ,
      },
    ]
  });

  setInterval(() =>{
      if($(window).scrollTop() > 0 && $('.header__bottom').hasClass('header__bottom--open') === false) {
     $('.burger').addClass('burger--follow')
      } else{
        $('.burger').removeClass('burger--follow')
      }     
    }, 0)
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__bottom').toggleClass('header__bottom--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--close')
  })
});