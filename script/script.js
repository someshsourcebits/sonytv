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
			//$("#slider ul li").removeClass("active");


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



	$("body").keyup(function (e) {
		var $this = $(".active");

		if (e.keyCode == 37) { // left

			$this.removeClass('active');
			$this.next().addClass('active');



			moveRight();


		} else if (e.keyCode == 39) { // right
			$this.removeClass('active');

			$this.prev().addClass('active');
			moveLeft();
		}
	});


	// $(".navbar").scroll(function() {

	// 	if ($(this).scrollTop()<0)
	// 	 {

	// 		$('.fade').fadeOut();
			
	// 	 }
	// 	else
	// 	 {
	// 	  $('.fade').fadeIn();
	// 	 }
	//  });


	$(window).scroll(function(){
		var threshold = 200; // number of pixels before bottom of page that you want to start fading
		var value=($(window).scrollTop);
	
		setTimeout(function(){	$(".div1").slideUp();  }, 5000);
		
	
		var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	
		  if( op <= 0 ){
			
			  $("#thing-to-hide").hide();
		  } else {
			  $("#thing-to-hide").show();
		  }
		  $("#thing-to-hide").css("opacity", op ); 
	
	  });





}); // End of doc type