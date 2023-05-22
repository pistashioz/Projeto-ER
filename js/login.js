class User {
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }
}

const users = [];

localStorage.setItem('userList', JSON.stringify(users))