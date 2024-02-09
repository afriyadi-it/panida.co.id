$(document).ready(function () {
	$('#fullpage').fullpage({
		anchors: ['index', 'offered-services', '3dr', 'contact'],
		sectionsColor: ['#124066', '#fff', '#fff', '#124066'],
		css3: true,
		scrollingSpeed: 800,
		onLeave: function (index, nextIndex, direction) {
			var leavingSection = $(this);
			if (index == 1 && direction == 'down') {
				$('.logo-usaha').fadeOut();
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('.animation-in').removeClass('fadeInUp').addClass('fadeOutLeft');
				$('.typing-title-container').removeClass('fadeInUp').addClass('fadeOutLeft');
				$('.number-home').removeClass('fadeInRight').addClass('fadeOutRight');
				$('.bg-slide-services2').removeClass('fadeOutLeft').addClass('slideInLeft');
				$('.list-all-services').removeClass('fadeOutLeft').addClass('slideInLeft');
				$('.detail-services').removeClass('zoomOut').addClass('zoomIn');
				$('.scroll-icon').css('display', 'none');
			} else if (index == 2 && direction == 'up') {
				$('.logo-usaha').fadeIn().css('display', 'initial');
				$('#header').removeClass('page2');
				$('.open span').css('background-color', '#fff');
				setTimeout(
					function () {
						$('.typing-title-container').removeClass('fadeOutLeft').addClass('fadeInUp');
					}, 400);
				setTimeout(
					function () {
						$('.animation-in').removeClass('fadeOutLeft').addClass('fadeInUp');
					}, 700);
				setTimeout(
					function () {
						$('.number-home').removeClass('fadeOutRight').addClass('fadeInRight');
					}, 500);
				$('.scroll-icon').css('display', 'inherit');
				$('#header').removeClass('header-services');
				$('.bg-slide-services2').removeClass('slideInLeft').addClass('fadeOutLeft');
				$('.list-all-services').removeClass('slideInLeft').addClass('fadeOutLeft');
				$('.detail-services').removeClass('zoomIn').addClass('zoomOut');
			} else if (index == 2 && direction == 'down') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('#header').removeClass('header-services');
				$('.bg-slide-services2').removeClass('slideInLeft').addClass('fadeOutLeft');
				$('.list-all-services').removeClass('slideInLeft').addClass('fadeOutLeft');
				$('.detail-services').removeClass('zoomIn').addClass('zoomOut');
				$('.img-3dr').removeClass('zoomOut').addClass('zoomIn');
				setTimeout(
					function () {
						$('.s3dr-part1').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 300);
				setTimeout(
					function () {
						$('.s3dr-part2').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 500);
				setTimeout(
					function () {
						$('.s3dr-part3').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 700);
				setTimeout(
					function () {
						$('.s3dr-part4').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 900);
			} else if (index == 3 && direction == 'up') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('.bg-slide-services2').removeClass('fadeOutLeft').addClass('slideInLeft');
				$('.list-all-services').removeClass('fadeOutLeft').addClass('slideInLeft');
				$('.detail-services').removeClass('zoomOut').addClass('zoomIn');
				$('.img-3dr').removeClass('zoomIn').addClass('zoomOut');
				$('.s3dr-part1').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part2').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part3').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part4').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
			} else if (index == 3 && direction == 'down') {
				$('#header').removeClass('page2');
				$('.open span').css('background-color', '#fff');
				$('.img-3dr').removeClass('zoomIn').addClass('zoomOut');
				$('.s3dr-part1').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part2').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part3').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.s3dr-part4').removeClass('zoomIn').addClass('zoomOut').css('opacity', '0');
				$('.text-map-sg .title-country').removeClass('fadeOut').addClass('fadeInUp');
				$('.text-map-id .title-country').removeClass('fadeOut').addClass('fadeInUp');
				$('.text-map-sg p').removeClass('fadeOut').addClass('fadeInUp');
				$('.text-map-id p').removeClass('fadeOut').addClass('fadeInUp');
			} else if (index == 4 && direction == 'up') {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOut');
				$('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOut');
				$('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOut');
				$('.text-map-id p').removeClass('fadeInUp').addClass('fadeOut');
				$('.img-3dr').removeClass('zoomOut').addClass('zoomIn');
				setTimeout(
					function () {
						$('.s3dr-part1').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 300);
				setTimeout(
					function () {
						$('.s3dr-part2').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 500);
				setTimeout(
					function () {
						$('.s3dr-part3').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 700);
				setTimeout(
					function () {
						$('.s3dr-part4').css('opacity', '1').removeClass('zoomOut').addClass('zoomIn');
					}, 900);
			}
		},
		afterLoad: function () {
			var url_page = $(location).attr('href');
			var menu_name = ['index', 'offered-services', '3dr', 'contact'];
			if (url_page.indexOf(menu_name[0]) != -1) {
				$('.logo-usaha').fadeIn().css('display', 'initial');
				$('#header').removeClass('page2');
				$('.open span').css('background-color', '#fff');
			} else if (url_page.indexOf(menu_name[1]) != -1) {
				$('.logo-usaha').fadeOut();
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
				$('#header').addClass('header-services');
			} else if (url_page.indexOf(menu_name[2]) != -1) {
				$('#header').addClass('page2');
				$('.open span').css('background-color', '#000');
			} else if (url_page.indexOf(menu_name[3]) != -1) {
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
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			if (index == 4) {
				$('.fp-controlArrow.fp-next').css('display', 'inherit');
				$('.fp-controlArrow.fp-prev').css('display', 'none');

			}
			if (slideIndex == 1) {
				$('.fp-controlArrow.fp-next').css('display', 'none');
				$('.fp-controlArrow.fp-prev').css('display', 'inherit');

			}
		},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (index == 4 && direction == 'right') {
				$('.fp-controlArrow.fp-next').css('display', 'none');
				setTimeout(
					function () {
						$('.text-map-id .title-country').removeClass('fadeOutLeft').addClass('fadeInUp');
						$('.text-map-sg .title-country').removeClass('fadeInUp').addClass('fadeOutRight');
						$('.text-map-sg p').removeClass('fadeInUp').addClass('fadeOutRight');
					}, 0);
				setTimeout(
					function () {
						$('.text-map-id p').removeClass('fadeOutLeft').addClass('fadeInUp');
					}, 100);
			}
			if (slideIndex == 1 && direction == 'left') {
				$('.fp-controlArrow.fp-prev').css('display', 'none');
				setTimeout(
					function () {
						$('.text-map-sg .title-country').removeClass('fadeOutRight').addClass('fadeInUp');
						$('.text-map-id .title-country').removeClass('fadeInUp').addClass('fadeOutLeft');
						$('.text-map-id p').removeClass('fadeInUp').addClass('fadeOutLeft');
					}, 0);
				setTimeout(
					function () {
						$('.text-map-sg p').removeClass('fadeOutRight').addClass('fadeInUp');
					}, 100);
			}
		}
	});
});

$(document).ready(function () {
	$('#section3 .fp-prev').append('<i class="fas fa-chevron-left"></i>');
	$('#section3 .fp-next').append('<i class="fas fa-chevron-right"></i>');
});

$('#vertical-prev').click(function () {
	$(".vertical-center").slick('slickPrev');
});

$('#vertical-next').click(function () {
	$(".vertical-center").slick('slickNext');
});

var get_id = null;

if ($.session.get("slide-id") == null) {
	get_id = 0;
} else {
	get_id = parseInt($.session.get("slide-id")) - 1;
}

$(document).on('ready', function () {
	$(".vertical-center").slick({
		dots: false,
		arrows: false,
		verticalSwiping: false,
		vertical: true,
		centerMode: true,
		initialSlide: get_id,
		slidesToShow: 3,
		slidesToScroll: 3
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (nextSlide === 0) {
			$('.desc-detail-services').text("Setiap bisnis digital, membutuhkan dukungan IT untuk operasional. Bila bisnis belum dirasa perlu memiliki SDM IT internal, kami siap menyediakan dukungan IT yang bisa disesuaikan dengan kebutuhan bisnis, dengan biaya yang juga disesuaikan");
			$('.index-services').text("01/12");
		} else if (nextSlide === 1) {
			$('.desc-detail-services').text("Ketika bisnis Anda menjadi digital, maka perlu didukung banyak perangkat digital. Kami menyediakan suplai dan sparepart untuk memastikan operasional bisnis Anda optimal dengan perangkat-perangkat yang terkelola dan tersuplai dengan baik");
			$('.index-services').text("02/12");
		} else if (nextSlide === 2) {
			$('.desc-detail-services').text("Saat bisnis mulai berkembang, akan muncul kebutuhan akan server, jaringan dan infrastruktur, dengan pengalaman kami membangun dan mengelola infrastruktur server di beberapa perusahaan manufaktur, kami dapat memberikan solusi yang tepat untuk kebutuhan Anda yang mulai berkembang");
			$('.index-services').text("03/12");
		} else if (nextSlide === 3) {
			$('.desc-detail-services').text("website adalah wajah perusahaan, yang menghadap ke arah pelanggan dan calon-calon pelanggan anda, kami mempertimbangkan branding saat mendesain website Anda, karena website dapat mengembangkan brand perusahaan dengan desain yang tepat");
			$('.index-services').text("04/12");
		} else if (nextSlide === 4) {
			$('.desc-detail-services').text("domain adalah bagian dari brand anda, dan web hosting adalah ruang untuk melakukan semua pengelolaan teknis untuk website dan domain bisnis anda. kami dapat mendukung anda menangani hal-hel teknis ini bila anda belum memiliki tenaga IT");
			$('.index-services').text("05/12");
		} else if (nextSlide === 5) {
			$('.desc-detail-services').text("aplikasi bisnis akan semakin efisien bila dibuat sesuai kebutuhan anda, dan kami menyediakan layanan professional pembuatan aplikasi bisnis. prinsip kami adalah aplikasi sederhana, tepat guna dan relatif lebih efektif secara biaya, akan mendukung bisnis pelanggan kami berkembang dengan pesat");
			$('.index-services').text("06/12");
		} else if (nextSlide === 6) {
			$('.desc-detail-services').text("bila skala bisnis anda semakin membesar, kebutuhan akan solusi-solusi besar sepert ERP, WMS, POS, HRIS, Accounting dan sistem-sistem bisnis lainnya semakin menguat, saat momen itu tiba, kami akan siap menyediakan layanan-layanan tersebut untuk anda");
			$('.index-services').text("07/12");
		} else if (nextSlide === 7) {
			$('.desc-detail-services').text("kami menyediakan layanan instalasi, modifikasi ataupun support untuk CCTV. Bila Anda belum memiliki CCTV, kami bisa membangunnya untuk Anda, bila anda ingin memodifikasi infrastruktur CCTV yang sudah ada, kami bisa melakukannya untuk Anda, bila Anda ingin melakukan pemeliharan atau membutuhkan support untuk CCTV yang sudah ada, kami juga bisa melakukannya untuk Anda");
			$('.index-services').text("08/12");
		} else if (nextSlide === 8) {
			$('.desc-detail-services').text("internet, merupakan infrastruktur terpenting dalam era digital. Kami menyediakan dukungan layanan internet fiber optik dan wireless untuk anda");
			$('.index-services').text("09/12");
		} else if (nextSlide === 9) {
			$('.desc-detail-services').text("menggunakan banyak sistem yang berbeda? terpisah-pisah strukturnya? sulit dalam menghasilkan laporan? sulit dalam traceability & integritas data? kami bisa membantu anda melakukan intgrasi sistem-sistem tersebut, mempercepat proses bisnis anda yang terhambat karena komunikasi sistem yang tidak real-time");
			$('.index-services').text("10/12");
		} else if (nextSlide === 10) {
			$('.desc-detail-services').text("teknologi biometrik, sidik jari, dan pengenalan wajah sekarang sangat umum digunakan untuk absensi, akses kontrol, bahkan sistem pengelolaan karyawan dan pengunjung. hubungi kami bila anda tertarik menggunakan teknologi tersebut, atau membutuhkan support untuk sistem yang sudah ada");
			$('.index-services').text("11/12");
		} else if (nextSlide === 11) {
			$('.desc-detail-services').text("ini sering terlupakan, kami yakin dan percaya, pengalaman kami di bisnis dan industri, serta keahlian kami dalam bidang digital, dapat memberikan kontribusi yang besar untuk me-realisasikan ide-ide besar anda untuk bisnis, dan membawa bisnis anda menuju tingkatan yang jauh lebih tinggi lagi");
			$('.index-services').text("12/12");
		}
	});
});

$.session.remove('slide-id');

$(document).on('ready', function () {
	$(".center")
		.on('afterChange init', function (event, slick, direction) {
			// remove all prev/next
			slick.$slides.removeClass('left-slide-current').removeClass('right-slide-current');
			for (var i = 0; i < slick.$slides.length; i++) {
				var $slide = $(slick.$slides[i]);
				if ($slide.hasClass('slick-current')) {
					// update DOM siblings
					$slide.prev().addClass('left-slide-current');
					$slide.next().addClass('right-slide-current');
					break;
				}
			}
		})
		.on('beforeChange', function (event, slick) {
			slick.$slides.removeClass('left-slide-current').removeClass('right-slide-current');
			$(".slick-center").css("transition", "opacity 500ms ease-out");
		})
		.slick({
			dots: false,
			arrows: false,
			infinite: true,
			centerMode: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			centerPadding: '0px',
		});

});

function typeServices() {
	var typed3 = new Typed('#typing-services', {
		strings: ['DENGAN <br class="title-new-line">PROFESSIONAL <br>MENYEDIAKAN LAYANAN'],
		typeSpeed: 25,
		loop: false,
	});
}

$(window).load(function () {
	setTimeout(function () {
		typeServices();
	}, 2100);
	setTimeout(function () {
		$('.animation-in').css('display', 'block').addClass('fadeInUp');
	}, 2600);

});