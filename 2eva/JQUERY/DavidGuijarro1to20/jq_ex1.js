$(document).ready(function() {
    console.log($("p"));
    console.log($("#todo-list"));
    console.log($("p, li.b"));
    console.log($("*"));
    console.log($("#important.a"));
    console.log($("ul+p"));
    console.log("Elementos .b dentro de ul:", $("ul .b"));
    console.log("Párrafo inmediatamente después de ul:", $("ul + p"));
    console.log("Párrafos con t1 y t2:", $("p.t1.t2"));
});


