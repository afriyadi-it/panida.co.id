var x1 = true;
var x2 = true;
var x3 = true;
var x4 = true;

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'services', 'works', 'contact'],
        sectionsColor: ['#124066', '#fff', '#fff', '#fff', '#124066'],
        css3: true,
        scrollingSpeed: 900,
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);
            if (index == 1 && direction == 'down') {
                $('#header').addClass('page2');
                $('.logo-usaha').removeClass('fadeInLeft').addClass('fadeOutUp');
                $('.open span').css('background-color', '#000');
                $('.animation-in').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.typing-title-container').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.number-home').removeClass('fadeInRight').addClass('fadeOutRight');
                $('.about-title').removeClass('zoomOut').addClass('zoomIn');
                $('.about-side-btn').removeClass('slideOutRight').addClass('slideInRight');
                $('.scroll-icon').css('opacity','0');
            } else if (index == 2 && direction == 'up') {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
                $('.logo-usaha').css('display', 'initial').removeClass('fadeOutUp').addClass('fadeInLeft');
                setTimeout(
                    function() {
                        $('.typing-title-container').removeClass('fadeOutLeft').addClass('fadeInUp');
                    }, 400);
                setTimeout(
                    function() {
                        $('.animation-in').removeClass('fadeOutLeft').addClass('fadeInUp');
                    }, 700);
                setTimeout(
                    function() {
                        $('.number-home').removeClass('fadeOutRight').addClass('fadeInRight');
                    }, 600);
                $('.about-side-btn').removeClass('slideInRight').addClass('slideOutRight');
                $('.about-title').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count1').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count2').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count3').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count4').removeClass('zoomIn').addClass('zoomOut');
                $('.scroll-icon').css('opacity','1');
            } else if (index == 2 && direction == 'down') {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff').addClass('mobile-span-color');
                $('.about-side-btn').removeClass('slideInRight').addClass('fadeOutRight');
                $('.about-title').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count1').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count2').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count3').removeClass('zoomIn').addClass('zoomOut');
                $('.about-count4').removeClass('zoomIn').addClass('zoomOut');
                $('.bg-wrap1').removeClass('fadeOutRight').addClass('slideInRight');
                $('.vertical-center-3').removeClass('fadeOutRight').addClass('slideInRight');
                setTimeout(
                    function() {
                        $('.str5').removeClass('fadeOutRight').addClass('fadeInUp');
                    }, 200);
                $(".vertical-center-3").slick('unslick');
                $(".vertical-center-3").slick({
                    dots: false,
                    arrows: false,
                    verticalSwiping: false,
                    autoplay: true,
                    autoplaySpeed: 700,
                    speed: 700,
                    vertical: true,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
            } else if (index == 3 && direction == 'up') {
                $('#header').addClass('page2');
                $('.open span').css('background-color', '#000').removeClass('mobile-span-color');
                $('.about-side-btn').removeClass('slideOutRight').addClass('slideInRight');
                $('.about-title').removeClass('zoomOut').addClass('zoomIn');
                $('.bg-wrap1').removeClass('slideInRight').addClass('fadeOutRight');
                $('.vertical-center-3').removeClass('slideInRight').addClass('fadeOutRight');
                setTimeout(
                    function() {
                        $('.right-bg-rounded').removeClass('fadeInRight').addClass('fadeOutRight');
                    }, 200);
                $('.str5').removeClass('fadeInUp').addClass('fadeOutRight');
                $('.services-title').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.services-subtitle').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.services-desc-3').removeClass('fadeInUp').addClass('fadeOutLeft');
            } else if (index == 3 && direction == 'down') {
                $('#header').addClass('page2');
                $('.open span').css('background-color', '#000').removeClass('mobile-span-color');
                $('.bg-wrap1').removeClass('slideInRight').addClass('fadeOutRight');
                $('.vertical-center-3').removeClass('slideInRight').addClass('fadeOutRight');
                setTimeout(
                    function() {
                        $('.right-bg-rounded').removeClass('fadeInRight').addClass('fadeOutRight');
                    }, 200);
                $('.str5').removeClass('fadeInUp').addClass('fadeOutRight');
                $('.services-title').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.services-subtitle').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.services-desc-3').removeClass('fadeInUp').addClass('fadeOutLeft');
                setTimeout(
                    function() {
                        $('.works-section-home').css('pointer-events','auto');
                    }, 200);
            } else if (index == 4 && direction == 'up') {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff').addClass('mobile-span-color');
                $('.right-bg-rounded').removeClass('fadeOutRight').addClass('fadeInRight');
                $('.bg-wrap1').removeClass('fadeOutRight').addClass('slideInRight');
                $('.vertical-center-3').removeClass('fadeOutRight').addClass('slideInRight');
                setTimeout(
                    function() {
                        $('.str5').removeClass('fadeOutRight').addClass('fadeInUp');
                    }, 200);
                
                $(".vertical-center-3").slick('unslick');
                $(".vertical-center-3").slick({
                    dots: false,
                    arrows: false,
                    verticalSwiping: false,
                    autoplay: true,
                    autoplaySpeed: 700,
                    speed: 700,
                    vertical: true,
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
                $('.works-section-home').css('pointer-events','none');
            } else if (index == 4 && direction == 'down') {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
                $('.text-map-sg .title-country').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-id .title-country').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-sg p').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-id p').removeClass('fadeOut').addClass('fadeInUp');
                $('.works-section-home').css('pointer-events','none');
            } else if (index == 5 && direction == 'up') {
                $('#header').addClass('page2');
                $('.open span').css('background-color', '#000');
                $('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-id p').removeClass('fadeInUp').addClass('fadeOut');
                setTimeout(
                    function() {
                        $('.works-section-home').css('pointer-events','auto');
                    }, 200);
            }
        },
        afterLoad: function() {
            var url_page = $(location).attr('href');
            var menu_name = ['home', 'about', 'services', 'page4', 'contact'];
            if (url_page.indexOf(menu_name[0]) != -1) {
                $('.logo-usaha').fadeIn().css('display', 'initial');
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
            } else if (url_page.indexOf(menu_name[1]) != -1) {
                $('.logo-usaha').fadeOut();
                $('#header').addClass('page2');
                $('.open span').css('background-color', '#000');
                counterAnimate1();
                $('.about-count1').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
                counterAnimate2();
                $('.about-count2').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
                counterAnimate3();
                $('.about-count3').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
                counterAnimate4();
                $('.about-count4').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
            } else if (url_page.indexOf(menu_name[2]) != -1) {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
                setTimeout(
                    function() {
                        $('.services-title').css('opacity', '1').removeClass('fadeOutLeft').addClass('fadeInUp');
                    }, 0);
                setTimeout(
                    function() {
                        $('.services-subtitle').css('opacity', '1').removeClass('fadeOutLeft').addClass('fadeInUp');
                        $('.services-desc-3').css('opacity', '1').removeClass('fadeOutLeft').addClass('fadeInUp');
                    }, 200);
            } else if (url_page.indexOf(menu_name[3]) != -1) {
                $('#header').addClass('page2');
                $('.open span').css('background-color', '#000');
            } else if (url_page.indexOf(menu_name[4]) != -1) {
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
                var hash_url = $(location).attr('hash');
                var slide_id = "#contact/1";
                var slide_sg = "#contact";
                if (hash_url === slide_id) {
                    $('.fp-controlArrow.fp-next').css('display', 'none');
                    $('.fp-controlArrow.fp-prev').css('display', 'inherit');
                } else if (hash_url === slide_sg) {
                    $('.fp-controlArrow.fp-next').css('display', 'inherit');
                    $('.fp-controlArrow.fp-prev').css('display', 'none');
                }
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            if (index == 5) {
                $('.fp-controlArrow.fp-next').css('display', 'inherit');
                $('.fp-controlArrow.fp-prev').css('display', 'none');

            }
            if (slideIndex == 1) {
                $('.fp-controlArrow.fp-next').css('display', 'none');
                $('.fp-controlArrow.fp-prev').css('display', 'inherit');

            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 5 && direction == 'right') {
                $('.fp-controlArrow.fp-next').css('display', 'none');
                setTimeout(
                    function() {
                        $('.text-map-id .title-country').removeClass('fadeOutLeft').addClass('fadeInUp');
                        $('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOutRight');
                        $('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOutRight');
                    }, 0);
                setTimeout(
                    function() {
                        $('.text-map-id p').removeClass('fadeOutLeft').addClass('fadeInUp');
                    }, 100);
            }
            if (slideIndex == 1 && direction == 'left') {
                $('.fp-controlArrow.fp-prev').css('display', 'none');
                setTimeout(
                    function() {
                        $('.text-map-sg .title-country').removeClass('fadeOutRight').addClass('fadeInUp');
                        $('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOutLeft');
                        $('.text-map-id p').removeClass('fadeInUp').addClass('fadeOutLeft');
                    }, 0);
                setTimeout(
                    function() {
                        $('.text-map-sg p').removeClass('fadeOutRight').addClass('fadeInUp');
                    }, 100);
            }
        }
    });
    $(".vertical-center-3").slick({
        dots: false,
        arrows: false,
        verticalSwiping: false,
        autoplay: false,
        autoplaySpeed: 700,
        speed: 700,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});

