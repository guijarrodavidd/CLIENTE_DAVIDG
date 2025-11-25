// 35.- Download “ejer35.html” from Moodle. Using DOM APIs, write to the HTML:

// Number of links in the HTML.
// URL of the second-to-last link.
// Number of links pointing to http://prueba.
// Number of links in the third paragraph.

window.onload = function () {
    // punto 1
    var links = document.getElementsByTagName("a");
    var numberLinks = links.length;
    append(`Total links: ${numberLinks}`);
    // punto 2
    if (numberLinks >= 2) {
        var secondLastLink = links[numberLinks - 2].href;
        append(`Second-to-last link URL: ${secondLastLink}`);
    } else {
        append("Not enough links to get the second-to-last one.");
    }
    // punto 3
    var countPrueba = 0;
    for (var i = 0; i < numberLinks; i++) {
        if (links[i].href === "http://prueba/") {
            countPrueba++;
        }
    }
    append(`Links pointing to http://prueba: ${countPrueba}`);
    // punto 4
    var paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length >= 3) {
        var thirdParagraphLinks = paragraphs[2].getElementsByTagName("a").length;
        append(`Number of links in the third paragraph: ${thirdParagraphLinks}`);
    } else {
        append("There is no third paragraph.");
    }
}
