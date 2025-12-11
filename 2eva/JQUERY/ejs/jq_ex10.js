$(document).ready(function() {
    $("p[class]").replaceWith(function () {
    return "<h1>" + $(this).html() + "</h1>";
    });
});