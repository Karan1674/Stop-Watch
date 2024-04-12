const stopwatchtime = document.querySelector('.stopwatch span');

const stopbtn = document.querySelector('.stop');
const startbtn = document.querySelector('.start');
const resetbtn = document.querySelector('.reset');


const circle_hours = document.querySelector('.circle_hours');
const circle_mins = document.querySelector('.circle_mins');
const circle_sec = document.querySelector('.circle_sec');
const circle_msec = document.querySelector('.circle_msec');

let msec = 0;
let sec = 0;
let min = 0;
let hours = 0;

let timerId = null;

startbtn.addEventListener('click', function () {
    buttonAnimation(1);
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTime, 10);
});


stopbtn.addEventListener('click', function () {
    buttonAnimation(0);
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function () {
    buttonAnimation(2);
    clearInterval(timerId);
    stopwatchtime.innerHTML = `00 : 00 : 00 : 00`;


    circle_hours.innerHTML = `00 <span>Hours</span>`;
    circle_mins.innerHTML = `00 <span>Minutes</span>`;
    circle_sec.innerHTML = `00 <span>Seconds</span>`;
    circle_msec.innerHTML = `00 <span>Milliseconds</span>`;

    msec = sec = min = hours = 0;
});


function startTime() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
            if (min == 60) {
                hours++;
                min == 0
            }
        }
    }

    msecstring = msec < 10 ? `0${msec}` : `${msec}`;
    secstring = sec < 10 ? `0${sec}` : `${sec}`;
    minstring = min < 10 ? `0${min}` : `${min}`;
    hoursstring = hours < 10 ? `0${hours}` : `${hours}`;

    stopwatchtime.innerHTML = `${hoursstring} : ${minstring} : ${secstring} : ${msecstring}`;

    circle_hours.innerHTML = `${hoursstring} <span>Hours</span>`;
    circle_mins.innerHTML = `${minstring} <span>Minutes</span>`;
    circle_sec.innerHTML = `${secstring} <span>Seconds</span>`;
    circle_msec.innerHTML = `${msecstring} <span>Milliseconds</span>`;

}


function buttonAnimation(current) {
    button = document.querySelectorAll('.btn')[current];
    button.classList.add("active");
    setTimeout(function () {
        button.classList.remove("active");
    }, 100);
}



const stopwatch = document.querySelector(".stopwatch");
const circle_stopwatch = document.querySelector(".circle_stopWatch_container");

const modify = document.querySelector(".modify");

modify.addEventListener('click', function () {
    stopwatch.classList.toggle('active');
    circle_stopwatch.classList.toggle('active');

});



