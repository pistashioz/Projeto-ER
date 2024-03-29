import * as user from "../models/UserModels.js";
import * as pistas from "../models/hintsModel.js";
import * as niveis from "../models/roomModel.js";



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





/*modal buy hints*/ 
const closeModalButtons = document.querySelectorAll('[data-close-button]');

function updateCoins(){
  document.getElementById("amount").textContent= `X ${user.getCoins()}`
}
updateCoins()

    const button = document.getElementById("hintBtn") ;
    button.addEventListener('click', () =>{
        const modal = document.getElementById("tobuy");
        const containerclass = document.createElement("div")
        containerclass.innerHTML=`<div id = 'modal' class = 'modalBuy'>
        <div class = 'container'>
            <div class = 'modal-head'>
                <h1>Comprar</h1>
            </div>
            <div class = 'modal-body'>
                <h3>Tem a certeza que quer obter uma pista?</h3>
                <div id = 'btns'>
                    <button class = 'buy-button' id = 'btnBuy'>Comprar</button>
                    <button  data-close-button class = 'close-button' id = 'btnExit'>Sair</button>
                </div> 
            </div>
        </div>
    </div>`

        modal.appendChild(containerclass);

        const closebtn = document.getElementById('btnExit');
        closebtn.addEventListener("click",()=>{
          modal.innerHTML = ""
        });

        
        const buyBtn = document.getElementById('btnBuy');
        buyBtn.addEventListener('click', function() {
          const modalhintshow = document.getElementById("hintshower");
          const containerclass = document.createElement("div")
          containerclass.innerHTML=`<div id = 'hintModal' class = 'modalHint'>
          <div class = 'container'>
              <div class = 'modalHint-head'>
                  <h1>Pista</h1>
                  <button id="closeHint"><ion-icon name="close-outline"></ion-icon></button>
              </div>
              <div class = 'modalHint-body'><h3 id = 'hintText'></h3></div> 
              </div>
          </div>`
          const modalHint = document.getElementById("hintModal");
          
          let coins = parseInt(user.getCoins().toString());
          if (pistas.getPistaAtual() === "Não existem mais pistas"){
            modalhintshow.appendChild(containerclass);
            document.getElementById("hintText").textContent = pistas.getPistaAtual()
            document.getElementById("closeHint").addEventListener("click",()=>{
              modalhintshow.innerHTML=""
              });
          }else{
            if(coins >= 5){
                let currentCoins = coins - 5;
                user.updateCoins(currentCoins);
                modalhintshow.appendChild(containerclass);
                document.getElementById("hintText").textContent = pistas.getPistaAtual()
                updateCoins()
                document.getElementById("closeHint").addEventListener("click",()=>{
                  modalhintshow.innerHTML=""
                  pistas.addPista()
                  });
            }else{
                let warning = document.getElementById("modalNoMoney");
                warning.classList.add("active")
                setTimeout(function(){
                  warning.classList.remove("active")
                }
                ,3000)
              }
          }

            modal.innerHTML = ""
            closeModalButtons.forEach(button => {
              button.addEventListener('click', () => {
                const modal = document.querySelector('.tobuy')
                modal.innerHTML = ""
              })
            });
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
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/piecesBg.svg)";
  document.getElementById('objectsChall').style.display = "block";
  randomChallengeLvl2()
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
function Level3(){
  document.body.style.backgroundImage = "url(../src/img/rooms/level3/bgLvl3.svg)";
  document.body.style.backgroundPosition = "top center";
  document.getElementById('objectsChall3').style.display = "none"
  document.getElementById('level3').style.display = "block"
}
document.querySelector('#doorOpen').addEventListener('click', function(){
  Level3()
  solvedChall()
  user.updateLevel()
  user.addCoins(40);
  pistas.resetPista()
  updateCoins()
  countdownDuration = niveis.getTimeLevel(user.getUserLevel()) * 60;
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
}, {once: true})
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

const height = document.querySelector('#height');
const width = document.querySelector('#width');
const op1Wrong = document.querySelector('#hypotenuse1');
const op2Right = document.querySelector('#hypotenuse2');
function randomChallengeLvl2(){
  let randChall = questionsLvl2[Math.floor(Math.random() * questionsLvl1.length)];
  height.innerText = randChall.height;
  width.innerText = randChall.width;
  op1Wrong.innerText = randChall.op2;
  op2Right.innerText = randChall.op1;

}


function changePosition(){
  var stepFixed = document.getElementById('stepFixed');
  var x = window.matchMedia("(max-width: 900px)")
  if (x.matches){
    stepFixed.style.bottom = '33vw';
    stepFixed.style.left = '14vw';
  }
  else{
    stepFixed.style.bottom = '35vw';
    stepFixed.style.left = '14vw';
  }
  solvedChall()

}


/*LEVEL 1*/

const equation = document.querySelector('#eq');
const rightAnswer = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const op3 = document.querySelector('#op3');
const op4 = document.querySelector('#op4');
const op5 = document.querySelector('#op5');
function randomChallengeLvl1(){
  let randChall = questionsLvl1[Math.floor(Math.random() * questionsLvl1.length)];
  equation.innerText = randChall.equation;
  rightAnswer.innerText = randChall.op1;
  op2.innerText = randChall.op2;
  op3.innerText = randChall.op3;
  op4.innerText = randChall.op4;
  op5.innerText = randChall.op5;
}
randomChallengeLvl1()

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
document.getElementById('rect').addEventListener('click', () =>{
  removeRect()
  user.updateLevel()
  user.addCoins(20);
  pistas.resetPista()
  updateCoins()
  countdownDuration = niveis.getTimeLevel(user.getUserLevel()) * 60;
})

/*admin room settings*/
document.getElementById("hintBtnADMIN").style.visibility = "hidden"
document.getElementById("settingsBtn").style.visibility = "hidden"

if(user.getUserLogged() === "admin"){
  document.getElementById("settingsBtn").style.visibility = "unset"
  document.getElementById("hintBtnADMIN").style.visibility = "unset"

  document.getElementById("hintBtnADMIN").addEventListener('click', () => {
    const modal = document.querySelector('.modalHintAdmin')
    openModal(modal)
  })

  function updatePistasAdmin(){


    var pistasDiv = document.getElementsByClassName("carousel-inner")[0];
    pistasDiv.innerHTML=""
    for (const pista of pistas.getPistas()){
      const divpistas = document.createElement("div");
      divpistas.innerHTML += `<h3>Pistas nivel ${pistas.getPistas().indexOf(pista) + 1}</h3>`;
      (pistas.getPistas().indexOf(pista) == 0) ? divpistas.classList.add("carousel-item","active") : divpistas.classList.add("carousel-item")
      divpistas.classList.add("carousel-hintsAdmin") 
      const divpistasPan = document.createElement("div");
      divpistasPan.classList.add("pistas")
      for(const innerPista of pista){
        var pistaP = document.createElement("textarea")
        pistaP.classList.add(`pista`)
        pistaP.id = `pista${pista.indexOf(innerPista) + 1}Lvl${user.getUserLevel()}`
        pistaP.value = innerPista.toString()
        pistaP.readOnly=true;
        divpistasPan.appendChild(pistaP)
      }
      
      divpistas.appendChild(divpistasPan);
      pistasDiv.appendChild(divpistas);
      
      }
      var pistasEditButton = document.getElementById("editBtnAdmin");
      pistasEditButton.addEventListener("click",() => {
        const carrousel = document.getElementsByClassName("carousel-hintsAdmin");
        for(const nivel of carrousel){
          nivel.children[1].children[0].readOnly = false
          if (nivel.children[1].children.length > 1){
            nivel.children[1].children[1].readOnly = false
          }
        }
      });

      
      var pistasEditButton = document.getElementById("saveBtnAdmin");
      pistasEditButton.addEventListener("click",() => {
        const carrousel = document.getElementsByClassName("carousel-hintsAdmin");
        var index = 0
        for(const nivel of carrousel){
          pistas.editPistas(index,0,nivel.children[1].children[0].value)
          nivel.children[1].children[0].readOnly = true
          if (index > 1){
            pistas.editPistas(index,1,nivel.children[1].children[1].value)
            nivel.children[1].children[1].readOnly = true
          }
          index ++
        }
        updatePistasAdmin()
      });

      const closeAdminHintBtn = document.querySelectorAll('[data-close-Adminbutton]');
      closeAdminHintBtn.forEach(button => {
      button.addEventListener('click', () => {
      const modal = document.querySelector('.modalHintAdmin')
      closeModal(modal)
    })
    });
  }

 
updatePistasAdmin()



    document.getElementById("settingsBtn").addEventListener('click', () => {
      const modal = document.querySelector('.modalSettings')
      openModal(modal)
    })


    document.getElementById("closeSettings").addEventListener('click', () => {
      const modal = document.querySelector('.modalSettings')
      closeModal(modal)
    })


    document.getElementById("editBtn").addEventListener("click", ()=>{
      var inputs = document.querySelectorAll("#timeLvl");
      for(const input of inputs){
        input.readOnly= false;
      }
    });
    
    document.getElementById("saveBtn").addEventListener("click", ()=>{
      var inputs = document.querySelectorAll("#timeLvl");
      var index = 0
      for(const input of inputs){
        input.readOnly= true;
        niveis.updateTimes(index,input.value)
        index += 1
      }
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
            user.updateLevel()
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
if (user.getUserLevel() >= 2){
  document.getElementById('equationLvl1').style.display = "none";
  document.getElementById('options').style.display = "none";
  document.getElementById('rect').style.display = "none";
  removeRect()
  solvedChall()
}
if (user.getUserLevel() > 2){
  document.body.style.backgroundImage = "url(../src/img/rooms/level3/bgLvl3.svg)";
  document.body.style.backgroundPosition = "top center";
  document.getElementById('objectsChall3').style.display = "none"
  document.getElementById('key').style.display = "none"
  document.getElementById('objectsChall').style.display = "none";
  document.getElementById('toStay').style.display = "none";
  document.getElementById('toRemove').style.display = "none";
  document.getElementById('level3').style.display = "block"
  solvedChall()
  solvedChall()
  solvedChall()
  solvedChall()
  solvedChall()
  solvedChall()
  solvedChall()
}




var muteBtn = document.getElementById('sound');
var myTrack = document.getElementById('bgTrack');

myTrack.volume = 0.1;

muteBtn.addEventListener('click', ()=>{
  if (myTrack.muted == true){
    myTrack.muted = false;
    muteBtn.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>'
}
else{
    myTrack.muted = true;
    muteBtn.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>'
}
});






var countdownDuration = parseInt(niveis.getTimeLevel(user.getUserLevel())) * 60;

var countdownElement = document.getElementById('countdown');

var countdown = setInterval(function() {

  var minutes = Math.floor(countdownDuration / 60);
  var seconds = countdownDuration % 60;

  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;


  countdownElement.textContent = formattedMinutes + ":" + formattedSeconds;


  if (countdownDuration <= 0) {
    clearInterval(countdown);
    document.getElementsByClassName("modal-headMoney")[0].children[0].textContent = "A Vila ficou enfeitiçada para sempre"
    document.getElementsByClassName("modal-bodyMoney")[0].children[0].textContent = "Não resolveu os desafios a tempo :( "
    var modal = document.getElementById("modalNoMoney");
    openModal(modal);
    setTimeout(function() {
      location.reload()
    }, 5000);
  }

  countdownDuration--;
}, 1000);


var inputMinutes = document.querySelectorAll("#timeLvl");
var index = 0
  for(const input of inputMinutes){
    input.value = niveis.getTimeIndex(index);
    index += 1
  }


var muteBtn = document.getElementById('sound');
var myTrack = document.getElementById('bgTrack');

myTrack.volume = 0.1;
muteBtn.addEventListener('click', ()=>{
  if (!myTrack.muted){
    myTrack.muted = false;
    muteBtn.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>'
}
else{
    myTrack.muted = true;
    muteBtn.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>'
}
});


