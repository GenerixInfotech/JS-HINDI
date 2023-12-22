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
myHeros.manish()
myHeros.heyManish()
// heroPower.heyManish()

// inheritance

let teacher = 
