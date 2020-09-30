 
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider6 ul li').length;
	var slideWidth = $('#slider6 ul li').width();
	var slideHeight = $('#slider6 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider6').css({ width: slideWidth, height: slideHeight });
	
	$('#slider6 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider6 ul li:last-child').prependTo('#slider6 ul');

    function moveLeft() {
        $('#slider6 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider6 ul li:last-child').prependTo('#slider6 ul');
            $('#slider6 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider6 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider6 ul li:first-child').appendTo('#slider6 ul');
            $('#slider6 ul').css('left', '');
        });
    }; 
});    

 /*--------------------------------------------*/
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider7 ul li').length;
	var slideWidth = $('#slider7 ul li').width();
	var slideHeight = $('#slider7 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider7').css({ width: slideWidth, height: slideHeight });
	
	$('#slider7 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider7 ul li:last-child').prependTo('#slider7 ul');

    function moveLeft() {
        $('#slider7 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider7 ul li:last-child').prependTo('#slider7 ul');
            $('#slider7 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider7 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider7 ul li:first-child').appendTo('#slider7 ul');
            $('#slider7 ul').css('left', '');
        });
    };
 
});    


 /*--------------------------------------------*/
    jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider8 ul li').length;
	var slideWidth = $('#slider8 ul li').width();
	var slideHeight = $('#slider8 ul li').height();
	var slider2UlWidth = slideCount * slideWidth;
	
	$('#slider8').css({ width: slideWidth, height: slideHeight });
	
	$('#slider8 ul').css({ width: slider2UlWidth, marginLeft: - slideWidth });
	
    $('#slider8 ul li:last-child').prependTo('#slider8 ul');

    function moveLeft() {
        $('#slider8 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider8 ul li:last-child').prependTo('#slider8 ul');
            $('#slider8 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider8 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider8 ul li:first-child').appendTo('#slider8 ul');
            $('#slider8 ul').css('left', '');
        });
    };

 
});   

 /*--------------------------------------------*/
   