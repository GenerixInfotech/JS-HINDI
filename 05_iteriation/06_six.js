// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (items) => {
//     console.log(items);
//     return items
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums) => nums > 4)
// console.log(newNums);

// const newNums = myNums.filter( (nums) => {
//     return nums > 4   
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach((items) => {
//     if (items > 4) {
//         newNums.push(items)
//     }
// });
// console.log(newNums);

const books = [
    {title:"Book01", gener:"History", publish:1981, edition:2004},
    {title:"Book02", gener:"Physic", publish:2002, edition:2014},
    {title:"Book03", gener:"Maths", publish:1985, edition:2009},
    {title:"Book04", gener:"History", publish:1988, edition:2007},
    {title:"Book05", gener:"Physic", publish:1991, edition:2020},
    {title:"Book06", gener:"Maths", publish:1981, edition:2004},
    {title:"Book07", gener:"Chemistry", publish:2000, edition:2022},
    {title:"Book08", gener:"History", publish:2005, edition:2016},
    {title:"Book08", gener:"Chemistry", publish:1986, edition:2002},
    {title:"Book08", gener:"Maths", publish:1995, edition:2000}
]
let userBook = books.filter( (bk) => bk.gener === "Maths")

userBook = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.gener === "History"
})
console.log(userBook);