var ctx;
var my_map;
var enermy_map;
var dragIndex;
var gameStatus = 0;
var control = document.getElementById("commandPanal");
var myRound = false;
var backgroundIMG;

function replaceScreen(){ 
    
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\" onmousedown=\"mouseDown(event)\" onmousemove=\"mouseMove(event)\" onmouseup=\"mouseUp(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    backgroundIMG = document.getElementById("BK");
    var temp = true;
    startRound();
    //welcomeScreen()
    //menu();
}

function storyMode(){
    gameStatus = STORY_MODE;
    var WM = document.getElementById("OL");
    ctx.drawImage(WM,0,0,1024,768,0,0,1024,768);
    ctx.fillStyle="black";
    ctx.font="20px airborne";
    ctx.fillText("USA",191,353);
    ctx.fillText("CANADA",155,306);
    ctx.fillText("UK",456,303);
    ctx.fillText("CHINA",737,360);
    ctx.fillText("RUSSIA",722,274);
}

function menu(){
    gameStatus = MENU;
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    ctx.clearRect(0,0,1024,768);
    var backgroundIMG = document.getElementById("BK");
    ctx.drawImage(backgroundIMG,0,0,1024,768,0,0,1024,768);
    ctx.fillStyle="azure";
    ctx.font="60px airborne";
    var leftMargin = 250;
    ctx.strokeRect(leftMargin,55,370,60);
    ctx.strokeRect(leftMargin,55+80,250,60);
    ctx.strokeRect(leftMargin,55+160,210,60);
    ctx.strokeRect(leftMargin,55+240,240,60);
    ctx.fillText("Story mode",leftMargin,108);
    ctx.fillText("Classic",leftMargin,188);
    ctx.fillText("Option",leftMargin,268);
    ctx.fillText("Rename",leftMargin,348);
    ctx.strokeText("Story mode",leftMargin,108);
    ctx.strokeText("Classic",leftMargin,188);
    ctx.strokeText("Option",leftMargin,268);
    ctx.strokeText("Rename",leftMargin,348);
}
function startRound(){
    gameStatus == "none";
    var index = 0;
    buttonSound();
    var temp = setInterval(function(){
        ctx.drawImage(backgroundIMG,0,index,1024,768,0,0,1024,768);
        index+=24;
        if(index >= 768){
        clearInterval(temp);
        placeShip();
    }
    },40);
    
    
} 

var backgroundIMG = document.getElementById("BK");
function welcomeScreen(){
	
    ctx.drawImage(backgroundIMG,0,0,1024,768,0,0,1024,768);
	//Title
	gameStatus = WELCOME;
	ctx.font="50px Airborne";
	ctx.fillText("Welcome Commander",235,100);
	
	//Block
	ctx.beginPath();
	ctx.fillStyle="rgba(240,250,255,0.6)"
	ctx.fillRect(300,300,400,50);
	ctx.rect(300,300,400,50);
	ctx.stroke();
	ctx.font="16px Airborne";
	ctx.fillStyle="black"
	ctx.fillText("CLICK HERE TO ENTER YOUR NAME COMMANDER",320,330);
	
	//menu();
}

function startGame(){
    gameStatus = GAME_START;
    hint = "Your turn to attack";
    var temp = "<button onclick=\"startRound()\">Restart</button>";
    document.getElementById("commandPanal").innerHTML = temp;
    myRound = true;
    redraw();
}
var randomAttack = true;
var hitDirection = "no";
var hitPointing = "no";
var hitSize = "0";
var hitX;
var hitY;
var nextX;
var nextY;
var preX;
var preY;
var keeping = true;



function placeShip(){
    gameStatus = PLACE_SHIP;
    enemyReady();
    backMusic.play();
    
    hint = "Place your ship on the left board";
    my_map = new GameMap(8,230,500,ctx);
    enermy_map = new GameMap(516,230,500,ctx);
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
    ctx.drawImage(backgroundIMG,0,768,1024,768,0,0,1024,768);
    my_map.drawMap();
    my_map.drawMark(true);
    enermy_map.drawMap();
    enermy_map.drawMark(false);
    ctx.fillStyle="yellow";
    ctx.fillRect(265,8,140,20);
    ctx.fillRect(265,36,140,20);
    ctx.fillStyle="black";
    ctx.font="20px airborne";
    ctx.fillText("Randomise",270,26);
    ctx.fillText("Start",270,26+28);
    ctx.font="30px airborne";
    ctx.fillText("- " + hint,8,8 + 30 +180);
    ctx.font="38px airborne";
    ctx.fillStyle="azure";
    ctx.fillText("Your Map",8 + 170,545 + 38+ 180);
    ctx.strokeText("Your Map",8 + 170 ,545 + 38+ 180);
    ctx.fillText("Enermy Map",516 + 140 ,545 + 38+ 180);
    ctx.strokeText("Enermy Map",516 + 140,545 + 38+ 180);
}

