"use strict";

(() => {
// classic if-else statement
let myNumber = 11;
if (myNumber > 5) {
    console.log("yay");
} else {
    console.log("nay");
}

// ternary operator => (condition) ? if true : if false;
(myNumber > 12) ? console.log("yay") : console.log("nay");

// traditional function - can call function before declaring it. Leave these functions at bottom of file
function helloWorld() {
    return console.log("Hello World");
}
helloWorld();

// the arrow function - must be declared before calling
const helloName = (name) => {
   let message = `Hello, ${name}!`;
   return message;
}

let firstName = helloName("Hunter");
console.log(firstName);
let secondName = helloName("Noah");
console.log(secondName);

// IIFE(Immediately Invoked Function Expression) Arrow Function - used to protect variables from the global scope
    (() => {
// your entire js file goes here.
    })();

// function practice
const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;

let bestFriends = highFive("Hunter", "Tristin"); // one way to call
console.log(bestFriends);
console.log(highFive("Tristin", "Hunter")); // second way to call

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}
let randomNum = 3;
// console.log(isEven(randomNum));

    const reverseStringOne = (string) => {
        let result = '';
        for (let i = string.length - 1; i > -1; i--) {
            result = result + string[i];
        }
        return result;
    }
    // console.log(reverseStringOne("Hunter"));

    const reverseStringTwo = (string) => {
        return string.split('').reverse().join('');
    }
    console.log(reverseStringTwo("Hunter"));

    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    }
    // console.log(fullName("Hunter", "Grubbs"));

    const toNegative = (number) => {
        if (number > 0) {
            return number * (-1);
        } else {
            return number;
        }
    }
    // console.log(toNegative(-23));

    const whatQuarter = (number) => {
        if (number >= 1 && number <= 3) {
            return "Quarter 1";
        } else if (number >= 4 && number <= 6) {
            return "Quarter 2";
        } else if (number >= 7 && number <= 9) {
            return "Quarter 3";
        } else if (number >= 10 && number <= 12) {
            return "Quarter 4";
        } else {
            return "Number is out of scope(1 - 12)."
        }
    }
    // console.log(whatQuarter(3));

    const thirdTriangleAngle = (angleOne, angleTwo) => {
        return 180 - angleOne - angleTwo;
    }
    // console.log(thirdTriangleAngle(45, 91));

    const toMilliseconds = (hours, minutes, seconds) => {
        if (0 <= hours <= 23 && 0 <= minutes <= 59 && 0 <= seconds <= 59) {
            let hoursToMilli = hours * 3600000;
            let minutesToMilli = minutes * 60000;
            let secondsToMilli = seconds * 1000;
            return hoursToMilli + minutesToMilli + secondsToMilli + " milliseconds";
        } else {
            return "Out of range."
        }
    }
    // console.log(toMilliseconds(1, 0, 14));

})();