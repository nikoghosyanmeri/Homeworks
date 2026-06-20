//unenal f argument tiv tvi qanakov div kod createElement
function f (num){
    for(let i = 0; i <= num; i++){
        let a = document.createElement("div");
        a.style.width = "100px";
        a.style.height = "100px";
        a.style.border = "solid";
        document.body.appendChild(a);
    }
}

f(2);