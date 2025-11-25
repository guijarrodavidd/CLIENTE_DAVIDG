document.addEventListener("DOMContentLoaded", function () {
    startApp();
});

function startApp() {
    document.writeln(average(2, 4, 6, 8, 10));
}

function average(...args) {
    let sum = 0;
    let averageNumbers = 0;
    if (args.length === 0) {
        return undefined;
    } else {
        for (let value of args) {
            sum += parseInt(value);
        }
        averageNumbers = sum / args.length;
    }
    return averageNumbers;
}
