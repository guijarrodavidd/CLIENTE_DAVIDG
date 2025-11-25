let ages = [];
let agesgreater = [];

for (let i = 0; i < 5; i++) {
    let age = prompt("Enter an age (" + (i + 1) + "/5):");
    ages[i] = parseInt(age);
}
let ageuser = prompt("Enter an age: ");
for (let i = 0; i < 5; i++) {
    if (ages[i] > ageuser) {
        agesgreater[i] = parseInt(ages[i]);
    }
}

console.log("The ages are:", ages);
console.log("The greater numbers of " + ageuser + " is: " + agesgreater);
