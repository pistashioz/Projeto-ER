let niveis = []

function init(){
    if(localStorage.desafiosFlor) {
        niveis = JSON.parse(localStorage.desafiosFlor)
    }else{
        niveis = [2,5,9]
    
    }
        updateLocalStrorage()
}

function updateLocalStrorage(){
    localStorage.setItem("desafiosFlor", JSON.stringify(niveis));
}

init()
export function updateTimes(index,minutos){
    niveis[index] = parseInt(minutos)
    updateLocalStrorage()
}

export function getTimeLevel(level){
    return niveis[level-1]
}

export function getTimeIndex(index){
    return niveis[index]
}