// 28.- Create a Map with the following key/value pairs:

let people = new Map([
    ["Jose", "Teacher"],
    ["Lorenzo", "Teacher"],
    ["Nuria", "Student"],
    ["Vicente", "Student"],
    ["Joaquin", "Student"],
    ["Maria", "Student"]
]);
let nameprompt = prompt("Enter a name:");

// Comprobar si existe en el Map
if (people.has(nameprompt)) {
    alert(nameprompt + " is a " + people.get(nameprompt));
} else {
    alert(nameprompt + " doesn’t exist in this data collection.");
}