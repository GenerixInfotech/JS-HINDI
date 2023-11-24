// if
// const userLoggedIn = true
// const temperature = 41

// if(temperature === 41){
//     console.log("Less then 40");
// }else{
//     console.log("Grater then 40");
// }
// console.log("Excuted");

//<, >, <=, >=, ==, !=

// const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");
// }else if(balance < 900){
//     console.log("less then 900");
// }else {
//     console.log("less then 1200");
// }


const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}