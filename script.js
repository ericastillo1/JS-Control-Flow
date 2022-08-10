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

/* Check: !false && true
Check: false || true
Check: a && a == b
Check: !true || !false && !false
Check: 8 > 1 && true || c
Check: d > 489764654798731315465467 && true || false
Check: 20 % 2 */

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

/* Loops */ console.log("Practice Loops");
