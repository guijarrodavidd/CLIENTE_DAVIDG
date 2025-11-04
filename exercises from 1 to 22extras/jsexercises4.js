 window.onload = function() {
    let money = prompt ("¿How would you spend here?: ");
    if (money <= 25) {
        console.log("You are a standard client");
    } else if (money < 25 && money <= 50) {
        console.log("You are a Bronze client");
    } else if (money < 50 && money <= 100) {
        console.log("You are a Silver client");
    } else if (money > 100) {
        console.log("You are a Golden client");
    } else {
        alert ("Wrong money")
    }
};