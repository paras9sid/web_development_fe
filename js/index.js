// primitive vs reference types

let numOne = 15;
let numTwo = numOne;
numOne = 30;

console.log(numOne);
console.log(numTwo);


// ref 

let objOne = {
    title: "Learning",
    rank:1
}
let objTwo = objOne;

console.log(objOne);
console.log(objOne);
console.log("");

objOne.rank=5;

console.log(objOne);
console.log(objOne);
console.log("");

objTwo.rank=10;
console.log(objOne);
console.log(objOne);
console.log("");

let objThree = objTwo;
objOne.rank = 15;

console.log(objOne);
console.log(objOne);
console.log(objThree);
console.log("");

// deep copy - primitive type - will create a new copy

// shallow copy = reference copy - points to same object

// arrays
let arrOne = ["sid","new"];
let arrTwo = arrOne;

// spread operator = ... -> 3 dots 
let arrThree = [...arrOne];

// ... spread operator + new item added
let arrFour = [...arrOne, "hello","javascript","python"];

// merging array
let arrTemp = ["newvlaues","oldvalues"];
let arrFive= [...arrOne, ...arrTemp];


arrOne.push("copy");

console.log(arrOne);
console.log(arrTwo);
console.log(arrThree); // only 2 elements now, new one not dependent on refernce- created new array
console.log(arrFour);
console.log(arrFive);
console.log("");

// obj eg.

let objFour = {
    title: "Learning",
    rank:20
}
// ... operator- spread
let objFive = {...objFour};

// ... spread operator + new item added
let objSix = {...objFour, publish:"21.11.24"}

//overwriting values - adding old values with old value rank updated with new one
let objSeven = {...objFour, rank:100};

// value changed
objFour.rank=90;

console.log(objFour); //rank 90
console.log(objOne); // rank 15 only earlie
console.log(objSix);
console.log(objSeven);
console.log("");

