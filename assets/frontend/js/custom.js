$( ".wa-custom" ).click(function() {
  var phone = '6281212119669';
  var textparse = "Halo Panida IT, Mohon informasinya untuk layanan digitalnya";
  var device = navigator.userAgent;
  if (device.match(/Android|iPhone|iPad|iPod|BlackBerry/i)) {
    window.location.href = 'https://wa.me/' + phone + '?text=' + textparse;
  } else {
    window.location.href = 'https://web.whatsapp.com/send?phone=' + phone + '&text=' + textparse;
  }
});

var url_main = window.location.origin;
// console.log(url_main);

$(document).ready(function() {
	$(document).delegate('.open', 'click', function(event) {
		var Body = $('body');
		Body.addClass('bg-shadow');
		$(this).addClass('oppenned');
		event.stopPropagation();
	})
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
		var Body = $('body');
		Body.removeClass('bg-shadow');
	})
	$(document).delegate('.cls', 'click', function(event) {
		$('.open').removeClass('oppenned');
		var Body = $('body');
		Body.removeClass('bg-shadow');
		event.stopPropagation();
	});
});

var $content2 = null;
var $content3 = null;
var $content4 = null;
var $content5 = null;
var $content6 = null;


var name_input = null;
var email_address = null;

var hire_check = true;
var input_enter = false;
var input2_enter = false;
var input3_enter = false;
var input4_enter = false;
var input5_enter = false;

var typed1 = null;
var typed2 = null;
var typed3 = null;
var typed4 = null;
var typed5 = null;
var typed6 = null;

