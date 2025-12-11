$(document).ready(function() {

    $("#name").blur(function() {
        if ($(this).val().trim() === "") {
            $(this).focus();
        }
    });

    $("#email").blur(function() {
        if ($(this).val().trim() === "") {
            $("label[for='email']").css("color", "red");
            if ($(this).next(".error-msg").length === 0) {
                $(this).after("<span class='error-msg' style='color: red; margin-left: 5px;'>Error: Email required</span>");
            }
        }
    });

    $("input[type='button']").one("click", function() {
        alert("Button clicked!");
    });

});