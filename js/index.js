// // classes - add/remove


// const heading = document.querySelector('h1');
// // console.log(heading.classList);


// // adding class
// heading.classList.add("highlight");

// // removing classes
// heading.classList.remove("blog-heading");


const activeClasses = document.querySelectorAll("li.active");
// console.log(activeClasses);

// 2. sequencing is important for perfect scenario
const inActiveClasses = document.querySelectorAll("li.inactive");

activeClasses.forEach( active => {
    active.classList.remove("active");
    active.classList.add("inactive");
});

// 1. all classes will be active with below - sequencing important
// const inActiveClasses = document.querySelectorAll("li.inactive");
// inActiveClasses.forEach(active => {
//     active.classList.remove("inactive");
//     active.classList.add("active");
// });

inActiveClasses.forEach(active => {
    active.classList.remove("inactive");
    active.classList.add("active");
});

const brandName = document.querySelector("#website-name");
// brandName.classList.toggle("important");// will add , switch it on

// will switch it off toggle off if it is already in the element - class="important"
brandName.classList.toggle("important");