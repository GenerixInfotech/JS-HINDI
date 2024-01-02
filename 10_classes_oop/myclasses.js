// ES6

class User {
    constructor (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("manish", "manish@hotmail.com", 123)
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// Behind the sceen

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("mehul", "mehul@gmail.com", 456)

console.log(tea.changeUserName());
console.log(tea.encryptPassword());