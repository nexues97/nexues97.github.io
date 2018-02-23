$('.right').click(function() {
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	currentSlide.removeClass('active');
	nextSlide.addClass('active');
	console.log('why wont you work')

	if (nextSlide.length == 0) {
		$('.slide').first().addClass('active');
	}
})

// $('.aboutMe').on("swiperight", function(event) {
// 	var currentSlide = $('.slide.active');
// 	var nextSlide = currentSlide.next();

// 	currentSlide.removeClass('active');
// 	nextSlide.addClass('active');
// 	console.log('why wont you work')

// 	if (nextSlide.length == 0) {
// 		$('.slide').first().addClass('active');
// 	}
// })


