 function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds(); 
  return [ h, m, s ].join(':')
}
 window.onload = function() {
    let password = prompt ("Tell me your password: ");
    if (password == "daw") {
        alert ("Hello DAW student, the time is: ");
        alert (startTime());

    } else {
        alert ("The password is incorrect, try again.")
    }
};