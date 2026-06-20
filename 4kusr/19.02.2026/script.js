let button = document.getElementById("button");

let a = document.createElement("div");
a.style.width = "100px";
a.style.height = "100px";
a.style.border = "solid";
a.style.display = "none"; 
document.body.appendChild(a);

let count = 0;

button.addEventListener("click", function () {
    if (count % 2 == 0) {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
    count++;
});
