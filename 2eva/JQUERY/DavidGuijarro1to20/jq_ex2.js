$(document).ready(function() {
    console.log($("p:first"));
    console.log($("p:gt(1)"));
    console.log($("p:last"));
    console.log($("p:not(:eq(2))"));
    console.log($("p:even"));
    console.log($(".a:first"));
    console.log($(".b:odd"));
});