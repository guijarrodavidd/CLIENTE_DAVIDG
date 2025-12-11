$(document).ready(function() {

    $("p").click(function() {
        $(this).addClass("active");
    });

    $("#clearActive").click(function() {
        $("p").removeClass("active");
    });

    $("#checkActive").click(function() {
        $("p.active").append("<span> Active</span>");
    });

    $("#toggleActive").click(function() {
        $("p").toggleClass("active");
    });

    $("#addCSS").click(function() {
        $("p.active").css("background-color", "lightblue");
    });

});