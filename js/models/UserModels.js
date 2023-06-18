let users = [];
let defaultAvatar = []
let defaultlist = [["fox",true,true],["chick",false,false],["frog",false,false],["bunny",false,false],["cat",false,false]]
export function init(){
    users = localStorage.usersFlor ? JSON.parse(localStorage.usersFlor) : []
    for(let i in defaultlist){
        defaultAvatar.push({})
        defaultAvatar[i].name = defaultlist[i][0];
        defaultAvatar[i].InUse = defaultlist[i][1];
        defaultAvatar[i].Available = defaultlist[i][2];
    }
} 

export function add(username,password,email){
        users.push(new User(username, password,email,20));
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
export function VerifyMail(userMail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail))
    {
      return (true)
    }else{
      return (false)
    }
}
export function login(username,password){
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        sessionStorage.setItem("loggedUserFlor", JSON.stringify(username));
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

export function getEmailUser(){
    return _findCurrentUser().email
}
export function addCoins(coins){
    const user = _findCurrentUser();
    user.coins += coins;
    updateLocalStorageUser()
}
export function updateAvatar(nome){
    let avatar = getCurrentAvatar()
    if(nome !== avatar.name){
        avatar.InUse = false;
        let user = _findCurrentUser().avatarList;
        let avatarChange = user.find((user) => user.name === nome);
        avatarChange.InUse = true;
        updateLocalStorageUser()
    }
}
export function getCoins(){
    const user = _findCurrentUser();
    return user.coins
}
 
export function updateCoins(coins){
    const user = _findCurrentUser();
    user.coins = coins;
    updateLocalStorageUser()
}

function _findCurrentUser(){
    return users.find((user) => user.username === getUserLogged());
}
export function getCurrentAvatar(){
    let user = _findCurrentUser().avatarList;
    return user.find((user) => user.InUse === true);
}

export function updateLocalStorageUser(){
    localStorage.setItem("usersFlor", JSON.stringify(users));
}
export function updateBoughtAvatar(nome){
        let user = _findCurrentUser().avatarList;
        let avatarChange = user.find((user) => user.name === nome);
        avatarChange.Available = true;
        updateLocalStorageUser()
}

export function getAvatarList(){
    return _findCurrentUser().avatarList;
}

export function checkEmail(email){
   return (users.find((user) => user.email === email)) ? true : false
}

export function changePassword(email,password){
    let user = users.find((user) => user.email == email);
    console.table(user)
    user.password = password;
    updateLocalStorageUser()
}

export function GetUsers(){
    return users
}

export function blockUser(name){
    const user = users.find((user) => user.username === name);
    user.blocked = true;
    updateLocalStorageUser()
}

export function unblockUser(name){
    const user = users.find((user) => user.username === name);
    user.blocked = false;
    updateLocalStorageUser()
}

export function removeUser(name){
    const user = users.find((user) => user.username === name);
    users.splice(users.indexOf(user),1);
    updateLocalStorageUser();
}

export function getBlockedStatus(name){
    const user = users.find((user) => user.username === name);
    if(user){
        return user.blocked;
    }else{
        return false
    }
}

export function getUserLevel(){
    const user = _findCurrentUser();
    return user.nivel;
}
export function updateLevel(){
    const user = _findCurrentUser();
    (user.nivel == 3) ? user.nivel = 1 : user.nivel +=  1 
    updateLocalStorageUser();
}

export function updateData(username,email){
    const user = _findCurrentUser();
    user.username = username;
    user.email = email;
    updateLocalStorageUser();
    sessionStorage.setItem("loggedUserFlor", JSON.stringify(username));
}
init();


export class User{
    username = ""
    password = ""
    email = ""
    coins = 0
    avatarList = defaultAvatar
    blocked=false
    nivel = 1
    
    constructor(username,password,email,coins){
        this.username = username;
        this.password = password;
        this.email = email;
        this.coins = coins;

    }
}

