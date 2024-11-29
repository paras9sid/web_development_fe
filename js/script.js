// array - map method

const numbers = [10, 20, 30, 40, 50];

// const mappedNum = numbers.map( number => number * 5 );

const mappedNum = numbers.map( number => {
    if(number > 30){
        return number + 5;
    }else{
        return number;
    }
});

// console.log(mappedNum);

const products = [
    {name: "Breed", price:25, tax:0.05},
    {name: "Breed", price:65, tax:0.05},
    {name: "Breed", price:15, tax:0},
    {name: "Breed", price:125, tax:0.18},
];

const mappedProducts = products.map((product)=>{
    // return product.price * product.tax;
    console.log(product.price + product.price * product.tax);

    // new price updated consition
    const newPrice = product.price + product.price * product.tax;
    //returning object itself
    // old price
    // return {name: product.name, price: product.price, tax: product.tax};

    // new price updated with tax
    return {name: product.name, price: newPrice, tax: `tax applied : ${product.tax}`};
});
console.log(mappedProducts);