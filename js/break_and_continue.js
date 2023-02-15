(() => {
"use strict";

    // break and continue exercise
    let userInput = prompt("Please enter an odd number between 1 and 50.");
    let userFloatInput = parseFloat(userInput);
    for (let i = 0; i < 10; i++) {
        if (isNaN(userFloatInput) === false && userFloatInput % 2 !== 0 && userFloatInput >= 1 && userFloatInput < 50) {
            break;
        } else {
            userInput = prompt(`${userInput} is not an odd number between 1 and 50. Please try again.`);
            userFloatInput = parseFloat(userInput);
        }

    }
    console.log(`The number to skip is ${userFloatInput}.`);
    for (let i = 1; i < 50; i = i + 2) {
        if (i === userFloatInput) {
            console.log(`Yikes! Skipping number ${userFloatInput}.`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }

    // while loop exercise
    let randomNum = 2;
    while (randomNum < 70000) {
        console.log(randomNum);
        randomNum = randomNum * 2;
    }

    // do while loop exercise
    // This is how you get a random number between 50 and 100
    let totalCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    let randNumConesToSell = Math.floor(Math.random() * 5) + 1;
    do {
        if (totalCones >= randNumConesToSell) {
            totalCones = totalCones - randNumConesToSell;
            if (randNumConesToSell === 1) {
                console.log(`${randNumConesToSell} cone was sold.`);
            } else {
                console.log(`${randNumConesToSell} cones were sold.`);
            }
        } else {
            console.log(`I cannot sell you ${randNumConesToSell}. I only have ${totalCones} left.`)
        }
        randNumConesToSell = Math.floor(Math.random() * 5) + 1;
    } while (totalCones > 0) {}
    console.log("Yay! I sold them all!");

})();