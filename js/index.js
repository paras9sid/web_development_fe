// object literals

let user = {
    //key: value,
    name: "Sidharth Jain",
    email: "abc@gm.com",
    age: 27,
    isLoggedIn: false
};

console.log(user);
console.log(user.name);
console.log(user.isLoggedIn);

//values changed - dot notation
user.isLoggedIn = true;
console.log(user.isLoggedIn);

//square bracketnotation
user["name"] = "Sid";
console.log(user["name"]);
console.log(user.name);

let key = "email";
console.log(user[key]);
//or direct square bracket notation or pass into variable like above
console.log(user["email"]);