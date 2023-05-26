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

    if(resultLogin){
        window.location.replace("../index.html")
    } else{
        alert("CREDENCIAIS ERRADAS")
    }

});