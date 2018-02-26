$('.aboutMe').click(function() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	currentSlide.removeClass('active');
	nextSlide.addClass('active');

	if (nextSlide.length == 0) {
		$('.slide').first().addClass('active');
	}
})

