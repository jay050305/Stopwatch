var stop = document.getElementById('stop');
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var flag = document.getElementById('flag');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var microSec = document.getElementById('microSec');
var playCheck = document.getElementById('playCheck');
var btnPressCount = 0;
var intervals;
function play(){
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    intervals = setInterval(function() {
    var a = parseInt(microSec.innerHTML) + 1;
    microSec.innerHTML = a;
    if (parseInt(microSec.innerText) % 100 == 0 && parseInt(microSec.innerText) != 0) {
        second.innerText++;
        second.innerText = second.innerText.padStart(2, '0');
        microSec.innerText = '00';
    }
    if (parseInt(second.innerText) % 60 == 0 && parseInt(second.innerText) != 0) {
        minute.innerText++;
        minute.innerText = minute.innerText.padStart(2, '0');
        second.innerText = '00';
    }
},10)}


function pause(){
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    clearInterval(intervals);
}

function resetButton(){
    minute.innerText = '00';
    second.innerText = '00';
    microSec.innerText = '00';
    clearInterval(intervals);
    if(playButton.style.display == 'none' || pauseButton.style.display == 'block')
    {
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }
}

flag.addEventListener('click',function(){

var mainDiv = document.getElementsByClassName('main-div')[0];
var counters = document.getElementsByClassName('counters')[0];
var buttons = document.getElementsByClassName('buttons')[0];

var flagsDiv = document.getElementsByClassName('flags-div')[0];

mainDiv.style.height = '300px';

counters.style.height = '22%';
buttons.style.height = '22%';
flagsDiv.style.height = '40%';

counters.style.fontSize = '37px';
counters.style.lineHeight = '45px';


flagsDiv.style.display = 'flex';





    var flags = document.getElementById('flags');

    flags.innerHTML += 
        `<div class="flag center">
            <div class="flag-number">`+ parseInt(flags.childElementCount) +`.</div>
            <div class="time">`+
            + document.getElementById('minute').innerText+`:`
            + document.getElementById('second').innerText+`:`
            + document.getElementById('microSec').innerText
            +`</div>
        </div>`

});
document.addEventListener('keypress',s=>{
    s.preventDefault();
    if(s.key==" ")
    {
        btnPressCount++;
        // play();
        if(btnPressCount%2 == 0){
            play();
        }
        else{
            pause();
        }
    }

})
