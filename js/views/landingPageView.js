/*mute/unmute sound*/


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