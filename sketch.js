
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
//creating monkey  
monkey = createSprite(80, 350, 900, 10);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
ground = createSprite(400, 350, 900, 10);
ground.velocityx=-4;
ground.x=ground.width/2;
console.log(ground.x)
var survivalTime = 0;
var score  = 0;
foodGroup=new Group();
obstacleGroup=new Group();
  
}


function draw() {
background("orange");

if(ground.x<0){
ground.x=ground.width/2;
}
if(keyDown("space")){
monkey.velocityY=-12;
}
monkey.velocityY = monkey.velocityY+0.8;

monkey.collide(ground);
food();
obstacle();
drawSprites();
stroke("white");
textSize(20);
fill("white");
text("score:" +score, 500, 50);

if(obstacleGroup.isTouching(monkey)){
ground.velocityX=0;
monkey.velocityY=0;
obstacleGroup.setVelocityXEach(0);
foodGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);
foodGroup.setLifetimeEach(-1);
}
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.round(frameCount/frameRate());
text("survivalTime:" +survivalTime, 100, 50);

}

function food(){
if(World.frameCount%80===0){
banana = createSprite(600, 250, 40, 20);
banana.addImage(bananaImage);
banana.y = Math.round(random(120, 200));
banana.velocityX = -5;
banana.setLifetime = 300;
banana.scale = 0.1;
foodGroup.add(banana);
}
}
function obstacle(){
if(World.frameCount%300===0){
obstacles = createSprite(800, 320, 10, 40);
obstacles.addImage(obstaceImage);
obstacles.velocityX = -6;
obstacles.setLifetime = 300;
obstacles.scale = 0.2
obstacleGroup.add(obstacles);

}
}

