var userMap = initialMaps();
var ctx;

function replaceScreen(){  
    /*for(var i =0 ; i < 10 ; i++){  
        for(var j =0; j < 10 ; j++){   
            console.log(userMap[i][j].toString());
        }
    } */ 
    document.getElementById("screen").innerHTML = "<canvas id=\"game\" width=\"1024\" height=\"768\" onClick=\"clicked(event)\"></canvas>"
    ctx = document.getElementById("game").getContext("2d");
    drawGrid(8,8,250);
    drawGrid(266,8,750);
    //drawGrid(516,260);
    

}
function clicked(event){
    ctx.font="60px airborne";
    var rect = document.getElementById("game").getBoundingClientRect();
    var x = event.clientX - rect.left - 5;
    var y = event.clientY - rect.top - 5;
    console.log(x + ", " + y );
    //ctx.fillRect(x,y,50,50);
    ctx.fillText("Congraduation!", x,y);
}

function drawGrid(x,y,scale){
    
    var width = scale/11;
    ctx.font="" + width + "px airborne";
    ctx.fillStyle = "#DDDDFF";
    ctx.fillRect(x+width,y+width,scale-width,scale-width);
    ctx.strokeRect(x,y,scale,scale);
    ctx.fillStyle = "black";
    for(var i = 1; i <= 10 ; i++){
        ctx.moveTo(x+i*width,y);
        ctx.lineTo(x+i*width,y+scale);
        ctx.stroke();
        ctx.fillText(i,x+i*width+width/20,y+width - width/10);
    }
    
    for(var i = 1; i <= 10 ; i++){
        ctx.moveTo(x,y+i*width);
        ctx.lineTo(x+scale,y+i*width);
        ctx.stroke();
        ctx.fillText(String.fromCharCode(64+i),x+width/10,y+(i+1)*width - width/10);
    }
}

function initialMaps(){
    var map = new Array(10);
    for(var i =0 ; i < 10 ; i++){
        map[i] = new Array(10);  
        for(var j =0; j < 10 ; j++){   
            map[i][j] = [false,false,EMPTY];
        }
    }
    return map;
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
