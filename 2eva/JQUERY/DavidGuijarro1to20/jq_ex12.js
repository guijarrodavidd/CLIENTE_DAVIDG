$(document).ready(function() {

    $("#btn-get-val").click(function() {
        alert($("#nombre").val());
    });

    $("#btn-set-val").click(function() {
        $("#nombre").val("Usuario Nuevo");
    });

    $("#btn-set-multi").click(function() {
        $("input[name='intereses']").val(["DEPORTE", "CINE"]);
    });

    $("#btn-get-multi").click(function() {
        let values = $("input[name='intereses']:checked").map(function() {
            return $(this).val();
        }).get();
        
        alert(values.join(", "));
    });

});