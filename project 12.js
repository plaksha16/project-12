var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg
var apple,appleImg
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
  spawnapple();
  spawnleaf();
  drawSprites();
}

function spawnleaf(){
  if(frameCount % 60 ===0){
    leaf=createSprite(random(0,400),0,4,3)
    leaf.addImage(leafImg)
    leaf.scale=0.05
    console.log(leaf.y)
    leaf.velocityY=3}
  
}
  function spawnapple(){
if(frameCount% 60===0){
    apple=createSprite(100,0,5,4)
    apple.addImage(appleImg)
    apple.scale=0.5
  
    apple.velocityY=3}
  }


