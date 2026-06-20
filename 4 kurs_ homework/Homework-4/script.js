var hours = 12;
var minutes = 0;
var seconds = 0;

var tDegree = 360;
var hOnClock = 12;
var mOnClock = 60;
var sOnClock = 60;

var degPerHour = tDegree / hOnClock;     
var degPerMinute = tDegree / mOnClock;  
var degPerSec = tDegree / sOnClock; 

var hourHandExtraPerMinute = degPerHour / mOnClock;

function updateClock() {
    seconds++;

  if (seconds >= sOnClock) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= mOnClock) {
    minutes = 0;
    hours++;
  }

  if (hours > hOnClock) {
    hours = 1;
  }

  var secondDeg = seconds * degPerSec;
  var minuteDeg = minutes * degPerMinute;
  var hourDeg = (hours % 12) * degPerHour + minutes * hourHandExtraPerMinute;

  document.getElementById("second").style.transform = "translateX(-50%) rotate(" + secondDeg + "deg)";
  document.getElementById("minute").style.transform = "translateX(-50%) rotate(" + minuteDeg + "deg)";
  document.getElementById("hour").style.transform = "translateX(-50%) rotate(" + hourDeg + "deg)";
}

setInterval(updateClock, 1000);

updateClock();
