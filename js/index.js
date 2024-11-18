// Functions in JS

/* expression
function func_name(args){
    return
}
    */

// eg. - addition function 

// function addition(numOne, numTwo){
//     return numOne + numTwo;
// }

// console.log(addition(5,4));

// let random = 20;
// console.log(random); // 20

// console.log(random); //Uncaught ReferenceError: Cannot access 'random' before initialization


// regular function
// function declaration/defined the function
// function intro(){
//     console.log("Welcome to the course!.");
// }

// // calling/invoking function
// intro();

// function stored inside variable - made up name-variable function-defining
// let intro = function(){
//     console.log("Weclome!")
// };

// //calling/invoking
// intro();

// let random = 20; //index.js:18 Uncaught ReferenceError: Cannot access 'random' before initialization


// function hoisting - function/vribale can be called after before declaration

//calling/invoking - first then declaring
intro();

//decalaration later
function intro(){
    console.log("Welcome!")
};

