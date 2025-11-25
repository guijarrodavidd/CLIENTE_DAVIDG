const numbers = []
var counter = 0

while (counter < 3) {
    let number = prompt("Tell me a number: ")
    var num = parseInt(number);
    counter = counter + 1
    numbers.push(number);
    numbers.sort(function(a, b){return a - b});
}
console.log(numbers)