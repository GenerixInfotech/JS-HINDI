function SetUserName (username){
    this.username = username
    // console.log("called");
}

function createUser (username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}
const chai = new createUser("manish", "manish@gmail.com", 123)

console.log(chai);

// for(let i = 0; i < 3; i++ ){
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// }