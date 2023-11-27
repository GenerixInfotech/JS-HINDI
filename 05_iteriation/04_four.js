const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift:"Swift by App"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "cpp"]

for (const key in programing) {
    // console.log(programing[key]);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("Fr", "France")

// for (const key in map) {
//     console.log(key);
// }