let users = [];

while (confirm("Do you want to add another user?")) {
    let name = prompt("Enter the name:");
    let surname = prompt("Enter the surname:");
    let age = prompt("Enter the age:");

    while (isNaN(age) || age === "" || age === null) {
        age = prompt("Invalid age. Please enter a numeric value:");
    }

    users.push({
        name: name,
        surname: surname,
        age: Number(age)
    });
}

console.log("All users:", users);

let allUnder21 = users.every(user => user.age < 21);
console.log("Are all users under 21?", allUnder21);

let evenAges = users.filter(user => user.age % 2 === 0);
console.log("Users with even age:", evenAges);
