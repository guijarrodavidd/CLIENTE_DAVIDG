function returnStr (a, array){
    let myStr = '';
    if (isNaN(a) || a<0 || a > array.length){
        return("Bad job");
    }
    for (let i=0; i<a ; i++ ){
        myStr+=array[i] + " ";
    }
    return myStr;
}

let myArray = ['Hola', 'Joselu', 'Que', 'Tal', 'Estas'];
let myNumber = parseInt(prompt("Enter a number: ").trim())

document.writeln(returnStr(myNumber, myArray))
