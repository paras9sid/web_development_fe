// // Functions in JS

// /* expression
// function func_name(args){
//     return
// }
//     */

// // eg. - addition function 

// // function addition(numOne, numTwo){
// //     return numOne + numTwo;
// // }

// // console.log(addition(5,4));

// // let random = 20;
// // console.log(random); // 20

// // console.log(random); //Uncaught ReferenceError: Cannot access 'random' before initialization


// // regular function
// // function declaration/defined the function
// // function intro(){
// //     console.log("Welcome to the course!.");
// // }

// // // calling/invoking function
// // intro();

// // function stored inside variable - made up name-variable function-defining
// // let intro = function(){
// //     console.log("Weclome!")
// // };

// // //calling/invoking
// // intro();

// // let random = 20; //index.js:18 Uncaught ReferenceError: Cannot access 'random' before initialization


// // function hoisting - function/vribale can be called after before declaration

// //calling/invoking - first then declaring
// // intro();

// // //decalaration later
// // function intro(){
// //     console.log("Welcome!")
// // };



// // args-arguments/parameters

// function welcome(){ // no args
//     console.log("Welcome"); //
// }

// welcome("Sidharth"); // output = Welcome

// function welcome2(name){
//     console.log("Welcome"); // args but called string not args
// }

// welcome2("Sidharth"); // output = welcome

// function welcome3(name){
//     console.log(`Welcome ${name}`); // args - called args
// }

// welcome3("Sidharth"); // output = Welcome Sidharth 


// function addtion(numOne, numTwo){
//     let result = (numOne + numTwo);
//     console.log(result);
// }

// addtion(5,3); // 5 = numOne , 3 = numTwo


// concatenate

function fullName(firstName, lastName="default"){
    console.log(`Welcome ${firstName} ${lastName}.`)
}

fullName("Sidharth","Jain");
fullName("Aasha","Bhadana");
fullName("Aliya"); //Aliya undefined-lastName
fullName("Aliya"); // aliya - last name - empty string by default 
fullName("Alex","Hello"); // Alex hello - default value will not print as we are providng lastnae value already