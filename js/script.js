// array - finc method

const numbers = [5, 20, 75, 80, 15, 30];

const findNumbers = numbers.find( num => num > 70 ); 

console.log(findNumbers);


// sort method 

const sortNumbers = numbers.sort();
console.log(sortNumbers); // printing as per first number comparison

const names = ["sid", "ake", "deep"];
console.log(names.sort()); // prinitng by comparing first alphabet of every word - a , d , s

// custom function - compare()
numbers.sort((a, b)=>{ // will comapre 1st two elements then movie on with indexes 0,1 1st , 1,2 second and so on
    // return a-b; // lower to higher
    return b-a; // higher to lower
});
console.log(numbers);

const movies = [
    {name:"bug", rating: 10},
    {name:"bug2", rating: 7},
    {name:"bug3", rating: 9},
    {name:"bug4", rating: 8},
];

// movies.sort();
// console.log(movies); // same as it is

movies.sort((a, b)=>{
    return a.rating - b.rating; // lower to higer
    // return b.rating - a.rating; // higher to lower
});

console.log(movies); 

// reverse method

const num1 = [10,4,5,2,3,80];
// num1.reverse();
// console.log(num1);
num1.sort();
num1.reverse();
console.log(num1);
// console.log(movies.reverse());



// chaining method

const num2 = [70, 50, 90, 80, 35];

const filterNumbers = num2.filter(num => num > 75 );
const mapNum = filterNumbers.map(num => num + 5 );

console.log(mapNum);


// directly applying map on filter - 2 method in one line - chaining
const result = num2.filter(num => num > 75).map(num => num + 5);
console.log(result);

