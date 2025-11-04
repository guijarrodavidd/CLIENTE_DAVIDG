randomnumber = Math.floor(Math.random() * 11); // 11 because 0 counts too
 // console.log(randomnumber); If you want to see the number to try the program 

 window.onload = function() {
    let randuser = prompt ("Tell me a number between 0 and 10: ");
    if (randuser == randomnumber) {
        console.log("CONGRATS! YOU WON!");
    } else {
        console.log("Sorry, you lost.")
    }
};