import * as User from "../models/UserModels.js";

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

/*log in*/

document.querySelector("#login").addEventListener("click", function (){
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    let resultLogin = User.login(username,password);
    console.log(User.getBlockedStatus(username)); 
    if(resultLogin && User.getBlockedStatus(username).toString() === "false"){
        window.location.replace("../index.html")
    } else{
        if(User.getBlockedStatus(username).toString()==="false"){
            CustomAlert("CREDENCIAIS ERRADAS")
        }else{
            CustomAlert("USER BLOQUEADO")
        }
    }

});

function CustomAlert(message){
    let alerts = document.getElementById("alert-container");
   
   if (alerts.childElementCount < 2) {
      // Create alert box
      let img = document.createElement("img");
      img.src = "../src/img/warning.png";
      let alertBox = document.createElement("div");
      alertBox.classList.add("alert-msg", "slide-in");
  
      // Add message to alert box
      let alertMsg = document.createTextNode(message);
      alertBox.appendChild(img);
      alertBox.appendChild(alertMsg);
      // Add alert box to parent
      alerts.insertBefore(alertBox, alerts.childNodes[0]);
      // Remove last alert box
      setTimeout(function() {
         alerts.childNodes[0].classList.add("slide-out");
      }, 2000);
      setTimeout(function() {
        alerts.removeChild(alerts.lastChild); 
     },2700);
   }
  
  }   
  
