// more Dom events

// const products = document.querySelector("ul");
// // products.addEventListener("click", (e) => {
// products.addEventListener("copy", (e) => {
//     // console.log(e);
//     if(e.target.tagName == "LI"){
//         alert(e.target.textContent);
//     }
// });


// const products = document.querySelector("ul");

// // storing callback functionn  in const

// const copyAlert = (e) => {
//     if(e.target.tagName == "LI"){
//         alert(e.target.textContent);
//     }
// };
// products.addEventListener("copy", copyAlert);

const webPage = document.querySelector("body");
// webPage.addEventListener("mousemove", (e) => {
//     // console.log(e);
//     console.log(e.clientX, e.clientY);
// });

// scroll mouse
webPage.addEventListener("wheel", (e) => {
    // console.log(e);
    console.log(e.clientX, e.clientY);
});