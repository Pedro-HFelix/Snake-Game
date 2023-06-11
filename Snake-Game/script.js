let canvas =document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake =[];
snake[0] = {
    x: 8 * box,
    y:8*box
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
criarBG();
criarCobra();

  