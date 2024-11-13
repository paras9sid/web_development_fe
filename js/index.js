// Control flow - loops

// let students = ["sid","hello","satyam","sanyam"]; // global

// // for(let i = 0; i < 5; i++){
// //     console.log("hello");
// //     // console.log(i); // i = local - access inside for loop code block only
// //     // console.log(students); // global can be accessed inside too
// // }

// // for(let i = 0;i < 5; i++){
// //     console.log(students[i]);
// // }

// for(let i = 0; i < students.length; i++){ // length method used
//     console.log(students[i]);
// }

// console.log("Out of loop!.")


// for loop - in & of keywords

// const students = ["sid","hello","satyam","sanyam"]; // global

// for(let student of students){ // of = access elements inside array
//     console.log(student);
// }

// for(let student in students){ // in = indexing value 0 1 2 3
//     console.log(student);
// }

// for(let student in students){ // in = indexing value 
//     console.log(students[student]); // will print elements now through indexing
// }


//dictionary

const student = {
    username: "sid",
    age:36
};

for(let key in student){
    console.log(key);
}

//string

const username= "sidharth";
console.log("index values");
for(let character in username){
    console.log(character);
}
console.log("elements inside");
for(let character of username){
    console.log(character);
}

console.log("Out of loop!.")
