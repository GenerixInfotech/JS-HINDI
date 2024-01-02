// let myName = "Mehul   "
// let myChannel = "chai"

// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manish = function () {
    console.log(`Manish is present in all Objects`);
}

Array.prototype.heyManish = () => {
    console.log(`Manish Say Hello`);
}

// heroPower.manish()
// myHeros.manish()
// myHeros.heyManish()
// heroPower.heyManish()

// inheritance

const User ={
    username: "Chai",
    email: 'chai@google.com',
}
const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvaiable: false,
}

const TASupport = {
    makeAssigment: 'JS Assigment',
    fullTime: true,
    __proto__: teachingSupport,
}

teacher.__proto__ = User

// Morden Syntax
Object.setPrototypeOf(teachingSupport, teacher)


let anotherUserName = "ChaiaurManish          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);

}
anotherUserName.trueLength()
"manish".trueLength()
"coldtea".trueLength()