var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;

document.addEventListener("keydown",keyDownListener,false);
document.addEventListener("keyup",keyUpListener,false);
var character = new Player(1,1);
var object1 = new FallObject(4,4,"src/img/object1.png",0)

function windowReady(){
    menuDrawInterval = setInterval(menuDraw, 50);
}

function menuDraw(){

}

function startGame(){//Function is called whenever the start button is clicked on the main menu
    clearInterval(menuDrawInterval);
    startButton.style.display = 'none'
    frameRate = setInterval(frame, 10);
}

function frame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    character.show();
    if (object1 != null){//object1 becomes null whenever it collides with player
        object1.show();
        object1.move();
        if(object1.collision(character.x,character.y)){
            object1 = null;
        }
    }
    if(upKey && character.y > 0) {//Below restricts the user from going outside the canvas
        character.y = character.y - 5;
    }
    if(downKey && character.y < canvas.height - 30) {
        character.y = character.y + 5;
    }
    if(rightKey && character.x < canvas.width - 30) {
        character.x = character.x + 5;
    }
    if(leftKey && character.x > 0) {
        character.x = character.x - 5;
    }

}

function keyDownListener(e){//Key listeners, checks when certain keys are pressed down and if so set the var to true
    if(e.key=="ArrowUp") {
        upKey = true;
    }
    else if(e.key=="ArrowDown") {
        downKey = true;
    }
    else if(e.key=="ArrowRight") {
        rightKey = true;
    }
    else if(e.key=="ArrowLeft") {
        leftKey = true;
    }
}

function keyUpListener(e){//Key listeners, checks if certain keys have been released and if so set the var to false
    if(e.key=="ArrowUp") {
        upKey = false;
    }
    else if(e.key=="ArrowDown") {
        downKey = false;
    }
    else if(e.key=="ArrowRight") {
        rightKey = false;
    }
    else if(e.key=="ArrowLeft") {
        leftKey = false;
    }
}