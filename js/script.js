// Numbers
const num = [3, 6, 5];
num[1] = 10;
console.log(num);

// Strings
const str = ["forte", "piano", "mezzoforte"];
str[3] = "mezzopiano";
console.log(str);

// Operations
const sum = [6, 8, 3, 6];
let total = 0;
for (const elem of sum) {
    total += elem;
}
console.log(total);

// For
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Symbols
const symbols = ["Igor", "Colt", "Shelly", "Bull", "Angelo"];
for (const elem of symbols) {
    if (elem.length >= 5) {
        console.log(elem);
    } else {
        continue;
    }
}

// Max
const numArray = [39, 69, 67, 10, 80, 1000, 10000, 100000, 1000000, 1];
let max = numArray[0];
for (let i = 0; i < numArray.length; i++) {
if (max < numArray[i]) {
    max = numArray[i];
}
}
console.log(max);  


// Search
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const elem of array) {
    if (elem % 2 === 0) {
        console.log(elem);
    } else {
        continue;
    }
}