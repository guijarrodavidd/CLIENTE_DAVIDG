$(document).ready(function() {
    $("#addBtn").click(function() {
        $("#mySelect").append('<option value="opt1">New Option 1</option>');
        $("#mySelect").append('<option value="opt2">New Option 2</option>');
    });
});