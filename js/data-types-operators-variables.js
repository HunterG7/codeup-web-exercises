// 1.1
let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
// a = 3, b = 1, c = 3

// 1.2
let d = "hello";
let e = false;
d++;
e++;
// d = NaN, e = 1

// 1.3
let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// perplexed = NaN

let price = 2.7;
price.toFixed(2);
// price = '2.70'

let stringPrice = "2.7";
stringPrice.toFixed(2);
// runtime error

// 1.4
isNaN(0); // false

isNaN(1); // false

isNaN(""); // true

isNaN("string"); // true

isNaN("0"); // false

isNaN("1"); // false

isNaN("3.145"); // false

isNaN(Number.MAX_VALUE); // false

isNaN(Infinity); // false

isNaN("true"); // true

isNaN(true); // false

isNaN("false"); // true

isNaN(false); // false
// to illustrate why the isNaN() function is needed:
NaN == NaN

// 1.5
!true // false

!false // true

!!true // true

!!false // false

!!0 //false

!!-0 // false

!!1 // true

!!-1 // true

!!0.1 // true

!!"hello" // true

!!"" // false

!!'' // false

!!"false" // true

!!"0" // true

// 2.1
let sample = "Hello Codeup";
let sampleLength = sample.length;

// 2.2
let uppercaseSample = sample.toUpperCase();

//2.3
// old syntax: sample = sample + " Students";
sample = `${sample} Students`;

//2.4
sample = sample.replace("Students", "Class");
console.log(sample);

//2.5
let lowerCIndex = sample.indexOf('c'); //cannot find index so result is -1

//2.6
let upperCIndex = sample.indexOf('C'); //finds index of 'C' at 6

//2.7
let onlyCodeup = sample.substring(6, 12);

//3.1
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let pricePerDay = 3;
let totalPrice = pricePerDay * (littleMermaid + brotherBear + hercules);

//3.2
let googlePay = 400 * 6;
let amazonPay = 380 * 4;
let facebookPay = 350 * 10;
let totalPay = googlePay + amazonPay + facebookPay;

//3.3
let isClassFull = false;
let classScheduleConflict = true;
let enrollment;
if (isClassFull === false && classScheduleConflict === false) {
    enrollment = true;
} else {
    enrollment = false;
}

//3.4
let itemsBought = 12;
let minItemsBought = 2;
let offerExpiration = true;
let premium = true;
let productOffer;
if (offerExpiration === true && (premium === true || itemsBought >= minItemsBought)) {
    productOffer = true;
} else {
    productOffer = false;
}

//4.1
let username = 'codeup';
let password = 'notastrongpassword';
let minPasswordChar = 5;
for (let i = 0; i < 100; i++) {
    if (password.length < minPasswordChar) {
        console.log("Please enter a new password that is no less than 5 characters.");
        // prompt user for new password
    } else {
        break;
    }
}

//4.2
let noUsername = password.indexOf(username) >= 0;

//4.3
let maxUsernameChar = 20;
for (let i = 0; i < 100; i++) {
    if (username.length > maxUsernameChar) {
        console.log("Please enter a new username that is no more than 20 characters");
        // prompt user for new username
    } else {
        break;
    }
}

//4.4
/* user is continuously prompted to enter a new username and password until they have
no white spaces at the beginning or end */
let userLength = username.length;
let firstCharUser = username.substring(0, 1);
let lastCharUser = username.substring((userLength - 1), userLength);
for (let i = 0; i < 10; i++) {
    if (firstCharUser === ' ' || lastCharUser === ' ') {
        console.log("Please enter a new username without spaces.");
        // prompt user for new username
    } else {
        break;
    }
}
let passLength = password.length;
let firstCharPass = password.substring(0, 1);
let lastCharPass = password.substring((passLength - 1), passLength);
for (let i = 0; i < 10; i++) {
    if (firstCharPass === ' ' || lastCharPass === ' ') {
        console.log("Please enter a new password without spaces.");
        // prompt user for new password
    } else {
        break;
    }
}

