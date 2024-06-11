const time = document.getElementById('time')
const input = document.getElementById('input')

let secondsElapsed = 0;
let interval = null;


function countDown(){
    const value = input.value;
    secondsElapsed = parseInt(value, 10) * 60
    setTime()
}
function padStart(value){
    // This will check if the timer has a zero in front
    // And if it doesn't have it will add one in front
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = Math.floor(secondsElapsed % 60)
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;

}

function timer(){
    if(secondsElapsed > 0){
        secondsElapsed--;
        setTime()
    }else{
        startClock()
    }
}

function startClock(){
    countDown();
    if(interval)stopClock()
    // setInterval is a function of js
    interval = setInterval(timer, 1000)
    
}

function stopClock(){
    clearInterval(interval)
    interval = null;
}

function resetClock(){
    stopClock();
    secondsElapsed = 0;
    setTime();

}
