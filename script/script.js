$(function () {


	$('.keyboard').keyboard({

		layout: 'international',
		// only use !! in the action key layout



	}).previewKeyset({
		sets: ['normal']
	});

	/*----------home page script *-------*/



	/*---------------------*/




	//scrool homepage menu





	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;




	$('#slider').css({
		"width": "100%"
		, "height": "200px"
	});

	$('#slider ul').css({
		width: sliderUlWidth
		, marginLeft: -slideWidth
	});

	$('#slider ul li:last-child').prependTo('#slider ul');

	function moveLeft() {
		$('#slider ul').animate({
			left: +slideWidth
		}, 200, function () {
			$('#slider ul li:last-child').prependTo('#slider ul');
			$('#slider ul').css('left', '');
			$("#slider ul li").removeClass("active");


		});
	};

	function moveRight() {
		$('#slider ul').animate({
			left: -slideWidth
		}, 200, function () {
			$('#slider ul li:first-child').appendTo('#slider ul');
			$('#slider ul').css('left', '');

		});
	};

	$('a.control_prev').click(function () {
		moveLeft();
	});

	$('a.control_next').click(function () {
		moveRight();
	});
	/****  test */
	$("body").keyup(function (e) {


		var $currDiv = $("#border");
		//	$currDiv.css("border", "1px solid red");
		if (e.keyCode == 37) {
			$currDiv = $currDiv.next();
			$("li").css("border", "");
			$currDiv.css("border", "1px solid red");
		}

	});

	/****  test */

	$("body").keyup(function (e) {
		if (e.keyCode == 37) { // left

			moveRight();


		} else if (e.keyCode == 39) { // right
			moveLeft();
		}
	});








}); // End of doc type