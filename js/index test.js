$(document).ready(function() {


	// rotating carousel section
	$(".testimonial div:first").css("display", "block");
	
	jQuery.fn.timer = function() {
		if(!$(this).children("div:last-child").is(":visible")){
			$(this).children("div:visible")
				.css("display", "none")
				.next("div").css("display", "block");
		}
		else{
			$(this).children("div:visible")
				.css("display", "none")
			.end().children("div:first")	
				.css("display", "block");
		}
	} // timer function end
	
	window.setInterval(function() {
		$(".testimonial").timer();
	}, 6000);

	// $("#appetizers").click(function(){
 //        $('#apps').removeclass('hide')
 //        $('#bspecials', 'veg', 'nonVeg', 'rb', 'naan', 'sweets')
 //        	.addclass('hide');
 //    }
 //    $("#bombaySpecials").click(function(){
 //        $('#bspecials').removeclass('hide')
 //        $('#apps', 'veg', 'nonVeg', 'rb', 'naan', 'sweets')
 //        	.addclass('hide');
 //    }

 	$('#appetizers').click(appMenu);

	function appMenu(){
		$('#apps').removeclass('hide')
        $('#bspecials', 'veg', 'nonVeg', 'rb', 'naan', 'sweets')
        	.addclass('hide');
	}



  });


	// $('#bombaySpecials').click(bombaySpecials);
	// function bombaySpecials() {
	// 	$('.bspecials').removeclass(hide);

});