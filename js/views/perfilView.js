import * as user from "../models/UserModels.js"


/*profile modal*/
const cbtn = document.querySelector('#modalRules');
const openModalButton = document.querySelector("#open-modalProfile");
const closeModalButton = document.querySelectorAll(".close-modal");
const modal = document.querySelector("#modalProfile");
const fade = document.querySelector("#fade");
const toggleModal=0;
const rModal = document.querySelector("#modalRules");

openModalButton.addEventListener('click', function(){
  if(!rModal.classList.contains('hide')){ 
    modal.style.zIndex=12;
    rModal.style.zIndex=10;
    document.getElementById('modalPro').style.zIndex =12;

  }
  else {
    modal.classList.toggle('hide');
    }

});

closeModalButton.forEach((x) => x.addEventListener('click',[rModal,modal].forEach(y=>y.classList.add('hide'))));

document.querySelector('#open-modalRules').addEventListener('click', function(){
  if (rModal.classList.contains('hide') && modal.classList.contains('hide')){
    [rModal,modal].forEach((x) => x.classList.remove('hide'))
    console.log(cbtn)
    cbtn.style.zIndex = 13;
    modal.style.zIndex=10;
    rModal.style.zIndex=13;
    
  }
  else if (rModal.classList.contains('hide') &&   !(modal.classList.contains('hide'))){
    modal.classList.toggle('hide')
    rModal.classList.toggle('hide')
    rModal.style.zIndex = 12;
    cbtn.style.zIndex = 13;
    
  }
  else{
    modal.style.zIndex=10;
    rModal.style.zIndex = 12;
    cbtn.style.zIndex = 13;
    [rModal,modal].forEach((x) => x.classList.add('hide'));

} 
    
})

/*exit modal*/


const openeModalButton = document.querySelector("#open-modalExit");
const closeeModalButton = document.querySelector("#close-modalExit");
const eModal = document.querySelector("#containerExit");

const toggleeModal = () => {
    eModal.classList.add("active");
    [rModal, modal].forEach((el) => el.classList.add("hide"));
};

[openeModalButton, closeeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleeModal());
});
//close exit modal button
function closeModal(modal) {
  if (modal == null) {
      return
  } 
  modal.classList.remove('active')
}

const closeExitBtn = document.querySelectorAll('[data-close-button]');
closeExitBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('#containerExit')
    closeModal(modal)
  })
});

/*DOM edit and save profile data*/

//Building the current data

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("email");

inputName.value = user.getUserLogged();
inputEmail.value = user.getEmailUser();


//editing data
const editBtn = document.querySelector('#settings');
const saveBtn = document.querySelector('#save');

editBtn.addEventListener('click', () => {
  inputName.removeAttribute('readonly');
  inputEmail.removeAttribute('readonly');

});

saveBtn.addEventListener('click', function(){
  inputName.setAttribute('readonly', true);
  inputEmail.setAttribute('readonly', true);
})


/*admin modal*/




if(user.getUserLogged() === "admin"){
  const btns = document.getElementById("btns");

  btns.innerHTML +=  `<button id = 'admin'><ion-icon name="people-outline"></ion-icon></button>`
  const openAdmin = document.querySelector('#admin');


  openAdmin.addEventListener('click', () => {
    var result = document.createElement("div")
    result.innerHTML = `
    <div id = 'modalAdmin' class = 'modalAdmin'>
                  <div class = 'containerAdmin'>
                      <div class = 'modal-headAdmin'>
                          <h1>Utilizadores</h1>
                          <button id="closeAdmin" class = 'close-button'><ion-icon name="close-outline"></ion-icon></button>
                      </div>
                      <div class = 'scroll-bg'>
                          <div class = 'scroll-div'>
                              
                          </div>
                      </div>
                  </div>
              </div>
    `
    document.body.appendChild(result);

    const closeAdmin = document.querySelector('#closeAdmin');
      closeAdmin.addEventListener('click',() => {
      const modalAdmin = document.querySelector('#modalAdmin');
      modalAdmin.remove();
     });

    function UpdateList(){
      var divUsers = document.getElementsByClassName("scroll-div")[0];
      divUsers.innerHTML=""
      for(const users of user.GetUsers()){
        if(users.username === "admin"){}else{
        var p = document.createElement("p");
        p.classList.add("userNames");
        p.innerText = users.username;
        p.addEventListener("click", ()=>{
          const modalBlock = document.createElement("div");
          modalBlock.innerHTML= `
          <div id = 'modalUserOptions' class = 'modalUserOptions'>
          <div class = 'containerOptions'>
              <div class = 'modal-headOptions'>
                  <h1>${users.username}</h1>
                  <button id="closeOptions" class = 'close-buttonBlock'><ion-icon name="close-outline"></ion-icon></button>
              </div>
              
              <div id = 'buttonsOpt'>
                  <button id = 'remove'>Remover</button>
              </div>
              </div>
          </div>
         </div>
`
          result.appendChild(modalBlock);
          const closeblock = document.querySelector('.close-buttonBlock')
          closeblock.addEventListener('click',() => {
            const modalblock = document.querySelector('#modalUserOptions');
            modalblock.remove();
            UpdateList()
          })


          var buttonBlockUnblock = document.createElement("button")
          if(users.blocked === true){
            buttonBlockUnblock.id = "unblock"
            buttonBlockUnblock.textContent="Desbloquear"
            buttonBlockUnblock.addEventListener("click",() => {
              user.unblockUser(users.username)
              UpdateList();
              var event = new Event('click');
              closeblock.dispatchEvent(event);
            });
          }else{
            buttonBlockUnblock.id = "block"
            buttonBlockUnblock.textContent="Bloquear"
            buttonBlockUnblock.addEventListener("click",() => {
              user.blockUser(users.username)
              UpdateList();
              var event = new Event('click');
              closeblock.dispatchEvent(event);
            });
          }
          document.getElementById("buttonsOpt").appendChild(buttonBlockUnblock)
          
          document.getElementById("remove").addEventListener("click",() => {
            user.removeUser(users.username)
            UpdateList();
            var event = new Event('click');
            closeblock.dispatchEvent(event);
          })
        });
        divUsers.appendChild(p)
      }

    }
    }
    UpdateList()
})
}

  




//change profile pic

const ImageAvatar = document.getElementById("profilePic")

ImageAvatar.innerHTML = `<img src = '../src/img/avatares/${user.getCurrentAvatar().name}.svg' alt = 'profilePicture'>`