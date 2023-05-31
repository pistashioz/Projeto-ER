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
        console.log('no money') 
    }
    
}); */

import * as user from "../models/UserModels.js";
import * as handleAvatar from "../models/avatarModel.js" 


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const btns = document.querySelectorAll('.image-button');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const buyBtn = document.getElementById('btnBuy');



openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
        buyBtn.addEventListener('click', function() {
            buyAvatar(button)
        })
    })

});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modalBuy')
      closeModal(modal)
    })
  });



function openModal(modal){
    if (modal == null){
        return
    } 
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) {
        return
    } 
    modal.classList.remove('active')
  }

/*buy button*/

function buyAvatar(button){
    const image = button.firstChild;
    const priceHTML = button.lastElementChild;
    closeModal(modal);
    let coins = parseInt(user.getCoins().toString());
    let price = parseInt(handleAvatar.getPrice(image.src.split("/")[image.src.split("/").length - 1].toString().split(".")[0]));
    console.log(coins);
    console.log(price);
    if(coins >= price){
        let currentCoins = coins - parseInt(price);
        user.updateCoins(currentCoins);
        priceHTML.innerHTML = '';
        image.classList.replace('brig', 'card');
        button.removeAttribute("data-modal-target");
        /*change avatar profile*/ 
        button.addEventListener('click', function() {
            user.updateAvatar(image.src.split("/")[image.src.split("/").length - 1].toString().split(".")[0])
            changeAvatar(image.src)
        });
        document.getElementById('fox-avatarBtn').addEventListener('click', function() {
            user.updateAvatar("fox")
            changeAvatar("")
        });
    }else{

    }
};



function changeAvatar(image){
    const defaultAvatar = document.getElementById('defaultAvatar');
    if (image){
        var source = image
    }else{
        var source = document.getElementById('fox-avatar').src
    }
    defaultAvatar.src= source;
}
