var board = document.getElementById('board');

var box = 20;

var snakeBody = [
    { x: 200, y: 200 }
];

var foodX = 100;
var foodY = 100;

var c_Direction = 'RIGHT';

var playerScore = 0;

var g_speed = 150;

document.addEventListener('keydown', function (event) {
    var keyPressed = event.keyCode;

    if (keyPressed == 37 && c_Direction != 'RIGHT') {
        c_Direction = 'LEFT';
    }
    else if (keyPressed == 38 && c_Direction != 'DOWN') {
        c_Direction = 'UP';
    }
    else if (keyPressed == 39 && c_Direction != 'LEFT') {
        c_Direction = 'RIGHT';
    }
    else if (keyPressed == 40 && c_Direction != 'UP') {
        c_Direction = 'DOWN';
    }
});

function makeNewFood() {
    var randomX = Math.floor(Math.random() * 20) * box;
    var randomY = Math.floor(Math.random() * 20) * box;
    foodX = randomX;
    foodY = randomY;
}

function drawGame() {
    board.innerHTML = '';

    for (var i = 0; i < snakeBody.length; i++) {
        var part = document.createElement('div');
        part.className = 'snakePart';
        part.style.left = snakeBody[i].x + 'px';
        part.style.top = snakeBody[i].y + 'px';
        board.appendChild(part);
    }

    var food = document.createElement('div');
    food.className = 'food';
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
    board.appendChild(food);
}

function runGame() {

    var headX = snakeBody[0].x;
    var headY = snakeBody[0].y;

    if (c_Direction == 'LEFT') {
        headX = headX - box;
    }
    if (c_Direction == 'UP') {
        headY = headY - box;
    }
    if (c_Direction == 'RIGHT') {
        headX = headX + box;
    }
    if (c_Direction == 'DOWN') {
        headY = headY + box;
    }

    if (headX < 0 || headX >= 400 || headY < 0 || headY >= 400) {
        clearInterval(gameTimer);
        alert('Game Over! Score: ' + playerScore);
        location.reload();
    }

    for (var i = 0; i < snakeBody.length; i++) {
        if (headX == snakeBody[i].x && headY == snakeBody[i].y) {
            clearInterval(gameTimer);
            alert('Game Over! Score: ' + playerScore);
            location.reload();
        }
    }

    var newHead = {
        x: headX,
        y: headY
    };


    snakeBody.unshift(newHead);


    if (headX == foodX && headY == foodY) {

        playerScore = playerScore + 1;
        document.getElementById('scoreText').innerText = 'Score: ' + playerScore;

        makeNewFood();
    } else {

        snakeBody.pop();
    }

    drawGame();
}

var gameTimer = setInterval(runGame, g_speed);

drawGame();
