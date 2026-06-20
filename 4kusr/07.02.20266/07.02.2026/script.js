let button = document.getElementById("button");
button.addEventListener("click", function () {
    let a = document.createElement("div");
    a.style.width = "100px";
    a.style.height = "100px";
    a.style.border = "solid";

    button.remove();
    document.body.appendChild(a);
});