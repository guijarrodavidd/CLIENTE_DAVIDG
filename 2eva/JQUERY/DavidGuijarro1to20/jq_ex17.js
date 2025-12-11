$(document).ready(function() {
    $("#createBtn").one("click", function() {
        $("<div></div>")
            .css({
                "width": "200px",
                "height": "100px",
                "border": "2px solid red",
                "margin-top": "10px"
            })
            .appendTo("body");
    });
});