window.onload = function () {
    var names = [];        // Esto es un ARRAY (lista), no un string
    var greetings = [];    // Array para los saludos
    
    var userInput = "";    // Variable para controlar el bucle
    
    while (userInput !== "stop") {
        userInput = prompt("Enter a celebrity name (or 'stop' to finish): ");
        
        // Si el usuario escribe "stop", salimos del bucle
        if (userInput === "stop") {
            break;  // Detiene el bucle
        }
        
        // Guardamos el nombre en el array
        names.push(userInput);
        
        // Pedimos el saludo para ese nombre
        const greeting = prompt("Enter a greeting for " + userInput);
        greetings.push(greeting);
    }
    
    // Ahora creamos un div.name-tag para cada nombre y saludo
    var container = document.body;  // El contenedor donde pondremos los name-tags
    
    for (let i = 0; i < names.length; i++) {
        // Creamos un nuevo div
        const newDiv = document.createElement("div");
        newDiv.className = "name-tag";  // Le asignamos la clase CSS
        
        // Creamos el h1 con el saludo
        const h1 = document.createElement("h1");
        h1.textContent = greetings[i];
        
        // Creamos el p con el nombre
        const p = document.createElement("p");
        p.textContent = names[i];
        
        // Añadimos h1 y p al div
        newDiv.appendChild(h1);
        newDiv.appendChild(p);
        
        // Añadimos el div completo al body
        container.appendChild(newDiv);
    }
}
