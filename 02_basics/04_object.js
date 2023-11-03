// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123"
tinderUser.email = "m@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"someuser@gmail.com",
    fullName:{
        userFullName:{
            fistName:"Mehul",
            lastName:"Mahapatra"
        }
    }
}
// console.log(regularUser.fullName.userFullName.fistName);

const obj01 ={1:"a", 2:"b"}
const obj02 ={3:"c", 4:"d"}
const obj04 ={5:"e", 6:"f"}

// const obj03 = {obj01, obj02}
// const obj03 = Object.assign({}, obj01, obj02, obj04)

const obj03 = {...obj01, ...obj02} //Spread Method like Array [....xyz, ...pqr]
console.log(obj03);