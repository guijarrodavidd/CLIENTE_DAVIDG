window.onload = function() {
    //1
    let firstParagraph = document.querySelector("p");
    firstParagraph.textContent += " This is my text.";
//2
    let img = document.querySelector("img");
    img.src = "/home/alumno/Descargas/Marisa-Photoroom.png"; 
//3
    let lastDiv = document.querySelectorAll("div");
    lastDiv[lastDiv.length - 1].style.border = "2px solid red";
//4
    let link = lastDiv[lastDiv.length - 1].querySelector("a");
    if (link) {
        link.remove();
    }
}
