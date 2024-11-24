// // Events-1

// const productAdd = document.querySelector("button");
// productAdd.addEventListener("click", () => {
//     // console.log("Button clicked"); // will print this in console
//     // productAdd.setAttribute("style", "display:none"); // button will disappear

// });

const product = document.querySelectorAll("li");
product.forEach( product => {
    // console.log(product); // check
    product.addEventListener("click", (e) => {
        // console.log(e); // all properties of events we can use
        // console.log(e.target); // using and testing target property
        console.log(e.target.textContent);

    });
});