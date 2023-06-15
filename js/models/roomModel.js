import * as user from "./UserModels.js";
let defaultlist = [["pista1","pista2"],["pista1","pista2"],["pista1","pista2"]]

var pistas = []
init()
export function init(){
    if(localStorage.pistasFlor) {
        pistas = JSON.parse(localStorage.pistasFlor)
    }else{
        for(let i in defaultlist){
            pistas.push({})
            pistas[i].pista1 = defaultlist[i][0];
            pistas[i].pista2 = defaultlist[i][1];
        }
        updateLocalStrorage()
            
    }
}
export function updateLocalStrorage(){
    localStorage.setItem("pistasFlor", JSON.stringify(pistas));

}



console.log(pistas[parseInt(user.getUserLevel())-1]);