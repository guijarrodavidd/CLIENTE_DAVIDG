$(document).ready(function() {
    $("<style>")
        .text(".field { border: 1px solid black; margin: 5px 0; }")
        .appendTo("head");

    $("label").each(function() {
        $(this).next().addBack().wrapAll("<div class='field'></div>");
    });
});