document.addEventListener("DOMContentLoaded", function () {
    startApp();
});

function startApp() {
    date = new Date();
    //    document.writeln(date.toDateString());

    dateSaint = new Date("March 19");
    dateSaint.setYear(date.getFullYear());
    if (dateSaint < date) {
        dateSaint.setYear(date.getFullYear() + 1);
    }
    const diffTime = Math.abs(dateSaint - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // rounding to
    document.writeln(diffDays);
}
