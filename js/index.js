// // Relationships - parent/child/sibling

// const topNav = document.querySelector(".top-nav");
// // console.log(topNav);
// // console.log(topNav.children);

// // topNav.children.forEach(element => {
// //     console.log(child);
// // });
// // error from above - index.js:7 Uncaught TypeError: topNav.children.forEach is not a functio


// // array method to add for working
// const topNavChildren = Array.from(topNav.children);
// topNavChildren.forEach(element => {
//     console.log(element);
// });

const brandName = document.querySelector("#website-name");
console.log(brandName.parentElement); //footer
console.log(brandName.parentElement.parentElement); // body
console.log(brandName.parentElement.children); // htmlcollection(2)

// sibling
console.log(brandName.nextElementSibling); // ul.footer-nav
console.log(brandName.nextElementSibling.nextSibling); // #text
console.log(brandName.nextElementSibling.nextSibling.nextSibling); // null