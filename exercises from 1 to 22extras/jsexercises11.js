let num = 0
let sum = 0;
while (num != -1) {
    let number = prompt("Tell me a number: ")
    num = parseInt(number);
    if (num > 0) {
        sum += num 
    }
}
alert ("Finished, the final number is: " + sum);