// 14.- Create a function named isEven that determines whether a number is even. Return true or false.

function isEven (a) {
    let result = a%2;
    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));