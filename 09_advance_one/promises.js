// Method ### 1
const promisesNew = new Promise(function (resolve, reject){
    // Do an Async Task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promisesNew.then(function(){
    console.log("Promise Consumed");
})

// Method #### 2
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Aysnc 2 Resolved");
})

// Method ### 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({
            username: "Manish",
            email:"manish@example.com"
        })
    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);
})

// Method # 4
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
           resolve({
            username:'Mehul',
            password:'123'
           }) 
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log('The Promise is either Resolved or Rejected'))

//Method # 5
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
           resolve({
            username:'JavaScript',
            password:'123'
           }) 
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive (){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseFive()

// Method # 6
async function getallUser(){
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getallUser()

// Method # 7
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error);
})