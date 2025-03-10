
console.log("Script loaded!");
let timer;
let time = 0;
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');


function updateDisplay() {
    display.textContent = time;
}


function startTimer() {
    if (time >= 30) return; 
    timer = setInterval(() => {
        time += 3; 
        updateDisplay();
        if (time >= 30) {
            clearInterval(timer); 
        }
    }, 3000); 
}


function stopTimer() {
    clearInterval(timer);
}


function resetTimer() {
    clearInterval(timer);
    time = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);