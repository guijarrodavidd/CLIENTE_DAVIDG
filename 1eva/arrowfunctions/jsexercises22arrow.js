var quadraticSolver = (a, b, c) => {
    let mySolutions = [];
    let solutionPositive = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    let solutionNegative = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    mySolutions.push(solutionPositive, solutionNegative);

    if (solutionNegative == solutionPositive) {
        console.log("There is only one solution", solutionPositive);
    } else {
        for (let element of mySolutions) {
            console.log(element);
        }
    }
}

quadraticSolver(1, 2, -15);
