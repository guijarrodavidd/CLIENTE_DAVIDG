$(document).ready(function() {
    $("#mainSelect").change(function() {
        let newSelect = $("<select></select>");
        
        newSelect.append('<option>New Value 1</option>');
        newSelect.append('<option>New Value 2</option>');
        newSelect.append('<option>New Value 3</option>');

        $("#container").html(newSelect);
    });
});