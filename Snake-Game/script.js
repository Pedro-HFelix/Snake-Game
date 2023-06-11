let canvas =document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let pontuacao = 0;
let snake =[];
snake[0] = {
    x: 8 * box,
    y: 8*box
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
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over!!! \n You Lose');
        }
    }

    criarBG();
    criarCobra();
    Food();
    
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direcao == "right") snakeX += box;
    if(direcao=="left") snakeX -= box;
    if(direcao=="up") snakeY -= box;
    if(direcao=="down") snakeY += box;


    if(snakeX != apple.x || snakeY != apple.y){
        snake.pop();
    }
    else{
        pontuacao++;
        document.getElementById("pontuacao").textContent = "Pontuação: " + pontuacao;
        apple.x = Math.floor(Math.random() * 15 + 1) * box
        apple.y = Math.floor(Math.random() * 15 + 1) * box
        atualizarCorFundo();
    }
    
    


    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(iniciarJogo , 100);
function reiniciarPagina() {
    location.reload();
  }
  function gerarCorRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    if(r == 0 && g == 0 && b == 0)
        return "rgb(255, 255, 255)";
    else
        return "rgb(" + r + ", " + g + ", " + b + ")";

  }
  
  function atualizarCorBotao() {
    var botao = document.getElementById("btnReiniciar");
    var novaCor = gerarCorRGB();
    botao.style.backgroundColor = novaCor;
  }
  
  setInterval(atualizarCorBotao, 2000);

  
  function atualizarCorFundo() {
    var body = document.querySelector("body");
    var novaCor = gerarCorRGB();
    body.style.background = novaCor;
  }
  
  //setInterval(atualizarCorFundo, 2000);