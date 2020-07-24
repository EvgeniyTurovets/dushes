$(function () {
  /* Слайдер */
  $('.p-projects').slick({
    centerMode: true,
    centerPadding: '25%',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.fb-modal').fancybox();
  $('.fb-raschet').fancybox();

  /* Якоря */
  $("a.h-nav__link").on("click", function () {
    if ($(window).width() < 992) {
      $(this).toggleClass('active')
      $('.h-nav').fadeToggle(100);
    }
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);


    return false;
  });

  /* Вопросы */
  $('.p-quetion__icon').on('click', function () {
    $(this).toggleClass('clos');
    $(this).parent().children('.p-quetion__description').toggleClass('clos');
    return false;
  });

  $('.h-nav__mobnav').on('click', function () {
    $(this).toggleClass('active')
    $('.h-nav').fadeToggle(100);
    return false;
  });
  $('.close-mob').on('click', function () {
    $(this).toggleClass('active')
    $('.h-nav').fadeToggle(100);
    return false;
  });

});
$(function () {
  if ($(window).width() > 767) {
    $('.sec1-img-f').paroller({
      factor: "0.1",
      type: "foreground",
      direction: "vertical"
    });



  }

  function slidermob() {
    if ($(window).width() < 767) {
      $('.p-quetion').slick({
        centerMode: true,
        centerPadding: '25%',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: false,
              centerPadding: '0',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
  slidermob()

  $(window).on('resize', function () {
    var viewportWidth = $(window).width();

    if (viewportWidth < 768) {
      slidermob()
    }
  });


  $('.tab').click(function () {
    $('.tab').removeClass('active')
    $(this).addClass('active')
  })

  $('.tab1').click(function () {
    $('.page__p-contacts').hide()
    $('.page__p-contacts').eq(0).fadeIn()
  })

  $('.tab2').click(function () {
    $('.page__p-contacts').hide()
    $('.page__p-contacts').eq(1).fadeIn()
  })
});
//parralax
/*
var pageheight = $('body').height();
var windowht = $(window).height();

var par1 = $('.paralax-new-1').offset().top;
var par2 = $('.paralax-new-2').offset().top;
var par3 = $('.paralax-new-3').offset().top;
var par4 = $('.paralax-new-4').offset().top;
var par5 = $('.paralax-new-5').offset().top;
var par6 = $('.paralax-new-6').offset().top;
var par7 = $('.paralax-new-7').offset().top;
function parallaxScroll(){
    var scrolled = $(window).scrollTop();

    $('.paralax-new-1').css('top',(par1 / 2 - windowht + (scrolled*.15))+'px');
    $('.paralax-new-2').css('top',(par2 / 2 - windowht + (scrolled*.15))+'px');
    $('.paralax-new-3').css('top',(par3 + 1000 - pageheight + (scrolled*.15))+'px');
    $('.paralax-new-4').css('top',(par4 + 16000 - pageheight + (scrolled*.15))+'px');
    $('.paralax-new-5').css('top',(par5 + 4000 - pageheight + (scrolled*.15))+'px');
    $('.paralax-new-6').css('top',(par6 + 4000 - pageheight + (scrolled*.15))+'px');
    $('.paralax-new-7').css('top',(par7 - 1000 - pageheight + (scrolled*.15))+'px');
}
$(window).scroll(function() {
    parallaxScroll();
});
*/