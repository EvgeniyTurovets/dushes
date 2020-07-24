$(function(){
    $('.cart-order-select-inner-text').click(function(){
        let text = $(this).text()
        $(this).parent('div').prev('a').find('input').val(text)
        $(this).parent('div').hide()
    })
    $('.w-plus').click(function(){
        let val = $(this).parent('div').prev('div').find('.count-value').text()
        val = parseInt(val) + 1
        $(this).parent('div').prev('div').find('.count-value').text(val)
    })
    $('.w-minus').click(function(){
        let val = $(this).parent('div').next('div').find('.count-value').text()
        if(val != 1){
            val = parseInt(val) - 1
        }
        $(this).parent('div').next('div').find('.count-value').text(val)
    })
    


    $('.js-cart-icon').click(function(){
        $('.opened-cart').toggleClass('active')
    })
    $('.js-close-cart').click(function(){
        $('.opened-cart').toggleClass('active')
    })

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".cart-block"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.opened-cart').removeClass('active')
		}
	});
    
    if($('#next-screen').length){
        let toplineH =  $('.top-line').height()
        let menusliderblockToTop = $('.menu-slider-block').offset().top + $('.menu-slider-block').height()
        $(window).scroll(function() {
           
            let target = $(this).scrollTop();

            nextScroll(target)

            if(target > toplineH) {
        
                $('.fixed-menu').addClass('fixed-menu_visible') 
        
            } else {
        
                $('.fixed-menu').removeClass('fixed-menu_visible') 
        
            }
            
            if(target > menusliderblockToTop){
                $('.fixed-slider-menu').addClass('fixed-slider-menu_visible')
            }else {
        
                $('.fixed-slider-menu').removeClass('fixed-slider-menu_visible')
        
            }
        
        });


        // скрол по странице
        let nextscreenToTop = $('#next-screen').offset().top

        function nextScroll(e){
            if( e > nextscreenToTop - 10) {
                $('.up-down-arrow').addClass('active')
            }else{
                $('.up-down-arrow').removeClass('active')
            }
        }
    }
    $('.up-down-arrow a').click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $('.up-down-arrow').toggleClass('active')
    })
})