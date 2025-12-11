$(document).ready(function() {
    $(".avengers li:first").clone().appendTo(".avengers");
    $("p:first").css({ "border": "1px solid black", "background-color": "yellow" });
    $(".avengers li:first").remove();
    $(".avengers").empty().append("<li>Jose Socuellamos</li><li>Lorenzo Sanchez</li><li>David Guijarro</li>");
    for (let i = $("p").length + 1; i <= 10; i++) {
        $("body").append("<p>Test text " + i + "</p>");
    }


});