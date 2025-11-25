var divideByTwo = x => {return x / 2};




var divideTwoNumbers = (x,y) => { 
    if (x >= y) {
        return Math.round(x / y);
    } else {
        return Math.round(y / x);
    }
}

console.log(divideByTwo(6));
console.log(divideTwoNumbers(6,10));