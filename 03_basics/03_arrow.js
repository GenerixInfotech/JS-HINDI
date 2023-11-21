const user = {
    username: "manish",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to our website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "mehul"
// user.welcomeMessage()

// console.log(this);

// function dotCreator () {
//     let username = "Jitu"
//     console.log(this.username);
// }
// dotCreator()

// const dotCreator = function () {
//     let username = "Jitu"
//     console.log(this.username);
// }
// dotCreator()

const dotCreator = () => {
    let username = "Jitu"
    console.log(this);
}
// dotCreator()


// ++++++++++++++ Basic Arrow Function +++++++++++++++++++++++
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// NOTE:- If your use curly braces then you should use RETURN keywords in function.


// ++++++++++++++ Implicit Arrow Function +++++++++++++++++++++++
//.................. Method 01 .................................
// const addTwo = (num1, num2) => num1 + num2

//.................. Method 02 .................................
// const addTwo = (num1, num2) => (num1 + num2)
// NOTE:- If your use parentheses then you NOT use RETURN keywords in function.

//.................. Method 03 .................................
const addTwo = (num1, num2) => ({username:"Binu"})
// NOTE:- When you want to return object you should use parentheses.

console.log(addTwo(3, 4));

const myArry = [2,4,6,8,9]

// Method 01
myArry.forEach(function () {}) 

// Method 02
myArry.forEach(() => {})

// Method 03
myArry.forEach(() => ())