const startButton  = document.getElementById('start_button');
const stopButton  = document.getElementById('stop_button');
const resetButton  = document.getElementById('reset_button');
const showSeconds = document.getElementById('seconds');
const showMilliSeconds = document.getElementById('milli_seconds');

let milliSeconds = 0;
let seconds = 0;
let interval;

startButton .addEventListener('click', () => {
  interval = setInterval(startTimer, 10);
});

stopButton .addEventListener('click', () => {
  clearInterval(interval);
});

resetButton .addEventListener('click', () => {
  clearInterval(interval);
  showSeconds.innerHTML = "00";
  showMilliSeconds.innerHTML = "000";
  milliSeconds = 0;
  seconds = 0;
});

function startTimer() {
  milliSeconds+=10;
  if (milliSeconds === 1000) {
    milliSeconds = 0;
    seconds++;
  }

  let ms = 0;
  if (milliSeconds < 10) {
    ms = '00' + milliSeconds;
  } else if (milliSeconds < 100) {
    ms = '0' + milliSeconds;
  } else {
    ms = milliSeconds;
  }

  let s = 0;
  if (seconds < 10) {
    s = '0' + seconds;
  } else {
    s = seconds;
  }

  showMilliSeconds.innerHTML = `${ms}`;
  showSeconds.innerHTML =  `${s}`; 
}