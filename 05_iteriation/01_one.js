// for loop

for (let j = 1; j <= 10; j++) {
    const element = j;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

const myArry = ["flash","batman","superman"]
// console.log(myArry.length);
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    // console.log(element);
}

// break & continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Deducate value 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Deducate value 5");
        continue
    }
    console.log(`Value of i is ${index}`);
    
}