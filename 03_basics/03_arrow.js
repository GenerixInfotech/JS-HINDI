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
const addTwo = (num1, num2) => (num1 + num2)
// NOTE:- If your use parentheses then you NOT use RETURN keywords in function.

console.log(addTwo(3, 4));