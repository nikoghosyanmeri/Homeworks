let cont = document.getElementById("box");
let empty;

empty = document.createElement("div");
empty.style.width = "200px";
empty.style.height = "200px";
empty.style.display = "inline-block";
empty.style.margin = "20px";
empty.style.background = "transparent";
empty.style.border = "1px solid";

cont.appendChild(empty);

for (let i = 1; i <= 14; i++) {
    let div = document.createElement("div");

    div.style.width = "200px";
    div.style.height = "200px";
    div.style.display = "inline-block";
    div.style.margin = "20px";
    div.style.background = gRD();

    div.onclick = function () {
        empty.style.background = this.style.background;
    };

    cont.appendChild(div);
}

function gRD() {
    return `rgb(${randm()}, ${randm()}, ${randm()})`;
}

function randm() {
    return Math.floor(Math.random() * 256);
}