function random(){
    buttonSound();
    my_map.resetMap();
    my_map.randomPlacment();
    redraw();
}
var moveX;
var moveY;
var headX;
var headY;
var moveShip;
var moveSize;
var moveDirection;
var xDif;
var yDif;
var onAction = false;

function mouseUp(event){
    if(gameStatus == PLACE_SHIP){
        var x = event.offsetX;
        var y = event.offsetY;
        x = x - my_map.mapX;
        y = y - my_map.mapY;
        x = Math.floor(x/my_map.length);
        y = Math.floor(y/my_map.length);
        if(my_map.isPlaceable(x - moveX,y - moveY,moveDirection,moveSize)){
            onAction = false;
            my_map.placeShip(x - moveX,y - moveY,moveShip,moveDirection,moveSize);   
        }
        redraw();
    }
    
}

function mouseMove(event){
    if(gameStatus == PLACE_SHIP){
        if(onAction){
            if(moveDirection == HORIZONTAL){
                redraw();
                ctx.fillRect(event.offsetX - xDif,event.offsetY - yDif,my_map.length * moveSize, my_map.length);
            }
            if(moveDirection == VERTICAL){
                redraw();
                
                ctx.fillRect(event.offsetX - xDif,event.offsetY - yDif,my_map.length , my_map.length * moveSize);
            }
        }
    }
}

function mouseDown(event){
    var x = event.offsetX;
    var y = event.offsetY;
    if(gameStatus == PLACE_SHIP && x > my_map.mapX && x < my_map.mapX+10*my_map.length && y > my_map.mapY && y < my_map.mapY+my_map.length*10){
        
        x = x - my_map.mapX;
        y = y - my_map.mapY;
        x = Math.floor(x/my_map.length);
        y = Math.floor(y/my_map.length);
        
        if(my_map.mapGrid[x][y].hasShip){
            onAction = true;
            moveShip = my_map.mapGrid[x][y].shipType;
            moveDirection = my_map.mapGrid[x][y].direction;
            moveSize = my_map.mapGrid[x][y].shipSize;
            loop1:
            for(var i = 0 ; i < 10 ; i++){
                loop2:
                for(var j = 0 ; j < 10 ; j++){
                    if(my_map.mapGrid[j][i].shipType == moveShip){
                        headX = j;
                        headY = i;
                        break loop1;
                    }
                }
            }
            console.log(headX + " " + headY);
            xDif = event.offsetX - my_map.mapX - my_map.length*headX;
            yDif = event.offsetY - my_map.mapY - my_map.length*headY;
            moveX = x - headX;
            moveY = y - headY;
            for(var i = 0 ; i < 10 ; i++){
                for(var j = 0 ; j < 10 ; j++){
                    if(my_map.mapGrid[j][i].shipType == moveShip){
                        my_map.mapGrid[j][i].hasShip = false;
                        my_map.mapGrid[j][i].shipSize = 0;
                        my_map.mapGrid[j][i].direction = "no";
                        my_map.mapGrid[j][i].shipType = "NONE"
                    }
                }
            }
            redraw();
        }     
    }  
}

