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
  })



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

/**/
if (modal.classList.contains('active')){
    console.log('!!')

}

function buyAvatar(button){
    const image = button.firstChild;
    image.classList.replace('brig', 'card');

}
