const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland',]
const names = ['Eve', 'Mathias', 'Derek', 'Athenea','Magalenha']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. Use reduce to sum all the numbers in the numbers array.
const sumreducenumbers = numbers.reduce((accumulator, currVal) => {
    return accumulator + currVal;
});
// 2. Use reduce to concatenate all the countries and to produce this sentence: ‘Estonia,
// Finland, Sweden, Denmark, Norway, and Iceland are north European countries’.
const sentence = countries.reduce((acc, country, index) => {
    if (index === countries.length - 1) {
        return acc + " and " + country + " are north European countries.";
    } else {
        return acc + ", " + country;
    }
});
// 3. Use map to create a new array by changing each country in the countries array to
// uppercase.
const upperCountries = countries.map((country) => {
    return country.toUpperCase();
});
// 4. Use map to create a new array with the lengths of the names of each country from the
// countries array.
const lengthscountries = countries.map((country) => {
    return country.length;
});
// 5. Use forEach to console.log each country in the countries array.
const countriesforeach = countries.forEach((country) => {
    console.log(country);
});
// 6. Use filter to filter out countries containing ‘land’.
const landOut = countries.filter((country) => {
    return country.includes("land");

})
// 7. Use filter to filter out countries having six characters.
const sixcharsOut = countries.filter((country) => {
    if (country.length == 6) {
        return country.length;
    }
})
// 8. Use filter to filter out countries containing six letters and more.
const sixcharsmoreOut = countries.filter((country) => {
    if (country.length >= 6) {
        return country.length;
    }
})
// 9. Use filter to filter out countries starting with 'E';
const startswithE = countries.filter((country) => {
    if (country[0] == "E") {
        return country.length;
    }
})
// 10. Declare a function called getStringLists which takes an array as a parameter and then
// returns an array only with string items.
const getStringLists = (arr) => arr.filter(item => typeof item === "string");
let mixedArray = ["Don", 25, true, "Jose", 8, "Socuellamos"];
let result = getStringLists(mixedArray);
// 11. Use some to check if the length of some name in the array of names is greater than seven.
const hasLongName = names.some(name => name.length > 7);
// 12. Use every to check if all the countries contain the word ‘land’.
const hasLand = countries.every((country) => country.includes("land"));
// 14. Use find to find the first country containing only six letters in the countries array.
const sixLetterCountry = countries.find(country => country.length === 6);
// 15. Use findIndex to find the position of the first country containing only six letters in the
// countries array.
const sixLetterCountryIndex = countries.findIndex(country => country.length === 6);
// 16. Use findIndex to find the position of Norway. If it doesn't exist in the array you will get -1.
const norwayfindIndex = countries.findIndex(country => country === 'Norway');
// 17. Use findIndex to find the position of Russia. If it doesn't exist in the array you will get -1.
const russiafindIndex = countries.findIndex(country => country === 'Russia');



// console.log(sumreducenumbers);
// console.log(sentence);
// console.log(upperCountries);
// console.log(lengthscountries);
// console.log(landOut);
// console.log(sixcharsOut);
// console.log(sixcharsmoreOut);
// console.log(startswithE);
// console.log(result);
// console.log(hasLongName);
// console.log(hasLand);
// console.log(sixLetterCountry);
// console.log(sixLetterCountryIndex);
// console.log(norwayfindIndex);
// console.log(russiafindIndex);











