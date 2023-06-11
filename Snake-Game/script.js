let canvas =document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake =[];
snake[0] = {
    x: 8 * box,
    y:8*box
}
let direcao ="right";
let apple={
    x:Math.floor(Math.random()*15+1)*box,
    y:Math.floor(Math.random()*15+1)*box
}
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}
function criarCobra(){
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = "green";
        context.fillRect(snake[index].x,snake[index].y,box,box);
        
    }
}


function Food(){
    context.fillStyle="red"
    context.fillRect(apple.x,apple.y,box,box);
}

document.addEventListener('keydown', update);
function update(eventKey){

    if(eventKey.keyCode == 37 && direcao != 'right') direcao = 'left';
    if(eventKey.keyCode == 38 && direcao != 'down') direcao = 'up';
    if(eventKey.keyCode == 39 && direcao != 'left') direcao = 'right';
    if(eventKey.keyCode == 40 && direcao != 'up') direcao = 'down';
}

function iniciarJogo(){
    if(snake[0].x> 15*box && direcao == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direcao == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direcao == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direcao == 'up') snake[0].y = 16 * box;
    
    
    criarBG();
    criarCobra();
    Food();
    
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direcao == "right") snakeX += box;
    if(direcao=="left") snakeX -= box;
    if(direcao=="up") snakeY -= box;
    if(direcao=="down") snakeY += box;
    snake.pop();
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo , 100);