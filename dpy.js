$("a.om-mig").click(function() {
	$('html,body').animate({
        scrollTop: $("#om-mig").offset().top},
        'slow');	
	
	return false;
});