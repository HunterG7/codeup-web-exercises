"use strict";
(() => {
    // 2
    const showMultiplicationTable = number => {
        for (let i = 0; i < 10; i++) {
            let product = number * i;
            console.log(`${number} x ${i} = ${product}`);
        }
    }
    showMultiplicationTable(5);

    // 3
    const isEven = (userNum) => {
        if (userNum % 2 === 0) {
            return "is even";
        } else {
            return "is odd";
        }
    }
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 181) + 20;
        let evenOrOdd = isEven(randomNum);
        console.log(`${randomNum} ${evenOrOdd}`);
    }
    // 4
    for (let i = 1; i < 10; i++) {
        let numbers = "";
        for (let j = 0; j < i; j++) {
            numbers = `${numbers}${i}`;
        }
        console.log(numbers);
    }

    // 5
    for (let i = 100; i > 0; i = i - 5) {
        console.log(i);
    }

})()