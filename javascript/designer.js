$(document).ready(function() {
	checkSize();
	$(window).resize(checkSize());
});

function checkSize(){
    if ($(".slide").css("display") !== "inline-block" ){
        $('.aboutMe').click(function() {
			var currentSlide = $('.slide.active');
			var nextSlide = currentSlide.next();

			currentSlide.removeClass('active');
			nextSlide.addClass('active');

			if (nextSlide.length == 0) {
				$('.slide').first().addClass('active');
			}	
		});
    }
};

$(document).on('click','.icon',function(){
	$('.overlay').css('height', '100%');
	$('.icon').css('display', 'none');
})

$(document).on('click','.close',function(){
	
	$('.overlay').css('height', '0%');
	$('.icon').fadeIn(800).css('display', 'block');

})

