$(document).ready(function(){
    $('a[href^="#"]').click( function(){
 	var scroll_el = $(this).attr('href');
 	if ($(scroll_el).length != 0) {
 		$('html, body').animate({ scrollLeft: $(scroll_el).offset().left }, 500);
 	}
 	return false;
     });
 });