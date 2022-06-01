(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
    });
	/* Document on Resize functions */
	$(window).on('resize', function () {
        // preLoader();
		headerHeightFixer();
		getAndSetScrollbarWidth();
    });
	/* Document on Ready functions */
	$(document).ready(function () {
		getAndSetScrollbarWidth();
	});

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$('header').before('<div class="header-height-fix"></div>');
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Password Toggler function */
	$(".password-toggler").on("click", function(){
		let passwordInput = $(this).closest(".password-wrapper").find(".form-control");
		let passwordIcon = $(this).find("i");
		let currentInputType = passwordInput.attr("type");
		if(currentInputType == "password"){
			passwordInput.attr("type", "text");
			passwordIcon.attr("class", "bi bi-eye-slash-fill")
		}else{
			passwordInput.attr("type", "password");
			passwordIcon.attr("class", "bi bi-eye-fill")
		}
	});
	
	/* Set Scrollbar Width function */
	function getAndSetScrollbarWidth(){
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		$("body").attr("style",  `--scrollbarWidth: ${scrollbarWidth}px`);
	};

	/* Bootstrap Form Validation function */
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	}, false);

	/* AOS animation function */
	AOS.init({
		duration: 600,
	});

    /*  Banner slider */
    // $(".banner__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     speed: 500,
    //     arrows: false,
    //     dots: true,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
    // });

})(jQuery);