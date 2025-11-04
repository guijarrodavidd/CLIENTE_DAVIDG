let phrase = prompt("Tell me a phrase: ");
let array = phrase.split(" ");

document.open();
document.writeln("Your phrase is: "+phrase + "<br>")
document.writeln("Number of words<br>")
document.writeln(array.length)

document.writeln("<br>First Word<br>")
document.writeln(array[0])

document.writeln("<br>Last Word<br>")
document.writeln(array[array.length-1])

document.writeln("<br>Words in Reverse order<br>")
document.writeln(array.reverse())

document.writeln("<br>Words in A->Z order<br>")
document.writeln(array.sort())

document.writeln("<br>Words in Z->A order<br>")
document.writeln(array.sort().reverse())

document.close();