$(document).ready(function() {
	$('#name-input').keypress(function(e) {
		var key = e.which;
		if (key == 13) // the enter key code
		{
			name_input = $("#name-input").val();
			$('.left-hire-us.one .typed-cursor').css('display', 'none');
			$content2 = $("<tr class='new-bind'><td><div class='left-hire-us two animated fadeInUp' style='opacity:1;'><div class='img-left'><img src='" + url_main + "/assets/frontend/img/techsupport.png'></div><div class='text-left'><span class='text' id='typing-chat2'></span></div></div></td></tr><tr class='new-bind'><td><div class='right-hire-us two animated fadeInUp' style='opacity:1'><div class='img-right'><img src='" + url_main + "/assets/frontend/img/user-placeholder.png'></div><div class='text-right'><span class='text'><input style='width: 100%' id='input2' type='text' placeholder='Your Email Address'></span></div></div></td></tr>");
			input_enter = true;
			$('.bind-list').append($content2);
			typed2 = new Typed('#typing-chat2', {
				strings: ["Senang bertemu dengan Anda <b class='name'>" + name_input + "</b>, bila Anda tidak keberatan, saya ingin mengirimkan company profile kami agar Anda dapat mengenal kami lebih baik lagi."],
				typeSpeed: 5,
				loop: false,
			});
			$("#name-input").attr('disabled', 'disabled');
			$('#input2').focus().on("keypress", function(e) {
				var key = e.which;
				if (key == 13) // the enter key code
				{
					$(".md-bottom-sheet__surface").animate({ scrollTop: $(document).height() + 5000 }, 'slow');
					email_address = $("#input2").val();
					$('.left-hire-us.two .typed-cursor').css('display', 'none');
					$content3 = $("<tr class='new-bind'><td><div class='left-hire-us three animated fadeInUp' style='opacity:1;'><div class='img-left'><img src='" + url_main + "/assets/frontend/img/techsupport.png'></div><div class='text-left'><span class='text' id='typing-chat3'></span></div></div></td></tr><tr class='new-bind'><td><div class='right-hire-us three animated fadeInUp' style='opacity:1'><div class='img-right'><img src='" + url_main + "/assets/frontend/img/user-placeholder.png'></div><div class='text-right'><span class='text'><input type='text' style='width: 100%' id='input3' placeholder='Your Ideas'></span></div></div></td></tr>");
					input2_enter = true;
					$('.bind-list').append($content3);
					typed3 = new Typed('#typing-chat3', {
						strings: ["Selesai. Anda bisa cek company profile kami di email email Anda. Jika Anda berada disini, sudah pasti Anda ingin membuat sesuatu yang mengagumkan menggunakan teknologi digital, bisa share sedikit mengenai ide Anda?"],
						typeSpeed: 5,
						loop: false,
					});
					$("#input2").attr('disabled', 'disabled');
					$('#input3').focus().on("keypress", function(e) {
						var key = e.which;
						if (key == 13) // the enter key code
						{
							$(".md-bottom-sheet__surface").animate({ scrollTop: $(document).height() + 5000 }, 'slow');
							$('.left-hire-us.three .typed-cursor').css('display', 'none');
							$content4 = $("<tr class='new-bind'><td><div class='left-hire-us four animated fadeInUp' style='opacity:1;'><div class='img-left'><img src='" + url_main + "/assets/frontend/img/techsupport.png'></div><div class='text-left'><span class='text' id='typing-chat4'></span></div></div></td></tr><tr class='new-bind'><td><div class='right-hire-us four animated fadeInUp' style='opacity:1'><div class='img-right'><img src='" + url_main + "/assets/frontend/img/user-placeholder.png'></div><div class='text-right'><span class='text'><a href='#' class='btn-send' id='btn-yes'>Yes</a><a href='#' class='btn-reset' id='reset-all'>Repeat Form</a></span></div></div></td></tr>");
							input3_enter = true;
							$('.bind-list').append($content4);
							typed4 = new Typed('#typing-chat4', {
								strings: ["Jika saya menangkap pesan Anda dengan benar, <b class='name'>" + name_input + "</b>. Anda ingin membangun sesuatu dengan deskripsi sebelumnya? Jika Anda yakin, kami bisa mengirimkan penawaran atau diskusi melalui email yang Anda sediakan di <b class='name'>" + email_address + "</b>. Benar kan?"],
								typeSpeed: 5,
								loop: false,
							});
							$("#input3").attr('disabled', 'disabled');
							$('#reset-all').on("click", function(e) {
								$(".new-bind").empty();
								$("#name-input").removeAttr("disabled").val('');
							});
							$('#btn-yes').on("click", function(e) {
								$(".md-bottom-sheet__surface").animate({ scrollTop: $(document).height() + 5000 }, 'slow');
								$('.left-hire-us.four .typed-cursor').css('display', 'none');
								$content5 = $("<tr class='new-bind'><td><div class='left-hire-us five animated fadeInUp' style='opacity:1;'><div class='img-left'><img src='" + url_main + "/assets/frontend/img/techsupport.png'></div><div class='text-left'><span class='text' id='typing-chat5'></span></div></div></td></tr><tr class='new-bind'><td><div class='right-hire-us five animated fadeInUp' style='opacity:1'><div class='img-right'><img src='" + url_main + "/assets/frontend/img/user-placeholder.png'></div><div class='text-right'><span class='text'><input type='text' style='width: 100%' id='input4' placeholder='Phone Number'></span></div></div></td></tr>");
								input4_enter = true;
								$('.bind-list').append($content5);
								typed5 = new Typed('#typing-chat5', {
									strings: ["Ok! kami akan segera memberikan respon secepatnya. Jika Anda ingin respon yang lebih cepat, kami bisa menghubungi Anda melalui telepon atau Whatsapp, jika Anda menginginkannya."],
									typeSpeed: 5,
									loop: false,
								});
								$("#btn-yes").addClass("disabled");
								$("#reset-all").addClass("disabled");
								$('#input4').focus().on("keypress", function(e) {
									var key = e.which;
									if (key == 13) // the enter key code
									{
										$(".md-bottom-sheet__surface").animate({ scrollTop: $(document).height() + 5000 }, 'slow');
										$('.left-hire-us.five .typed-cursor').css('display', 'none');
										$content6 = $("<tr class='new-bind'><td><div class='left-hire-us six animated fadeInUp' style='opacity:1;'><div class='img-left'><img src='" + url_main + "/assets/frontend/img/techsupport.png'></div><div class='text-left'><span class='text' id='typing-chat6'></span></div></div></td></tr>");
										input5_enter = true;
										$('.bind-list').append($content6);
										typed6 = new Typed('#typing-chat6', {
											strings: ["Ok <b class='name'>" + name_input + "</b>, my team will get back to you. Get ready for a fast response."],
											typeSpeed: 5,
											loop: false,
										});
										$("#input4").attr('disabled', 'disabled');
										setTimeout(
											function() {
												location.reload();
											}, 3000);
									}
								});
							});
						}
					});
				}
			});
		}
	});
	$('.btn-usaha.hire-chat').click(function() {
		$.fn.fullpage.setAllowScrolling(false);
		setTimeout(
			function() {
				$('.left-hire-us.one').css('opacity', '1').addClass('fadeInUp');
				$('.right-hire-us.one').hide()
				if (hire_check) {
					typed1 = new Typed('#typing-chat', {
						strings: ["Halo, kami dari Panida IT, salam kenal. Tertarik menggunakan produk dan layanan yang saya tawarkan? silahkan email ke <a href=\"mailto:afriyadi@panida.co.id\">afriyadi@panida.co.id</a>"],
						typeSpeed: 10,
						loop: false,
					});
					hire_check = false;
				}
			}, 0);
	});
	$('.md-bottom-sheet__shadow').click(function() {
		$.fn.fullpage.setAllowScrolling(true);
		$('.left-hire-us').css('opacity', '0').removeClass('fadeInUp');
		$('.right-hire-us').css('opacity', '0').removeClass('fadeInUp');
	});
});


$(document).ready(function($) {
	var Body = $('body');
	Body.addClass('preloader-site');
});

$(window).load(function() {
	$('.preloader-wrapper').delay(2000).fadeOut();
	$('body').removeClass('preloader-site');
});