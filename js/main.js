$(function () {
    if ($('.parallax-decor').length) {
        $('.parallax-decor').paroller({
            factor: "0.5",
            type: "foreground",
            direction: "vertical"
        });
    }

    $('.cart-order-select-inner-text').click(function () {
        let text = $(this).text()
        $(this).parent('div').prev('a').find('input').val(text)
        $(this).parent('div').hide()
    })

    $('.cart-order-select-link').click(function () {
        $(this).next('.cart-order-select-inner').fadeIn()
    })

    $('.select-close-icon').click(function () {
        $(this).parent('.cart-order-select-inner').fadeOut()
    })

    $('.form-radio').click(function () {
        $(this).parent('div').parent('div').find('.form-radio-button').removeClass('w--redirected-checked')
        $(this).find('.form-radio-button').addClass('w--redirected-checked')
    })
    $('.lk-adresses-form .form-radio').click(function () {
        $(this).parents('.lk-adresses-form').find('.form-radio-button').removeClass('w--redirected-checked')
        $(this).find('.form-radio-button').addClass('w--redirected-checked')
    })
    $('label.choose-restaurant').click(function () {
        $('div.enter-address').css('display', 'none')
        $('div.choose-restaurant').css('display', 'block')
    })

    $('label.enter-adress').click(function () {
        $('div.choose-restaurant').css('display', 'none')
        $('div.enter-address').css('display', 'block')
    })

    $('.cart-order-form-column_right a').click(function () {
        $(this).closest('.cart-order-select-inner').fadeOut()
    })

    $('.w-plus').click(function () {
        let val = $(this).parent('div').prev('div').find('.count-value').text()
        val = parseInt(val) + 1
        $(this).parent('div').prev('div').find('.count-value').text(val)
    })
    $('.w-minus').click(function () {
        let val = $(this).parent('div').next('div').find('.count-value').text()
        if (val != 1) {
            val = parseInt(val) - 1
        }
        $(this).parent('div').next('div').find('.count-value').text(val)
    })

    $('.menu-icon').click(function () {
        $('.menu-list').fadeIn()
    })
    $('.select-close-icon_sub-menu').click(function () {
        $('.menu-list').fadeOut()
    })


    $('.js-cart-icon').click(function () {
        $('.opened-cart').toggleClass('active')
    })
    $('.js-close-cart').click(function () {
        $('.opened-cart').toggleClass('active')
    })

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".cart-block"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.opened-cart').removeClass('active')
        }
    });

    if ($('#next-screen').length) {
        let toplineH = $('.top-line').height()
        let menusliderblockToTop = $('.menu-slider-block').offset().top + $('.menu-slider-block').height()
        $(window).scroll(function () {

            let target = $(this).scrollTop();

            nextScroll(target)

            if (target > toplineH) {

                $('.fixed-menu').addClass('fixed-menu_visible')

            } else {

                $('.fixed-menu').removeClass('fixed-menu_visible')

            }

            if (target > menusliderblockToTop) {
                $('.fixed-slider-menu').addClass('fixed-slider-menu_visible')
            } else {

                $('.fixed-slider-menu').removeClass('fixed-slider-menu_visible')

            }

        });


        // скрол по странице
        let nextscreenToTop = $('#next-screen').offset().top

        function nextScroll(e) {
            if (e > nextscreenToTop - 10) {
                $('.up-down-arrow').addClass('active')
            } else {
                $('.up-down-arrow').removeClass('active')
            }
        }
    } else {
        $(window).scroll(function () {
            let target = $(this).scrollTop();
            console.log(target)
            if (target > $('body').height() / 2) {
                $('.up-down-arrow').addClass('visible-arrow')
            }
            else {
                $('.up-down-arrow').removeClass('visible-arrow')
            }
        })
    }
    $('.up-down-arrow a').click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
        $('.up-down-arrow').toggleClass('active')
    })

    $('.button.js-button_add-to-cart').click(function () {
        event.preventDefault()
        $('.js-cart-icon').addClass('additem')
        setTimeout(() => {
            $('.js-cart-icon').removeClass('additem')
        }, 200);
    })
   
    var smartslider = new Swiper('.smartslider', {
        slidesPerView: 1,
        effect: 'fade',
        speed: 1000,
        updateOnWindowResize: true,
        spaceBetween: 0,
        loop: !0,
        autoplay: {
            delay: 7000,
          },
        preventClicksPropagation: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
    // $(window).resize(function(){
    //     smartslider.reInit()
    // })
    $('.preload').fadeOut()
})