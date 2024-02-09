$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['index', 'client1', 'client2', 'client3', 'contact'],
		sectionsColor: ['#124066', '#fff', '#fff', '#fff', '#124066'],
		css3: true,
		scrollingSpeed: 800,
		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			if (index == 1 && direction == 'down') {
				$('.logo-usaha').fadeOut();
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('#header').removeClass('header-works');
			} else if (index == 2 && direction == 'up') {
				$('.logo-usaha').fadeIn().css('display', 'initial');
				$('#header').removeClass('page2');
				$('.open span').css('background-color', '#fff');
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
					}, 500);
				$('#header').removeClass('header-works');
				$('.scroll-icon').css('opacity','1');
			} else if (index == 2 && direction == 'down') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
			} else if (index == 3 && direction == 'up') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
			} else if (index == 3 && direction == 'down') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#fff');
			} else if (index == 4 && direction == 'up') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
			} else if (index == 4 && direction == 'down') {
				$('#header').removeClass('page2');
        $('.open span').css('background-color', '#fff');
        $('.text-map-sg .title-country').removeClass('fadeOut').addClass('fadeInUp');
        $('.text-map-id .title-country').removeClass('fadeOut').addClass('fadeInUp');
        $('.text-map-sg p').removeClass('fadeOut').addClass('fadeInUp');
        $('.text-map-id p').removeClass('fadeOut').addClass('fadeInUp');
			} else if (index == 5 && direction == 'up') {
				$('#header').addClass('page2');
        $('.open span').css('background-color', '#000');
        $('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOut');
        $('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOut');
        $('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOut');
        $('.text-map-id p').removeClass('fadeInUp').addClass('fadeOut');
			}
		},
		afterLoad: function() {
			var url_page = $(location).attr('href');
			var menu_name = ['index', 'client1', 'client2', 'client3', 'contact'];
			if (url_page.indexOf(menu_name[0]) != -1) {
				$('.logo-usaha').fadeIn().css('display', 'initial');
				$('#header').removeClass('page2');
				$('.open span').css('background-color', '#fff');
			} else if (url_page.indexOf(menu_name[1]) != -1) {
				$('.logo-usaha').fadeOut();
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('#header').addClass('header-works');
			} else if (url_page.indexOf(menu_name[2]) != -1) {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
			} else if (url_page.indexOf(menu_name[10]) != -1) {
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
        if (index == 11) {
            $('.fp-controlArrow.fp-next').css('display', 'inherit');
            $('.fp-controlArrow.fp-prev').css('display', 'none');

        }
        if (slideIndex == 1) {
            $('.fp-controlArrow.fp-next').css('display', 'none');
            $('.fp-controlArrow.fp-prev').css('display', 'inherit');

        }
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
        if (index == 11 && direction == 'right') {
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
    $('#section10 .fp-prev').append('<i class="fas fa-chevron-left"></i>');
    $('#section10 .fp-next').append('<i class="fas fa-chevron-right"></i>');
});

$(document).ready(function(){
    var a = document.getElementById("clients-svg");
    a.addEventListener("load",function(){
        var svgDoc = a.contentDocument;
        var svgRoot  = svgDoc.documentElement;
        $(svgRoot).on('wheel', function(e){
        	if(e.originalEvent.deltaY < 0){
        		$.fn.fullpage.moveTo(1);
				  }
				  else {
        		$.fn.fullpage.moveTo(3);
				  }
        });
    },false);

})


function typeWorks() {
	var typed3 = new Typed('#typing-works', {
		strings: ['KEBERLANGSUNGAN BISNIS ANDA <br class="title-new-line">ADALAH <br>KEBERLANGSUNGAN BISNIS KAMI'],
		typeSpeed: 25,
		loop: false,
	});
}


$(window).load(function() {
	setTimeout(function() {
		typeWorks();
	}, 2100);
	setTimeout(function() {
		$('.animation-in').css('display', 'block').addClass('animated fadeInUp');
	}, 2600);

});