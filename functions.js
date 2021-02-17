// function funcName() {

// }


function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');

}
singSong()


function greet(firstName, lastName) {
    console.log(`Hey there, ${fistName} ${lastName[0]}.`);
}


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}


//Write a function called sumArray which accepts a single argument: an array of numbers.
// It should return the sum of all the numbers in the array.
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; ++i) {
        total += array[i];
    }
    return total;
}


// Write a function called lastElement which accpets a single array argument.
// The function should return the last element of the array (without removing the element).
// If the array is empty, the function should return null.
function lastElement(array) {
    if (typeof array !== "undefined" && array !== null && array.length !== null && array.length > 0) {
        return array[array.length - 1];
    } else {
        return null;
    }
}


// Define a function called capitalize that accepts a string argument and returns a new string
// with the first letter captialized (but the rest of the string unchanged).
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Write a function called returnDay. This function takes in one parameter (a number from 1-7)
// and returns the day of the week. If the number is less than or greater than 7, the function
// should return null.
const weekDAY = new Array(7);
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';
weekDAY[7] = 'Sunday';

function returnDay(x) {
    if (x < 1 || x > 7) {
        return null;
    }
    else {
        return weekDAY[x];
    }
}