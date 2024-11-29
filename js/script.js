// array methods

const ratings = [5, 10, 9, 7, 2, 3, 8];

// const filteredResult = ratings.filter( (rate) => {
//     // let result = rate > 6;
//     // return result;

//     return rate > 6;
// });

//1 liner of above.
const filteredResult = ratings.filter(rate =>rate > 6 );

// console.log(filteredResult);
// console.log(ratings);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = numbers.filter(num=>{
//     let result = num % 2 == 0;
//     return result;
// });

// const odd = numbers.filter(num=>{
//     let result = num % 2 == 0;
//     return !result;
// });

//1 liner
const even = numbers.filter( num=> num % 2 == 0 );
const odd = numbers.filter( num => num % 2 != 0 );
// console.log(even, odd);

// objects
const movieList = [
    {name: "Coffe Day", rating:9},
    {name: "AbD", rating:5},
    {name: "ZXCV", rating:6}
];

// console.log(movieList[0]);
const filteredMovie = movieList.filter( (movie, index) => {
    return  movie.rating > 5;
});

console.log(filteredMovie);