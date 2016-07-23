var ctx;
var my_map;
var enermy_map;
var mouseX;
var mouseY;
var dragX;
var dragY;
var dragIndex;
var gameStatus = 0;
var control = document.getElementById("commandPanal");
var myRound = false;

function replaceScreen(){ 
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    var temp = true;
    //var size = document.getElementsById("title").sty
    startRound();
}

function startRound(){
    placeShip();
}

function startGame(){
    redraw();
    var temp = "<button onclick=\"startRound()\">Restart</button>";
    document.getElementById("commandPanal").innerHTML = temp;
}

function placeShip(){
    gameStatus = PLACE_SHIP;
    my_map = new GameMap(8,50,500,ctx);
    enermy_map = new GameMap(516,50,500,ctx);
    var temp = "<button onclick=\"random()\">RANDOMISE</button>";
    temp += "<button onclick=\"startGame()\">START</button>";
    document.getElementById("commandPanal").innerHTML = temp;
    my_map.resetMap();
    my_map.randomPlacment();
    enermy_map.resetMap();
    enermy_map.randomPlacment();
    redraw();
}


function redraw(){
    ctx.clearRect(0,0,1024,768);
    var image = document.getElementById("BK");
    ctx.drawImage(image , 0,0,800,600,0,0,1024,768);
    my_map.drawMap();
    my_map.drawMark();
    enermy_map.drawMap();
    ctx.font="38px airborne";
    ctx.fillStyle="azure";
    ctx.fillText("Your Map",8 + 170,4 + 38);
    ctx.strokeText("Your Map",8 + 170 ,4 + 38);
    ctx.fillText("Enermy Map",516 + 140 ,4 + 38);
    ctx.strokeText("Enermy Map",516 + 140,4 + 38);
}

/*function drawButton(content,x,y){
    var temp = ctx.fillStyle;
    var temp2 = ctx.strokeStyle;
    
    ctx.fillStyle="#DDDDFF";
    ctx.fillRect(x,y,BUTTON_WIDTH,BUTTON_HEIGHT);
    ctx.font="38px airborne";
    ctx.fillStyle="azure";
    ctx.fillText(content,x+8,y+40);
    ctx.strokeText(content,x+8,y+40);
    
    ctx.fillStyle = temp;
    ctx.strokeStyle = temp2;
    
}
function lightButton(content,x,y){
    var temp = ctx.fillStyle;
    var temp2 = ctx.strokeStyle;
    
    ctx.fillStyle="#BBBBDD";
    ctx.fillRect(x,y,BUTTON_WIDTH,BUTTON_HEIGHT);
    ctx.font="38px airborne";
    ctx.fillStyle="azure";
    ctx.fillText(content,x+8,y+40);
    ctx.strokeText(content,x+8,y+40);
    
    ctx.fillStyle = temp;
    ctx.strokeStyle = temp2;
    
}

function movingMouse(event){
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    console.log(111);
    if(gameStatus == PLACE_SHIP){
        if(mouseX > 8 && mouseX <  8 + BUTTON_WIDTH && mouseY > 600 && mouseY < 600 + BUTTON_HEIGHT){
            redraw();
            lightButton("Randomise",8,600);
        }
        else if(mouseX > 8 && mouseX <  8 + BUTTON_WIDTH && mouseY > 660 && mouseY < 660 + BUTTON_HEIGHT){
            redraw();
            lightButton("START",8,660);
        }
        else
            redraw();
    }
}*/

function random(){
    my_map.resetMap();
    my_map.randomPlacment();
    redraw();
}

function clicked(event){
    //my_map.shipAttacked(event.offsetX,event.offsetY);
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

