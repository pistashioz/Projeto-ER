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
            console.log('yes')
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
    const price = button.lastElementChild;
    console.log(price)
    price.innerHTML = '';
    image.classList.replace('brig', 'card');
    button.removeAttribute("data-modal-target");
    closeModal(modal);
    /*change avatar profile*/ 
    button.addEventListener('click', function() {
        changeAvatar(image)
    });
    document.getElementById('fox-avatarBtn').addEventListener('click', function() {
        changeAvatarFox()
    });
};



function changeAvatar(image){
    const defaultAvatar = document.getElementById('defaultAvatar');
    const source = image.src
    defaultAvatar.src= source;
}

function changeAvatarFox(){
    const defaultAvatar = document.getElementById('defaultAvatar');
    const source = document.getElementById('fox-avatar').src
    defaultAvatar.src = source
}