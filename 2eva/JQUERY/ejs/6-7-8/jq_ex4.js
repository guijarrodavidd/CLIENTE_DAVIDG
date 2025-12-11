$(document).ready(function() {
  $(function () {
    $("li").text("Batman rules");
    $("a").attr("href", "https://es.wikipedia.org/wiki/Batman");
    $("img").attr("alt", "Avengers foto, JoseScript, me estás matando")
    $("img").attr({ src: "../../InafumaYBebenGitano.png", alt: "Cambiando el alt"}).css({"max-width": "300px"})
    $("img").removeAttr("alt")
  });

});
