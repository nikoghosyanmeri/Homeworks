//Խնդիր 2
//Ունենալ div 500px, button ամեն click անելիս ստեղծվի 10px-ով փոքր div 

// let box = document.getElementById("box");

// box.style.width = "500px";
// box.style.height = "100px";
// box.style.backgroundColor = "lightblue";
// box.style.marginBottom = "10px";

// let width = 500;

// function reduceWidth() {
//     if (width > 0) {
//         width -= 10;
//         document.getElementById("box").style.width = width + "px";
//     }
// }



let width = 500; 

function reduceWidth() {
    if (width > 0) {
        
        let newBox = document.createElement("div");
        newBox.style.width = width + "px";
        newBox.style.height = "100px";
        newBox.style.padding = "10px";
        newBox.style.border = "solid";
        newBox.style.marginBottom = "10px";

        document.getElementById("box").appendChild(newBox);

        width -= 10;
    }
}