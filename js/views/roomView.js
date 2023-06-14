import * as user from "../models/UserModels.js";




//progress bar
const bar = document.querySelector(".bar");
const percentageTag = document.querySelector(".percentage");
const total = 11;
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
console.log(closeModalButtons)
const buyBtn = document.getElementById('btnBuy');

function updateCoins(){
  document.getElementById("amount").textContent= `X ${user.getCoins()}`
}
//updateCoins()

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
        buyBtn.addEventListener('click', function() {
            //BUY HINT??
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


/*moving steps functions LEVEL 2*/ 
document.getElementById("step1").addEventListener("click",()=>{
    var image = document.getElementById('step1');
    image.style.bottom = '17.5vw';
    image.style.right = '25vw';
    solvedChall()
});
document.getElementById("step2").addEventListener("click",()=>{
  var image = document.getElementById('step2');
  image.style.bottom = '5.4vw';
  image.style.right = '21vw';
  solvedChall()
});

document.getElementById("piece1").addEventListener("click",zoomBg)
document.getElementById("piece2").addEventListener("click",zoomBg)
document.getElementById("step3").addEventListener("click",zoomBg)
document.getElementById("backBtn").addEventListener("click",backBtn)
document.getElementById("forwardNoStepPieces").addEventListener("click", zoomBg)

function zoomBg(){
  document.getElementById('objects').style.display = "none";
  document.body.style.backgroundImage = "url(../src/img/level2/room/piecesBg.svg)";
  document.getElementById('objectsChall').style.display = "block";
}

function backBtn(){
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg.svg)";
  document.getElementById('objectsChall').style.display = "none";
  document.getElementById("objects").style.display = "block";

  document.getElementById("forwardNoStepPieces").style.display = "block";
    /*BackButton not displaying*/
  if (checkPosition === true){
    document.getElementById('fixedStep').style.display = "block";
    document.getElementById('toStay').style.display = "block";
    document.querySelector("#toRemove").style.display = "none";
  }
  else{
    document.getElementById("forwardNoStepPieces").style.display = "none";
  }
  
}

function forwardBtn(){
  if (ruleOfThree(total, solved) < 40){
    wrong()
    return false
  }
  else{
    document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bgChall3.svg)";
    document.getElementById('objectsChall').style.display = "none";
    document.body.style.backgroundPosition = "bottom center";
    return true
  }
}
/*Challenge 3*/ 
const forwardButton = document.querySelector('#forwardBtn')
const chestOpening = new Audio('../src/audio/openChest.mp3')
const doorOpening = new Audio('../src/audio/openDoor.mp3')
const closedDoor = new Audio('../src/audio/lockedDoor.mp3')
forwardButton.addEventListener('click', function(){
  if (forwardBtn() === true){
    document.getElementById('doorClosed').style.display = 'block'
    document.getElementById('doorClosed').addEventListener('click', function(){
      closedDoor.play()
    })
    document.getElementById('chest').style.display = "block"
    document.getElementById('chest').addEventListener('click', function(){
      chestOpening.play()
      document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg2Chall3.svg)";
      document.getElementById('chest').style.display = "none"
      document.getElementById('key').style.display = "block"
      solvedChall()
    })
}
else{
  document.getElementById('chest').style.display = "none"
}
  
});

document.querySelector('#key').addEventListener('click', function(){
  document.getElementById('doorClosed').style.display = 'none'
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg3Chall3.svg)";
  document.getElementById('key').style.display = "none"
  doorOpening.play()
  document.getElementById('doorOpen').style.display = 'block'
  solvedChall()
});

