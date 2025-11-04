// 27.- Prompt for cities until “stop” is entered. Put them all into a Set (try entering the same city more than once). Then output each city to the document, one per line. Finally, sort the set alphabetically (convert to an array, sort, and convert back to a set).

let cities = new Set();
let city = "";

while (true) {
    city = prompt("Enter a city (type 'stop' to finish):");
    if (!city || city.toLowerCase() === "stop") {
        break;
    }
    cities.add(city.trim());
}
// Ordenar alfabéticamente: convertir Set → Array → ordenar → Set
let sortedCities = new Set([...cities].sort());

// Mostrar las ciudades ordenadas
console.log("Cities sorted alphabetically: ");
for (let c of sortedCities) {
    console.log(c + "<br>");
}