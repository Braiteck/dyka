$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		loop: true,
	    margin: 0,
	    dots: false,
	    nav: true,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    items: 1,
	    autoplay: true,
		autoplayTimeout: 5000
	})


	// Галерея
	$('.gallery .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    dotsSpeed: 500,
	    smartSpeed: 500,
	    margin: 0,
	    responsive : {
	    	1270 : {
		        items: 5
		    },
		    1024 : {
		        items: 4
		    },
		    768 : {
		        items: 3
		    },
		    480 : {
		        items: 2
		    },
		    0 : {
		        items: 1
		    }
		}
	})


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				}
			}
		})
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		transitionEffect : 'slide',
		animationEffect : 'fade',
		i18n : {
			'en' : {
				CLOSE : 'Закрыть'
			}
		}
	})


	// Подписка
	$('.subscribe form').submit(function(e){
		e.preventDefault()

		$(this).next().fadeIn()

		clearTimeout( timer )
		var timer = setTimeout(function(){
			$('.subscribe .success').fadeOut(300)
		}, 2000)
	})


	// Маска ввода
	$('input[type=tel]').mask('+7 (999) 999-99-99')


	// Отправка форм
	$('.form.custom_submit').submit(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#success_modal',
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				}
			}
		})
	})


	// Карточка товара
	$product_info = $('.product_info .images .big .slider').owlCarousel({
		loop: false,
	    nav: false,
	    dots: false,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1,
	    margin: 16,
	    onTranslate: function(event){
	    	$('.product_info .images .thumbs .slide a').removeClass('active')
	    	$('.product_info .images .thumbs .slide:eq('+ event.item.index +') a').addClass('active')
	    }
	})

	$('.product_info .images .thumbs .slider').owlCarousel({
		loop: false,
	    nav: true,
	    dots: false,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    margin: 16,
	    responsive : {
		    480 : {
		        items: 4
		    },
		    0 : {
		        items: 3
		    }
		}
	})

	$('.product_info .images .thumbs .slide a').click(function(e) {
		e.preventDefault()

		$('.product_info .images .thumbs .slide a').removeClass('active')

	    $product_info.trigger('to.owl.carousel', $(this).attr('data-slide-index'))

	    $(this).addClass('active')
	})


	// Табы
	$('.tabs_container').each(function(){
	    $(this).find('.tab_content:first').show()
	})

	$('.tabs li').click(function() {
	    var parentBox = $(this).parents('.tabs_container')

	    $(parentBox).find('.tabs li').removeClass('active')
	    $(this).addClass('active')
	    $(parentBox).find('.tab_content').hide()

	    var activeTab = $(this).find('a').attr('href')
	    $(activeTab).fadeIn()
	    return false
	})



	// Моб. меню
    $('header .mob_menu_link').click(function(e){
    	e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active')
        	$('header .menu').slideUp(200)
		} else{
			$(this).addClass('active')
			$('header .menu').slideDown(300)
		}
    })

	if( $(window).width() < 768 ){
 		$('header .menu a.sub_link').click(function(e){
			e.preventDefault()

			if( $(this).hasClass('active') ){
				$(this).removeClass('active').next().slideUp()
			} else{
				$(this).addClass('active').next().slideDown()
			}
		})
 	}


 	// Кнопка 'Вверх'
	$('.buttonUp a').click(function(e) {
		e.preventDefault()

		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800)
	})
})


$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(this).scrollTop() > $(window).innerHeight() ){
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}
})