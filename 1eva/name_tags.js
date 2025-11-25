window.onload = function () {
    var names = [];
    var greetings = [];
    for (let i = 0; i < 3; i++) {
        const name = prompt("Enter a celebrity name: ");
        names.push(name);
        const greeting = prompt("Enter a greeting for " + name);
        greetings.push(greeting);
    }
    
    document.querySelectorAll("div.name-tag h1").forEach((h1, i) => (h1.textContent = greetings[i]));
    document.querySelectorAll("div.name-tag p").forEach((p, i) => (p.textContent = names[i] || ""));
}