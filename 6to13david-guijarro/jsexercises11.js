let num = 0
let counter = 0;
while (num != -1) {
    let number = prompt("Tell me a number: ")
    num = parseInt(number);
    counter += num
}
alert ("Finished, the final number is: " + counter);