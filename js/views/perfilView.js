/*profile modal*/

const openModalButton = document.querySelector("#open-modalProfile");
const closeModalButton = document.querySelector("#close-modalProfile");
const modal = document.querySelector("#modalProfile");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


/*rules modal*/ 
const openRModalButton = document.querySelector("#open-modalRules");
const closeRModalButton = document.querySelector("#close-modalRules");
const Rmodal = document.querySelector("#modalRules");

const toggleRModal = () => {
    [Rmodal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openRModalButton, closeRModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleRModal());
});
/*DOM edit and save profile data*/

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
