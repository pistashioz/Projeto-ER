

import * as user from "./UserModels.js";

let numpista = 0

export function addPista(){
    numpista+=1
}
export function resetPista(){
    numpista = 0
}


let pistas = []


init()
export function init(){
    if(localStorage.pistasFlor) {
        pistas = JSON.parse(localStorage.pistasFlor)
    }else{
        pistas = [["Tenta resolver a equação antes de tentares encontrar o numero correto"],["Algo não parece correto com estes degraus inteiros no chão. Tenta interagir com eles","Acho que vi um degrau partido por ai. Vê se o encontras."],["Estás a ver a porta? Então esquece. Tenta montar as peças no piano","Encontra a percentagem correta de peças que faltam no piano."]]
    
    }
        updateLocalStrorage()
}
function updateLocalStrorage(){
    localStorage.setItem("pistasFlor", JSON.stringify(pistas));
}

export function getPistas(){
    return pistas
}

export function editPistas(nivel,index,conteudo){
    pistas[nivel][index] = conteudo;
    updateLocalStrorage()

}
export function getPistaAtual(){
    if(parseInt(pistas[user.getUserLevel()-1].length) > parseInt(numpista)){
        return pistas[user.getUserLevel()-1][numpista]
    }else{
        return "Não existem mais pistas"
    }
}


//gestão de pista usada por nivel
