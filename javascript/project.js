// Menu button actions

$(document).on('click','.icon',function() {
	$('.overlay').css('height', '100%');
	$('.icon').css('display', 'none');
})

$(document).on('click','.close',function() {
	
	$('.overlay').css('height', '0%');
	$('.icon').fadeIn(800).css('display', 'block');

})


$('.project').click(function() {

	var id = $(this).attr('id');
	var idClick = '#' + id;
	
	if (idClick == '#project1') {
		$('.gallery1').css('display', 'flex');
		$('slide').first().addClass('active');
	} else if (idClick == '#project2') {
		$('.gallery2').css('display', 'flex');
	} else if (idClick == '#project3') {
		$('.gallery3').css('display', 'flex');
	} else if (idClick == '#project4') {
		$('.gallery4').css('display', 'flex');
	}
});

$(document).on('click', '.rightArrow', function() {

	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	currentSlide.removeClass('active');
	nextSlide.addClass('active');

	if (nextSlide.length == 0) {
		$('.slide').first().addClass('active');
	};

});	

$(document).on('click', '.leftArrow', function() {

	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.prev();
	
	currentSlide.removeClass('active');
	nextSlide.addClass('active');

	if (nextSlide.length == 0) {
		$('.slide').last().addClass('active');
	};

});	


$(document).on('click','.fa-times-circle',function() {

	$('.gallery1').css('display', 'none');
	$('.gallery2').css('display', 'none');
	$('.gallery3').css('display', 'none');
	$('.gallery4').css('display', 'none');

})

