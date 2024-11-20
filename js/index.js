// object literals

let user = {
    //key: value,
    name: "Sidharth Jain",
    email: "abc@gm.com",
    age: 27,
    isLoggedIn: false,

    // login: function(){
    //     // console.log("Login!");
    //     return "Login";
    // },
    //with parameters
    // login: function(nickName){
    //     // console.log("Login!");
    //     return `Login ${nickName}`;
    // },
    // logout: function(){
    //     // console.log("Logout!");
    //     return "Logout";
    // }
    login(){
        // console.log("Login!");
        return `Login`;
    },
    logout(){
        // console.log("Logout!");
        return "Logout";
    }
};

// methods

console.log(user);
console.log(user.email);

// if sued console.log
// user.login(); // calling function - knows as method in this way- attached with suer object

// if using return
console.log(user.login("Sidharth"));

