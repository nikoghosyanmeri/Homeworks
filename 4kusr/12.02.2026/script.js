 let ball = document.getElementById("ball");
  let resetBtn = document.getElementById("resetBtn");

  let size = 1;         
  let falling = false;   

  ball.onclick = function() {
    if (falling) return;   

    size = size - 0.2;     

    if (size <= 0.2) {
      size = 0.2;
      falling = true;     
      fall();
    }

    ball.style.transform = "scale(" + size + ")";
  };

  function fall() {
    let y = 150;       
    let ground = 390;  

    let move = setInterval(function() {
      y = y + 5;        
      ball.style.top = y + "px";

      if (y >= ground) {   
        clearInterval(move);
        ball.style.top = ground + "px";
      }
    }, 20);
  }

  resetBtn.onclick = function() {
    size = 1;
    falling = false;
    ball.style.transform = "scale(1)";
    ball.style.top = "150px";
  };