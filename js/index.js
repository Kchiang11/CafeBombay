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

// show appetizers fuction

 // 	$('#appetizers').click(appMenu);

	// function appMenu(){
	// 	$('#apps').removeClass('hide')
 //        $('#bspecials', 'veg', 'nonVeg', 'rb', 'naan', 'sweets')
 //        	.addClass('hide');
	// }

	$("#appetizers").click(function(){
        $('#apps').removeClass('hide')
        $('#bspecials, #veg, #nonVeg, #rb, #naan, #sweets').addClass('hide');
    })

    $("#bombaySpecials").click(function(){
        $('#bspecials').removeClass('hide')
        $('#apps, #veg, #nonVeg, #rb, #naan, #sweets').addClass('hide');
    })

    $("#vegetarian").click(function(){
        $('#veg').removeClass('hide')
        $('#apps, #bspecials, #nonVeg, #rb, #naan, #sweets').addClass('hide');
    })

    $("#nonVegetarian").click(function(){
        $('#nonVeg').removeClass('hide')
        $('#apps, #bspecials, #veg, #rb, #naan, #sweets').addClass('hide');
    })

    $("#riceBiryani").click(function(){
        $('#rb').removeClass('hide')
        $('#apps, #bspecials, #veg, #nonVeg, #naan, #sweets').addClass('hide');
    })

    $("#breads").click(function(){
        $('#naan').removeClass('hide')
        $('#apps, #bspecials, #veg, #nonVeg, #rb, #sweets').addClass('hide');
    })

    $("#dessert").click(function(){
        $('#sweets').removeClass('hide')
        $('#apps, #bspecials, #veg, #nonVeg, #rb, #naan').addClass('hide');
    })


  });











