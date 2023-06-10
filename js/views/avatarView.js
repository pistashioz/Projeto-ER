

import * as user from "../models/UserModels.js";
import * as handleAvatar from "../models/avatarModel.js" 

var divBuyModal = document.getElementById("buyModalDiv");

var DIVBUY = document.getElementsByClassName("container avatars")[0]
function updateShop(){
    DIVBUY.innerHTML=""
    console.table(user.getAvatarList());
    for(const avatar of user.getAvatarList()){
        const div = document.createElement("div");
        div.classList.add("row","col");
        const divCard = document.createElement("div");
        divCard.style.width = "15 rem";
        divCard.classList.add("card");
        if(avatar.Available){
            divCard.innerHTML =`<button class = 'image-button' id = '${avatar.name}-avatarBtn'><img class="card-img-top cardbought" src="../src/img/avatares/${avatar.name}.svg" alt="${avatar.name} avatar" id = '${avatar.name}-avatar'></button>`
            divCard.childNodes[0].addEventListener("click",()=>{
                user.updateAvatar(avatar.name);
                updateAvatar();
            });
        }else{
            var button = document.createElement("button");
            button.classList.add("image-button")
            button.id = `${avatar.name}-avatarBtn`
            button.innerHTML= `<img class="card-img-top brig" src="../src/img/avatares/${avatar.name}.svg" alt="${avatar.name} avatar" id = '${avatar.name}-avatar'>
            <div class = 'price'>
            <img class = 'coinPrice' src="../src/img/coin.png" alt = 'coin'>
            <h3 class = 'avatarPrice'>x ${handleAvatar.getPrice(avatar.name)}</h3>
            </div>`
            button.addEventListener("click", () => {
                buyModal(button,handleAvatar.getPrice(avatar.name),avatar.name);
            });
            divCard.appendChild(button)
        }

        div.appendChild(divCard);
        DIVBUY.appendChild(div);
    }
}

function updateAvatar(){
    const imagemAvatarDiv = document.getElementById("actualAvatar");

    const avatar = user.getCurrentAvatar();

    imagemAvatarDiv.innerHTML= `<img src="../src/img/avatares/${avatar.name}.svg" alt="avatar" id = 'defaultAvatar'>`

}
updateShop()
updateAvatar()


    function buyModal(button,price,avatarName){
        divBuyModal.innerHTML =  "<div id = 'modal' class = 'modalBuy'><div class = 'container'><div class = 'modal-head'><h1>Comprar</h1></div><div class = 'modal-body'><h3>Tem a certeza que quer comprar o avatar selecionado?</h3><div id = 'btns'><button class = 'buy-button' id = 'btnBuy'>Comprar</button><button  id = 'btnExit'>Sair</button></div> </div></div></div><div id = 'overlay'></div>"
        const buyBtn = document.getElementById('btnBuy');
        buyBtn.addEventListener('click', function() {
            buyAvatar(button,price,avatarName);
            updateShop()
        })
        const closeModalButtons = document.querySelectorAll('.btnExit');
            closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                  divBuyModal.innerHTML = "";
                })
            });
    }

/*buy button*/

function buyAvatar(button,price,avatarName){
    divBuyModal.innerHTML = "";
    const image = button.firstChild;
    const priceHTML = button.lastElementChild;
    let coins = parseInt(user.getCoins().toString());
    console.log(coins +"/"+ price)
    if(coins >= price){
        let currentCoins = coins - parseInt(price);
        user.updateCoins(currentCoins);
        /*change avatar profile*/ 
        user.updateBoughtAvatar(avatarName);
    }else{
        console.log("No money");
        let warning = document.getElementById("warningNoMoney");
        let element = document.createElement("div")
        element.innerHTML="<div id = 'modalNoMoney' class = 'modalNoMoney'><div class = 'container'><div class = 'modal-headMoney'><h1>Moedas insuficientes</h1><button id='noMoneyBtn'><ion-icon name='close-outline'></ion-icon></button></div><div class = 'modal-bodyMoney'><h3>Completa os desafios para ganhar mais moedas!</h3></div></div></div><div id = 'overlay'></div>"
        warning.appendChild(element);
        let buttonClose = document.getElementById("noMoneyBtn");
        buttonClose.addEventListener("click",() =>{
            warning.innerHTML = ""
        });
        setTimeout(function(){
            warning.innerHTML= ""
        }
        ,10000)
    }
};
