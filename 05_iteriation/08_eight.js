const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     // debugger
//     console.log(`acc value: ${acc} and Current Value: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        courseName: "JavaScript",
        price: 999
    },
    {
        courseName: "HTML",
        price: 499
    },
    {
        courseName: "CSS",
        price: 599
    },
    {
        courseName: "Python",
        price: 2999
    },
    {
        courseName: "AI",
        price: 8999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);