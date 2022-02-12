var canvas= new fabric.Canvas("myCanvas");

playerX= 10;
playerY= 10;

blockWidth= 30;
blockHeight= 30;

var playerImg= "";
var blockImg= "";

function playerUpload() {
fabric.Image.fromURL("player.png", function(Img){
    playerImg= Img;

    playerImg.scaleToWidth(150);
    playerImg.scaleToHeight(140);

    playerImg.set({
        top: playerY, left: playerX
    });
    canvas.add(playerImg);
}

);
}

function blockUpload(get_image) {
    fabric.Image.fromURL( get_image, function(Img) {
        blockImg= Img;

        blockImg.scaleToWidth(blockWidth);
        blockImg.scaleToHeight(blockHeight);

        blockImg.set({
            top: playerY, left: playerX
        });
        canvas.add(blockImg);
    }

);   
}

window.addEventListener("keydown", key_down);
function key_down(e) {
    pressed_key= e.keyCode;
    console.log(pressed_key);

    if(e.shiftkey==true && pressed_key=="80"){
        blockWidth= blockWidth+10;
        blockHeight= blockWidth+10;
        console.log("user has pressed shift+p");
        document.getElementById("width").innerHTML= blockWidth;
        document.getElementById("height").innerHTML= blockHeight;
    }

    if(e.shiftkey && pressed_key=="77") {
        blockWidth= blockWidth-10;
        blockHeight= blockHeight-10;
        console.log("user has pressed shift+m");
        document.getElementById("width").innerHTML= blockWidth;
        document.getElementById("height").innerHTML= blockHeight;
    }

    if(pressed_key=="38") {
        console.log("up");
        up();
        playerUpload();
    }

    if(pressed_key=="40") {
        console.log("down");  
        down();
        playerUpload()
    }

    if(pressed_key=="39") {
        console.log("right");
        right() ;
        playerUpload();
    }

    if(pressed_key=="36") {
        console.log("left");
        left() ;
        playerUpload();
    }

    if(pressed_key=="67") {
        console.log("c");
        blockUpload("cloud.jpg");
    }

    if(pressed_key=="68") {
        console.log("d");
        blockUpload("dark_green.png");
    }

    if(pressed_key=="71") {
        console.log("g");
        blockUpload("ground.png");
    }

    if(pressed_key=="76") {
        console.log("l");
        blockUpload("light_green.png");
    }

    if(pressed_key=="82") {
        console.log("r");
        blockUpload("roof.jpg");
    }

    if(pressed_key=="67") {
        console.log("c");
        blockUpload("cloud.jpg");
    }

    if(pressed_key=="84") {
        console.log("t");
        blockUpload("trunk.jpg");
    }

    if(pressed_key=="85") {
        console.log("u");
        blockUpload("unique.png");
    }

    if(pressed_key=="85") {
        console.log("w");
        blockUpload("wall.jpg");
    }

    if(pressed_key=="89") {
        console.log("y");
        blockUpload("yellow_wall.png");
    }

}

function up() {
    if(playerY>0) {
        playerY= playerY-10;
        console.log(playerX ,playerY);
        playerUpload();
    }
}

function down() {
    if(playerY<600) {
        playerY= playerY+10;
        console.log(playerX ,playerY);
        playerUpload();
    }
}

function right() {
    if(playerX<1000) {
        playerX= playerX+10;
        console.log(playerX ,playerY);
        playerUpload();
    }
}

function left() {
    if(playerX>0) {
        playerX= playerX-10;
        console.log(playerX ,playerY);
        playerUpload();
    }
}