    var cv ;
    var ctx;
    var background = new Image();
    var myMap = [true,false,false,true,true,false,false];
function game(){
    document.getElementById("body").innerHTML="<canvas id=\"screen\" width=\"1024\" height=\"768\"></canvas>"
    cv = document.getElementById("screen");
    ctx = cv.getContext("2d");
    background.src = "../IMAGE/BKG.png";
    background.onload = drawBackground;
}
function drawBackground(){
    ctx.drawImage(background,0,768,1024,768,0,0,1024,768);
    drawGrid(8,200);
    drawGrid(516,200);
    drawMark(8,200);
}

function drawGrid(x,y){
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