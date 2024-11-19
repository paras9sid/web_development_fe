// callback fucntions

let addition = function(a,b){
    return a + b;
}

let subtract = function(a,b){
    return a - b;
}

let multiply = function(a,b){
    return a * b;
}

let divide = function(a,b){
    return a / b;
}

// function name args can be any - addition - add , mutiply - mul
function calculator(numOne, numTwo, add, sub, mul, div){
    // let addResult = add(numOne, numTwo);
    // let mulResult = mul(numOne, numTwo);
    
    // with console.log
    // console.log(`Add: ${addResult}, Multiply: ${mulResult}`);

    //with return
    // return `Add: ${addResult}, Multiply: ${mulResult}`;

    // short
    return `Add: ${add(numOne, numTwo)}, Subtraction: ${sub(numOne, numTwo)}, Multiply: ${mul(numOne, numTwo)}, Division: ${div(numOne, numTwo)}`;
};

//passing function as an args - wtih console.log in fucntion
// calculator(5,10, addition, multiply); // name of the original function to be mentioned here

// with return in function
console.log(calculator(5,10, addition, subtract, multiply, divide));

