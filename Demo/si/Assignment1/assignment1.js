var canvas;
var gl;

var height = 0.95;
var gameState = 'none';

var vertciesBuffer = [];
var colorsBuffer = [];
var cBuffer;

var invaders = createArray(2,4) ;
var canon = vec2(-0.05,-0.9);
var shootingTimer = 0;

var bullets = [];
var invaderBullets = [];
var vertical_speed = 0.005;
var killCount = 0;

var baseColors = [
        vec4(1.0, 0.0, 0.0, 1.0), //R
        vec4(0.0, 1.0, 0.0, 1.0), //G
        vec4(0.0, 0.0, 1.0, 1.0), //B
        vec4(0.0, 0.0, 0.0, 1.0)
    ];

const invader_size = 0.1;
const INVADER_NUMBER_COL = 5;
const INVADER_NUMBER_ROW = 2;
const DROPPING_SPEED = 0.001;
const CANON_SPEED = 0.025;
const BULLETS_SPEED = 0.02;
const SHOOTING_DELAY = 45;
const CANIN_BULLET_SPEED = 0.05;

function setUp(){
    gameState = 'start';
    vertciesBuffer = [];
    colorsBuffer = [];
    canon = vec2(-0.05,-0.9);
    bullets = [];
    invaderBullets = [];
    vertical_speed = 0.005;
    killCount = 0;
    left = 0;
    right = 0;

    createInvaders();
    generateVertices();
}

function verticalMoving(){
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            if(invaders[jj][ii] != null){
                if(Math.random() > 0.99){
                    invaders[jj][ii][2] = !invaders[jj][ii][2];
                }
                if(invaders[jj][ii][2]){
                    invaders[jj][ii][0] += vertical_speed;
                }else{
                    invaders[jj][ii][0] -= vertical_speed;
                }
            } 
        }
    }
    if (canon != null && left == 1 && canon[0] >= -1 ){
        canon[0] -= CANON_SPEED;
    }
    if (canon != null && right == 1 && canon[0] <= (1 - invader_size)){
        canon[0] += CANON_SPEED;
    }
}

function createInvaders(){
    var spacing = 2 / INVADER_NUMBER_COL;
    var pos_x = -1;
    var pos_y = 1;
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){

        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            invaders[jj][ii] = vec2(pos_x, pos_y);
            var right = true;
            if(Math.random() > 0.5)
                right = false
            invaders[jj][ii][2] = right;
            //console.log(invaders[jj][ii]);
            pos_x += spacing;
        }
        pos_y = 1.0 - (invader_size + 0.02);
        pos_x = -1.0 + (spacing - invader_size);
        
    }
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function generateVertices(){
    var init_pos_x;
    var init_pos_y;
    vertciesBuffer = [];
    colorsBuffer = [];
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            if(invaders[jj][ii] != null){
                init_pos_x = invaders[jj][ii][0];
                init_pos_y = invaders[jj][ii][1];
                
                vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
                colorsBuffer.push(baseColors[0]);
                vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y));
                colorsBuffer.push(baseColors[0]);
                vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y - invader_size));
                colorsBuffer.push(baseColors[0]);
                vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
                colorsBuffer.push(baseColors[0]);
                vertciesBuffer.push(vec2(init_pos_x, init_pos_y - invader_size));
                colorsBuffer.push(baseColors[0]);
                vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y - invader_size));
                colorsBuffer.push(baseColors[0]);
            }
            
        }
    }
    if(canon != null){
        init_pos_x = canon[0];
        init_pos_y = canon[1];
        vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
        colorsBuffer.push(baseColors[1]);
        vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y));
        colorsBuffer.push(baseColors[1]);
        vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y - invader_size));
        colorsBuffer.push(baseColors[1]);
        vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
        colorsBuffer.push(baseColors[1]);
        vertciesBuffer.push(vec2(init_pos_x, init_pos_y - invader_size));
        colorsBuffer.push(baseColors[1]);
        vertciesBuffer.push(vec2(init_pos_x + invader_size, init_pos_y - invader_size));
        colorsBuffer.push(baseColors[1]);
    }  

    for(var jj = 0; jj < invaderBullets.length ; jj++){
        if(invaderBullets[jj] != null){
            init_pos_x = invaderBullets[jj][0];
            init_pos_y = invaderBullets[jj][1];
            vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
            colorsBuffer.push(baseColors[0]);
            vertciesBuffer.push(vec2(init_pos_x + invader_size / 8, init_pos_y + invader_size / 4));
            colorsBuffer.push(baseColors[0]);
            vertciesBuffer.push(vec2(init_pos_x - invader_size / 8, init_pos_y + invader_size / 4));
            colorsBuffer.push(baseColors[0]);
        }  
    }

    for(var jj = 0; jj < bullets.length ; jj++){
        if(bullets[jj] != null){
            init_pos_x = bullets[jj][0];
            init_pos_y = bullets[jj][1];
            vertciesBuffer.push(vec2(init_pos_x, init_pos_y));
            colorsBuffer.push(baseColors[1]);
            vertciesBuffer.push(vec2(init_pos_x + invader_size / 8, init_pos_y - invader_size / 4));
            colorsBuffer.push(baseColors[1]);
            vertciesBuffer.push(vec2(init_pos_x - invader_size / 8, init_pos_y - invader_size / 4));
            colorsBuffer.push(baseColors[1]);
        }
    }
}

