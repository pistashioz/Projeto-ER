import * as user from "../models/UserModels.js";
/*admin room settings*/
if(user.getUserLogged()=== "admin"){

    var footerOptions = document.getElementById("footerOptions");
    footerOptions.innerHTML += `<button id = 'settingsBtn' data-modal-target="#settingsModal"><ion-icon name="cog-outline"></ion-icon></button>`
    
    const openSettingBtn = document.querySelectorAll('[data-modal-target]');
    const closeSettingBtn = document.querySelectorAll('[data-close-button]');
    
    
    openSettingBtn.forEach(button => {
        button.addEventListener('click', () =>{
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal)
        })
    
    });
    
    closeSettingBtn.forEach(button => {
        button.addEventListener('click', () => {
          const modal = document.querySelector('.modalSettings')
          closeModal(modal)
        })
      });
    
    }