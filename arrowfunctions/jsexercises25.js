let grades = [];
let failed = [];

for (let i = 0; i < 5; i++) {
    let grade = prompt("Enter a grade (" + (i + 1) + "/5):");
    grades[i] = parseInt(grade);
    if (grades[i] < 5) {
        failed.push(grade);
    }
}

console.log("The grades are:", grades);
console.log("The failed exams is: " + failed);
