$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['index', 'vision_mission', 'contact'],
        sectionsColor: ['#124066', '#fff', '#124066'],
        css3: true,
        scrollingSpeed: 800,
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);
            if (index == 1 && direction == 'down') {
                $('.logo-usaha').fadeOut();
                $('#header').removeClass('page2');
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('.open span').css('background-color', '#000');
                } else {
                    $('.open span').css('background-color', '#fff');
                }
                $('.animation-in').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.typing-title-container').removeClass('fadeInUp').addClass('fadeOutLeft');
                $('.number-home').removeClass('fadeInRight').addClass('fadeOutRight');
                $('.scroll-icon').css('opacity', '0');
            } else if (index == 2 && direction == 'up') {
                $('.logo-usaha').fadeIn().css('display', 'initial');
                $('#header').removeClass('page2');
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('.open span').css('background-color', '#fff');
                } else {
                    $('.open span').css('background-color', '#000');
                }
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
                $('.scroll-icon').css('opacity', '1');
            } else if (index == 2 && direction == 'down') {
                $('#header').removeClass('page2');
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('.open span').css('background-color', '#fff');
                } else {
                    $('.open span').css('background-color', '#000');
                }
                $('.text-map-sg .title-country').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-id .title-country').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-sg p').removeClass('fadeOut').addClass('fadeInUp');
                $('.text-map-id p').removeClass('fadeOut').addClass('fadeInUp');
            } else if (index == 3 && direction == 'up') {
                $('#header').removeClass('page2');
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('.open span').css('background-color', '#000');
                } else {
                    $('.open span').css('background-color', '#fff');
                }
                $('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOut');
                $('.text-map-id p').removeClass('fadeInUp').addClass('fadeOut');
            }
        },
        afterLoad: function() {
            var url_page = $(location).attr('href');
            var menu_name = ['index', 'vision_mission', 'contact'];
            if (url_page.indexOf(menu_name[0]) != -1) {
                $('.logo-usaha').fadeIn().css('display', 'initial');
                $('#header').removeClass('page2');
                $('.open span').css('background-color', '#fff');
            } else if (url_page.indexOf(menu_name[1]) != -1) {
                $('.logo-usaha').fadeOut();
                $('#header').removeClass('page2');
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('.open span').css('background-color', '#000');
                } else {
                    $('.open span').css('background-color', '#fff');
                }
            } else if (url_page.indexOf(menu_name[2]) != -1) {
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
            if (index == 3) {
                $('.fp-controlArrow.fp-next').css('display', 'inherit');
                $('.fp-controlArrow.fp-prev').css('display', 'none');

            }
            if (slideIndex == 1) {
                $('.fp-controlArrow.fp-next').css('display', 'none');
                $('.fp-controlArrow.fp-prev').css('display', 'inherit');

            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 3 && direction == 'right') {
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
});

$(document).ready(function() {
    $('#section2 .fp-prev').append('<i class="fas fa-chevron-left"></i>');
    $('#section2 .fp-next').append('<i class="fas fa-chevron-right"></i>');
});


function typeAbout() {
    var typed3 = new Typed('#typing-about', {
        strings: ['MENGENAL DIGIC <br>Business Engineering'],
        typeSpeed: 25,
        loop: false,
    });
}


$(window).load(function() {
    setTimeout(function() {
        typeAbout();
    }, 2100);
    setTimeout(function() {
        $('.animation-in').css('display', 'block').addClass('fadeInUp');
    }, 2600);

});

var url_core = window.location.origin;

$(document).ready(function() {
    var a = document.getElementById("svg1");
    a.addEventListener("load", function() {
        var svgDoc = a.contentDocument;
        var svgRoot = svgDoc.documentElement;
        $("#svg_4", svgRoot).on('click', function() {
            $('.vision-part').addClass('hide');
            $('.mission-part').removeClass('hide');
            $('.misi-svg').removeClass('slideOutRight').addClass('slideInRight');
            $('.misi-h1').removeClass('fadeOutLeft').addClass('fadeInUp');
            $('.text-mission').removeClass('fadeOutLeft').addClass('fadeInUp');
        });
    }, false);

    var b = document.getElementById("svg2");
    b.addEventListener("load", function() {
        var svgDoc = b.contentDocument;
        var svgRoot = svgDoc.documentElement;
        $("#svg_71", svgRoot).on('click', function() {
            $('.mission-part').addClass('hide');
            $('.vision-part').removeClass('hide');
            $('.visi-svg').removeClass('slideOutRight').addClass('slideInRight');
            $('.visi-h1').removeClass('fadeOutLeft').addClass('fadeInUp');
            $('.text-vision').removeClass('fadeOutLeft').addClass('fadeInUp');
        });
    }, false);

})

$('.menu.see-me').on("click", function() {
    setTimeout(function() {
        $('.about-us .side-desc').toggleClass('active');
    }, 200);
    setTimeout(function() {
        $('.arrow-minimize').toggleClass('active');
    }, 200);
    $('.side-desc').css('pointer-events', 'none');
    $('.menu.see-me').css('pointer-events', 'none');
    $('.bg-shadow-about').toggleClass('active');
    $('.mission-side-text').toggleClass('off');
});

$('.close-side-desc').on("click", function() {
    $('.about-us .side-desc').toggleClass('active');
    $('.bg-shadow-about').toggleClass('active');
    $('.arrow-minimize').toggleClass('active');
    $('.side-desc').css('pointer-events', 'inherit');
    $('.menu.see-me').css('pointer-events', 'inherit');
    $('.side-desc-checkbox').prop('checked', false);
    $('.mission-side-text').toggleClass('off');
});
$('.bg-shadow-about').click(function() {
    $('.about-us .side-desc').toggleClass('active');
    $('.bg-shadow-about').toggleClass('active');
    $('.arrow-minimize').toggleClass('active');
    $('.side-desc').css('pointer-events', 'inherit');
    $('.menu.see-me').css('pointer-events', 'inherit');
    $('.side-desc-checkbox').prop('checked', false);
    $('.mission-side-text').toggleClass('off');
});