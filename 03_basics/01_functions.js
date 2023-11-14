function sayName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers("6", 5)

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}
const result = addTwoNumbers(5, 3)

// console.log("Result: ", result);

function loginUserMessage(username = "Mehul"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("manish"))
console.log(loginUserMessage("Manish"));