/*room classes*/

class Room{
    coins = 0;
    barProgress = 0;
    maxHints = 2;
    hide = True
    hints = []
    
}


class Level1{
    challenge_1()
}
class Level2 extends Room{
    challenge_1()
    challenge_2()
}
class Level3 {
    challenge_1()
    challenge_2()
    challenge_3()
}

/*coins functions*/
function addCoins(){

}
function showCoins(){

}

function removeCoins(){

}

/*Hints functions*/

function showHintModal(){
    /*aqui vai aparecer primeiro a modal a confirmar se queres um hint, depois de confirmares vai aparecer uma modal com a pista, quando fechares a modal nao tens mais acceso a pista e so vai aparecer se queres comprar mais uma pista (a ultima), quando o utilizador fique sem pistas, o botao para comprar pistas nao vai funcionar mais*/ 
}


function hideHintModal(){

}


/*room display functions*/

function showRoom(){

}
function hideRoom(){

}

/*menu display functions*/
function showMenu(){

}

function hideMenu(){

}

class EditRoom{
    #time
    #challenge
    #options = []
    #rightAns

    constructor(time, challenge, options = [], rightAns){
        this.#time = time;
        this.#challenge = challenge;
        this.#options = options;
        this.#rightAns = rightAns
    }

    get time() {
        return this.#time;
    }

    set time(value) {
        this.#time = value;
    }

    get challenge() {
        return this.#challenge
    }

    set challenge(value){
        this.#challenge = value
    }

    get options(){
        return this.#options
    }

    set options(value){
        this.#options = value
    }

    get rightAns(){
        return this.#rightAns
    }

    set rightAns(value){
        this.#rightAns = value
    }
}

class RoomGestor{
    list

    constructor(list){
        this.list = list
    }

}