function borderBouncing(){
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            if(invaders[jj][ii] != null){
                if(invaders[jj][ii][0] > (1 - invader_size)){
                    invaders[jj][ii][2] = false;
                }
                if(invaders[jj][ii][0] < -1){
                    invaders[jj][ii][2] = true;
                }
            }
                
        }
    }
}

function collisionCheck(){
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            for(var kk = ii + 1 ; kk < INVADER_NUMBER_COL; kk++){
                if(invaders[jj][ii] != null && invaders[jj][kk] != null){
                    var x1,x2,y1,y2;
                    x1 = invaders[jj][ii][0];
                    x2 = invaders[jj][kk][0];
                    y1 = invaders[jj][ii][1];
                    y2 = invaders[jj][kk][1];

                    if(x1 >= x2 && x2 + invader_size >= x1){
                        invaders[jj][kk][2] = false;
                        invaders[jj][ii][2] = true;
                    }
                    if(x2 >= x1 && x1 + invader_size >= x2){
                        invaders[jj][kk][2] = true;
                        invaders[jj][ii][2] = false;
                    }
                }
                
            }
        }
    }
    for(var kk = 0; kk < bullets.length ; kk++){
        for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
            for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
                if(bullets[kk] != null && invaders[jj][ii] != null){
                    if((bullets[kk][1] > invaders[jj][ii][1] - invader_size) &&  (bullets[kk][1] < invaders[jj][ii][1] + invader_size/4)){
                        if(bullets[kk][0] + invader_size/8 > invaders[jj][ii][0] && bullets[kk][0] + invader_size/8 < invaders[jj][ii][0] + invader_size + invader_size/8){
                            invaders[jj][ii] = null;
                            killCount++;
                            bullets[kk] = null;
                        }
                    }
                }     
            }
        }
    }
    for(var kk = 0; kk < invaderBullets.length ; kk++){
        if(invaderBullets[kk] != null && canon != null){
            if((invaderBullets[kk][1] > canon[1] - invader_size) &&  (invaderBullets[kk][1] < canon[1] + invader_size/4)){
                if(invaderBullets[kk][0] + invader_size/8 > canon[0] && invaderBullets[kk][0] + invader_size/8 < canon[0] + invader_size + invader_size/8){
                    canon = null;
                    invaderBullets[kk] = null;
                    gameState = 'lose';
                }
            }
        }    
    }
}

function droping(){
    for(var jj = 0; jj < INVADER_NUMBER_ROW ; jj++){
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            if(invaders[jj][ii] != null){
                invaders[jj][ii][1] -= DROPPING_SPEED;
                if(invaders[jj][ii][1] < -1 + invader_size){
                    gameState = 'end';
                }
            }
        }
    }
    vertical_speed += 0.00002
}



