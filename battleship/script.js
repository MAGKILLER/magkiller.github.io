var ctx;
var my_map;
var enermy_map;
var dragIndex;
var gameStatus = 0;
var control = document.getElementById("commandPanal");
var myRound = false;
var backgroundIMG;
var canRandom =false;
var canCustom = false;
var rMap = false;
var hintSys = true;
var playerOne = "Player";
var levelInfo = "NONE"
var buttonClick = false;
var classicMode = false;
var options = [false, false ,false]
var audio = new Audio("media/Button.wav");
var audio1 = new Audio("media/Explosion.wav");
var audio2 = new Audio("media/Miss.wav");
var audio3 = new Audio("media/Ship Down.wav");
var audio4 = new Audio("media/Victory.wav");
var audio5 = new Audio("media/Warning.wav");
var backMusic = new Audio("media/intro.mp3");
var waveSound = new Audio("media/Menu_Backgroud_music.mp3");

/*function option(){
    gameStatus = OPTION;
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\" onmousedown=\"mouseDown(event)\" onmousemove=\"mouseMove(event)\" onmouseup=\"mouseUp(event)\" onkeydown=\"keyRotate(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    buttonSound();
    
    ctx.clearRect(0, 0, 1024, 768);
    var backgroundIMG = document.getElementById("BK");
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle = "azure";
    ctx.font = "60px airborne";
    var leftMargin = 250;
    for(var i = 0; i< 3; i++){
        if(options[i]){
            
        }
    }
    ctx.fillText("Randomise", leftMargin, 108);
    ctx.fillText("Custom", leftMargin, 188);
    ctx.fillText("Menu", leftMargin, 348);
    ctx.strokeText("Randomise", leftMargin, 108);
    ctx.strokeText("Custom", leftMargin, 188);
    ctx.strokeText("Menu", leftMargin, 348);
    var d = new Date();
}*/

