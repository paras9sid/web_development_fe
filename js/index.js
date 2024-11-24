// Event bubbling / delegation

const addProduct = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.textContent = "New Product";
    addProduct.append(li);
});

addProduct.addEventListener("click", (e) => {
    // console.log("Inside ul");
    // console.log(e.target);

    // condition--
    // Event Delegation - attaching to parent and parent is handling
    if(e.target.tagName == "LI"){
        // e.target.remove();
        console.log("UL called");
    }
});

// event bubble - as multiple events called from one click on that particular element-
    // stop propogation method

const newLi = document.querySelector(".active");
newLi.addEventListener("click", (e)=>{
    e.stopPropagation(); // will stop ULcalled above event - will call own current event
    console.log("LI called");
});