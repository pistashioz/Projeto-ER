const bar = document.querySelector(".bar");
const percentageTag = document.querySelector(".percentage");
const totalTag = document.querySelector("#num1");
const solvedTag = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const total = 10;
let solved = 0;

const ruleOfThree = (num1, num2) => {
  const proportion = (num2 * 100) / num1;
  return Math.round(proportion * 10) / 10;
};

const updateBarLength = () => {
  const percentage = ruleOfThree(total, solved);
  bar.style.width = percentage + "%";
};

const updateText = () => {
  solvedTag.textContent = solved;
  percentageTag.textContent = ruleOfThree(total, solved) + "%";
};

addBtn.onclick = () => {
  if (solved < total) {
    solved++;
    updateBarLength();
    updateText();
  }
};

subBtn.onclick = () => {
  if (solved > 0) {
    solved--;
    updateBarLength();
    updateText();
  }
};

totalTag.textContent = total;
solvedTag.textContent = solved;
percentageTag.textContent = ruleOfThree(total, solved) + "%";



/*mute/unmute sound*/


var muteBtn = document.getElementById('sound');
var myTrack = document.getElementById('bgTrack');
muteBtn.addEventListener('click', muteOrUnmute, false);

function muteOrUnmute(){
    if (myTrack.muted == true){
        myTrack.muted = false;
        muteBtn.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>'
    }
    else{
        myTrack.muted = true;
        muteBtn.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>'
    }
}



/*modal buy hints*/ 
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

function moveRectangle() {
    var rectangle = document.getElementById('step1');
    rectangle.style.bottom = '23vw';
    rectangle.style.right = '25.5vw';
}