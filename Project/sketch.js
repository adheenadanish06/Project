var player;
var ncPlayer;
var Ground;
//background

var bg;
var bg1;
var bg2;
var bg3;
var bg4;

var play;

function preLoad(){
    bg = loadImage("battlegrond2.png");
    bg1 = loadImage("battlegrond3.png");
    bg2 = loadImage("battlegrond4.png");
    bg3 = loadImage("battleground6.gif");
    bg4 = loadImage("lava.gif");
    player = loadImage("player.gif");
    ncPlayer = loadImage("enemy1.gif");
}

function setup (){

    createCanvas(700,600);

    
    var player = createSprite(10,650,70,70);
    var ncPlayer = createSprite(650,650,70,70);
    var Ground = createSprite(1,650,700,2);
    play = createButton('PLAY');
    play.position(300,300);
    play.mousePressed(hide);


}

function draw(){
    background(0);

    
    drawSprites();
   
}

function hide(){

    play.hide();
}




