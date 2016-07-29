function Block() {
    this.isAttacked = false;
    this.hasShip = false;
    this.shipType = "NONE";
    this.attackable = true;
    this.shipSize = 0;
    this.direction = "no"
}

function Ship(x,y,direction,size){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.size = size;
    this.win = false;
}
var bKimage = document.getElementById("OL");
function GameMap(x, y, scale,ctx) {
    this.x = x;
    this.y = y;
    this.ctx =ctx;
    this.scale = scale;
    this.length = scale / 11;
    this.mapGrid = new Array(10);
    this.mapX = this.x + this.length;
    this.mapY = this.y + this.length;
    this.ships = [];
    
    this.adjustScale = function(num){
        this.scale = num;
        this.length = this.scale / 11;
        this.mapX = this.x + this.length;
        this.mapY = this.y + this.length;
    }
    
    //ship info
    this.sinkList = new Array(5);
    for(var i = 0 ; i < 5 ; i++)
        this.sinkList[i]= false;
    
    this.win = function(){
        for(var i = 0 ; i < 10 ; i++){
            for(var j = 0 ;j < 10 ; j++){
                if(this.mapGrid[j][i].hasShip && !this.mapGrid[j][i].isAttacked){
                    return false;
                }
            }
        }
        return true;
    }
    
    this.updateSink = function (){
        var count = [0,0,0,0,0];
         for(var i = 0 ;i < 10 ; i++){
            for(var j = 0 ;j < 10 ; j++){
                if(this.mapGrid[j][i].hasShip && this.mapGrid[j][i].isAttacked){
                    if(this.mapGrid[j][i].shipType == AIRCRAFT_CARRIER)
                        count[AIRCRAFT_CARRIER]++;
                    if(this.mapGrid[j][i].shipType == BATTLESHIP)
                        count[BATTLESHIP]++;
                    if(this.mapGrid[j][i].shipType == CRUISER)
                        count[CRUISER]++;
                    if(this.mapGrid[j][i].shipType == SUBMARINE)
                        count[SUBMARINE]++;
                    if(this.mapGrid[j][i].shipType == DESTROYER)
                        count[DESTROYER]++;
                }
            }
        }
        for(var i = 0 ;i < 5 ; i++){
            if(count[AIRCRAFT_CARRIER]==5){
                this.sinkList[AIRCRAFT_CARRIER]=true;
                this.updataAttackable(AIRCRAFT_CARRIER);
            }
            if(count[BATTLESHIP]==4){
                this.sinkList[BATTLESHIP]=true;
                this.updataAttackable(BATTLESHIP);
            }
            if(count[CRUISER]==3){
                this.sinkList[CRUISER]=true;
                this.updataAttackable(CRUISER);
            }
            if(count[SUBMARINE]==3){
                this.sinkList[SUBMARINE]=true;
                this.updataAttackable(SUBMARINE);
            }
            if(count[DESTROYER]==2){
                this.sinkList[DESTROYER]=true;
                 this.updataAttackable(DESTROYER);
            }
        }
        //console.log(count);
    }
    
    this.updataAttackable = function(type){
        for(var b = 0 ;b < 10 ; b++){
            for(var a = 0 ;a < 10 ; a++){
                if(this.mapGrid[a][b].shipType == type){
                    if(this.inIndex(a-1,b) && !this.hasShip(a-1,b) && !this.mapGrid[a-1][b].isAttacked)
                        this.mapGrid[a-1][b].attackable = false;
                    if(this.inIndex(a+1,b) && !this.hasShip(a+1,b) && !this.mapGrid[a+1][b].isAttacked)
                        this.mapGrid[a+1][b].attackable = false;
                    if(this.inIndex(a-1,b+1) && !this.hasShip(a-1,b+1) && !this.mapGrid[a-1][b+1].isAttacked)
                        this.mapGrid[a-1][b+1].attackable = false;
                    if(this.inIndex(a+1,b+1) && !this.hasShip(a+1,b+1) && !this.mapGrid[a+1][b+1].isAttacked)
                        this.mapGrid[a+1][b+1].attackable = false;
                    if(this.inIndex(a-1,b-1) && !this.hasShip(a-1,b-1) && !this.mapGrid[a-1][b-1].isAttacked)
                        this.mapGrid[a-1][b-1].attackable = false;
                    if(this.inIndex(a+1,b-1) && !this.hasShip(a+1,b-1) && !this.mapGrid[a+1][b-1].isAttacked)
                        this.mapGrid[a+1][b-1].attackable = false;
                    if(this.inIndex(a,b+1) && !this.hasShip(a,b+1) && !this.mapGrid[a][b+1].isAttacked)
                        this.mapGrid[a][b+1].attackable = false;
                    if(this.inIndex(a,b-1) && !this.hasShip(a,b-1) && !this.mapGrid[a][b-1].isAttacked)
                        this.mapGrid[a][b-1].attackable = false;
                }
                    
            }
        }
    
    }
    this.inIndex = function(a,b){
        if(a < 0 || a > 9 || b < 0 || b >9)
            return false; 
        return true;
    }
    
    this.resetMap = function() {
        for (var i = 0; i < 10; i++) {
            this.mapGrid[i] = new Array(10);
        }
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                this.mapGrid[i][j] = new Block();
            }
        }
    }
    this.imgBG = document.getElementById("LB");
    this.drawMap = function() {
        this.ctx.font = "" + this.length + "px airborne";
        this.ctx.fillStyle = "rgba(221,221,255,0.6)";
        this.ctx.drawImage(this.imgBG,10,10,450,450,this.x + this.length, this.y + this.length, this.scale - this.length, this.scale - this.length);
        this.ctx.fillRect(this.x + this.length, this.y + this.length, this.scale - this.length, this.scale - this.length);
        this.ctx.strokeRect(this.x, this.y, this.scale, this.scale);
        this.ctx.fillStyle = "#ddddff";
        for (var i = 1; i <= 10; i++) {
            this.ctx.moveTo(this.x + i * this.length, this.y);
            this.ctx.lineTo(this.x + i * this.length, this.y + this.scale);
            this.ctx.stroke();
            this.ctx.fillText(i, this.x + i * this.length + this.length / 20, this.y + this.length - this.length / 10);
            this.ctx.strokeText(i, this.x + i * this.length + this.length / 20, this.y + this.length - this.length / 10);
        }
        for (var i = 1; i <= 10; i++) {
            this.ctx.moveTo(this.x, this.y + i * this.length);
            this.ctx.lineTo(this.x + this.scale, this.y + i * this.length);
            this.ctx.stroke();
            this.ctx.fillText(String.fromCharCode(64 + i), this.x + this.length / 10, this.y + (i + 1) * this.length - this.length / 10);
            this.ctx.strokeText(String.fromCharCode(64 + i), this.x + this.length / 10, this.y + (i + 1) * this.length - this.length / 10);
        }
    }
    
    this.drawMark = function(shipOption){
        for(var i = 0 ;i < 10 ; i++){
            for(var j = 0 ;j < 10 ; j++){
                if(shipOption  && this.mapGrid[j][i].hasShip && !this.mapGrid[j][i].isAttacked ){
                    var a = this.mapX + j*this.length;
                    var b = this.mapY + i*this.length;
                    this.drawShip(a,b);
                }
                if(this.mapGrid[j][i].hasShip && this.mapGrid[j][i].isAttacked){
					var a = this.mapX + j*this.length;
                    var b = this.mapY + i*this.length;
					this.drawHit(a,b);

				}
				if(!this.mapGrid[j][i].hasShip && this.mapGrid[j][i].isAttacked){
					var a = this.mapX + j*this.length;
                    var b = this.mapY + i*this.length;
					this.drawWave(a,b);
				}
                if(!this.mapGrid[j][i].attackable && hintSys){
					var a = this.mapX + j*this.length;
                    var b = this.mapY + i*this.length;
					this.drawHint(a,b);
				}
            }
        }
    }
    this.shipAttacked=function(a,b){
		if(a>this.mapX && a<this.mapX+10*this.length && b>this.mapY && b<this.mapY+this.length*10){
			a=a-this.mapX;
			b=b-this.mapY;
			a=Math.floor(a/this.length);
			b=Math.floor(b/this.length);
            if(!this.mapGrid[a][b].attackable || this.mapGrid[a][b].isAttacked){
                return true;
            }
            this.mapGrid[a][b].isAttacked = true;
            console.log(a + ", " + b);
            this.drawMark();
            this.updateSink();
            if(this.mapGrid[a][b].hasShip == true){
                shipHit();
                if(this.inIndex(a+1,b+1) && !this.mapGrid[a+1][b+1].isAttacked){
                    this.mapGrid[a+1][b+1].attackable = false;
                }
                if(this.inIndex(a+1,b-1) && !this.mapGrid[a+1][b-1].isAttacked){
                    this.mapGrid[a+1][b-1].attackable = false;
                }
                if(this.inIndex(a-1,b+1) && !this.mapGrid[a-1][b+1].isAttacked){
                    this.mapGrid[a-1][b+1].attackable = false;
                }
                if(this.inIndex(a-1,b-1) && !this.mapGrid[a-1][b-1].isAttacked){
                    this.mapGrid[a-1][b-1].attackable = false;
                }
                this.drawMark();
                return true;
            }
            else{
                missedHit();
                return false;
            }
		}
        return true;
	}
    this.aiAttack = function(a,b){
        console.log(a + ", " + b);
        if(!this.mapGrid[a][b].attackable || this.mapGrid[a][b].isAttacked){
                return true;
            }
            this.mapGrid[a][b].isAttacked = true;
            this.drawMark();
            this.updateSink();
            if(this.mapGrid[a][b].hasShip == true){
                if(this.inIndex(a+1,b+1) && !this.mapGrid[a+1][b+1].isAttacked){
                    this.mapGrid[a+1][b+1].attackable = false;
                }
                if(this.inIndex(a+1,b-1) && !this.mapGrid[a+1][b-1].isAttacked){
                    this.mapGrid[a+1][b-1].attackable = false;
                }
                if(this.inIndex(a-1,b+1) && !this.mapGrid[a-1][b+1].isAttacked){
                    this.mapGrid[a-1][b+1].attackable = false;
                }
                if(this.inIndex(a-1,b-1) && !this.mapGrid[a-1][b-1].isAttacked){
                    this.mapGrid[a-1][b-1].attackable = false;
                }
                this.drawMark();
                return true;
            }
            else{
                return false;
            }
        return true;
    }
	
    this.drawShip = function(a,b){
        var temp = this.ctx.fillStyle;
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(a,b,this.length,this.length);
        this.ctx.fillStyle = temp;
    }
    
    this.drawHit = function(a,b){
        var temp = this.ctx.fillStyle;
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a,b,this.length,this.length); 
        this.ctx.fillStyle = temp;
    }
    
    this.drawWave = function(a,b){
        var temp = this.ctx.fillStyle;
        this.ctx.fillStyle = "Grey";
        this.ctx.fillRect(a,b,this.length,this.length);
        this.ctx.fillStyle = temp;
    }
    
    this.drawHint = function(a,b){
        var temp = this.ctx.fillStyle;
        this.ctx.fillStyle = "#DDDDDD";
        this.ctx.fillRect(a,b,this.length,this.length);
        this.ctx.fillStyle = temp;
    }
    
    
    this.hasShip = function(a,b) { 
        //if out of map , means no ship in there;
        if(a < 0 || a > 9 || b < 0 || b >9)
            return false; 
        return this.mapGrid[a][b].hasShip;
    }
    
    //check surrounding
    this.checkSurrounding = function(a,b){
        if(this.hasShip(a-1,b))
            return false;
        if(this.hasShip(a+1,b))
            return false;
        if(this.hasShip(a-1,b+1))
            return false;
        if(this.hasShip(a+1,b+1))
            return false;
        if(this.hasShip(a-1,b-1))
            return false;
        if(this.hasShip(a+1,b-1))
            return false;
        if(this.hasShip(a,b+1))
            return false;
        if(this.hasShip(a,b-1))
            return false;
        return true;
    }

    this.isPlaceable = function(a,b,direction,length){
        //check this position
        if(this.hasShip(a,b))
            return false;
        
        if(!this.checkSurrounding(a,b)){
            return false;
        }
        
        if(direction == HORIZONTAL){
            for(var i = 1 ; i < length ; i++){
                if(a + length - 1 > 9){
                    return false
                }
                if(this.hasShip(a+i,b) || !this.checkSurrounding(a+i,b))
                    return false;
            }
        }
        else{
            for(var i = 1 ; i < length ; i++){
                if(b + length - 1 > 9){
                    return false
                }
                if(this.hasShip(a,b+i) || !this.checkSurrounding(a,b+i))
                    return false;
            }
        }
        
        return true;
    }
    
    this.randomPlacment = function(){
        var direction;
        var x;
        var y;
        do{
            direction = Math.floor(Math.random()*2);
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
        }
        while(!this.isPlaceable(x,y,direction,5));
        this.placeShip(x,y,AIRCRAFT_CARRIER,direction,5);

        do{
            direction = Math.floor(Math.random()*2);
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
        }while(!this.isPlaceable(x,y,direction,4));
        this.placeShip(x,y,BATTLESHIP,direction,4);

        do{
            direction = Math.floor(Math.random()*2);
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
        }while(!this.isPlaceable(x,y,direction,3));
        this.placeShip(x,y,CRUISER,direction,3);

        do{
            direction = Math.floor(Math.random()*2);
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
        }while(!this.isPlaceable(x,y,direction,3));
        this.placeShip(x,y,SUBMARINE,direction,3);

        do{
            direction = Math.floor(Math.random()*2);
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
        }while(!this.isPlaceable(x,y,direction,2));
        
        this.placeShip(x,y,DESTROYER,direction,2);
    }
    
    this. placeShip = function(x,y,name,direction,size){
        if(direction == HORIZONTAL){
            for(var i = 0 ; i< size ; i++){
                this.mapGrid[x+i][y].hasShip = true;
                this.mapGrid[x+i][y].shipType = name;
                this.mapGrid[x+i][y].shipSize = size;
                this.mapGrid[x+i][y].direction = direction;
            }
        }
        else{
            for(var i = 0 ; i< size ; i++){
                this.mapGrid[x][y+i].hasShip = true;
                this.mapGrid[x][y+i].shipType = name;
                this.mapGrid[x][y+i].shipSize = size;
                this.mapGrid[x][y+i].direction = direction;
        }
    }
    
}
    
}
