"use strict";
(() => {

    let userInput = parseInt(prompt("Please Enter an odd number between 1 and 50."));
    for (let i = 0; i < 10; i++) {
        if (isNaN(userInput) === true) {
            userInput = parseInt(prompt("That is not an odd number between 1 and 50. Please try again."));
        } else if (userInput % 2 !== 0 && userInput <= 50 && userInput >= 1) {
            break;
        } else {
            userInput = parseInt(prompt(`${userInput} is not an odd number between 1 and 50. Please try again.`));
        }
    }
    console.log(`The number to skip is ${userInput}.`);
    for (let i = 1; i < 50; i = i + 2) {
        if (i == userInput) {
            console.log(`Yikes! Skipping number ${userInput}.`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }

    let randomNum = 2;
    while (randomNum < 70000) {
        console.log(randomNum);
        randomNum = randomNum * 2;
    }

    // This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    let randNumConesToSell = Math.floor(Math.random() * 5) + 1;
    do {
        if (allCones >= randNumConesToSell) {
            allCones = allCones - randNumConesToSell;
            if (randNumConesToSell === 1) {
                console.log(`${randNumConesToSell} cone was sold.`);
            } else {
                console.log(`${randNumConesToSell} cones were sold.`);
            }
        } else {
            console.log(`I cannot sell you ${randNumConesToSell}. I only have ${allCones} left.`)
        }
        randNumConesToSell = Math.floor(Math.random() * 5) + 1;
    } while (allCones > 0) {}
    console.log("Yay! I sold them all!");

})()