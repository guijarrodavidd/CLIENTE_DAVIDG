$(document).ready(function() {
    $( ".rectangulo" ).on( "mouseover", function() {
        function startAnimation(){
            $( ".rectangulo" ).animate({left: '+=10px'}, "fast"),
            $( ".rectangulo" ).animate({left: '-=10px'}, "fast")
            startAnimation();
        }
        startAnimation();
    });
});

// $(document).ready(function() {
//             $(".rectangulo").on("click", function() {
//                 $(this)
//                     .animate({ left: "-10px" }, 50)
//                     .animate({ left: "10px" }, 50)
//                     .animate({ left: "-10px" }, 50)
//                     .animate({ left: "10px" }, 50)
//                     .animate({ left: "0px" }, 50);
//             });
//         });