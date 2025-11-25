window.onload = function() {
    let year = prompt ("Tell me a year: ");
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("Yes, it's a leap year");
    } else {
        console.log("Sorry, its not a leap year.");
    }
};