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
// console.log(loginUserMessage("Manish"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 700));

const user = {
    username: "manish",
    prices: 299
}
function handelObject(anyObject) {
    console.log(`User name is ${anyObject.username} and is price ${anyObject.price}`);
}
// handelObject(user)
handelObject({
    username:"Mehul",
    price:300
})


const newArray = [200, 500, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,5000,600,800]));