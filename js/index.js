// Operators

// Logical operators

// && -AND op- both conditions have to be true

// let password = "123456";

// if( (password.length > 8) && (password.includes("@"))){
//     console.log("strong pass.");
// }else if((password.length >= 5) && (password.length <= 8)){
//     console.log("Medium!");
// }else{
//     console.log("Weak.");
// }

// || OR operator- 1 condition has to be true


// let password = "123dasdadada";

// if( (password.length > 8) || (password.includes("@"))){
//     console.log("strong pass.");
// }else if((password.length >= 5) || (password.includes("@"))){
//     console.log("Medium!");
// }else{
//     console.log("Weak.");
// }


// let password = "@dda";

// if( (password.length >=12 ) || (password.length >= 8) && (password.includes("@"))){
//     console.log("strong pass.");
// }else if((password.length >= 5) && (password.length <= 8)){
//     console.log("Medium!");
// }else{
//     console.log("Weak.");
// }

// LOGICAL NOT (!)

// console.log(!true); //false- reversed the true iw false
// console.log(!false); // true - value reversed

let loggedIn = true;

if(!loggedIn){
    console.log("Welcome!");
}else{
    console.log("Out!");
}
console.log("Out of cond.");