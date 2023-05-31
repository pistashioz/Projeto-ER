let defaultlist = [["fox",0],["chick",5],["frog",10],["bunny",15],["cat",40]]
let defaultAvatar= []

export function getdefaultAvatar(){
    for(let i in defaultlist){
        defaultAvatar.push({})
        defaultAvatar[i].name = defaultlist[i][0];
        defaultAvatar[i].price = defaultlist[i][1];
    }
    return defaultAvatar
}
getdefaultAvatar()
export function getPrice(name){
    
    return defaultAvatar.find((avatar) => avatar.name === name).price;
}