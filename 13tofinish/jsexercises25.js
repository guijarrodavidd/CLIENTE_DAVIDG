function isEven(x) {
    return parseInt(x) % 2 === 0;
}

function dashesEvenDigits(number) {
    let digits = number.split("");
    let numbersDashed = digits[0];

    for (let i = 1; i < digits.length; i++) {
        if (isEven(digits[i]) && isEven(digits[i - 1])) {
            numbersDashed += "-" + digits[i];
        } else {
            numbersDashed += digits[i];
        }
    }

    alert(numbersDashed);
}

let number = prompt("Enter a number");
dashesEvenDigits(number);
