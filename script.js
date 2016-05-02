$(document).ready(function(){
	
	//create all the divs
	var number_of_squares = 10000;
	for(var i = 0; i < number_of_squares; i++){
		$('#container').append('<div class = "floating-box"></div>');
	}
	
	//hover in and off logic,
	$('.floating-box').on('mouseenter', function(){
		//trying a different approach, as I think the button is screwing this up
		$(this).fadeTo(100,0.9);
	});
	
	//the gradual fade is turned off via commenting out, not how actual etch a sketch works
	//
	//$('.floating-box').on('mouseleave', function(){
	//	$(this).fadeTo(100000,0.01);
	//});

	// resetting the etch a sketch with a button click
	$('#my-button').on('click',function(){
		$('.floating-box').css('opacity', 0.01);
	});
});