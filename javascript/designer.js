//Window resize checks

var smallScreen = false;
var largeScreen = false;

$(document).ready(function() {
    if($(window).width() <= 425) {
        smallScreen = true;
    } else {
        smallScreen = false;
    };
    if($(window).width() >= 1026) {
    	largeScreen = true;
    } else {
    	largeScreen = false;
    };
});

$(window).resize(function() {
    if($(window).width() <= 425) {
        smallScreen = true;
    } else {
        smallScreen = false;
    };
    if($(window).width() >= 1026) {
    	largeScreen = true;
    } else {
    	largeScreen = false;
    };
});

// Menu button actions

$(document).on('click','.icon',function(){
	$('.overlay').css('height', '100%');
	$('.icon').css('display', 'none');
})

$(document).on('click','.close',function(){
	
	$('.overlay').css('height', '0%');
	$('.icon').fadeIn(800).css('display', 'block');

})

// About me and badge carousel to click through when screen width <= 425

$('.aboutMe').click(function() {
	if (smallScreen) {
		var currentSlide = $('.slide.active');
		var nextSlide = currentSlide.next();

		currentSlide.removeClass('active');
		nextSlide.addClass('active');

		if (nextSlide.length == 0) {
			$('.slide').first().addClass('active');
		};
	};
});	

// Hide menu button if screen width is >= 1026

$(window).resize(function() {
	if (largeScreen) {
		$('.icon').css('display', 'none');
		$('.close').css('display', 'none');
	} else {
		$('.icon').css('display', 'block');
		$('.close').css('display', 'block');
	};
});