$(document).ready(function() {

    $('.gallery').cycle({
	    fx: 'scrollRight',
	    pause:   1 
    });
    
    $('.photos').cycle({
	    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });

});

