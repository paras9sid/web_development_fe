// array - reduce method

// const numbers = [1,2,3,4,5];

// const reduceNumber = numbers.reduce((total, current) => {
//     total += current;
//     return total;
// }, 0);

// console.log(reduceNumber);

// const numbers = [1,2,3,4,5];

// const reduceNum = numbers.reduce((total, current)=>{
//     total *= current;
//     return total;
// },1);

// console.log(reduceNum);

const students = [
    {name: "Shubham", marks: 9}, 
    {name: "Alex", marks: 7}, 
    {name: "John", marks: 6},
    {name: "Shubham", marks: 7}, 
    {name: "Alex", marks: 9}, 
    {name: "John", marks: 10},
    {name: "Shubham", marks: 10}, 
    {name: "Alex", marks: 8}, 
    {name: "John", marks: 9},
];

const reduceStudents = students.reduce( (total, current) => {
    // if(current.name === 'Shubham'){
    //     total = total + current.marks; 
    // }
    // return total; // 26
    if(current.name === 'ABC'){ // name not exist in objects .name list - 
        total = total + current.marks; 
    }
    return total; // 0
}, 0);

console.log(reduceStudents);