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


function add(x, y) {
    return x + y;
}
// Function Expression
const add = function (x, y) {
    return x + y;
}


// Higher Order functions
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)


// Return function as a value. Aka "Factory Function"
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18)
const isAdult = makeBetweenFunc(19, 64)


// Method
const myMath = {
    PI: 3.1459,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

myMath.square(2)

// Shorthand way to write the same method
const myMath = {
    PI: 3.1459,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


// Keyword "This"
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    meow() {
        console.log(`${this.name} says Meowww`);
    }
}


// Try/Catch
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log('Please pass a string next time!')
    }
}


// ********** Array Callback Methods **********
// forEach method
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (el) {
    console.log(el);
})
// for of is the newer version of forEach
for (let el of numbers) {
    console.log(el);
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    }
]
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


// Map Method
const numbers = [1, 2, 3, 4]

const doubles = numbers.map(function (num) {
    return num * 2;
})


// Arrow Functions
const square = (num) => {
    return num * num;
}

// Arrow Function Implicit Return
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// If Function Expression fits on one line, no parenthesis needed
const add = (a, b) => a + b


console.log('Hello...')
setTimeout(() => {
    console.log('...are you still there?')
}, 3000)

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

clearInterval(id);


// Filter Method
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    }
]

const goodMovies = movies.filter(m => m.score > 80)

movies.filter(m => m.score > 80).map(m => m.title);


const exams = [80, 98, 92, 78]

exams.every(score => score >= 75)
// will return true


// Reduce Method
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
// Callback     Accumulator  CurrentValue  Return Value
// first call       3              5            8
// second call      8              7            15
// third call       15             9            24
// fourth call      24             11           35

// Finding smallest value using Reduce
const prices = [9.99, 1.50, 19.99]
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
// minPrice = 1.50