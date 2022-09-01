const btn=document.querySelector('.switch-btn');
const video=document.getElementById('video');
const playBtn=document.querySelector('#play');
const pauseBtn=document.querySelector('#pause');
const containerSwitch=document.querySelector('#switch');


playBtn.addEventListener('click', switchPlay);
pauseBtn.addEventListener('click', switchPause);

function switchPause(){
    console.log('click en pausa');
    containerSwitch.className += " slide";
    video.pause();

}

function switchPlay(){
    containerSwitch.classList.remove('slide');
    video.play();
}

