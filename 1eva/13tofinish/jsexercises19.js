function linearSearch(dataArray, number) {
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] === number) return true;
    }
    return false;
}

let array = [1, 2, 3, 4, 5];
document.writeln(linearSearch(array, 3)); // true
document.writeln("<br>");
document.writeln(linearSearch(array, 6)); // false
