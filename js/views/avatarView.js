/* import {avatarsList} from "../js/models/avatarModel.js"
import {User} from "../js/models/avatarModel.js"
const user = new User('nome','mail','pass')
listaAvataresDisponiveis = user.avatarsList;
listaTotal = avatarsList;


btnBuy =' '
btnBuy.addEvent('click',function(){
    avatarSel = 'avatar-cat'
    if( user.coins >=listaTotal[avatarSel] ){
        listaAvataresDisponiveis.append(avatarSel)
        for(const element in listaTotal.keys()){
            if (listaAvataresDisponiveis.contains(element)){
                document.getElementById(element).classList.remove('brig')

        }
        user.coins = user.coins-listaTotal[avatarSel];
    } 
    }
    else {
        console.log('pobrito manito')
    }
    
}); */


const btnOpen = document.getElementById('test').addEventListener('click',console.log('yoo bro'))

function test(){
    btn
}