let race;
function move() {
    let car1 = document.getElementById("car1");
    let car2 = document.getElementById("car2");
    let car3 = document.getElementById("car3");

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let finish = 1175;

    race = setInterval(function () {

        p1 += Math.floor(Math.random() * 10) + 1;
        p2 += Math.floor(Math.random() * 10) + 1;
        p3 += Math.floor(Math.random() * 10) + 1;

        car1.style.left = p1 + "px";
        car2.style.left = p2 + "px";
        car3.style.left = p3 + "px";

        if (p1 >= finish) {
            clearInterval(race);
            alert("Red car wins!");
        }
        else if (p2 >= finish) {
            clearInterval(race);
            alert("Green car wins!");
        }
        else if (p3 >= finish) {
            clearInterval(race);
            alert("Blue car wins!");
        }

    }, 50);
}

function reset() {

    clearInterval(race);

    document.getElementById("car1").style.left = "0px";
    document.getElementById("car2").style.left = "0px";
    document.getElementById("car3").style.left = "0px";
}
