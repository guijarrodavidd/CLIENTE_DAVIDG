$(document).ready(function() {

    $("#myBox").on("mouseenter", function() {
        $(this).addClass("highlight");
    });

    $("#myBox").on("mouseleave", function() {
        $(this).removeClass("highlight");
    });

    $("#myBox").click(function() {
        $(this).off("mouseenter mouseleave");
        $(this).removeClass("highlight");
        $(this).text("Functionality removed!");
        $(this).css("cursor", "default");
    });

});