// 15.- Create a function named isOdd that determines whether a number is odd. Return true or false.



function isOdd (a) {
    let result = a%2;
    if (result != 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(6));