$(document).ready(function() {
    $( ".button-group .button:first" ).on( "click", function() {
        $(".img-box img").fadeOut(2000);
    });
    $( ".button-group .button:first" ).on( "click", function() {
        $(".img-box img").fadeIn(1000);
    });
    $( ".button-group .button:eq(1)" ).on( "click", function() {
        $(".img-box img").toggle();
    });
    $( ".button-group .button:eq(2)" ).on( "click", function() {
        $(".img-box img").slideDown(2000);
    });
    $( ".button-group .button:eq(2)" ).on( "click", function() {
        $(".img-box img").slideUp(1500);
    });
    var image = $(".img-box img")
    $( ".button-group .button:eq(3)" ).on( "click", function() {
        function startAnimation(){
            image.animate({width: '+=200px'}, "slow"),
            image.animate({width: '-=200px'}, "slow")
        }
        startAnimation();
    });

    $( ".button-group .button:eq(4)" ).on( "click", function() {
        image.animate({
            width: "0px",
            top: "0px",
            left: "0px"
        }, "fast");
    });

    $( ".button-group .button:eq(5)" ).on( "click", function() {
        image.animate({width: "+=100px",}, 2000,"linear");
    });

    $( ".button-group .button:eq(6)" ).on( "click", function() {
        image.animate({opacity: "0",}, 5000,"swing");
    });

    $( ".button-group .button:eq(7)" ).on( "click", function() {
        function startAnimation2(){
            image.animate({opacity: '0.5'}, "slow")
            .delay(1000)
            .animate({top: '-650px'}, "fast");
        }
        startAnimation2();
    });

    $( ".button-group .button:eq(8)" ).on( "click", function() {
        function startAnimation2(){
            image.animate({width: '50%'})
            .animate({top: "-=200px"})
            .animate({left: "+=150px"})
            .animate({top: "+=200px"})
            .animate({left: "-=150px"})
                    }
        startAnimation2();
    });

    $( ".button-group .button:eq(9)" ).on( "click", function() {
        function startAnimation2(){
            image.animate({width: '200px'})
            .animate({height: "200px"})
            .animate({borderRadius: "100%"})
            .delay(1000)
            .animate({borderRadius: "0%"})
        }
        startAnimation2();
    });

    $( ".button-group .button:eq(10)" ).on( "click", function() {
        image.stop(true, true)
        .removeAttr("style");
    });
});