function invaderShoot(){
    for(var jj = INVADER_NUMBER_ROW - 1; jj >= 0 ; jj--){
        var allDead = true;
        for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
            if(invaders[jj][ii] != null){
                allDead = false;
                break;
            }
        }
        if(!allDead){
            for(var ii = 0 ; ii < INVADER_NUMBER_COL; ii++){
                if(invaders[jj][ii] != null){
                    invaderBullets.push(vec2((invaders[jj][ii][0] + invader_size / 2), (invaders[jj][ii][1] - invader_size)));
                }
            }
            break;
        }
    }
}

function bulletMoving(){
    for(var jj = 0; jj < invaderBullets.length ; jj++){
        if(invaderBullets[jj] != null){
            invaderBullets[jj][1] -= BULLETS_SPEED;
            if(invaderBullets[jj][1] < -1 + invader_size / 4){
                invaderBullets[jj] = null;
            }
        }
    }
    for(var jj = 0; jj < bullets.length ; jj++){
        if(bullets[jj] != null){
            bullets[jj][1] += CANIN_BULLET_SPEED;
            if(bullets[jj][1] > 1 + invader_size / 4){
                bullets.shift();
            }
        }
        
    }
}

window.addEventListener("keydown", getKeyDown, false);
window.addEventListener("keyup", getKeyUp, false);
var left = 0;
var right = 0;

function getKeyDown(key) {
    if (key.key == "ArrowLeft"){
        left = 1;
    }
    if (key.key == "ArrowRight"){
        right = 1;
    }
} 

function getKeyUp(key) {
    if (key.key == "ArrowLeft"){
        left = 0;
    }
    if (key.key == "ArrowRight"){
        right = 0;
    }
    if (key.key == " " && canon !== null && bullets.length < 1){
        bullets.push(vec2((canon[0]+invader_size/2),canon[1]));
    }
    if (key.key == "q"){
        gameState = 'stop';
    }
    if (key.key == "r"){
        setUp();
        render();
    }
}

function clearBullets(){
    if(invaderBullets[0] === null){
        invaderBullets.shift();
    }
    if(invaderBullets[invaderBullets.length] === null){
        invaderBullets.pop();
    }
    if(bullets[0] === null){
        bullets.shift();
    }
    if(bullets[bullets.length] === null){
        bullets.pop();
    }
}

window.onload = function init() {


    canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 );

    
    // Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    // Binding the vertex buffer

    vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition ); 
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);

    var cPosition = gl.getAttribLocation( program, "colors" );
    gl.vertexAttribPointer( cPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( cPosition ); 
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    setUp();

    render();
};

function render() {

    if(gameState == 'lose'){
        alert("You Lose!");
    }else if(killCount == INVADER_NUMBER_COL * INVADER_NUMBER_ROW){
        alert("You win!") 
    }else if(gameState == 'stop'){
        alert("Quit successfully!"); 
    }
    else{
        if(gameState == 'start'){
        droping();
        verticalMoving();
        borderBouncing();
        collisionCheck()
        if(shootingTimer == 0){
            invaderShoot(); 
        }
        shootingTimer++;
        if(shootingTimer == SHOOTING_DELAY){
            shootingTimer = 0;
        }
        bulletMoving();
    }
    clearBullets();
    
    // For debugging
    // console.log(height);
    // document.getElementById("debug").innerHTML = height;
    // Binding the vertex buffer
    generateVertices();

    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    //gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsBuffer), gl.STATIC_DRAW );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertciesBuffer), gl.STATIC_DRAW );
    // Clearing the buffer and drawing the square
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    //gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsBuffer), gl.STATIC_DRAW );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsBuffer), gl.STATIC_DRAW );
 
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays( gl.TRIANGLES, 0, vertciesBuffer.length );
    window.requestAnimFrame(render); 

    } 
}