function canadaLevel(){
    levelInfo = "canada";
    var backgroundIMG = document.getElementById("BK");
    gameStatus = MISSION;
    var index = 0;
    buttonSound();
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle="red";
    ctx.font ="50px airborne"
    ctx.fillText("Level 1 : CANADA",100,70); 
    var str = "Welcome Commander " + playerOne + ", this is Canadian Battleship training center.\nComplete this beginer level to unlock the Randomise ability.\nYour ships have already been arranged for you. As Commander, your job is to \neliminate all enermy ships.\nAttack the board by clicking on the position you wish to attack.\nA grey box indicates a miss and a red box means hit.\nAfter training, You will be able to \nplace the ship any way you want.\nGood Luck!"
    displayText(str,8,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(950,300,66,50);
    ctx.fillStyle="black";
    ctx.font ="20px airborne"
    ctx.fillText("START",950,328);

}

function usaLevel(){
	levelInfo = "usa";
    var backgroundIMG = document.getElementById("BK");
    gameStatus = MISSION;
    var index = 0;
    buttonSound();
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle="red";
    ctx.font ="50px airborne"
    ctx.fillText("Level 2 : USA",100,70); 
    var str = "Level Complete. Excellent job Commander " + playerOne + ".You have progressed to Level Two.\n You are now going to face American troops.\n We have just received some important Intel that states the Americans\n are in possession of something very valuable.\n The Random Placement ability!\n Defect them and capture this ability. Keep fighting!"
    displayText(str,8,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(950,300,66,50);
    ctx.fillStyle="black";
    ctx.font ="20px airborne"
    ctx.fillText("START",950,328);
}

function ukLevel(){
	levelInfo = "uk";
    var backgroundIMG = document.getElementById("BK");
    gameStatus = MISSION;
    var index = 0;
    buttonSound();
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle="red";
    ctx.font ="50px airborne"
    ctx.fillText("Level 3 : UK",100,70); 
    var str = "Level Complete.That was tough fight, but you did it Commander!\n Don't stop now there are still more seas to conquer and enemies to defect.\n We have just received word that the British are preparing for war\n Lead your ships to their waters and attack immediately!\n Defect them to unlock the classic mode. Good Luck Commander " + playerOne
    displayText(str,8,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(950,300,66,50);
    ctx.fillStyle="black";
    ctx.font ="20px airborne"
    ctx.fillText("START",950,328);
}

function russiaLevel(){
	levelInfo = "russia";
    var backgroundIMG = document.getElementById("BK");
    gameStatus = MISSION;
    var index = 0;
    buttonSound();
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle="red";
    ctx.font ="50px airborne"
    ctx.fillText("Level 4 : RUSSIA",100,70); 
    var str = "Level 4. The British went down swinging, but you did a great job Commander!\n Looks like every country wants a piece of you. The Russians are calling you out \n and want a battle. Head over to Russia and show them what you are all about!\n Defect them and you will be awarded with \n a golden medal directly from the Head of Department!"
    displayText(str,8,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(950,300,66,50);
    ctx.fillStyle="black";
    ctx.font ="20px airborne"
    ctx.fillText("START",950,328);	
}

function chinaLevel(){
	levelInfo = "russia";
    var backgroundIMG = document.getElementById("BK");
    gameStatus = MISSION;
    var index = 0;
    buttonSound();
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle="red";
    ctx.font ="50px airborne"
    ctx.fillText("Level 5 : CHINA",100,70); 
    var str = "Level 5. You were born to be commander! There is only one more country \n standing in your way.\n China! Defect them with your skills to win this game\n and you will be declared as the greatest battleship commander\n this world has seen!"
    displayText(str,8,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(950,300,66,50);
    ctx.fillStyle="black";
    ctx.font ="20px airborne"
    ctx.fillText("START",950,328);	
}

function replaceScreen() {
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\" onmousedown=\"mouseDown(event)\" onmousemove=\"mouseMove(event)\" onmouseup=\"mouseUp(event)\" onkeydown=\"keyRotate(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    backgroundIMG = document.getElementById("BK");
    var temp = true;
    //startRound();
    //welcomeScreen()
    //menu();
    //canadaLevel();
	//usaLevel();
	//ukLevel();
	//russiaLevel();
	chinaLevel();
}

function replaceScreen() {
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\"  onClick=\"clicked(event)\" onmousedown=\"mouseDown(event)\" onmousemove=\"mouseMove(event)\" onmouseup=\"mouseUp(event)\" onkeydown=\"keyRotate(event)\"></canvas>";
    ctx = document.getElementById("game").getContext("2d");
    backgroundIMG = document.getElementById("BK");
    var temp = true;
    welcomeScreen()
}

function storyMode() {
    gameStatus = STORY_MODE;
    var WM = document.getElementById("OL");
    ctx.drawImage(WM, 0, 0, 937, 480, 43, 144, 937, 480);
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(200, 170, 200, 40);
    ctx.fillRect(200, 220, 200, 40);
    ctx.fillRect(200, 270, 200, 40);
    ctx.fillRect(200, 320, 200, 40);
    ctx.fillRect(200, 370, 200, 40);
    ctx.fillRect(640, 490, 100, 40);
    ctx.fillStyle = "Red";
    ctx.font = "30px airborne";
    ctx.fillText("Canada", 220, 200);
    ctx.fillText("USA", 220, 250);
    ctx.fillText("UK", 220, 300);
    ctx.fillText("Russia", 220, 350);
    ctx.fillText("China", 220, 400);
    ctx.fillText("Back", 655, 520);
}

function menu() {
    backMusic.pause();
    backMusic.currentTime=0;
    audio5.pause();
    audio5.currentTime = 0;
    waveSound.play();
    buttonSound();
    gameStatus = MENU;
    ctx.clearRect(0, 0, 1024, 768);
    var backgroundIMG = document.getElementById("BK");
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    ctx.fillStyle = "azure";
    ctx.font = "60px airborne";
    var leftMargin = 250;
    ctx.fillText("Story mode", leftMargin, 108);
    ctx.fillText("Classic", leftMargin, 188);
    ctx.fillText("Option", leftMargin, 268);
    ctx.fillText("Rename", leftMargin, 348);
    ctx.strokeText("Story mode", leftMargin, 108);
    ctx.strokeText("Classic", leftMargin, 188);
    ctx.strokeText("Option", leftMargin, 268);
    ctx.strokeText("Rename", leftMargin, 348);
    var d = new Date();
    var n = d.toUTCString();
    n+= "\n>Commander Online\n" + ">Name:" + playerOne;
    displayText(n,8,8);
}
var showingText
function displayText(s,x,y){
    y += 20;
    
    var lineCount = 0;
    var index = 0;
    showingText = setInterval(function() {
        if(s.charAt(index) == "\n"){
            index++;
            y += 28;
            lineCount =0;
        }
        
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(x + (lineCount)*12,y-22,12,28);
        ctx.fillStyle = "#00ff00";
        ctx.font = "20px courier";
        ctx.fillText(s.charAt(index), x + lineCount*12 ,y);
        lineCount++;
        index++;
        if(index >= s.length){
            clearInterval(showingText);
        }
        
        
    },40);
}

function startRound() {
    gameStatus = "none";
    var index = 0;
    buttonSound();
    var temp = setInterval(function() {
        ctx.drawImage(backgroundIMG, 0, index, 1024, 768, 0, 0, 1024, 768);
        index += 24;
        if (index >= 768) {
            clearInterval(temp);
            placeShip();
        }
    }, 40);
}

var backgroundIMG = document.getElementById("BK");

function welcomeScreen() {
    gameStatus = WELCOME;
    ctx.drawImage(backgroundIMG, 0, 0, 1024, 768, 0, 0, 1024, 768);
    //Title
    ctx.font = "70px Airborne";
    ctx.fillText("Welcome Commander", 120, 100);

    //Block
    ctx.beginPath();
    ctx.fillStyle = "rgba(240,250,255,0.6)"
    ctx.fillRect(300, 300, 400, 50);
    ctx.font = "16px Airborne";
    ctx.fillStyle = "black"
    ctx.fillText("CLICK HERE TO ENTER YOUR NAME COMMANDER", 320, 330);

    //menu();
}

function startGame() {
    waveSound.pause();
    waveSound.currentTime = 0;
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



function placeShip() {
    gameStatus = PLACE_SHIP;
    enemyReady();
    backMusic.play();

    hint = "Place your ship on the left board";
    my_map = new GameMap(8, 230, 500, ctx);
    enermy_map = new GameMap(516, 230, 500, ctx);
    var temp = "<button onclick=\"random()\">RANDOMISE</button>";
    temp += "<button onclick=\"startGame()\">START</button>";
    document.getElementById("commandPanal").innerHTML = temp;
    my_map.resetMap();
    my_map.randomPlacment();
    enermy_map.resetMap();
    enermy_map.randomPlacment();
    redraw();
    
}


function redraw() {
    ctx.clearRect(0, 0, 1024, 768);
    ctx.drawImage(backgroundIMG, 0, 768, 1024, 768, 0, 0, 1024, 768);
    my_map.drawMap();
    my_map.drawMark(true);
    enermy_map.drawMap();
    enermy_map.drawMark(false);
    ctx.fillStyle = "yellow";
    ctx.fillRect(265, 8, 140, 20);
    ctx.fillRect(265, 36, 140, 20);
    ctx.fillRect(620, 8, 110, 20);
    ctx.fillRect(620, 36, 110, 20);
    
    if(gameStatus == PLACE_SHIP){
        ctx.fillStyle = "black";
        ctx.font = "20px airborne";
        ctx.fillText("Randomise", 270, 26);
        ctx.fillText("Start", 270, 26 + 28);
        ctx.fillText("Menu", 625, 26);
    }
    if(gameStatus == GAME_START){
        ctx.fillStyle = "black";
        ctx.font = "20px airborne";
        ctx.fillText("Restart", 270, 26);
        ctx.fillText("Menu", 625, 26);
    }
    
    ctx.font = "30px airborne";
    ctx.fillText("- " + hint, 8, 8 + 30 + 180);
    ctx.font = "38px airborne";
    ctx.fillStyle = "azure";
    ctx.fillText("Your Map", 8 + 170, 545 + 38 + 180);
    ctx.strokeText("Your Map", 8 + 170, 545 + 38 + 180);
    ctx.fillText("Enemy Map", 516 + 140, 545 + 38 + 180);
    ctx.strokeText("Enemy Map", 516 + 140, 545 + 38 + 180);
    
}

function random() {
    if(canRandom){
        buttonSound();
        my_map.resetMap();
        my_map.randomPlacment();
        redraw();   
    }
    else{
        alert("You can not use this function!");
    }
    
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

function keyRotate(event){
    console.log("press");
    if(onAction){
        if(moveDirection == HORIZONTAL){
            moveDirection = VERTICAL;
            redraw();
            ctx.fillRect(event.offsetX - xDif, event.offsetY - yDif, my_map.length, my_map.length * moveSize);
        }else{
            moveDirection = HORIZONTAL;
            redraw();
            ctx.fillRect(event.offsetX - xDif, event.offsetY - yDif, my_map.length * moveSize, my_map.length);
        }
    }
}

function mouseUp(event) {
    if (gameStatus == PLACE_SHIP && onAction) {
        var x = event.offsetX;
        var y = event.offsetY;
        x = x - my_map.mapX;
        y = y - my_map.mapY;
        x = Math.floor(x / my_map.length);
        y = Math.floor(y / my_map.length);
        if (my_map.isPlaceable(x - moveX, y - moveY, moveDirection, moveSize)) {
            onAction = false;
            my_map.placeShip(x - moveX, y - moveY, moveShip, moveDirection, moveSize);
        }
        else{
            onAction = false;
            my_map.placeShip(headX, headY, moveShip, moveDirection, moveSize);
        }
        redraw();
    }

}

function mouseMove(event) {
    if (gameStatus == PLACE_SHIP) {
        if (onAction) {
            if (moveDirection == HORIZONTAL) {
                redraw();
                ctx.fillRect(event.offsetX - xDif, event.offsetY - yDif, my_map.length * moveSize, my_map.length);
            }
            if (moveDirection == VERTICAL) {
                redraw();

                ctx.fillRect(event.offsetX - xDif, event.offsetY - yDif, my_map.length, my_map.length * moveSize);
            }
        }
    }
}

function mouseDown(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    if (gameStatus == PLACE_SHIP && canCustom && x > my_map.mapX && x < my_map.mapX + 10 * my_map.length && y > my_map.mapY && y < my_map.mapY + my_map.length * 10) {

        x = x - my_map.mapX;
        y = y - my_map.mapY;
        x = Math.floor(x / my_map.length);
        y = Math.floor(y / my_map.length);

        if (my_map.mapGrid[x][y].hasShip) {
            onAction = true;
            moveShip = my_map.mapGrid[x][y].shipType;
            moveDirection = my_map.mapGrid[x][y].direction;
            moveSize = my_map.mapGrid[x][y].shipSize;
            loop1:
                for (var i = 0; i < 10; i++) {
                    loop2: for (var j = 0; j < 10; j++) {
                        if (my_map.mapGrid[j][i].shipType == moveShip) {
                            headX = j;
                            headY = i;
                            break loop1;
                        }
                    }
                }
            console.log(headX + " " + headY);
            xDif = event.offsetX - my_map.mapX - my_map.length * headX;
            yDif = event.offsetY - my_map.mapY - my_map.length * headY;
            moveX = x - headX;
            moveY = y - headY;
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    if (my_map.mapGrid[j][i].shipType == moveShip) {
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



function clicked(event) {
    if(gameStatus == WIN){
        menu();
    }
    var x = event.offsetX;
    var y = event.offsetY;
    if(gameStatus == STORY_MODE){ 
        if(x > 200 && x < 400  && y > 170 && y< 170+40){
            clearInterval(showingText);
            canadaLevel();
        }else if(x > 200 && x < 400  && y > 220 && y< 220+40){
            clearInterval(showingText);
            usaLevel();
        }else if(x > 200 && x < 400  && y > 270 && y< 270+40){
            clearInterval(showingText);
            ukLevel();
        }else if(x > 200 && x < 400  && y > 320 && y< 320+40){
            clearInterval(showingText);
            russiaLevel();
        }else if(x > 200 && x < 400  && y > 370 && y< 370+40){
            clearInterval(showingText);
            chinaLevel();
        }else if(x > 640 && x < 740  && y > 490 && y< 490+40){
            clearInterval(showingText);
            menu();
        }
    }
    if( gameStatus == MISSION && x > 950 && x < 950 +66  && y > 0300 && y< 350){
        clearInterval(showingText);
        startRound();
    }
    if(gameStatus == PLACE_SHIP){
        var x = event.offsetX;
        var y = event.offsetY;
        if(x > 256 && x< 256 +140 && y > 8 && y < 28 ){
            random();
        }
        if(x > 256 && x< 256 +140 && y > 36 && y < 56 ){
            startGame();
        }
        if(x > 620 && x< 730 && y > 8 && y < 28 ){
            menu();
        }
    }
    if(gameStatus == GAME_START){
        var x = event.offsetX;
        var y = event.offsetY;
        if(x > 256 && x< 256 +140 && y > 8 && y < 28 ){
            placeShip();
        }
        if(x > 620 && x< 730 && y > 8 && y < 28 ){
            menu();
        }
        
        
    }  
    if (gameStatus == GAME_START && myRound) {
        var temp = enermy_map.shipAttacked(event.offsetX, event.offsetY);
        if (enermy_map.win()) {
            myRound = false;
            hint = "you win!";
            gameStatus = WIN;
            if(levelInfo = "canada"){
                canCustom = true;
            }
            if(levelInfo = "usa"){
                canRandom = true;
            }
            if(levelInfo = "uk"){
                classicMode = true;
            }
            redraw();
            var index = 768;
            var temp = setInterval(function() {
                ctx.drawImage(backgroundIMG, 0, index, 1024, 768, 0, 0, 1024, 768);
                index -= 24;
                if (index <= 0) {
                    clearInterval(temp);
                    victory();
                }
            }, 40);
            playerVictory();
            
        }
        if (!temp) {
            hint = "Enermy's turn";
            redraw();
            myRound = false;
            setTimeout(enermyAI, 500);
        }
    } 
    if (gameStatus == MENU) {
        if (x > 250 && x < 250 +370 && y > 55 && y < 55 + 60) {
            storyMode();
        }
        
        if ( x > 250 && x < 250 + 250 && y > 55 + 80 && y < 55 + 80 + 60) {
            if(classicMode){
                clearInterval(showingText);
                startRound();
            }
            else{
                alert("Win UK to unlock this mode!");
            }
        }
        
        if (x > 250 && x < 250 + 210 && y > 55 + 160 && y < 55 + 160 + 60) {
            clearInterval(showingText);
            option();
        }
        if (x > 250 && x < 250 +240 && y > 55 + 240 && y < 55 + 240 + 60) {
            clearInterval(showingText);
            welcomeScreen();
        }

    } 
    /*if (gameStatus == OPTION) {
        if (x > 250 && x < 570 && y > 55 && y < 55 + 60) {
            if(canRandom){
                canRandom = false;
            }else{
                canRandom = true;
            }
        }
        if ( x > 250 && x < 450 && y > 55 + 80 && y < 55 + 80 + 60) {
            if(canCustom){
                canCustom = false;
            }else{
                canCustom = true;
            }
        }
        if (x > 250 && x < 440 && y > 55 + 240 && y < 55 + 240 + 60) {
            menu();
        }

    }*/
    if (gameStatus == WELCOME) {
        if ((event.offsetX > 300 && event.offsetX < 300 + 400) && (event.offsetY > 300 && event.offsetY < 300 + 50)) {
            playerOne = prompt("ENTER YOUR NAME");
            menu();
        }
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");

    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}



function bkgm() {
    this.play = function() {
        backMusic.play();
    }
    this.stop = function() {
        backMusic.pause();
        backMusic.currentTime = 0;
    }
}

function buttonSound() {
    //Button Clicked
    audio.play();
}

function shipHit() {
    //statement that tells if a ship is hit
    audio1.play();
}

function missedHit() {
    //Water is hit
    audio2.play();
}

function shipSinked() {
    //Entire enemy boat is sunk
    audio3.play();
}

function playerVictory() {
    //Game is finished
    audio4.play();
}

function enemyReady() {
    //Ships placed
    audio5.play();
}

function victory() {
    backMusic.pause();
    backMusic.currentTime =0;
    var img = new Image();
    img.src = "image/BattleShip1.jpg";
    img.onload = function() {
        ctx.save();
        ctx.drawImage(img, 112, 134);
        ctx.font = "32px Airborne";
        ctx.fillStyle = "black";
        ctx.fillText("Congratulations Captain You Are The Winner!", 117, 134 + 60);
        ctx.fillText("Click to continue", 117 + 250, 134 + 120);
        ctx.restore();
    }


}

function ranAttack() {
    var x;
    var y;
    do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
    } while (my_map.mapGrid[x][y].isAttacked || !my_map.mapGrid[x][y].attackable);
    console.log("enermy----");
    my_map.aiAttack(x, y);
    redraw();
    preX = x;
    preY = y;
}

function enermyAI() {
    
    var x;
    var y;
    keeping = true;
    while (keeping) {
        if (randomAttack) {
            ranAttack();
            x = preX;
            y = preY;
            if (my_map.mapGrid[x][y].hasShip) {
                hitX = x;
                hitY = y;
                hitSize = my_map.mapGrid[x][y].shipSize;
                randomAttack = false;
            } else {
                randomAttack = true;
                hint = "Your turn to attack";
                redraw();
                keeping = false;
                myRound = true;
            }
        } else {
            var attacked = false;
            if(my_map.inIndex(hitX-1,hitY) && !my_map.mapGrid[hitX-1][hitY].isAttacked && my_map.mapGrid[hitX-1][hitY].attackable){
                console.log("enermy----");
                my_map.aiAttack(hitX-1, hitY);
                redraw();
                x = hitX -1;
                y = hitY;
                if (my_map.mapGrid[x][y].hasShip) {
                    hitX = x;
                    hitY = y;
                    hitSize = my_map.mapGrid[x][y].shipSize;
                } else {
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                    myRound = true;
                }
            }
            else if(my_map.inIndex(hitX+1,hitY) && !my_map.mapGrid[hitX+1][hitY].isAttacked && my_map.mapGrid[hitX+1][hitY].attackable){
                console.log("enermy----");
                my_map.aiAttack(hitX+1, hitY);
                redraw();
                x = hitX +1;
                y = hitY;
                if (my_map.mapGrid[x][y].hasShip) {
                    hitX = x;
                    hitY = y;
                    hitSize = my_map.mapGrid[x][y].shipSize;
                } else {
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                    myRound = true;
                }
            }
            else if(my_map.inIndex(hitX,hitY-1) && !my_map.mapGrid[hitX][hitY-1].isAttacked && my_map.mapGrid[hitX][hitY-1].attackable){
                console.log("enermy----");
                my_map.aiAttack(hitX, hitY-1);
                redraw();
                x = hitX;
                y = hitY -1;
                if (my_map.mapGrid[x][y].hasShip) {
                    hitX = x;
                    hitY = y;
                    hitSize = my_map.mapGrid[x][y].shipSize;
                } else {
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                    myRound = true;
                }
            }
            else if(my_map.inIndex(hitX,hitY+1) && !my_map.mapGrid[hitX][hitY+1].isAttacked && my_map.mapGrid[hitX][hitY+1].attackable){
                console.log("enermy----");
                my_map.aiAttack(hitX, hitY+1);
                redraw();
                x = hitX;
                y = hitY+1;
                if (my_map.mapGrid[x][y].hasShip) {
                    hitX = x;
                    hitY = y;
                    hitSize = my_map.mapGrid[x][y].shipSize;
                } else {
                    hint = "Your turn to attack";
                    redraw();
                    keeping = false;
                    myRound = true;
                }
            }else{
                headX = -1;
                headY = -1;
                loop1:
                for (var i = 0; i < 10; i++) {
                    loop2: for (var j = 0; j < 10; j++) {
                        if (my_map.mapGrid[j][i].hasShip && my_map.mapGrid[j][i].isAttacked && checkSurroud(j,i)) {
                            headX = j;
                            headY = i;
                            break loop1;
                        }
                    }
                }
                if(headX == -1){
                    randomAttack = true;
                }
                else{
                    hitX = headX;
                    hitY = headY;
                }

            }

        }
        if (my_map.win()) {
            hint = "Enermy win!";
            keeping = false;
            redraw();
            bkgm.stop();
        }
    }
}

function checkSurroud(a,b){
    if(my_map.inIndex(a-1,b) && !my_map.mapGrid[a-1][b].isAttacked && my_map.mapGrid[a-1][b].attackable){
       return true;
    }
    else if(my_map.inIndex(a+1,b) && !my_map.mapGrid[a+1][b].isAttacked && my_map.mapGrid[a+1][b].attackable){
        return true;
    }
    else if(my_map.inIndex(a,b-1) && !my_map.mapGrid[a][b-1].isAttacked && my_map.mapGrid[a][b-1].attackable){
        return true;
    }
    else if(my_map.inIndex(a,b+1) && !my_map.mapGrid[a][b+1].isAttacked && my_map.mapGrid[a][b+1].attackable){
        return true;
    }
    return false;
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
function pausecomp(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 