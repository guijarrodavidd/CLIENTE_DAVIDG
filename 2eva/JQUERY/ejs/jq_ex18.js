$(document).ready(function() {
    $("input[placeholder]").each(function() {
        $(this).val($(this).attr("placeholder"));
    });
});