var cv ;
var ctx;
var background = new Image();
var myMap = new Array(10);
for(var i = 0; i <= 9 ; i++ )
    myMap[i] = new Array(10);
for(var i = 0; i <= 9 ; i++ ){
    for(var j = 0; j <= 9 ; j++ ){
        myMap[i][j] = false;
    }
}

function game(){
    document.getElementById("body").innerHTML="<div id=\"container\"><canvas id=\"screen\" width=\"1024\" height=\"768\"></canvas><div id =\"control1\"></div><div id =\"control2\"></div></div>"
    cv = document.getElementById("screen");
    ctx = cv.getContext("2d");
    background.src = "image/BKG.png";
    background.onload = drawBackground;
    //drawBackground();
}
function drawBackground(){
    ctx.drawImage(background,0,768,1024,768,0,0,1024,768);
    drawGrid(8,260);
    //drawGrid(516,260);
    //drawMark(8,260);
}

/*function drawGrid(x,y){
    ctx.fillStyle = "rgb(19,180,255)";
    ctx.fillRect(x,y,500,500);
    for(var i = 50; i <= 450 ; i+=50 ){
        ctx.moveTo(x+i,y);
        ctx.lineTo(x+i,y+500);
        ctx.stroke();
    }
    
    for(var i = 50; i <= 450 ; i+=50 ){
        ctx.moveTo(x,y+i);
        ctx.lineTo(x+500,y+i);
        ctx.stroke();
    }
}*/

function drawGrid(){
    document.getElementById("control1").innerHTML="";
    document.getElementById("control2").innerHTML="";
    for(var i = 0; i <= 9 ; i++ ){
        for(var j = 0; j <= 9 ; j++ ){
            var temp = "<button onclick=\"statusChange(this.id)\""; 
            if(myMap[i][j])
                temp += "class=\"attacted\" id=\"ctrL"+ i + j +"\"></button>";
            else
                temp += "class=\"empty\" id=\"ctrL"+ i + j +"\"></button>";
            document.getElementById("control1").innerHTML += temp;
        }
        document.getElementById("control1").innerHTML += "<br>"
    }
    for(var i = 0; i <= 9 ; i++ ){
        for(var j = 0; j <= 9 ; j++ ){
            var temp = "<button onclick=\"statusChange(this.id)\""; 
            if(myMap[i][j])
                temp += "class=\"attacted\" id=\"ctrL"+ i + j +"\"></button>";
            else
                temp += "class=\"empty\" id=\"ctrL"+ i + j +"\"></button>";
            document.getElementById("control2").innerHTML += temp;
        }
        document.getElementById("control2").innerHTML += "<br>"
    }
}

function statusChange(id){
    var x = Number(id.charAt(4));
    var y = Number(id.charAt(5));
    myMap[x][y] = true;
    drawGrid();
}

function drawMark(x,y){
    var w = 50;
    for(var i = 0; i<=9; i++){
        if(myMap[i]){
            ctx.fillStyle="yellow";
            ctx.strokeStyle="black";
            ctx.fillRect(x+i*w, y, w,w);
            ctx.stroke();
            
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