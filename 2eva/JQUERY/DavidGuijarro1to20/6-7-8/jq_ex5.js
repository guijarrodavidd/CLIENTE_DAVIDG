$(document).ready(function() {
    $(".avengers").append("<li>Black Widow</li>");
    $(".avengers").prepend("<li>Red Widow</li>");
    $("li:first").insertAfter("li:contains('Captain America')");
    var titleText = $("title").text();
    $("li:first").text(titleText);
    $("<li>Jose Socuellamos Presidiario</li>").insertBefore("li:contains('Thor')");

});
