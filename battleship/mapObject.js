function Block() {
    this.isAttacked = false;
    this.hasShip = false;
    this.shipType = "NONE";
}

function Ship(x,y,direction,size){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.size = size;
}

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
            if(count[AIRCRAFT_CARRIER]==5)
                this.sinkList[AIRCRAFT_CARRIER]=true;
            if(count[BATTLESHIP]==4)
                this.sinkList[BATTLESHIP]=true;
            if(count[CRUISER]==3)
                this.sinkList[CRUISER]=true;
            if(count[SUBMARINE]==3)
                this.sinkList[SUBMARINE]=true;
            if(count[DESTROYER]==2)
                this.sinkList[DESTROYER]=true;
        }
        console.log(count);
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

    this.drawMap = function() {
        this.ctx.font = "" + this.length + "px airborne";
        this.ctx.fillStyle = "rgba(221,221,255,0.6)";
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
    
    this.drawMark = function(){
        for(var i = 0 ;i < 10 ; i++){
            for(var j = 0 ;j < 10 ; j++){
                if(this.mapGrid[j][i].hasShip && !this.mapGrid[j][i].isAttacked){
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
            }
        }
    }
    this.shipAttacked=function(a,b){
		if(a>this.mapX && a<this.mapX+10*this.length && b>this.mapY && b<this.mapY+this.length*10){
			a=a-this.mapX;
			b=b-this.mapY;
			a=Math.floor(a/this.length);
			b=Math.floor(b/this.length);
			this.mapGrid[a][b].isAttacked=true;
		}
        this.updateSink();
		this.drawMark();
		
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
        }while(!this.isPlaceable(x,y,direction,4));
        
        this.placeShip(x,y,DESTROYER,direction,2);
    }
    
    this. placeShip = function(x,y,name,direction,size){
        var tempShip = new Ship(x,y,direction,size);
        this.ships.push(tempShip);
        if(direction == HORIZONTAL){
            for(var i = 0 ; i< size ; i++){
                this.mapGrid[x+i][y].hasShip = true;
                this.mapGrid[x+i][y].shipType = name;
            }
        }
        else{
            for(var i = 0 ; i< size ; i++){
                this.mapGrid[x][y+i].hasShip = true;
                this.mapGrid[x][y+i].shipType = name;
        }
    }
    
}
    
}
