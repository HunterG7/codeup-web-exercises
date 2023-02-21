"use strict";

// number => $$
    function toUSDollars(number, language = "en", country = "US", currency = "USD") {
        return parseFloat(number).toLocaleString(`${language}-${country}`,
            {style: 'currency', currency: currency}
        );
    }

// makes sure that input is a number. Returns true or false
    const isNumber = input => {
        return (typeof input === "number" && isNaN(input) === false);
    }

// builds a pyramid out of asterisks
    const buildPyramid = rows => {
        let row = "";
        let maxNumSpaces = rows;
        let maxNumStars = 1;
        let pyramid = "";
        for (let i = 0; i < rows; i++) {
            let row = "";
            for (let j = 0; j < maxNumSpaces; j++) {
                row += " ";
            }
            for (let j = 0; j < maxNumStars; j++) {
                row += "* ";
            }
            maxNumSpaces -= 1;
            maxNumStars += 1;
            pyramid += `\n${row}`;
        }
        return pyramid;
    }

// generates a random number between 2 values
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

// create array of random non-repeating numbers of any size
    function arrayOfRandomNumbers (lengthOfArray) {
        let array = [];
        for (let i = 0; i < lengthOfArray; i++) {
            let random = randomNumber(1, lengthOfArray + 1000);
            while (array.includes(random)) {
                random = randomNumber(1, lengthOfArray + 1000);
            }
            array.push(random);
        }
        return array;
    }


