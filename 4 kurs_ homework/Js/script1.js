let currenURL = window.location.href;
alert(currenURL);
let change = confirm("Do you want to change the URL");
if (change) {
    let newURL = prompt("New URL");
    if (newURL) {
        alert(newURL);
        console.log(newURL);
    }
    else {
        alert("Current", currenURL);
    }
} else {
    alert(currenURL);
}