$(document).ready(function() {
    $('#section4 .fp-prev').append('<i class="fas fa-chevron-left"></i>');
    $('#section4 .fp-next').append('<i class="fas fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
    })
});

function counterAnimate1() {
    if (x1) {
        $('.count1').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        x1 = false;
    }
}

function counterAnimate2() {
    if (x2) {
        $('.count2').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        x2 = false;
    }
}

function counterAnimate3() {
    if (x3) {
        $('.count3').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        x3 = false;
    }
}

function counterAnimate4() {
    if (x4) {
        $('.count4').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        x4 = false;
    }
}

$(window).load(function() {
    $('.str5').liMarquee({
        direction: 'up',
        loop: -1,
        scrolldelay: 0,
        scrollamount: 25,
        circular: true,
        drag: false
    });
});


$(".box-porto3").hover(function() {
    if ($('.box-porto3').is(':hover')) {
        $('#header').removeClass('page2');
        $('.open span').css('background-color', '#fff').addClass('mobile-span-color');
    } else {
        $('#header').addClass('page2');
        $('.open span').css('background-color', '#000').removeClass('mobile-span-color');
    }
});

$(".box-porto1").hover(function() {
    if ($('.box-porto1').is(':hover')) {
        $('.open span').addClass('mobile-span-color-white');
    } else {
        $('.open span').removeClass('mobile-span-color-white');
    }
});


