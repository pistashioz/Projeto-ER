
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


/*moving steps functions LEVEL 2*/ 
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
  document.getElementById('objectsChall').style.display = "block";
}

function backBtn(){
  document.getElementById('objects').style.display = "block";
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg.svg)";
  document.getElementById('objectsChall').style.display = "none";

}
function forwardBtn(){
  console.log(ruleOfThree(total, solved))
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
const chestOpening = new Audio('../src/audio/keyChestOpen.mp3')
forwardButton.addEventListener('click', function(){
  if (forwardBtn() === true){
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
  document.body.style.backgroundImage = "url(../src/img/rooms/level2/room/bg3Chall3.svg)";
  document.getElementById('key').style.display = "none"
  solvedChall()
});


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

const openSettingBtn = document.querySelectorAll('[data-modal-target]');
const closeSettingBtn = document.querySelectorAll('[data-close-button]');


openSettingBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })

});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modalSettings')
      closeModal(modal)
    })
  });
  /*
const editBtn = document.querySelector('#editBtn');
const saveBtn = document.querySelector('#saveBtn');

const timeLeft = document.querySelectorAll('.time');
const optQuestions = document.querySelectorAll('.optionsQuestions');
const rightAn = document.querySelectorAll('.rightAnsw');
const desafio = document.querySelectorAll('.challengeEdit')
editBtn.addEventListener('click', () => {
document.querySelector('#equationLvl1 h4').innerText = document.querySelector('#challengeLvl1').placeholder
});

saveBtn.addEventListener('click', function(){
  timeLeft.forEach(time => {
    time.setAttribute('readonly', true);
  });
  optQuestions.forEach(question => {
    question.setAttribute('readonly', true);
  });
  rightAn.forEach(ans => {
    ans.setAttribute('readonly', true);
  });
  desafio.forEach(chall => {
    chall.setAttribute('readonly', true);;
  });

  

});

*/