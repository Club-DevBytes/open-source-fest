if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope:',  registration.scope);
    }).catch(function(error) {
      console.log('ServiceWorker registration failed:', error);
    });
  }
(function($) {
    // 'use strict';

    // Main Navigation
    // $( '.hamburger-menu' ).on( 'click', function() {
    //     $(this).toggleClass('open');
    //     $('.site-navigation').toggleClass('show');
    // });

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
        });
        
        browserWindow.on('load', function () {
			$('.preloader').fadeOut('slow', function () {
					$(this).remove();
			});
    });
    
    
    // ---------------------------------------------------------------------

    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu').toggleClass('open');
        $('.site-navigation').toggleClass('show');
      });
      
      $( '.site-navigation ul' ).on("click", function(){
        $('.hamburger-menu').toggleClass('open');
        $('.site-navigation').toggleClass('show');
      });

    var countdown_date = $('.countdown').data("date");

    $('.countdown').countdown(countdown_date, function(event) {
        $('.dday').html(event.strftime('%-D'));
        $('.dhour').html(event.strftime('%-H'));
        $('.dmin').html(event.strftime('%-M'));
        $('.dsec').html(event.strftime('%-S'));
    });
    // Events Slider
    var next_event_slider = new Swiper('.next-event-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            // when window width is <= 320px
            576: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2
            },
            // when window width is <= 640px
            1200: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.next-event-slider-wrap .swiper-button-next'
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          }
    });

    // Testimonial slider
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-container .swiper-button-next'
        }
    });

    // Buy Tickets Form
    $(".increase-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        $n.val(Number($n.val())+1 );
    });

    $(".decrease-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });

    $(".clear-ticket-count").on( 'click', function() {
        var $count = $('.ticket-count');
        $count.val('1');
    });

    // Tabs
    $(function() {
        $('.tab-content:first-child').show();

        $('.tab-nav').bind('click', function(e) {
            $this = $(this);
            $tabs = $this.parent().parent().next();
            $target = $($this.data("target"));
            $this.siblings().removeClass('active');
            $target.siblings().css("display", "none");
            $this.addClass('active');
            $target.fadeIn("slow");
        });

        $('.tab-nav:first-child').trigger('click');
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({   
        accordion: false,
      //  contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

    // Circular Progress Bar
    $('#hard_work').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<span>%</span>');
    });

    $('#good_music').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.83,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(83 * progress) + '<span>%</span>');
    });

    $('#power').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.65,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(65 * progress) + '<span>%</span>');
    });

    $('#fun_time').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 1,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(100 * progress) + '<span>%</span>');
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

    // Load more events
    var $container      = $('.blog-list-page');
    var $item           = $('.single-blog-content');

    $item.slice(0, 6).addClass('visible');

    $('.load-more .btn').on('click', function (e) {
        e.preventDefault();

        $('.single-blog-content:hidden').slice(0, 6).addClass('visible');
        $container.masonry();
    });

    /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
    

})(jQuery);
