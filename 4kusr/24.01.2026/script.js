var data = [
    {
        "icon": "images/London.jpg",
        "header": "London",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    },
    {
        "icon": "images/Rome.jpg",
        "header": "Rome",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    },
    {
        "icon": "images/Cluj.jpg",
        "header": "Cluj-Napoca",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    },
    {
        "icon": "images/Paris.jpg",
        "header": "Paris",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    },
    {
        "icon": "images/Amsterdam.jpg",
        "header": "Amsterdam",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    },
    {
        "icon": "images/Barcelona.jpg",
        "header": "Barcelona",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat feugiat fringilla. Etiam nunc enim, malesuada quis augue a, mollis varius."
    }
];

function creator(info) {
    var e = document.querySelector(".block");

    e.innerHTML += `
        <div class="box">
            <img src="${info.icon}" class="box-img" alt="image">
            <h2>${info.header}</h2>
            <p>${info.text}</p>
            <button>READ MORE</button>
        </div>
    `;
}


for (var obj of data) {
    creator(obj);
}
