// arrow fundtions in js

let welcome = function(){
    console.log("WElcome!")
};

welcome();

// coversion into arrow function 

let intro = () =>{
    console.log("Arrrow")
};

intro();

// with args

let intro2 = (name)=>{
    console.log(`Weclome ${name}`)
};

intro2("Sidharth");

// with return keyword and decrease the size of funtion

let add = (numOne, numTwo) => numOne + numTwo; // in case of one line of code we can remove {} and term return

console.log(add(2,5));

let fullName = name => `Welcome ${name}`; // no need of () for args if one 1 args
console.log(fullName("Sidharth Jain")); 

let wel = () => `Welcome`; // empty args
console.log(wel());