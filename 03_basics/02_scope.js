// var c= 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "manish"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true) {
    const username = "Mehul"
    if(username === "Mehul") {
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);