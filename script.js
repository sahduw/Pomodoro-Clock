let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let startBtn = document.getElementById("startBtn");
let defaultMode = 'focus'
let alarmSound = new Audio('imgs-audio/fist_full_of_dollars.mp3')

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("clock").innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function startTimer() {
    if (isRunning) return; // Prevent multiple timers from starting
    isRunning = true;
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alarmSound.play()
            alert("Time's up!");
        }
    }, 1000);
    startBtn.innerHTML = "Pause";
}
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.innerHTML = "Start";
}
function toggleTimer(){
    if (startBtn.innerText === "Pause") {
        pauseTimer();
    }
    else{
        startTimer();
    }
};
function resetTimer(){
    clearInterval(timer)
    startBtn.innerText = "Start"
    isRunning = false
    timeLeft = 25 * 60
    updateDisplay()
}
function switchMode(mode){
    pauseTimer()
    document.getElementById('focus').classList.remove("active-mode");
    document.getElementById('break').classList.remove("active-mode");
    document.getElementById(mode).classList.add("active-mode");

    // update timeLeft depending on mode
    timeLeft = mode === 'focus' ? 25 * 60 : 5 * 60;
    updateDisplay();
}
window.onload = () => {
    switchMode('focus');
}
function featuresNotAdded() {
    alert("i havnet add these features lol")
}