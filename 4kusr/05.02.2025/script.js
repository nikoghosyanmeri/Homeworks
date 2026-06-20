let cont = document.getElementById("buttons");

for (let i = 1; i <= 20; i++) {
    let buttonn = document.createElement("button");
    buttonn.innerText = "button " + i;

    buttonn.onclick = function () {
        greenbutton(buttonn);
    };

    cont.appendChild(buttonn);
}

function greenbutton(btn) {
    let buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "white";
    }

    btn.style.background = "green";
}