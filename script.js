console.log( Boolean("") ); //false
console.log( Boolean(null) ); //false
console.log( Boolean(0) ); //false

console.log( Boolean("hi") ); //true string is not empty
console.log( Boolean(1) ); //true any number besides 0
console.log( Boolean(true) ); //true

/* ! return will be inverse */ console.log("!");
console.log(!true); //false

/* !! you'll get the orignal boolean value */ console.log("!!");
console.log(!!true); //true
console.log(!!1); //true
console.log(!!-1); //true
console.log(!![]); //true
console.log(!!{}); //true

console.log(!!null); //false
console.log(!!""); // false


/* --- Practice ---*/ console.log("practice");

const a = true;
const b = false;
let c;
const d = Infinity;

console.log(!false && true); // true
console.log(false || true); //true  
/* with the || (or) only 1 side has to be true */
console.log(a && a == b); // false
console.log(!true || !false && !false); //true
console.log(8 > 1 && true || c); //true
console.log(d > 489764654798731315465467 && true || false); //true
console.log(20 % 2); //0 
console.log(Boolean(20 % 2)); //false

/* Conditionals */ console.log("Practice Conditionals");
let isRainy = true;

if (isRainy) {
    console.log("Bring an umbrella");
};


let age = 50;

if (age >= 21) {
    console.log("You're allowed to buy a beer");
};


if (6 % 2 === 0) {  //means the remainder is 0, therefore even
    console.log("This number is even");
};

/* Else Statements */ console.log("Practice Else Statements");
if(true) {
    console.log("TRUE - this is very true");
} else {
    console.log("FALSE - not true at all");
};


if (5 % 2 === 0) {
    console.log("this number is even");
} else {
    console.log("this number is odd");
};


let yourAge = 20;

if (yourAge === 21) {
    console.log("Wow, you just made it !");
} else if (yourAge > 21) {
    console.log("You're allowed to buy beer");
} else {
    console.log("You're not old enough to buy beer");
};


let newAge = 15;

if (newAge >= 21) {
    console.log("You're allowed to buy a beer");
    if (newAge === 21) {
        console.log("Wow, you just made it !");
    };
} else if (newAge <= 15 && newAge > 5) {
    console.log("Where are your parents");
} else {
    console.log("You're not old enough to buy beet");
};

/* Loops */ console.log("Practice Loops");
for (let i = 0; i < 5; i++) {
    console.log(i);
};


for ( let i = 0; i < 100; i+=10) {
    console.log(i);
};


for ( let i = 100; i >= 0; i-=20) {
    console.log(i);
};


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " Is an even number");
    } else {
        console.log(i + " Is an odd number");
    };
};


console.log("Practice Examples");
// Write a for loop that prints all the number from 7 to 635.
for ( i = 7; i <= 635; i++) {
    console.log(i);
};

// Declare the variables const start = 0 and const limit = 100. Write a for loop that counts from the value of start to the value oflimit.
const start = 0;
const limit = 100;

for ( i = start; i <= limit; i+=20) {
    console.log(i);
};

// Write another for loop that counts from 1 to 100 , and console.logs each number that is a multiple of 3. (i.e. => 1, 3, 6, 9, 12, 15, ...)

// The modulus operator - % - returns the remainder of a division operation.
for ( i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    };
};

/* Iterating over Arrays */ console.log("Practice Iterating over Arrays");
let instructors = ["Don", "Hector", "Jimmy", "Zakk", "Eva", "Pearl", "Erin"];

instructors.push("Erica");

for ( let i = 0; i < instructors.length; i++) {
    console.log(instructors[i].toUpperCase());
};

/* While Loop */ console.log("Practice While Loop");
let num = 0;
while (num <=10) {
    console.log(num);
    num++
};

for (let i = 0; i <= 10; i++) {
    console.log(i);
};


/* let passwordGuess = "";

while (passwordGuess !== "password") {
    passwordGuess = prompt("You have been imprisoned in the code-block of a while loop! What is the magic word to exit?")
};

alert("Argh! You have escaped! I am so lonely, no one ever wants to stay.") */

