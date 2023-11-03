// singleton
//Object.create
// object literals
const mySmy = Symbol("mySmy01")

const jsUser ={
    name:"manish",
    "full name":"manish mahapatra",
    [mySmy]:"newSymbol",
    age:42,
    location: "jamshedpur",
    email: "manish@google.com",
    isloggedIn: false,
    lastLogin: ["Monday", "Saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySmy]);

Object.freeze(jsUser)
console.log(jsUser);