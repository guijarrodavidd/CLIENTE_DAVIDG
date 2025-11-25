document.addEventListener("DOMContentLoaded", function () {
    startApp();
});

function startApp() {
    dataArray = [1, 2, 3, 4, 5];
    console.log(greaterThanAverage(dataArray, 7));
}

function greaterThanAverage(dataArray, number) {
    let avg = average(...dataArray);
    return number > avg;
}

function average(...args) {
    let sum = 0;
    let averageNumbers = 0;
    if (args.length === 0) {
        console.log(undefined);
    } else {
        for (let value of args) {
            sum += parseInt(value);
        }
        averageNumbers = sum / args.length;
    }
    return averageNumbers;
}
