const User = {
    _email: "manish@manish.ai",
    _password: "pqr",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User)
console.log(tea.email);