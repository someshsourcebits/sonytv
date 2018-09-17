$(function () {


/*** MENU slider  */



    $('#slider1 ul li').click(function () {
        a = $('#slider1 li').length;
        $('#slider1 ul li').animate({
            right: "+=200px"
        });


    });



    var slideCount = $('#slider1 ul li').length;
    var slideWidth = $('#slider1 ul li').width();
    var slideHeight = $('#slider1 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;




    $('#slider1').css({
        "width": "100%",
        "height": "200px"
    });

    $('#slider1 ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });


    $("#slider1 ul li").keyup(function (e) {
        var $this = $(".active");

        if (e.keyCode == 37) { // left




            $('#slider1 ul li').animate({
                right: "+=200px"
            });
            
            $this.removeClass('active');
            $this.next().addClass('active');



        } else if (e.keyCode == 39) { // right

            $('#slider1 ul li').animate({
                left: "-=200px"
            });


            $this.prev().addClass('active');
            $this.removeClass('active');
        }
    });



/** menus slider ends */

    /*---------------------*/



    //scrool homepage menu





    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;




    $('#slider').css({
        "width": "100%",
        "height": "200px"
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
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





            moveRight();
            $this.removeClass('active');
            $this.next().addClass('active');



        } else if (e.keyCode == 39) { // right

            moveLeft();


            $this.prev().addClass('active');
            $this.removeClass('active');
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




    $(window).scroll(function () {
        var threshold = 200; // number of pixels before bottom of page that you want to start fading
        var value = ($(window).scrollTop);




        var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;

        if (op <= 0) {

            $("#thing-to-hide").hide();
        } else {
            $("#thing-to-hide").show();
        }
        $("#thing-to-hide").css("opacity", op);

    });






}); // End of doc type
