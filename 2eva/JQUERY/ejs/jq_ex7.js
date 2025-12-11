$(document).ready(function() {
$("p").wrapAll('<div style="border: 3px solid red;"></div>');
$("p").wrap('<div style="border: 3px solid blue;"></div>');
$("li:first").replaceWith("<li>La Falete</li>");
$("p:first").replaceWith($(".avengers li:first").clone());
});
