//Խնդիր 1
//Գրել ծրագիր, որը վայրկյանը մեկ էկրանի վրա, տարբեր տեղերում, տարբեր չափեևի և գույնի div կտպի::

setInterval(() => {
  let d = document.createElement("div");

  d.style.cssText = `
    position: absolute;
    width: ${Math.random()*100+20}px;
    height: ${Math.random()*100+20}px;
    left: ${Math.random()*innerWidth}px;
    top: ${Math.random()*innerHeight}px;
    background: rgb(
      ${Math.random()*255},
      ${Math.random()*255},
      ${Math.random()*255}
    );
  `;

  document.body.appendChild(d);
}, 1000);