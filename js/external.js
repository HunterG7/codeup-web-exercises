"use strict"; // makes js rules more strict. It will not compensate for your mistakes.

console.log("Hello from external JavaScript!");
alert("Welcome to my website!");
let userFavColor = prompt("What is your favorite color?");
userFavColor = userFavColor.toLowerCase();
alert(`Awesome, ${userFavColor} is my favorite color too.`);

// Exercise 3
/* When the exercise asks you to use a number, instead use a prompt to ask the user for that
 number.Use an alert to show the results of each problem. Finally, commit the changes to
 your git repository, and push to GitHub. */

//3.1
alert("I am renting 3 movies for my kids: The Little Mermaid, Brother Bear, and Hercules.");
let rentPerDay = prompt("How much should renting a movie cost per day?(No $ sign needed)");
let littleMermaidRentDays = prompt("How many days should I rent Little Mermaid?");
let brotherBearRentDays = prompt("How many days should I rent Brother Bear?");
let herculesRentDays = prompt("How many days should I rent Hercules?");
let totalRentPrice = parseInt(rentPerDay) * (parseInt(littleMermaidRentDays) + parseInt(brotherBearRentDays) + parseInt(herculesRentDays));
alert(`The total rent price is $${totalRentPrice}.`);

// 3.2
alert("I work as a contractor for 3 companies: Google, Amazon, and Facebook.");
let googleHours = prompt("How many hours should I work at Google this week?");
let googlePay = prompt("How much should I be paid per hour at Google?(No $ sign needed)");
let amazonHours = prompt("How many hours should I work at Amazon this week?");
let amazonPay = prompt("How much should I be paid per hour at Amazon?(No $ sign needed)");
let facebookHours = prompt("How many hours should I work at Facebook this week?");
let facebookPay = prompt("How much should I be paid per hour at Facebook?(No $ sign needed)");
let oneWeeksPay = (parseInt(googlePay) * parseInt(googleHours)) + (parseInt(amazonPay) * parseInt(amazonHours))
    + (parseInt(facebookPay) * parseInt(facebookHours));
alert(`Based on the working hours and hourly pay you gave me, I will make $${oneWeeksPay} this week.`);

//3.3
alert("Please decide if this hypothetical student can enroll into their class.");
let isClassFull = confirm("Is the class full?(NO = Cancel, YES = OK)");
let classScheduleConflict = confirm("Will this class conflict with the student's schedule?(NO = Cancel, YES = OK)");
if (isClassFull === false && classScheduleConflict === false) {
    alert("The student can enroll in class.");
} else {
    alert("The student cannot enroll in class.");
}

//3.4
alert(`A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. 
Premium members do not need to buy a specific amount of products.`);
let itemsBought = prompt("How many items did you buy from the store?");
let isExpired = confirm("Has the offer expired?(NO = Cancel, YES = OK)");
let isPremium = confirm("Are you a premium member?(NO = Cancel, YES = OK)");
if (isExpired === false && (parseInt(itemsBought) >= 2 || isPremium === true)) {
    alert("The product offer can be applied!");
} else {
    alert("The product offer cannot be applied.");
}