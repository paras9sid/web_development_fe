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

// Numbers

let radius = 15;
const pie = 3.14;

let result = radius + pie;
console.log(radius+pie);

//shortahnd for +1 and -1 

console.log(result++);
console.log(result--);

let area = pie*(radius**2);
console.log(area);

radius =- 10;
console.log(radius);

let random = 'XYZ';
let resul1 = radius / random;
console.log(resul1);
let resul2 = radius + random; // concatenated
console.log(resul2);

// let result3 = "My radius is" + radius + " and value of PI is " + pie;
let result3 = `My radius is ${radius} and value of PI is ${pie};`
console.log(result3);

// template literals - backticks -> ``
let res = `My firstname is ${firstName} and lastname is ${lastName}.`;
console.log(res);

// Null and Undefined

// Null -- asssign as it is- means nothing

// undefined - not defined - no value assigned

let ex= null; // Null
let ex2; // Undefined - no value asssigned


//loose vs strict comparison

console.log(age == 25);
console.log(age == "25");
console.log(age === "25");

console.log( typeof age);
console.log(typeof "25");

console.log(age != "25");
console.log(age !== "25");

let year = 1987;
console.log(typeof year);

let yearString = String(year);
console.log(yearString);

let random3 = "ZYZ";
console.log(Number(random3)); //Nan = not a number as string cant be converted to number directly


// BOOLEAN & COMPARISONS

let value = [true,false,"true","false"];
console.log(value); // 4 lenght - index 0,1,2,3

let email = "sid@gm.com"; 
console.log(email.includes("sid")); // true

let students = ["alex","john","deepak","tanvi"];
console.log(students.includes("alex")); // true
console.log(students.includes("mark")); //false

console.log("comparisons of age");
console.log(age == 25); // true
console.log(age != 25); // false
console.log(age != 35); // true
console.log(age > 35); // false
console.log(age < 30); // true
console.log(age >= 25); // true
console.log(age <= 20); // false
console.log("abc" > "xyz"); // false - compare a with x forst and so on... ASCII values comparison


// ARRAYS

console.log("Arrays");

let it = []; // empty array
console.log(it);
let item = ["bread","butter", "salt","jam"]; // array of strings only
console.log(item);
let items = ["bread","butter", "salt","jam",10,12,[9,"all"]]; // multiple data types array
console.log(items);
console.log(items[0]);

items[1]="pizza"; // value at 1st index changed , arrays/lists can be changed - mutable - not strings- immutable
console.log(items);

// arrays functions

// let itemsJoin = items.join("-"); // dash - added between all elements 
// let itemsJoin = items.indexOf("pizza"); // 1
// let itemsJoin = items.indexOf("pizzaas"); // -1
// let update = ["water","coke"];
// let itemsJoin = items.concat(update);
// let itemsJoin = items.push("newone");
let itemsJoin = items.pop();
// console.log(itemsJoin);
console.log(items);