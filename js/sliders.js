 
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider2 ul li').length;
	var slideWidth = $('#slider2 ul li').width();
	var slideHeight = $('#slider2 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider2').css({ width: slideWidth, height: slideHeight });
	
	$('#slider2 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

 /*--------------------------------------------*/
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider3 ul li').length;
	var slideWidth = $('#slider3 ul li').width();
	var slideHeight = $('#slider3 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider3').css({ width: slideWidth, height: slideHeight });
	
	$('#slider3 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider3 ul li:last-child').prependTo('#slider3 ul');

    function moveLeft() {
        $('#slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider3 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider3 ul li:first-child').appendTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    $('a.control_prev3').click(function () {
        moveLeft();
    });

    $('a.control_next3').click(function () {
        moveRight();
    });

});    


 /*--------------------------------------------*/
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider4 ul li').length;
	var slideWidth = $('#slider4 ul li').width();
	var slideHeight = $('#slider4 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider4').css({ width: slideWidth, height: slideHeight });
	
	$('#slider4 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider4 ul li:last-child').prependTo('#slider4 ul');

    function moveLeft() {
        $('#slider4 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider4 ul li:last-child').prependTo('#slider4 ul');
            $('#slider4 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider4 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider4 ul li:first-child').appendTo('#slider4 ul');
            $('#slider4 ul').css('left', '');
        });
    };

    $('a.control_prev4').click(function () {
        moveLeft();
    });

    $('a.control_next4').click(function () {
        moveRight();
    });

});   

 /*--------------------------------------------*/
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider5 ul li').length;
	var slideWidth = $('#slider5 ul li').width();
	var slideHeight = $('#slider5 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider5').css({ width: slideWidth, height: slideHeight });
	
	$('#slider5 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider5 ul li:last-child').prependTo('#slider5 ul');

    function moveLeft() {
        $('#slider5 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider4 ul li:last-child').prependTo('#slider5 ul');
            $('#slider4 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider5 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider5 ul li:first-child').appendTo('#slider5 ul');
            $('#slider5 ul').css('left', '');
        });
    };

    $('a.control_prev5').click(function () {
        moveLeft();
    });

    $('a.control_next5').click(function () {
        moveRight();
    });

});    