function typeHome() {
    var typed2 = new Typed('#typing-home', {
        strings: ['DIGITALISASI <br>BISNIS ANDA'],
        typeSpeed: 25,
        loop: false,
    });
}

$(window).load(function() {
    setTimeout(function() {
        typeHome();
    }, 2100);
    setTimeout(function() {
        $('.animation-in').css('display', 'block').addClass('fadeInUp');
    }, 2600);

});

// To Store
$(".services-click").click(function() {
    $.session.set("slide-id", $(this).data('id'));
});

$('.menu.see-me').on("click", function() {
    $('#header').toggleClass('page2');
    $('.open span').css('background-color', '#fff');
    setTimeout(function() {
        $('.about-us .side-desc').toggleClass('active');
    }, 200);
    setTimeout(function() {
        $('.arrow-minimize').toggleClass('active');
    }, 200);
    $('.side-desc').css('pointer-events','none');
    $('.menu.see-me').css('pointer-events','none');
    $('.bg-shadow-about').toggleClass('active');
});

$('.close-side-desc').on("click", function() {
    $('.about-us .side-desc').toggleClass('active');
    $('#header').toggleClass('page2');
    $('.open span').css('background-color', '#000');
    $('.bg-shadow-about').toggleClass('active');
    $('.arrow-minimize').toggleClass('active');
    $('.side-desc').css('pointer-events','inherit');
    $('.menu.see-me').css('pointer-events','inherit');
    $('.side-desc-checkbox').prop('checked', false);
});
$('.bg-shadow-about').click(function() {
    $('.about-us .side-desc').toggleClass('active');
    $('#header').toggleClass('page2');
    $('.open span').css('background-color', '#000');
    $('.bg-shadow-about').toggleClass('active');
    $('.arrow-minimize').toggleClass('active');
    $('.side-desc').css('pointer-events','inherit');
    $('.menu.see-me').css('pointer-events','inherit');
    $('.side-desc-checkbox').prop('checked', false);
});
