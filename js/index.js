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
        // console.log(e.target.textContent);
        e.target.remove();// removing particular nodes
    });
});

const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    // console.log(addProduct.innerHTML); // old li detais
    // addProduct.innerHTML += "<li>new produt added in the end by default </li>"; // added new += method
    // console.log(addProduct.innerHTML); // new ul list with new li above added

    // //addon top first not end
    // addProduct.innerHTML = "<li>new on top</li>" + addProduct.innerHTML; // only = not += X
    // console.log(addProduct.innerHTML);

    // append - prepend method
    // append - add at the end
    const newLi = document.createElement("li");
    newLi.innerText = "New Product";
    addProduct.append(newLi);
    console.log(addProduct.innerHTML);
});