//level 2 to level 3
document.querySelector('#doorOpen').addEventListener('click', function(){
  document.body.style.backgroundImage = "url(../src/img/rooms/level3/bgLvl3.svg)";
  document.body.style.backgroundPosition = "top center";
  document.getElementById('objectsChall3').style.display = "none"
  document.getElementById('level3').style.display = "block"
  solvedChall()
});
//level 3
//grab elements for inventory
const piecesPiano = document.querySelectorAll('.pianoPieces')
piecesPiano.forEach((el) => el.addEventListener('click', function(){
  addInventory(el)
}))
var counter = 0
document.querySelector('#alreadyInventory').innerHTML = counter
function addInventory(el){
  el.style.display = 'none'
  document.querySelector('#pianoPieceInventory').style.display = 'block'
  counter += 1
  document.querySelector('#alreadyInventory').innerHTML = counter
  if (counter == 6){
    document.querySelector('#piano').style.display = 'block'
    solvedChall()
  }
}
document.querySelector('#piano').addEventListener('click', function(){
  document.body.style.backgroundImage = "url(../src/img/rooms/level3/bg2.png)";
  document.querySelector('#piano').style.display = 'none'
  document.querySelector('#submeterPercentagem').style.display = 'block'
  document.querySelector('#percentagemPiano').style.display = 'block'
})
document.querySelector('#submeterPercentagem').addEventListener('click', checkPercentage)
const audioPiano = new Audio('../src/audio/pianoSound.mp3')
function checkPercentage(){
  const answPercentage = document.querySelector('#percentagemPiano');
  if (parseInt(answPercentage.value) === 28){
    audioPiano.play()
    document.querySelector('#inventory').style.display = 'none'
    document.querySelector('#submeterPercentagem').style.display = 'none'
    document.querySelector('#percentagemPiano').style.display = 'none'
    document.body.style.backgroundImage = "url(../src/img/rooms/level3/bg3.png)";
    document.querySelector('#exitPiano').style.display = 'block'
    solvedChall()
  }
  else{
    audioWrong.play()
  }
}
document.querySelector('#exitPiano').addEventListener('click', function(){
  document.body.style.backgroundImage = "url(../src/img/rooms/level3/bg4.png)";
  document.querySelector('#exitPiano').style.display = 'none'
  document.querySelector('#answlvl3').style.display = 'none'
  document.querySelector('.wrapper').style.display = 'block'
})

//check right answer challenge 2

const audioWrong = new Audio("../src/audio/wrong.mp3");
const audioRight = new Audio("../src/audio/correct.mp3"); 


document.getElementById("rightPiece").addEventListener("click",right)
document.getElementById("wrongPiece").addEventListener("click",wrong)
let checkPosition = false
document.getElementById("stepFixed").addEventListener("click", function (){
  changePosition()
  checkPosition =  true
  

})
function wrong(){
  audioWrong.play();
}
function right(){
  solvedChall()
  audioRight.play();
  document.getElementById('antes').style.display = "none";
  document.getElementById('stepFixed').style.display = "block";
  return true
}
function changePosition(){
  var stepFixed = document.getElementById('stepFixed');
  stepFixed.style.bottom = '35vw';
  stepFixed.style.left = '14vw';
  solvedChall()

}


/*LEVEL 1*/

const rightAnswer = document.querySelector('#op1');
const wrongAnswer = document.querySelectorAll('.wrongAnswers')
function checkRightAns(){
  solvedChall()
  audioRight.play();
  document.body.style.backgroundImage = "url(../src/img/rooms/level1/bg2Lvl1.svg)";
  document.body.style.backgroundPosition =  "botton center";
  document.getElementById('equationLvl1').style.display = "none";
  document.getElementById('options').style.display = "none";
  document.getElementById('rect').style.display = "block";
  return true
}
rightAnswer.addEventListener('click', checkRightAns)

wrongAnswer.forEach((el) => el.addEventListener('click', function(){
  audioWrong.play();
}))

function openDoor(){
  if (checkRightAns === true){
    document.getElementById('rect').style.display = "block";

  }
  else{
    document.getElementById('rect').style.display = "none";
  }
}
function removeRect(){

  document.getElementById('level2' ).style.display = "block";

  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg.svg)";
  document.getElementById('objectsChall').style.display = "none";
  document.getElementById('rect').style.display = "none";
}
openDoor()
document.getElementById('rect').addEventListener('click', removeRect)

/*admin room settings*/
const openAdminHintBtn = document.querySelectorAll('#hintBtnADMIN');
console.log(openAdminHintBtn)
openAdminHintBtn.forEach(button => {
  button.addEventListener('click', () =>{
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal)
  })

});

const closeAdminHintBtn = document.querySelectorAll('[data-close-Adminbutton]');
closeAdminHintBtn.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('.modalHintAdmin')
    console.log(modal)
    closeModal(modal)
  })
});

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
  


const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(wordList);
    console.log(ranItem);
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    const audioWin = new Audio('../src/audio/winModalShow.mp3')
    setTimeout(() => {
        if(correctLetters.length === word.length) {
          solvedChall()
            document.querySelector('.wrapper').style.display = 'none'
            document.body.style.backgroundImage = "url(../src/img/rooms/level3/bg5.png)";
            document.body.style.backgroundPosition = "center center";
            audioWin.play()
            setTimeout(document.getElementById('modalWin').classList.add("active"), 3000);
        } else if(maxGuesses < 1) {
          audioWrong.play();
          randomWord()
        }
    }, 3);
}

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());




//Load user level
switch (user.getUserLevel().toString()){
  case "1":
    console.log("cheguei");
    document.getElementById('equationLvl1').style.display = "none";
    document.getElementById('options').style.display = "none";
    document.getElementById('rect').style.display = "none";
    removeRect()
    solvedChall()
    break

}
