let timer = document.getElementById("time");
let startButton = document.getElementById("startButton");
let resetButton = document.getElementById("resetButton");
let pauseButton = document.getElementById("pauseButton");

let startTime,
    elapsedtime = 0,
    timerInterval,
    currentTime;

function timerUpdate() {
    let elapsedtimeMs = Date.now() - startTime;
    let millisecods = Math.floor((elapsedtimeMs % 1000) / 10);
    let seconds = Math.floor((elapsedtimeMs / 1000) % 60);
    let minutes = Math.floor((elapsedtimeMs / (1000 * 60)) % 60);

    let timeStr = 
    pad(minutes) + ":" +
    pad(seconds) + "." +
    pad(millisecods);
    
    timer.textContent = timeStr;
};


function timerStart() {
    startTime = Date.now() - elapsedtime;
    timerInterval = setInterval(timerUpdate, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
};

function timerStop() {
    clearInterval(timerInterval);
    elapsedtime = Date.now() - startTime;
    currentTime = elapsedtime;
    startButton.disabled = false;
    pauseButton.disabled = true;
};

function timerReset() {
    timer.innerText = "00:00:00"
    clearInterval(timerInterval);
    elapsedtime = 0;
    startButton.disabled = false;
    pauseButton.disabled = true;
};


function pad(value) {
    return value.toString().padStart(2, "0");
};

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space' && event.target.id === 'startButton') {
        timerStart();
    }
});

startButton.addEventListener('click', timerStart);
resetButton.addEventListener('click', timerReset);
pauseButton.addEventListener('click', timerStop);