let hour = 0;
let minute = 0;
let second = 0;

let hourE = document.getElementById("hour");
let minutE = document.getElementById("minute");
let secondE = document.getElementById("second");

setInterval(() => {

    if (second < 59) {
        second++;
    } else {
        second = 0;
        if (minute < 59) {
            minute++;
        } else {
            minute = 0;
            if (hour < 23) {
                hour++;
            } else {
                hour = 0;
            }
        }
    }

    hourE.innerText = hour;
    minutE.innerText = minute;
    secondE.innerText = second;

}, 1000);
