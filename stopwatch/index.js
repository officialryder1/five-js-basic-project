const time = document.getElementById('time')
let secondsElapsed = 0;
let interval = null;


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
    secondsElapsed ++;
    setTime()
}

function startClock(){
    if(interval)stopClock()
    // setInterval is a function of js
    interval = setInterval(timer, 1000)
    
}

function stopClock(){
    clearInterval(interval)
}

function resetClock(){
    stopClock()
    secondsElapsed = 0;
    setTime()

}