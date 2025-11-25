let selection = confirm("Do you agree?");

setTimeout(function() {
    if (selection) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}, 2000); 