// printin on browser console

// alert("Hello world, external js index file");
// console.log("print from vscode");

// single line comment

/* 
multi line comment
*/

let age = 25;
console.log(age);

console.log(age > 10);

let myAge = 45;
console.log(age);

const score = 89;
console.log(score);

// value of const cant be changed - error 
// score = 100;
// console.log(score);

const myScore = 100;


/* Data types

number = 10,20,0.05,etc
string- char or series of char
boolean= true or false

*/

let myName = "Sidharth jain";
console.log(myName);

// string creation

//1st way

let firstName = "Sidharth";
let lastName = "Jain";

// using backticks `
let longPara = `Long form content`;


// using quotes in quotes

// let random = 'It's new'; // error

// single quotes inside double quotes

let random2 = "It's new"; // ok

// concatenation of strings

let fullName = firstName + lastName;
console.log(fullName);
console.log(firstName+lastName);
console.log(firstName,lastName);
console.log(firstName+" "+lastName);

// accessing characters

console.log(firstName[0]);

let firstNameLength = firstName.length;
console.log(firstNameLength) // length starts from 1 , index from 0 to len-1

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

console.log(firstName.indexOf("S"));

console.log(firstName.replaceAll("h","-"));