let number = prompt("Tell me what number do you want: ");
let num = parseInt(number);

let counter = 1;

while (counter <= num) {
    let line = "";

    // Add numbers from 1 up to counter
    let j = 1;
    while (j <= counter) {
        line += j;
        j++;
    }
    let rest = num - counter;
    while (rest > 0) {
        line += "*";
        rest--;
    }

    console.log(line); // Print the line
    counter++;
}
