var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg
var appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg=loadImage("redImage.png");
    appleImg=loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX=4
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnleaf();
  spawnapple();
  drawSprites();
}

function spawnleaf(){
  if(frameCount % 60 ===0){
     var leaf=createSprite(random(0,400),0,4,3)
    leaf.addImage(leafImg)
    leaf.scale=0.05
    
    leaf.velocityY=3}
  
}

function spawnapple(){
  if(frameCount % 60 ===0){
   var  apple=createSprite(random(0,400),random(0,-100),4,3)
    apple.addImage(appleImg)
    apple.scale=0.05
    
    apple.velocityY=3}
   // apple.y=random(-200,0)
}



