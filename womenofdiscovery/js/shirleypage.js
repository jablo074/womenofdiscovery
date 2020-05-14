$(document).ready(function() {

// var winHeight = $(window).height();

// $(".panel").height(winHeight/1.2);

$(window).on('scroll',function(){
	$(".right").css('bottom', $(window).scrollTop()*-1);
});

});

	
	
