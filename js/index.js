// Attribute(get/set)

// const link = document.querySelector("a");
// console.log(link);
// old value
// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('target')); // if target attr mentioneds

//new value
// link.setAttribute("href","www.abc.com");
// console.log(link.getAttribute("href"));


// new attr- setting if no attribute wtih taarget mentioned already
// link.setAttribute("target","_blank");

// console.log(document.querySelectorAll('.active'));

// const activeClasses = document.querySelectorAll(".active");

// activeClasses.forEach( active => {
//     console.log(active.getAttribute("class"));
//     active.setAttribute("class","highlight");
//     console.log(active.getAttribute("class"));
// });

const brandName = document.querySelector("#website-name");
// brandName.setAttribute("style","color: blue;");// will overwrite all style attribute values inline wrriten code

// add style component/content - change css styles
// console.log(brandName.style);

console.log(brandName.style.margin);
brandName.style.margin= "50px";
console.log(brandName.style.margin);
brandName.style.color= "Red";

//camelCase naming convention
brandName.style.fontSize= "100px";



