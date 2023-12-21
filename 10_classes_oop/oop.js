const user ={
    userName:'Mehul',
    loginCount:8,
    signIn:true,

    getuserDetail: function () {
        // console.log("Got user details from database");
        // console.log(`username: ${this.userName}`);
        console.log(this);
    }
}
// console.log(user["userName"])
// console.log(user.getuserDetail());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.gretting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Ravi", 18, true)
const userTwo = new User("Seema", 10, false)
console.log(userOne.constructor);
// console.log(userTwo);