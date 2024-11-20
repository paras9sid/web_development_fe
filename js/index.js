// this keyword

let user = {
    name: "Sidharth Jain",
    email: "abc@gm.com",
    age: 27,
    isLoggedIn: false,

    blogs: [
        {title:"Blog 1", numComment:5},
        {title: "Blog 2", numComments:3},
    ],
    allBlogConsole(){
        this.blogs.forEach((blog) => {console.log(blog)});
        this.blogs.forEach(blog => console.log(blog.title));
    },
    login(){
        // return `Login ${this}`; //Login [object Object]
        // return `Login ${this.email}`; //Login abc@gm.com
        this.isLoggedIn = true;
        return `Logged in - ${this.isLoggedIn}`;
    },
    logout(){
        // console.log("Logout!");
        // return `Logout`;
        this.isLoggedIn = false;
        return `Logged out - ${this.isLoggedIn}`;
    }
};

console.log(user.login()); 
console.log(this);
console.log(user.logout());

let users = [];

console.log(user.blogs);
console.log(user.blogs[0]);
console.log(user.blogs[0].title);
user.allBlogConsole();