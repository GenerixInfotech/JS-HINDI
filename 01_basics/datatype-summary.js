//  +++++++ Primitive +++++++++++
// Type of Primitive 7 Type: String, Number, Boolean, Null, Symbol, Undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 253165421236458976213n

// ++++++++++++ Reference (Non Primitive) +++++++++++++
// Type of Non Primitive : Array, Objects, Functions
const heros = ["Saktiman", "Nagraj", "Doga"]

const myObj ={
    name: "Mehul",
    Age: 9
}

const myFun = function (){
    console.log("Hello World");
}