function clicked(event){
    
    if(gameStatus == GAME_START && myRound){ 
        var temp = enermy_map.shipAttacked(event.offsetX,event.offsetY);
        if(enermy_map.win()){
            myRound = false;
            hint = "you win!";
            redraw();
            bkgm.stop();
            playerVictory();
            victory();
        }
        if (!temp){
            hint = "Enermy's turn";
            redraw();
            myRound = false;
            setTimeout(enermyAI,500);
        }
    }
    else if(gameStatus == MENU){
        /*ctx.strokeRect(leftMargin,55,370,60);
        ctx.strokeRect(leftMargin,55+80,250,60);
        ctx.strokeRect(leftMargin,55+160,210,60);
        ctx.strokeRect(leftMargin,55+240,240,60);*/
        if(x > 250 && x < 570 && y > 55   && y < 55 + 60){
            storyMode();
        }
        if(x > 250 && x < 450 && y > 55 + 80  && y < 55 + 80 + 60){
            startRound();
        }
        if(x > 250 && x < 410 && y > 55 + 160  && y < 55 + 160 + 60){
        }
        if(x > 250 && x < 440 && y > 55 + 240  && y < 55 + 240 + 60){
            welcomeScreen();
        }
        
    }
    else if(gameStatus == WELCOME){
		if((event.offsetX>300 && event.offsetX<300+400) && (event.offsetY>300 && event.offsetY<300+50)){
			playerOne=prompt("ENTER YOUR NAME");
            menu();
		}
	}
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

var audio=new Audio("media/Button.wav");
var audio1= new Audio("media/Explosion.wav");
var audio2= new Audio("media/Miss.wav");
var audio3=new Audio("media/Ship Down.wav");
var audio4=new Audio("media/Victory.wav");
var audio5=new Audio("media/Warning.wav");
var backMusic = new Audio("media/intro.mp3")

function bkgm(){
	this.play = function(){
        backMusic.play();
    }
    this.stop = function(){
        backMusic.stop();
    }
}

function buttonSound(){
	//Button Clicked
	audio.play();
}

function shipHit(){
	//statement that tells if a ship is hit
	audio1.play();
}

function missedHit(){
	//Water is hit
	audio2.play();
}

function shipSinked(){
	//Entire enemy boat is sunk
	audio3.play();
}

function playerVictory(){
	//Game is finished
	audio4.play();
}

function enemyReady(){
	//Ships placed
	audio5.play();
}
function victory(){
    var img = new Image();
    img.src="BattleShip1.jpg";
    img.onload=function(){
        ctx.save();
        ctx.drawImage(img,112,134);
        ctx.translate(112,134);
        ctx.font="42px Airborne";
        ctx.fillStyle="white";
        ctx.fillText("Congratulations Captain You Are The Winner!",0,60);
        ctx.fillText("Play Again?",0,490);
        ctx.restore();
    }
    

}

function ranAttack(){
    var x;
    var y;
    do{
        x = Math.floor(Math.random()*10);
        y = Math.floor(Math.random()*10);
    }while(my_map.mapGrid[x][y].isAttacked || checkSurroudForAI(x,y) || !my_map.mapGrid[x][y].attackable);
    my_map.aiAttack(x,y);
    redraw();
    preX = x;
    preY = y;
}

function enermyAI(){
    var x;
    var y;
    keeping = true;
    while(keeping){
        if(randomAttack){
            ranAttack();
            x = preX;
            y = preY;
            if(my_map.mapGrid[x][y].hasShip){
                hitX = x;
                hitY = y;
                hitSize = my_map.mapGrid[x][y].shipSize;
                randomAttack = false;
            }
            else{
                randomAttack = true;
                hint = "Your turn to attack";
                redraw();
                keeping = false;
                myRound = true;
            }
        }
        else{
            var success = false;
            if(my_map.inIndex(hitX -1 ,hitY) && !my_map.mapGrid[hitX-1][hitY].isAttacked && my_map.mapGrid[hitX-1][hitY].attackable){
                nextX = hitX -1;
                nextY = hitY;
                success = true;
            }
            else if(my_map.inIndex(hitX ,hitY-1) && !my_map.mapGrid[hitX][hitY-1].isAttacked && my_map.mapGrid[hitX][hitY-1].attackable){
                nextX = hitX;
                nextY = hitY-1;
                success = true;
            }
            else if(my_map.inIndex(hitX+1 ,hitY) && !my_map.mapGrid[hitX+1][hitY].isAttacked && my_map.mapGrid[hitX+1][hitY].attackable){
                nextX = hitX+1;
                nextY = hitY;
                success = true;
            }
            else if(my_map.inIndex(hitX ,hitY+1) && !my_map.mapGrid[hitX][hitY+1].isAttacked && my_map.mapGrid[hitX][hitY+1].attackable){
                nextX = hitX;
                nextY = hitY+1;
                success = true;
            }
            
            if(!success){
                ranAttack();
                x = preX;
                y = preY;
                if(my_map.mapGrid[x][y].hasShip){
                    randomAttack = false;
                }
                else{
                    randomAttack = true;
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                    myRound = true;
                }
            }
            else{
                my_map.aiAttack(nextX,nextY);
                redraw();
                if(!my_map.mapGrid[nextX][nextY].hasShip){
                    randomAttack = false;
                }
                else{
                    myRound = true;
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                } 
            }  
        }
        if(my_map.win()){
            hint = "Enermy win!";
            keeping = false;
            redraw();
            bkgm.stop();
        }   
    }   
}

function checkSurroudForAI(x,y){
    if(my_map.hasShip(x-1,y+1))
        return true;
    if(my_map.hasShip(x+1,y+1))
        return true;
    if(my_map.hasShip(x-1,y-1))
        return true;
    if(my_map.hasShip(x+1,y-1))
        return true;
    return false;
}

//Source  - www.soundbible.com

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