(() => {
"use strict";

    // break and continue exercise
    let input = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    while(!(input % 2 !== 0 && typeof input === "number" && isNaN(input) === false && input > 0 && input < 50)){
        input = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    }
    // for loop to show actual output
    console.log("The number t o  s k i p  i s  5 4")
    for (let i = 1; i < 50; i = i + 2 ) {
        if (i === input) {
            console.log(`Yikes! Skipping number ${input}.`);
        } else {
            console.log(`Here is an odd number: ${i}`);
        }
    }

    // while loop exercise
    let randomNum = 2;
    while (randomNum < 70000) {
        console.log(randomNum);
        randomNum = randomNum * 2;
    }

    // do while loop exercise
    let totalCones = Math.floor(Math.random() * 50) + 50,
        randNumConesToSell = Math.floor(Math.random() * 5) + 1;
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