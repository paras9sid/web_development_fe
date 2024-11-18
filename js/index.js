// // return keyword in Functions in JS


// function addition(numOne, numTwo){
//     let result = numOne + numTwo;
//     // console.log(result); // 15
//     //  if no consol - then none - output empty

//     return result; // output empty no error
// }

// addition(5,10); // output empty

// console.log(addition(5,10)); // 15

// const value = addition(5,15); // function with args stored in variable
// console.log(value); //20

// // console.log(result); // Uncaught ReferenceError: result is not defined- ibnt inside funcition - so local variable

function fullName(firstName, lastName){
    // 1
    let result = firstName + " " + lastName;
    // return result;
    // without return - output -> undefined
    console.log(result); // udnefined value - return the undefined - after Sidharth Jain from calling cunftion below - undefined will be printed

    //2 - return in one line - no need for storing ion extra variable
    // return firstName + " " + lastName;
}

// let value = fullName("Sidharth", "Jain");
// console.log(value);

//2 - print in one line - no need for storing ion extra variable
console.log(fullName("Sidharth","Jain"));