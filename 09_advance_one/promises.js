// Method ### 1
const promisesNew = new Promise(function (resolve, reject){
    // Do an Async Task
    // Do calls, cryptography, network
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
    console.log("Aysnc Completed");
})

// Method ### 3
