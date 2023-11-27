const coding = ["js", "ruby", "java", "python"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (items) => {
//     console.log(items);
// })

// function printme(items) {
//     console.log(items);
// }
// coding.forEach(printme)

// coding.forEach( (items, index, arr) => {
//     console.log(items, index, arr);
// })

const myCoding = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Python",
        langFile: "py"
    },
    {
        langName: "Asp.Net",
        langFile: "aspx"
    },
]

myCoding.forEach( (items) => {
    console.log(items.langName);
})