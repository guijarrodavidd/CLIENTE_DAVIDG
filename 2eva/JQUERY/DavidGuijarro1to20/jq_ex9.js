$(document).ready(function() {
let newp = $("p:first").add($("p:eq(1)"));
newp.insertAfter($("div").clone());
});
