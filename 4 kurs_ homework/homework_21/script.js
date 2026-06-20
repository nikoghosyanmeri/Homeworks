let bike = document.getElementById("bike");
let frontWheel = document.getElementById("wheel-front");
let backWheel = document.getElementById("wheel-back");

let position = 0;
let angle = 0;

function moveBike() {
  position += 2; 
  if (position > window.innerWidth) {
    position = -200;
  }
  bike.style.left = position + "px";

  angle += 20;
  frontWheel.style.transform = "rotate(" + angle + "deg)";
  backWheel.style.transform = "rotate(" + angle + "deg)";

  requestAnimationFrame(moveBike);
}

moveBike();
