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
    if (users.some((user) => user.username === username )) {
        return false
      } else {
        return true
      }
}
export function checkMail(userMail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail.value))
    {
      return (true)
    }
      alert("Endereço não valido!")
      return (false)
}
export function login(username,password){
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        sessionStorage.setItem("loggedUserFlor", JSON.stringify(user));
        return true;
    } else {
        return false;
    }
}

export function logout(){
    sessionStorage.removeItem("loggedUserFlor")
}

export function isLogged(){
    return sessionStorage.getItem("loggedUserFlor") ? true : false
}

export function getUserLogged(){
    return JSON.parse(sessionStorage.getItem("loggedUserFlor"))
}
init()

class User{
    username = ""
    password = ""
    email = ""
    coins = 0
    avatarList = []
    avatar = ""

    constructor(username,password,email,coins=0,avatarList=[],avatar=""){
        this.username = username;
        this.password = password;
        this.email = email;
        this.coins = coins;
        this.avatarList = avatarList;
        this.avatar = avatar;
    }
}

