const dniLetters = {
    0: "T", 1: "R", 2: "W", 3: "A", 4: "G", 5: "M", 6: "Y", 7: "F", 8: "P", 9: "D",
    10: "X", 11: "B", 12: "N", 13: "J", 14: "Z", 15: "S", 16: "Q", 17: "V", 18: "H", 19: "L",
    20: "C", 21: "K", 22: "E"
};
const getDNILetter = (dniNumber) => {
    const remainder = dniNumber % 23;
    return dniLetters[remainder];
};

function validateDNIInput(input) {
    // los dnis tienen 8 letras
    if (input.length < 1 || input.length > 8) {
        alert("Invalid DNI number. It must contain only 1 to 8 digits.");
        return false;
    }
    return true;
}

let dniInput = prompt("Enter your DNI number (without letter):");

if (validateDNIInput(dniInput)) {
    let dniNumber = parseInt(dniInput);
    let letter = getDNILetter(dniNumber);
    alert("The letter for DNI " + dniNumber + " is: " + letter);
}
