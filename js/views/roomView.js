
//progress bar
const bar = document.querySelector(".bar");
const percentageTag = document.querySelector(".percentage");
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
  percentageTag.textContent = ruleOfThree(total, solved) + "%";
};

function solvedChall(){
  if (solved < total) {
    solved++;
    updateBarLength();
    updateText();
  }
};

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


/*moving steps functions*/ 
function moveStep1() {
    var image = document.getElementById('step1');
    image.style.bottom = '17.5vw';
    image.style.right = '25vw';
    solvedChall()
}
function moveStep2(){
  var image = document.getElementById('step2');
  image.style.bottom = '5.4vw';
  image.style.right = '21vw';
  solvedChall()
}

function zoomBg(){
  document.getElementById('objects').style.display = "none";
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/piecesBg.svg)";
  document.getElementById('objectsChall2').style.display = "block";
}

function backChall1(){
  document.getElementById('objects').style.display = "block";
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg.svg)";
  document.getElementById('objectsChall2').style.display = "none";
}

//check right answer challenge 2

const hypotenuse1 = document.getElementById('hypotenuse2');
const hypotenuse2 = document.getElementById('hypotenuse');
const audioWrong = new Audio("../src/audio/wrong.mp3");
const audioRight = new Audio("../src/audio/correct.mp3"); 
function wrong(){
  audioWrong.play();
}
function right(){
  solvedChall()
  audioRight.play();
  document.getElementById('antes').style.display = "none";
  document.getElementById('stepFixed').style.display = "block";
}
function changePosition(){
  var stepFixed = document.getElementById('stepFixed');
  stepFixed.style.bottom = '35vw';
  stepFixed.style.left = '14vw';
  solvedChall()
  
}