/*modal*/

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

/*DOM edit and save data*/

const editBtn = document.querySelector('#settings');
const saveBtn = document.querySelector('#save');

editBtn.addEventListener('click', function(){
    document.getElementById('userName').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');

});

saveBtn.addEventListener('click', function(){
    document.getElementById('userName').setAttribute('readonly', true);
    document.getElementById('email').setAttribute('readonly', true);
})
