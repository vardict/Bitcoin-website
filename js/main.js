$(document).ready(function () {


    //Navigation
    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggle(1000);
    });


    //Carousel
    if ($('.slider').length > 0) {
        $('.slider').owlCarousel({

            items: 1,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    slideBy: 1,
                    margin: 0
                },
                570: {
                    items: 2,
                    dots: false,
                    slideBy: 2
                },
                700: {
                    items: 2,
                    dots: true,
                    slideBy: 2,
                    margin: 10
                },
                990: {
                    items: 2,
                    dots: true,
                    slideBy: 2,
                    margin: 10
                }
            }

        });
    }
    
    //Customer slider
    if ($('.customer-slider').length > 0) {
        $('.customer-slider').owlCarousel({
            items: 2,
            slideBy: 2,
            autoplay: 2,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    slideBy: 1

                },
                570: {
                    items: 1,
                    dots: false,
                    slideBy: 1
                },
                700: {
                    items: 1,
                    dots: true,
                    slideBy: 1
                },
                990: {
                    items: 2,
                    dots: true,
                    slideBy: 2,
                    margin: 30
                }

            }
        });
    }

//Animation
    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay'); //ovo je ako imamo kasnjenje animacije

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    $(window).scroll(function () {
        animation();
    });
    
    animation();


    //Gallery
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


});


