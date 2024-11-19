// foreach method & callback

// let products = ["bread", "butter", "egg", "bottle"];

//syntax = products.forEach();

// fucntion for callback

// let callback = (product) => {console.log(`My product name is: ${product}`)};

// products.forEach(callback);



// let products = ["bread", "butter", "egg", "bottle"];

//passing directly 
// products.forEach( product => console.log(`My product name is : ${product}`) ); // (args brack {} consol.elog brackets removed as one line expressions/code only)

// products.forEach(product=>console.log(product.length));

let students =  ["sidharth","aasha","aliya","nisha"];

students.forEach((student, index)=>{
    console.log(student, index);
});
