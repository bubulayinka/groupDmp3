const audio = document.querySelector('#audio');
const playPauseBtn = document.querySelector('#play-pause');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const songList = document.querySelector('.song-list');
const title = document.querySelector('#title');
const record = document.querySelector('.record');
const volSlider = document.querySelector(".slider");

function loadAudio(){
    audio.src = songArray[songIndex];

    let songlistitems = songList.getElementsByTagName('li');
    songHeading = songlistitems[songIndex].getAttribute('data-name');
    title.innerText = songHeading;


    for(i=0; i<songlistitems.length;i++){
        songlistitems[i].classList.remove('.active');
    }
    songList.getElementsByTagName('li')[songIndex].classList.add('.active');
}

let songArray = [];
let songHeading = "";
let songIndex = 0;
let Isplaying = false;


 function loadSongs(){
     let songs = songList.getElementsByTagName('li');
     for(i=0;i<songs.length;i++){
         songArray.push(songs[i].getAttribute("data-src"));
     };
     loadAudio();
 }

 loadSongs();
 function playAudio(){
     audio.play();
     //playPauseBtn.querySelector('i.fas').classList.remove('fa-play');
     //playPauseBtn.querySelector('i.fas').classList.add('fa-pause');
     Isplaying = true;
     record.classList.add('record-ani');
 }

 function pauseAudio(){
    audio.pause();
    playPauseBtn.querySelector('i.fas').classList.remove('fa-pause');
    playPauseBtn.querySelector('i.fas').classList.add('fa-play');
    Isplaying = flase;
    record.classList.remove('record-ani');
 }
 function nextsong(){
    songIndex++;
    if(songIndex > songArray.length - 1){
        songIndex =0 ;
    };
    loadAudio();
    playAudio();
 }

 function previoussong(){
    songIndex--;
    if(songIndex > 0){
        songIndex = songArray.length -1 ;
    };
    loadAudio();
    playAudio();
 }
 playPauseBtn.addEventListener("click", function(){
     if(Isplaying){
         pauseAudio();
     }
     else{
         playAudio();
     }
     alert("clickable")
 } , false);


 nextBtn.addEventListener('click' , function(){
        nextsong();
 }, false);

 prevBtn.addEventListener('click' , function(){
    previoussong();
}, false);
