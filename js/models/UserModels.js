let users;

export function init(){
    users = localStorage.usersFlor ? JSON.parse(localStorage.usersFlor) : []
}

export function add(username,password,email){
        users.push(new User(username, password, email));
        localStorage.setItem("usersFlor", JSON.stringify(users));
        sessionStorage.setItem("loggedUserFlor", JSON.stringify(username));
}
export function checkUser(username){
    if (users.some((user) => user.username === username)) {
        return false
      } else {
        return true
      }
}

init()

class User{
    username = ""
    password = ""
    email = ""

    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
}