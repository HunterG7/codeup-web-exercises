(() => {
    "use strict";

        // classic if-else statement
        // let myNumber = 11;
        // if (myNumber > 5) {
        //     console.log("yay");
        // } else {
        //     console.log("nay");
        // }

        // ternary operator => (condition) ? if true : if false;
        // (myNumber > 12) ? console.log("yay") : console.log("nay");

        // traditional function - can call function before declaring it. Leave these functions at bottom of file
        function helloWorld() {
            return "Hello World";
        }
        helloWorld();

        // the arrow function - must be declared before calling
        const helloName = (name) => {
           return `Hello, ${name}!`;
        }

        let firstName = helloName("Hunter");
        // console.log(firstName);
        let secondName = helloName("Noah");
        // console.log(secondName);

        // IIFE(Immediately Invoked Function Expression) Arrow Function - used to protect variables from the global scope
            (() => {
        // your entire js file goes here.
            })();

        // function practice
        const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;

        let bestFriends = highFive("Hunter", "Tristin"); // one way to call
        // console.log(bestFriends);
        // console.log(highFive("Tristin", "Hunter")); // second way to call

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
        // console.log(reverseStringTwo("Hunter"));

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

    // ## Challenge Function Drills

        // - Write a function called `identity(input)` that takes in an argument called
        // input and returns that input.

        const identity = input => input;
        // console.log(identity(12));

        // - Write a function called `getRandomNumber(min, max)` that returns a random
        // number between min and max values sent to that function call.

        const getRandomNumber = (min, max) => {
            min = ++min; // min is inclusive so i have to add one for it to be exlusive
            return Math.floor(Math.random() * (max - min) + min);
        }
        // console.log(getRandomNumber(19, 21));

        // - Write a function called `first(input)` that returns the first character in the
        // provided string.

        const first = input => {
            return input[0];
        }
        // console.log(first("Hunter"));

        // - Write a function called `last(input)` that returns the last character of a
        // string

        function last (input) {
            let lastChar = input[input.length - 1];
            return lastChar;
        }

        // console.log(last("Hunter"));

        // - Write a function called `rest(input)` that returns everything but the first
        // character of a string.

        const rest = input => {
            return input.replace(input[0], '');
        }
        // console.log(rest("Hunter"));

        // - Write a function called `reverse(input)` that takes a string and returns it
        // reversed.

        const reverse = input => {
            return input.split('').reverse().join('');
        }
        // console.log(reverse("Hunter"));

        // - Write a function called `isNumeric(input)` that takes an input and returns a
        // boolean if the input is numeric.

        const isNumeric = input => {
            if (isNaN(input) === false && typeof input === "number") {
                return true;
            } else {
                return false;
            }
        }
        // console.log(isNumeric(34));

        // - Write a function called `count(input)` that takes in a string and returns the
        // number of characters.

        const count = input => {
            return input.length;
        }
        // console.log(count("Hunter"));

        // - Write a function called `add(a, b)` that returns the sum of a and b

        const add = (a, b) => {
            return a + b;
        }
        // console.log(add(14, 11));

        // - Write a function called `subtract(a, b)` that return the difference between
        // the two inputs.

        const subtract = (a, b) => {
            return a - b;
        }
        // console.log(subtract(21, 9));

        // - Write `multiply(a, b)` function that returns the product

        const multiply = (a, b) => {
            return a * b;
        }
        // console.log(multiply(2, 9));

        // - Write a `divide(numerator, denominator)` function that returns a divided by b

        const divide = (numerator, denominator) => {
            return numerator / denominator;
        }
        // console.log(divide(22, 11));

    //     - Write a `remainder(number, divisor)` function that returns the remainder left
    //     over when dividing `number` by the `divisor`

        const remainder = (number, divisor) => {
            return number % divisor;
        }
        // console.log(remainder(15, 4));

    //     - Write the function `square(a)` that takes in a number and returns the number
    //     multiplied by itself.

        const square = a => {
            return a * a;
        }
        // console.log(square(7));

    //     - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
    //     and your square function and not + or * operators

        const sumOfSquares = (a, b) => {
            return add(square(a), square(b));
        }
        // console.log(sumOfSquares(3, 6));

    //     - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
    //     first parameter is the name of the math function you want to apply. a and b
    //     are the two numbers to run that function on.

        const doMath = (operator, a, b) => {
            switch (operator) {
                case "add":
                    return add(a, b);
                case "subtract":
                    return subtract(a, b);
                case "multiply":
                    return multiply(a, b);
                case "divide":
                    return divide(a, b);
                case "remainder":
                    return remainder(a, b);
                default:
                    return "I cannot perform this operation."
            }
        }
        // console.log(doMath("add", 29, 14));

        // ## Even More Function Bonuses

        // 1. Create a function that will return how many whitespace characters are at the
        // beginning and end of a string.

        const noBeginWhitespace = string => {
            return string.trimStart();
        }
        // console.log(noBeginWhitespace("Hunter"));

        // 1. Create a function that takes in two string inputs.
        //
        // - If the second string input is present in the first, return the first input
        // string with the second input string removed from it.
        // - If the second string input is present multiple times in the first, the
        // second string will only be removed where it first occurs in the first
        // string.
        // - If the second string input is not present in the first, return the first
        // string as entered in the function

    const stringFunction = (stringOne, stringTwo) => {
            stringOne = stringOne.toLowerCase();
            stringTwo = stringTwo.toLowerCase();
            if (stringOne.includes(stringTwo)) {
                stringOne = stringOne.replace(stringTwo, '');
                return stringOne;
            } else {
                return stringOne;
            }
    }
    // console.log(stringFunction("Apples are red", "red"));

        // 1. Create a function that takes in a string and returns true if the last letter
        // is an "a" (otherwise, return false).

    const includesA = (string) => {
            string = string.toLowerCase();
            if (string.indexOf('a') > -1) {
                return true;
            } else
                return false;
    }
    // console.log(includesA('flattened'));

        // 1. EXTRA CHALLENGE: create a function that will return how many whitespace
        // characters are at the beginning of a string (hint: use regex).

    const numOfWhitespaces = string => {
            let count = 0;
            for (let i = 0; i < string.length; i ++) {
                if (string[i] === ' ') {
                    count++;
                } else {
                    return count;
                }
            }
    }
    // console.log(numOfWhitespaces("  H un t er    "))

        // 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"

    function returnTrueMessage () {
            return "Hey, it's true!";
    }
    // console.log(returnTrueMessage());

        // - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"

    const returnsFalseMessage = () => {
        return "Hey, it's false!";
    }
    // console.log(returnsFalseMessage());

        // - Create a function `returnMessage()` that takes in a function and returns the call to the function
        // - Experiement passing in different functions.

    const returnMessage = anyFunction => {
            return anyFunction;
    }
    // console.log(returnMessage(returnsFalseMessage()));

        // 1. Create a function, `willLoginUser()` that takes in a username string,
        // password string, user age, a boolean indicating if they are an admin.

    const willLoginUser = (username, password, userAge, isAdmin) => {
            username = username.trim().toLowerCase();
            password = password.trim().toLowerCase();
            if (username !== password && (userAge >= 18 || isAdmin === true)) {
               return true;
            } else {
                return false;
            }
    }
    // console.log(willLoginUser("Hunter", "  huNter", 159 false));

        // The function will return true if the username is not the same as the
        // password and the user is at least 18 years old. If the user is an admin,
        // they do not have to be a certain age but the password must still not match
        // the username.

    let shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    shapes.forEach(function(shape) {
        console.log('Here is a lovely shape: ' + shape + '.');
    });



})();